import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { HStack } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/toast";
import React, { useContext, useState } from "react";
import TodoContext from "../context/ToDoContextProvider";

const AddToDo = () => {
    const toast = useToast();
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
            toast({
                title: "Error",
                description: "The field name is required",
                status: "error",
                duration: 3000,
                isClosable: true,
            });
        } else {
            setList([...list, nameToDo]);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <HStack mt="8">
                    <Input
                        type="text"
                        variant="filled"
                        placeholder="Add Details"
                        name="name"
                        autoComplete="off"
                        value={nameToDo.name}
                        onChange={handleChangeInput}
                        required
                    />

                    <Button colorScheme="pink" px="8" type="submit">
                        Add ToDo
                    </Button>
                </HStack>
            </form>
        </>
    );
};

export default AddToDo;
