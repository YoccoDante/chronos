import { useEffect, useState } from "react";
import { Navigate } from "react-router";
import Dashboard from "../components/Dashboard";

export const HomePage = () => {
    const [authenticated, setauthenticated] = useState(Boolean(localStorage.getItem("authenticated")));

    useEffect(() => {
        const loggedInUser = Boolean(localStorage.getItem("authenticated"));
        console.log (localStorage.getItem("authenticated"))
        console.log("esta en home autenticado: ", loggedInUser);

        if (loggedInUser) {
            setauthenticated(loggedInUser);
        }
    }, []);

    if (!authenticated) {
        console.log("redirigir al login");

        return <Navigate replace to= "/login" />

    } else {
        return <Dashboard/>

    }
}               