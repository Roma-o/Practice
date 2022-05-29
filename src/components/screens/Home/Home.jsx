import React, { useState } from 'react'
import Title from './Item/Title'
import TodoItem from './Item/TodoItem'
import CreateTodo from './AddTodo/CreateTodo'

const data = [
  {
    _id: '1313232313',
    title: 'Todo task number one',
    isCompleted: false
  },
  {
    _id: '1312332322113',
    title: 'Todo task number two',
    isCompleted: false
  },
  {
    _id: '131211313313',
    title: 'TodoTodo task number three',
    isCompleted: false
  }
]

function Home() {
  const [todos, setTodos] = useState(data)

  const changeTodo = id => {
    const copy = [...todos]
    const current = copy.find(t => t._id === id)
    current.isCompleted = !current.isCompleted
    setTodos(copy)
  }

  const removeTodo = id => setTodos([...todos].filter(t => t._id !== id))

  return (
    <div className=" text-white mx-auto bg-transparent w-auto rounded-full shadow-xl p-6">
      <Title />
      {todos.map(todo => (
        <TodoItem
          key={todo._id}
          todo={todo}
          changeTodo={changeTodo}
          removeTodo={removeTodo}
        />
      ))}
      <CreateTodo setTodos={setTodos} />
    </div>
  )
}

export default Home
