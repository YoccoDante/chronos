import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useNavigate } from "react-router";
import Alert from "@mui/material/Alert";
import RestorePasswordService from "../services/auth/RestorePasswordService";
import { useDispatch } from "react-redux";
import { login } from "../reducers/authSlice";

export const ChangePaswordPage = () => {

    const navigate = useNavigate();

    const [username, setUsername] = useState("Pedro");
    const [password, setPassword] = useState("");
    const [newpassword, setNewPassword] = useState("");
    const [confirmnewpassword, setConfirmNewPassword] = useState("");

    const dispatch = useDispatch();

    function handleSubmit(e: any) {
        e.preventDefault();

        RestorePasswordService.restore({ username: username, newpassword: newpassword, confirmnewpassword: confirmnewpassword})
            .then(data => {
                dispatch(login(data));
                navigate("/login");
            }
        )
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
                <Typography component="h1" variant="h5">
                    Change Password
                </Typography>
                <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleSubmit}
                >
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="new-password"
                        label="New Password"
                        name="new-password"
                        autoComplete="new-password"
                        autoFocus
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="confirm-password"
                        label="Confirm Password"
                        name="confirm-password"
                        autoComplete="confirm-password"
                        onChange={(e) => setConfirmNewPassword(e.target.value)}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Change Password
                    </Button>
                </Box>
                <Alert severity="warning">user: Pedro</Alert>
            </Box>
        </Container>
    );

}