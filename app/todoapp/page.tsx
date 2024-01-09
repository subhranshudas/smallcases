"use client"

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'


interface TodoInterface {
    label: string
    completed: boolean
    updatedAt: Date | null
}

const defaultTodo = { label: '', completed: false, updatedAt: null }


export default function TodoApp() {
    const [todo, setTodo] = React.useState<TodoInterface>({...defaultTodo})
    const [todos, setTodos] = React.useState<TodoInterface[]>([]) 


    const onTodoChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setTodo({ ...todo, label: evt.target.value})
    }

    const onTodoSubmit = (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        evt.preventDefault()

        setTodos([...todos, { ...todo, updatedAt: new Date() }])
        setTodo({...defaultTodo})
    }

    const onTodoTicked = (evt: React.FormEvent<HTMLButtonElement>) => {

    }

    const completedTodos = 0

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
            <form>
                <Label htmlFor='todoInput' className='text-xl'>Todo Form</Label>
                <div className='flex mt-2'>
                    <Input value={todo.label} onChange={onTodoChange} placeholder='write a todo...' id="todoInput" />
                    <Button onClick={onTodoSubmit}>Add Todo</Button>
                </div>
            </form>


            {/* todo list */}
            <ul className='mt-6 flex flex-col gap-4'>
                {todos.map((td) => {
                    const todoId = `${td.label}-${td.updatedAt?.toLocaleString()}`

                    return (
                        <li key={todoId} className='flex justify-between'>
                            <div className='flex gap-4'>
                                <Checkbox id={todoId} onChange={onTodoTicked} className='h-8 w-8' />
                                <Label htmlFor={todoId} className='text-lg text-gray-600'>{td.label}</Label>
                                {/* <span>{dateFormatter(td.updatedAt)}</span> */}
                            </div>
                            <Button variant="destructive">delete</Button>
                        </li>
                    )
                })}
            </ul>

            <div className="border-t-2 mt-8 pt-2">
                <p className="text-green-600">Completed: {completedTodos}</p>
            </div>
        </div>
    )
}

// function dateFormatter(dt: Date | null) {
//     return new Intl.DateTimeFormat('en-US', {
//         year: 'numeric',
//         month: '2-digit',
//         day: '2-digit',
//         hour: '2-digit',
//         minute: '2-digit',
//         second: '2-digit',
//         hour12: false
//     }).format(dt)
// }