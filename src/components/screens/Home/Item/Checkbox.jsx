import React from 'react'
import { BsCheck } from 'react-icons/bs'
import cn from 'classnames'

const Checkbox = ({ isCompleted }) => {
  return (
    <div
      className={cn(
        'border-2 rounded-full border-green-500 w-6 h-6 mr-2 flex items-center justify-center',
        {
          'bg-green-500': isCompleted
        }
      )}
    >
      {isCompleted && <BsCheck size={28} className="text-gray-900" />}
    </div>
  )
}

export default Checkbox
