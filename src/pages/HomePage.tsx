import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import Dashboard from "../components/Dashboard";
import { selectCount } from "../reducers/authSlice";

export const HomePage = () => {
    const [authenticated, setauthenticated] = useState(Boolean(localStorage.getItem("authenticated")));
    const count = useSelector(selectCount);

    console.log("cotaremos: ", count)

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