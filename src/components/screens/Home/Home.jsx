import React, { useState } from 'react'
import Title from './Item/Title'
import TodoItem from './Item/TodoItem'
import CreateTodoField from './AddTodo/CreateTodoField'

const data = [
  {
    _id: '1313232313',
    title: 'Finish the essay collaboration',
    isCompleted: false
  },
  {
    _id: '1312332322113',
    title: 'Read next chapter of the book',
    isCompleted: false
  },
  {
    _id: '131211313313',
    title: 'Send the finished assignment',
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
      <CreateTodoField setTodos={setTodos} />
    </div>
  )
}

export default Home
