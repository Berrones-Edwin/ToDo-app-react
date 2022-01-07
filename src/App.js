import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import React from "react";
import { ToDoContextProvider } from "./context/ToDoContextProvider";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
    return (
        <ChakraProvider>
            <ToDoContextProvider>
                <ColorModeScript initialColorMode="dark"  />
                <AppRoutes />
            </ToDoContextProvider>
        </ChakraProvider>
    );
};

export default App;
