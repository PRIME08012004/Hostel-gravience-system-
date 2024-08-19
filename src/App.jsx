import { useState } from 'react'
import './App.css'
import Features from './components/Features'
import Card from './components/Card'
import TermsPage from './components/TermsPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TermsPage/>
      {/* <Features/> */}
    </>
  )
}

export default App
