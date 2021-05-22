import React, { useContext } from "react";

import TodoContext from "../context/ToDoContextProvider";
import ToDoList from "./ToDoList";

const All = () => {
    const { list, setList } = useContext(TodoContext);

    return (
        <>
            <ToDoList list={list} setList={setList} />
        </>
    );
};

export default All;
