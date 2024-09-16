import { useState } from "react";

/* eslint-disable react/prop-types */
export default function ToDo({ item }) {
    const [isEdit, setIsEdit] = useState(false);
    const [isDelete, setIsDelete] = useState(false);

    function FormEdit() {

        const [newValue, setNewValue] = useState(item.title)
        function handleSubmit(event){
            event.preventDefault()
        }

        function handleChange(event){
            const value = event.target.value
            setNewValue(value)
        }

        return <form className="todoUpdateForm" onSubmit={handleSubmit}>
            <input type="text" className="todoInputs" onChange={handleChange} value={newValue} />
            <button> Actualizar </button>
        </form>
    }

    function ToDoElement() {
        return <div className="todoInfo">
            {item.title}
            <button onClick={() => setIsEdit(true)}> Editar </button>
            <button> Delete </button>
        </div>
    }


    return (
        <>
            <div className="todo">
                {isEdit ? <FormEdit /> : <ToDoElement />}
            </div>
        </>
    );
}
