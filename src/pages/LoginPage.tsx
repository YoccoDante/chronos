import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useNavigate } from "react-router";
import Alert from "@mui/material/Alert";
import AuthService from "../services/auth/AuthService";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../reducers/authSlice";




export const LoginPage = () => {


    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [authenticated, setauthenticated] = useState(Boolean(localStorage.getItem("authenticated")));
    const dispatch = useDispatch();


    function handleSubmit(e: any) {
        e.preventDefault();


        AuthService.login({ username: username, password: password }).then(
            () => {
                dispatch(login({toke:"username"}))
                navigate("/home-page");

            },
            error => {
                setauthenticated(false);

            }
        );


    }

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Log In
                </Typography>
                <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleSubmit}
                >
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Login In
                    </Button>
                </Box>
                <Alert severity="warning">user: Pedro  password: 123</Alert>
            </Box>
        </Container>
    );

}