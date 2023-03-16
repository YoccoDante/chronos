import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Home from "@mui/icons-material/Home";

type BasicPageProps = {
    title: string;
    
}

export const BasicPage = ({ title}: BasicPageProps) => {
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
                <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>{<Home />}</Avatar>
                <Typography component="h1" variant="h5">
                    {title}
                </Typography>
            </Box>
        </Container>
    );
};