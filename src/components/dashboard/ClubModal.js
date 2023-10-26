import { Modal, Typography,Box, Chip } from "@mui/material";

export default function ClubModal(props){
    return(
        props.club!=null?(
        <Modal open={props.open} onClose={props.onClose}>
            <Box sx={{width:"50rem",backgroundColor:"white",position:'relative',top:"50%",left:"50%",transform: "translate(-50%, -50%)",padding:"3rem"}}>
                <Typography variant="h2" sx={{textAlign:"center",marginBottom:"1.5rem"}}>{props.club.name}</Typography>
                <Box sx={{display:"flex",marginBottom:"1rem"}}>
                <img src={props.club.profile_picture} style={{width:"20rem",margin:"0rem 1.5rem 1.5rem 0rem"}}></img>
                <Typography>{props.club.description}</Typography>
                </Box>
                <Typography variant="h6" sx={{color:"#1976d2",fontWeight:"bold"}}>verticals</Typography>
                <Typography sx={{marginBottom:"1rem"}}>{props.club.verticals}</Typography>
                <Typography variant="h6" sx={{color:"#1976d2",fontWeight:"bold"}}>prerequisites</Typography>
                <Typography  sx={{marginBottom:"1rem"}}>{props.club.prerequisites}</Typography>
                <Typography variant="h6" sx={{color:"#1976d2",fontWeight:"bold"}}>time devotion per week</Typography>
                <Typography  sx={{marginBottom:"1rem"}}>{props.club.time_devotion}</Typography>
                <Typography variant="h6" sx={{color:"#1976d2",fontWeight:"bold",marginBottom:"0.5rem"}}>Club interests</Typography>
                <Box sx={{display:"flex",flexWrap:"wrap"}}>
                    {props.club.interests.map((data,id)=>{
                        return(
                            <Chip label={data.name} color="primary" sx={{marginRight:"0.5rem",marginBottom:"0.5rem"}}></Chip>
                        )
                    })}

                </Box>
            </Box>
        </Modal>
        ):(
            <Modal  open={Boolean(props.club)} onClose={props.onClose}></Modal>
        )
    )
}