import React, { useContext } from "react";
import TodoContext from "../context/ToDoContextProvider";
import ToDoList from "./ToDoList";

const Active = () => {
    const { list, setList } = useContext(TodoContext);

    const listFiltered = list.filter((item) => item.completed !== true);
    return (
        <div>
            <h3>Active</h3> <ToDoList list={listFiltered} setList={setList} />
        </div>
    );
};

export default Active;
