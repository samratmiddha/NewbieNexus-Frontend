import { Box, Avatar } from "@mui/material";



export default function ProfilePage() {
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
        }}
        >
            <Box sx={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                backgroundColor: "#1976d2",
                height: "10vh",

            }}>
                <img src={require("../../assets/NewbieNexusLogo.png")} style={{ width: "8rem", height: "3rem", alignSelf: "center", justifyContent: "center", justifySelf: "center" }}></img>
            </Box>


            <Box>

                <Box
                    sx={{
                        display: "flex",

                        width: "20vw",
                        height: "90vh",
                        backgroundColor: "#1976d2",
                        justifyContent: "center",
                    }}

                >


                    <Avatar
                        alt="Shruti Sharp"
                        src="/static/images/avatar/1.jpg"
                        sx={{
                            width: 175, height: 175, margin: "5rem",
                            fontSize: 50,
                        }}
                    />
                    

                </Box>
                <Box
                    sx = {{
                        display:"flex",
                        overflow:"scroll",
                    }}
                    
                >
                 <Box>
                    
                 </Box>
                </Box>
            </Box>
        </Box>
    )
}