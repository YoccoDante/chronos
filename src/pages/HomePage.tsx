import { useEffect, useState } from "react";
import { Navigate } from "react-router";
import { BasicPage } from "../components/BasicPage";

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
        return <BasicPage title="Home Page"></BasicPage>

    }
}               