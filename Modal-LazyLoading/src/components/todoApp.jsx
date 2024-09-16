import { useState } from "react";
import ToDo from "./toDo";

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

              <ToDo key={item.id} item={item} />

            ))
          }

        </div>

      </div>
    </>
  );
}
