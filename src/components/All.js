import React, { useContext } from "react";
import TodoContext from "../context/ToDoContextProvider";
import ToDoList from "./ToDoList";

const All = () => {
    const { list,setList } = useContext(TodoContext);

    return (
        <div>
            <h3>All</h3>
            <ToDoList list={list} setList={setList} />
        </div>
    );
};

export default All;
