import React from 'react'

const Button = ({ color, children, setSelectedColor }) => {
  return (
    <button
      onClick={() => setSelectedColor(color)}
      style={{ backgroundColor: color }}
      className='cursor-pointer border hover:scale-[1.2] transition-all duration-200 text-white hover:shadow-md px-4 py-2 rounded-md font-bold'>{children}</button>
  )
}

export default Button