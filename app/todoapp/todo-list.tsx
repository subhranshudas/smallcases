"use client"

import React from 'react'
import { TodoInterface } from './todo-form'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

interface TodoListProps {
    todos: TodoInterface[]
    onTodoTicked: (args0: boolean, args1: TodoInterface) => void
    onTodoDelete: (args0: TodoInterface) => void
}

export default function TodoList({ todos, onTodoTicked, onTodoDelete } : TodoListProps) {
    return (
        <ul className='mt-6 flex flex-col gap-4'>
            {todos.map((td) => {
                const todoId = `todo-${td.id}`

                return (
                    <li key={todoId} className='flex justify-between text-'>
                        <div className='flex gap-4'>
                            <Checkbox
                                id={todoId}
                                onCheckedChange={(checked) => onTodoTicked(!!checked, td)}
                                className='h-8 w-8'
                            />
                            <Label htmlFor={todoId} className={`text-lg text-gray-600 ${td.completed ? 'line-through italic' : ''}`}>{td.label}</Label>
                            {/* <span>{dateFormatter(td.updatedAt)}</span> */}
                        </div>
                        <Button variant="destructive" onClick={() => onTodoDelete(td)}>delete</Button>
                    </li>
                )
            })}
        </ul>
    )
}