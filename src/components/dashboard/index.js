import { Box, Typography, Button , TextField, Chip} from "@mui/material";
import axios from "axios";
import * as React from 'react';
import BackendClient from "../../BackendClient";
import ClubCard from "./ClubCard";
import ClubModal from "./ClubModal";
import { useDispatch, useSelector } from "react-redux";
import CheckLogin from "../../checkLogin";

export default function Dashboard() {
    const dispatch=useDispatch()
    const user=useSelector((state)=>state.user.id)
    const [userIntersts,setUserInterests]=React.useState([])
    const [clubs,setClubs]=React.useState([])
    const [modalClub,setModalClub]=React.useState(null)
    React.useEffect(()=>{
        CheckLogin(dispatch)
    },[])
    React.useEffect(()=>{
        BackendClient.get('clubs/').then((res)=>{
            console.log(res.data)
            setClubs(res.data)
        })
    },[])

    React.useEffect(()=>{
        if(user!=null){
        BackendClient.get('interests/get_user_interests/?user='+user).then((res)=>{
            setUserInterests(res.data)
        })
    }
    },[user])

    const handleCardClick=(club)=>{
        setModalClub(club.id);
    }
    const handleModalClose=()=>{
        setModalClub(null);
    }
    

    return (
       <Box  sx={{display:"flex",flexDirection:"column",alignContent:"center",flexWrap:"wrap"}}>
        <Box sx={{display:"flex",justifyContent:"center"}}>
        <img src={require("../../assets/NewbieNexusLogo.png")} style={{width: "20rem", height:"10rem", alignSelf:"center",}}></img>     
        </Box>
        <Box sx={{marginTop:"4rem" ,width:"40%",alignSelf:"center"}}>
            <Box sx={{display:"flex",justifyContent:"space-between"}}>
            <TextField sx={{width:"40rem",marginRight:"3rem"}} label="interests"></TextField>
            <Button variant="contained" sx={{width:"8rem"}}>Add</Button>
            </Box>
            <Typography sx={{color:"grey"}}>For eg: Music,Machine Learing,Competitive Programming</Typography>
            
        </Box>
        <Box sx={{width:"100%",textAlign:"center",marginTop:"4rem"}}>
        <Typography variant="h3">Your interests</Typography>
        </Box>
        <Box sx={{display:"flex",flexWrap:"wrap"}}>
        {userIntersts.map((data,id)=>{
          return(
            <Chip label={data.name}></Chip>
          )
        })}
        </Box>
        
        <Box sx={{width:"100%",textAlign:"center",marginTop:"4rem"}}>
        <Typography variant="h3">CLUBS</Typography>
        </Box>
        <Box sx={{display:"flex",justifyContent:"space-evenly",flexWrap:"wrap"}}>
         {clubs.map((data,id)=>{
            return(
                <Box>
                <ClubCard
                club={data}
                onClick={handleCardClick}
                />
                <ClubModal
                  club={data}
                  open={modalClub==data.id}
                  onClose={handleModalClose}
                />
                </Box>
            )
         })}
        </Box>
        {/* <ClubModal

         onClose={handleModalClose}
         club={modalClub}

        /> */}
       </Box>
    )
}