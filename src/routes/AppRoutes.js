import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Heading, IconButton, useColorMode, VStack } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import Active from "../components/Active";
import AddToDo from "../components/AddToDo";
import All from "../components/All";
import Completed from "../components/Completed";
import NavBar from "../ui/NavBar";

const AppRoutes = () => {
    // const
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <BrowserRouter>
            <VStack p={4}>
                <IconButton
                    isRound="true"
                    icon={colorMode === "dark" ? <FaMoon /> : <FaSun />}
                    size="lg"
                    alignSelf="flex-end"
                    onClick={toggleColorMode}
                />
                <Heading
                    mb="8"
                    fontWeight="extrabold"
                    size="2xl"
                    bgGradient="linear(to-r,pink.500,pink.300,blue.500)"
                    bgClip="text"
                >
                    TODO Application
                </Heading>
                <NavBar />
                <AddToDo />
                <>
                    <Switch>
                        <Route exact path="/" component={All} />
                        <Route exact path="/active" component={Active} />
                        <Route exact path="/completed" component={Completed} />
                    </Switch>
                </>
            </VStack>
        </BrowserRouter>
    );
};

export default AppRoutes;
