//sintaxe JSX
import { useState } from 'react';
import { v4 as uuid } from 'uuid';

import { Container, TodoList, Input, Button, ListItem, Trash, Checkmark } from './styles.js';


function App() {
  //Codigo javascript, para utilizar o codigo javascript tem que se usar {}
  //const message ='Oi,eu sou um componente React'
  //Retorna codigo HTML
  //event 
  /*const list = [{id: uuid(), task:"Levar o kiko para passear"},
    {id: uuid(), task:"Terminar as  aulas do DevClub"}
  ]*/
  const [list, setList] = useState([]);// para alterar o valor usa-se o setLIst alterar o valor do primeiro
  const [inputTask, setInputTask] = useState("")

  //'', 'Comprar Abacate', ''
  function inputMudou(event) {
    console.log(event.target.value)
    setInputTask(event.target.value)// vai criar uma nova li, porem ainda nao vai adicionar uma nova na tela

  }
  function cliqueiNoBotao() {
    if (inputTask) {
      setList([...list, { id: uuid(), task: inputTask, finished: false }])
    }
    console.log(cliqueiNoBotao)
  }

  function finalizarTarefa(id) {

    const newList = list.map(item => (
      item.id === id ? { ...item, finished: !item.finished } : item
    ))

    setList(newList)
    console.log(newList)
  }
  function deleteItem(id) {

    const newList = list.filter(item => item.id !== id)
    setList(newList)

  }

  return (
    <>
      <Container>
        <TodoList>
          <Input onChange={inputMudou} placeholder="O que tem para fazer..." />
          <Button onClick={cliqueiNoBotao}>Adicionar</Button>


          <ul>
            {
              list.length > 0 ? (
                list.map((item) => (

                  <ListItem isfinished={item.finished} key={item.id}>
                    <Checkmark onClick={() => finalizarTarefa(item.id)} />
                    <li >{item.task} </li>
                    <Trash onClick={() => deleteItem(item.id)} />
                  </ListItem>
                ))
              ) : (<h3> Não há itens na lista </h3>)
            }
          </ul>
        </TodoList>

      </Container>
    </>
  )
}
//dentro do react nao pode retornar mais de um elemento , apenas uma div pai
export default App
