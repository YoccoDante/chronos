import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import Dashboard from "../components/Dashboard";
import { selectCount } from "../reducers/authSlice";

export const HomePage = () => {
    const auth = useSelector(selectCount);

    useEffect(() => {
        console.log("HomePage: ")
    }, []);

    if (!auth.isAuthenticated) {
        return <Navigate replace to="/login" />

    } else {
        return <Dashboard />

    }
}               