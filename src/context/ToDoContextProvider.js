import React, { useEffect, useState } from "react";
import { getLocalStorage, saveLocalStorage } from "../helpers/helper";

const TodoContext = React.createContext(null);

export const ToDoContextProvider = ({ children }) => {
    const [list, setList] = useState(getLocalStorage());

    useEffect(() => {
        saveLocalStorage(list);
    }, [list]);
    return (
        <TodoContext.Provider value={{ list, setList }}>
            {children}
        </TodoContext.Provider>
    );
};

export default TodoContext;
