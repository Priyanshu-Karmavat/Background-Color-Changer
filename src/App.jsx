import React, { useState } from 'react'
import Button from './components/Button'

const App = () => {

  const colors = ['pink', 'blue', 'red', 'green', 'tomato']

  const [selectedColor, setSelectedColor] = useState('black');

  return (
    <div
      style={{ backgroundColor: selectedColor }}
      className='flex flex-col py-20 min-h-screen justify-around items-center'>
      <h1 className='text-2xl sm:text-4xl text-center font-bold text-white'>🎨 Background Color Switcher</h1>
      <div className='flex gap-4 sm:gap-6 m-4 flex-wrap justify-center items-center'>
        {colors.map((item) => (
          <Button
            setSelectedColor={setSelectedColor}
            key={item} color={item}>
            {item}
          </Button>
        ))}
        <input 
        onChange={(e)=>setSelectedColor(e.target.value)}
        value={selectedColor}
        type="color" 
        className='w-12 h-10 sm:h-12 sm:w-14 cursor-pointer' />
      </div>
      <p className="text-white text-md sm:text-xl">
        Selected: {selectedColor}
      </p>
    </div>
  )
}

export default App