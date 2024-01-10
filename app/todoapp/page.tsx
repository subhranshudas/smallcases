"use client"

import React from 'react'
import TodoForm, { TodoInterface } from './todo-form'
import TodoStats from './todo-stats'
import TodoList from './todo-list'


export default function TodoApp() {
    const [todos, setTodos] = React.useState<TodoInterface[]>([]) 

    const onTodoSubmit = (newTodo: TodoInterface) => {
          setTodos([...todos, newTodo])
    }

    const onTodoTicked = (checked: boolean, todoTicked: TodoInterface) => {    
        const newTodos = todos.map((td) => {
            if (todoTicked.id === td.id) {
                return {...td, completed: checked}
            }
            return td
        })

        setTodos(newTodos)
    }

    const onTodoDelete = (todoDeleted: TodoInterface) => {
        const newTodos = todos.filter((td) => todoDeleted.id !== td.id)
        setTodos(newTodos)
    }


    return (
        <div className="flex flex-col">
            <h2 className="text-2xl text-blue-500">Todo App</h2>

            <div className="border border-blue-200 p-4 my-6">
                <p>A simple todo app with following features</p>
                <ul>
                    <li className="list-disc ml-4">add a todo</li>
                    <li className="list-disc ml-4">finish a todo</li>
                    <li className="list-disc ml-4">un-finish a todo</li>
                    <li className="list-disc ml-4">delete a todo</li>
                </ul>
            </div>

            {/* todo component to add todo */}
            <TodoForm onSubmit={onTodoSubmit} />


            {/* todo list */}
           <TodoList todos={todos} onTodoDelete={onTodoDelete} onTodoTicked={onTodoTicked}/>

            {/* todo stats for total, completed */}
            <TodoStats todos={todos} />
            
        </div>
    )
}
