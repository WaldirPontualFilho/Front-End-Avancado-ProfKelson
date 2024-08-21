import React from 'react'
import Adicao from './components/adicao'
import Subtracao from './components/subtracao'
import Multiplicacao from './components/multiplicacao'
import Divisao from './components/Divisao'
import PrecisoEstudar from './components/PrecisoEstudar'


const App = () => {
  return (
    <div>
      <Adicao num1={1} num2={2}/>
      <Subtracao num1={1} num2={2}/>
      <Multiplicacao num1={1} num2={2}/>
      <Divisao num1={1} num2={2}/>
      <PrecisoEstudar nomeDaTecnologia={"Spring"}/>
    </div>
  )
}

export default App