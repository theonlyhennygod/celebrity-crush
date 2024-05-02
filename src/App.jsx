import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomeScreen from './screens/home/HomeScreen'
import { ThemeContext } from './context/ThemeContext'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AddNewScreen from './screens/NewIdea/AddNewScreen'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
  },
  {
    path: "/new",
    element: <AddNewScreen />,
]);

function App() {
  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState('dark')

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div data-theme={theme} className='flex flex-col items-center p-4 md:p-10'>
        <div className='max-w-2xl w-full items-center'>
          <RouterProvider router={router}>
        </div>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
