import React from 'react'

const Teste = () =>{
  fetch('http://localhost:3080')
    .then(resultado=> {
      console.log(resultado)
    })
}

function App(){
  return(
    <div>
      {Teste()}
      <h1>Olá"! Eu sou o front end. </h1>
    </div>
  )
}
export default App