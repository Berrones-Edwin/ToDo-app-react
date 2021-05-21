import React, { useContext, useState } from "react";
import TodoContext from "../context/ToDoContextProvider";

const AddToDo = () => {
    const { list, setList } = useContext(TodoContext);
    const [nameToDo, setNameToDo] = useState({
        id: "",
        name: "",
        completed: false,
    });

    const handleChangeInput = ({ target }) => {
        setNameToDo({
            ...nameToDo,
            id: Date.now(),
            name: target.value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        if (nameToDo.name.trim().length === 0) {
            console.error("the field name is required");
        } else {
            setList([...list, nameToDo]);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        placeholder="Add Details"
                        name="name"
                        autoComplete="off"
                        value={nameToDo.name}
                        onChange={handleChangeInput}
                        required
                    />
                </div>
                <input type="submit" value="ADD" />
            </form>
        </>
    );
};

export default AddToDo;
