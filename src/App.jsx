import { useState } from 'react'
import './App.css'
import HomeScreen from './screens/home/HomeScreen'
import { ThemeContext } from './context/ThemeContext'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AddNewScreen from './screens/NewIdea/AddNewScreen'

// Define the routes for the app

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
  },
  {
    path: "/new",
    element: <AddNewScreen />,
  },
]);

function App() {
  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState('winter')

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div data-theme={theme} className='flex flex-col items-center p-4 md:p-10'>
        <div className='max-w-2xl w-full items-center'>
          <RouterProvider router={router}>

          </RouterProvider>
        </div>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
