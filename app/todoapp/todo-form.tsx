"use client"

import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { getUUID } from '@/lib/utils'


export interface TodoInterface {
    id: string
    label: string
    completed: boolean
}

interface TodoFormProps {
    onSubmit: (args0 : TodoInterface) => void
}

const defaultTodo = { id: '', label: '', completed: false }


export default function TodoForm({ onSubmit } : TodoFormProps) {
    const [todo, setTodo] = React.useState<TodoInterface>({...defaultTodo})


    const onTodoChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setTodo({ ...todo, label: evt.target.value})
    }

    const onTodoSubmit = (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        evt.preventDefault()

        onSubmit({ ...todo, id: getUUID() })

        // reset todo form
        setTodo({...defaultTodo})
    }

    return (
        <form>
            <Label htmlFor='todoInput' className='text-xl'>Todo Form</Label>
            <div className='flex mt-2'>
                <Input value={todo.label} onChange={onTodoChange} placeholder='write a todo...' id="todoInput" />
                <Button onClick={onTodoSubmit}>Add Todo</Button>
            </div>
        </form>
    )
}