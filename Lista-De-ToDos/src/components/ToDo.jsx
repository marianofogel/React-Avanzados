import { useState } from "react";

/* eslint-disable react/prop-types */
export default function ToDo({ item, onUpdate, onDelete }) {
    const [isEdit, setIsEdit] = useState(false);

    function FormEdit() {

        const [newValue, setNewValue] = useState(item.title)
        function handleSubmit(event) {
            event.preventDefault()
        }

        function handleChange(event) {
            const value = event.target.value
            setNewValue(value)
        }

        function handleClickUpdateToDo() {
            onUpdate(item.id, newValue)
            setIsEdit(false)
        }



        return <form className="toDoUpdateForm" onSubmit={handleSubmit}>
            <input type="text" className="todoInputs" onChange={handleChange} value={newValue} />
            <button className="button" onClick={handleClickUpdateToDo}> Actualizar </button>
        </form>
    }

    function ToDoElement() {
        return <div className="todoInfo">
            <span className="toDoTitle"> {item.title} </span>
            <button className="button" onClick={() => setIsEdit(true)}> Editar </button>
            <button className="buttonDelete" onClick={() => onDelete(item.id)}> Delete </button>
        </div>
    }


    return (
        <>
            <div className="toDo">
                {isEdit ? <FormEdit /> : <ToDoElement />}
            </div>
        </>
    );
}
