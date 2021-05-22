import React, { useContext } from "react";
import TodoContext from "../context/ToDoContextProvider";
import ToDoList from "./ToDoList";

const Completed = () => {
    const { list, setList } = useContext(TodoContext);

    const listFiltered = list.filter((item) => item.completed !== false);

    return (
        <div>
            <ToDoList list={listFiltered} setList={setList} />
        </div>
    );
};

export default Completed;
