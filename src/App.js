import React from "react";
import { ToDoContextProvider } from "./context/ToDoContextProvider";

import AppRoutes from "./routes/AppRoutes";

const App = () => {
    return (
        <ToDoContextProvider>
            <AppRoutes />
        </ToDoContextProvider>
    );
};

export default App;
