import React from 'react'
import Checkbox from './Checkbox'
import cn from 'classnames'
import { FaTrashAlt } from 'react-icons/fa'

const TodoItem = ({ todo, changeTodo, removeTodo }) => {
  return (
    <div className="flex items-center mb-3 rounded-l-3xl bg-gray-800 p-2.5 w-fit max-w-6xl mx-auto justify-center hover:scale-[1.1] transition-transform ease-out cursor-pointer text-center break-all">
      <button
        onClick={() => changeTodo(todo._id)}
        className="flex items-center"
      >
        <Checkbox isCompleted={todo.isCompleted} />
        <span className={cn({ 'line-through': todo.isCompleted })}>
          {todo.title}
        </span>
      </button>
      <button onClick={() => removeTodo(todo._id)}>
        <FaTrashAlt
          size={22}
          className="text-white ml-5 hover:text-red-500 transition-colors"
        />
      </button>
    </div>
  )
}

export default TodoItem
