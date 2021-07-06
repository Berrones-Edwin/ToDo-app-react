import React from "react";
import {
    HStack,
    VStack,
    IconButton,
    StackDivider,
    Spacer,
    Checkbox,
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const ToDoList = ({ list, setList }) => {
    const handleChecked = (item) => {
        itemChecked(item);
    };

    const itemChecked = (item) => {
        const newList = list.map((i) => {
            if (item.id === i.id) {
                item.completed = !item.completed;
                return item;
            } else return i;
        });
        setList(newList);
    };
    const handleDelete = (item) => {
        const newList = list.filter((i) => item.id !== i.id);
        setList(newList);
    };

    return (
        <VStack
            divider={<StackDivider />}
            borderColor="gray.100"
            borderWidth="2px"
            p="4"
            borderRadius="lg"
            w="100%"
            maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "40vw" }}
            alignItems="stretch"
        >
            {list.map((item) => (
                <HStack key={item.id}>
                    <Checkbox
                        colorScheme="pink"
                        isChecked={item.completed}
                        onChange={() => handleChecked(item)}
                    >
                        {item.name}
                    </Checkbox>
                    <Spacer />
                    <IconButton
                        isRound="true"
                        onClick={() => handleDelete(item)}
                        icon={<FaTrash />}
                    />
                </HStack>
            ))}
        </VStack>
    );
};

export default ToDoList;
