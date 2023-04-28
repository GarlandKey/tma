import { useState } from 'react'
import Nav from '../Nav/Nav'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
		<Nav />
		<section>
			<h1>TMA</h1>
			<h2>Task Management Application</h2>
		</section>
    </>
  )
}

export default App
