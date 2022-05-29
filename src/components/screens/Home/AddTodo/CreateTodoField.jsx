import React, { useState } from 'react'

const CreateTodoField = ({ setTodos }) => {
  const [title, setTitle] = useState('')

  const addTodo = title => {
    setTodos(prev => [
      {
        _id: Math.random(),
        title,
        isCompleted: false
      },
      ...prev
    ])
    setTitle('')
  }

  return (
    <div className="bg-gray-600 flex items-center mb-3 rounded-3xl p-3 w-fit mx-auto mt-8">
      <input
        type="text"
        onChange={e => setTitle(e.target.value)}
        value={title}
        onKeyPress={e => e.key === 'Enter' && addTodo(title)}
        placeholder="Enter todo"
        className="bg-transparent border-none outline-none"
      />
    </div>
  )
}

export default CreateTodoField
