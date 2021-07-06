import React, { useContext } from "react";
import { Badge } from "@chakra-ui/layout";
import TodoContext from "../context/ToDoContextProvider";
import ToDoList from "./ToDoList";

const Active = () => {
    const { list, setList } = useContext(TodoContext);

    const listFiltered = list.filter((item) => item.completed !== true);

    if (!list.length)
        return (
            <Badge colorScheme="green" p="4" m="4" borderRadius="lg">
                No ToDO Active
            </Badge>
        );
    return (
        <>
            <ToDoList list={listFiltered} setList={setList} />
        </>
    );
};

export default Active;
