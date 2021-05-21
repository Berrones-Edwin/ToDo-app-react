import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Active from "../components/Active";
import AddToDo from "../components/AddToDo";
import All from "../components/All";
import Completed from "../components/Completed";
import NavBar from "../ui/NavBar";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <AddToDo />
            <div>
                <Switch>
                    <Route exact path="/" component={All} />
                    <Route exact path="/active" component={Active} />
                    <Route exact path="/completed" component={Completed} />
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default AppRoutes;
