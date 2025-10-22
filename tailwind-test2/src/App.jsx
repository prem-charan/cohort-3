import { useState } from 'react'
import './App.css'
import { SideBarClass } from './components/SideBarClass'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <SideBarClass />
    </div>
  )
}

export default App
