import { useState } from 'react'
import './App.css'
import Header from './components/header'

function App() {
  const [darkMode, setDarkMode] = useState(true);


  return (
    <>
      <Header />
    </>
  )
}

export default App
