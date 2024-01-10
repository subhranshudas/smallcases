"use client"

import React from 'react'
import { TodoInterface } from './todo-form'

interface TodoStatsProps {
    todos: TodoInterface[] 
}

export default function TodoStats({ todos } : TodoStatsProps) {
    return  todos.length > 0 ? (
        <div className="flex justify-between border-t-2 mt-8 pt-2">
            <span className="text-blue-600">
                Total: {todos.length}
            </span>
            <span className="text-green-600">
                Completed: {todos.filter((td) => td.completed === true).length}
            </span>
        </div>
    ) : null
}