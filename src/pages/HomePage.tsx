import { useEffect, useState } from "react";
import { Navigate } from "react-router";
import Dashboard from "../components/Dashboard";

export const HomePage = () => {
    const [authenticated, setauthenticated] = useState(Boolean(localStorage.getItem("authenticated")));

    useEffect(() => {
        const loggedInUser = Boolean(localStorage.getItem("authenticated"));
        if (loggedInUser) {
            setauthenticated(loggedInUser);
        }
    }, []);

    if (!authenticated) {
        return <Navigate replace to= "/login" />

    } else {
        return <Dashboard/>

    }
}               