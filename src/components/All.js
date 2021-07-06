import React, { useContext } from "react";
import { Badge } from "@chakra-ui/layout";

import TodoContext from "../context/ToDoContextProvider";
import ToDoList from "./ToDoList";

const All = () => {
    const { list, setList } = useContext(TodoContext);

    if (!list.length)
        return (
            <Badge colorScheme="green" p="4" m="4" borderRadius="lg">
                Add your first task! :D
            </Badge>
        );

    return (
        <>
            <ToDoList list={list} setList={setList} />
        </>
    );
};

export default All;
