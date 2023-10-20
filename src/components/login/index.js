import { Box, Typography, TextField, Button } from "@mui/material";



export default function LoginPage() {
    return (
        <Box sx={{
            display: "flex",
        }}>
            <Box
                sx={{
                    width: "50vw",
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                }}
            >
                <img src={require("../../assets/NewbieNexusLogo.png")} style={{width: "20rem", height:"10rem", alignSelf:"center",}}></img>
            </Box>

            <Box
                sx={{
                    width: "50vw",
                    height: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignContent: "center",
                    flexWrap: "wrap",
                    border: "1px solid blue"
                }}
            >
                <Typography
                    variant="h4"
                    component="h3"
                    sx={{
                        margin: "0.5rem",
                        textAlign: "center",
                    }}
                >
                    Login
                </Typography>
                <TextField
                    id="outlined-basic"
                    label="Enrollment Number"
                    variant="outlined"
                    sx={{
                        marginBottom: "0.5rem",
                    }}
                />
                <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    sx={{
                        marginBottom: "0.5rem",
                    }}
                />
                <Button variant="contained"
                    sx={{

                        marginBottom: "0.5rem",
                    }}>
                    Log In
                </Button>
                <Button variant="outlined">Sign Up</Button>

            </Box>
        </Box>
    )
}