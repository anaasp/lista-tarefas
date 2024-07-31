import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tarefa from "./componentes/comp-tarefas/tarefa";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <strong>Minhas Tarefas </strong>
      <Tarefa/>

    </>
  )
}

export default App
