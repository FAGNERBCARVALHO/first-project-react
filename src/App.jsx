//sintaxe JSX
import  { useState } from 'react';
import { v4 as uuid } from 'uuid';


function App() {
  //Codigo javascript, para utilizar o codigo javascript tem que se usar {}
  //const message ='Oi,eu sou um componente React'
  //Retorna codigo HTML
  //event 
  /*const list = [{id: uuid(), task:"Levar o kiko para passear"},
    {id: uuid(), task:"Terminar as  aulas do DevClub"}
  ]*/
    const [list, setList] = useState([{id: uuid(), task:"Levar o kiko para passear"}]);// para alterar o valor usa-se o setLIst alterar o valor do primeiro
    const [inputTask, setInputTask] = useState("")
  
  //'', 'Comprar Abacate', ''
  function inputMudou(event) {
    console.log(event.target.value)
   setInputTask(event.target.value)// vai criar uma nova li, porem ainda nao vai adicionar uma nova na tela

  }
  function cliqueiNoBotao() {
    setList([ ...list, {id: uuid(), task: inputTask }])
    console.log(cliqueiNoBotao)
  }
  return (
    <>
      <div>
        <input onChange={inputMudou} placeholder="O que tem para fazer..." />
        <button onClick={cliqueiNoBotao}>Adicionar</button>


        <ul>
          {
            list.map(item => (
              <li key={item.id}>{item.task} </li>
            ))
          }
        </ul>
      </div>
    </>
  )
}
//dentro do react nao pode retornar mais de um elemento , apenas uma div pai
export default App
