import React, { useContext } from "react";
import TodoContext from "../context/ToDoContextProvider";
import ToDoList from "./ToDoList";

const Active = () => {
    const { list, setList } = useContext(TodoContext);

    const listFiltered = list.filter((item) => item.completed !== true);
    return (
        <>
            <h3>Active</h3> 
            <ToDoList list={listFiltered} setList={setList} />
        </>
    );
};

export default Active;
