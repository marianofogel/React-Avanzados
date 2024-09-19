import { useState } from "react";
import ToDo from "./toDo";
import './todoApp.css'

export default function ToDoApp() {
  const [title, setTitle] = useState(""); //GETTER Y SETTER
  const [toDos, setToDos] = useState([])

  function handleChange(event) {
    const value = event.target.value;
    setTitle(value);
  }

  function handleSubmit(event) {
    event.preventDefault()

    function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    }

    const newToDo = {
      id: getRandomInt(1000),
      title: title,
      completed: false,
    }

    const temp = [...toDos]
    temp.unshift(newToDo) //FORMAS DE ACTUALIZAR EL ESTADO, ESTAS COPIANDO EL ARRAY Y DESPUES HACES LA OPERACION CON EL UNSHIFT

    setToDos(temp)
    setTitle('')
  }

  function handleUpdate(id, value) {
    const temp = [...toDos]
    const item = temp.find(item => item.id === id)
    item.title = value
    setToDos(temp)
  }

  function handleDelete(id){
    const temp = toDos.filter(item => item.id !== id)
    setToDos(temp)


  }

  return (
    <>
      <div className="toDoContainer">
        <form className="toDoCreateForm"
          onSubmit={handleSubmit}>
          <input onChange={handleChange}
            className="toDoInput"
            value={title} />
          <input
            onClick={handleSubmit}
            type="submit"
            value="Create To Do"
            className="buttonCreate"
          />
        </form>

        <div className="toDosContainer">
          {
            toDos.map((item) => (

              <ToDo key={item.id} item={item} onUpdate={handleUpdate} onDelete={handleDelete}/>

            ))
          }

        </div>

      </div>
    </>
  );
}
