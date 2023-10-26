import { Box, Typography, Button, TextField, Chip } from "@mui/material";
import axios from "axios";
import * as React from 'react';
import BackendClient from "../../BackendClient";
import ClubCard from "./ClubCard";
import ClubModal from "./ClubModal";
import { useDispatch, useSelector } from "react-redux";
import CheckLogin from "../../checkLogin";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ClubRecommendation from "./ClubRecommendation";

export default function Dashboard() {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user.id)
    const [userIntersts, setUserInterests] = React.useState([])
    const [clubs, setClubs] = React.useState([])
    const [modalClub, setModalClub] = React.useState(null)
    const [clubRecommendationModalOpen,setclubRecommendationModalOpen]=React.useState(false)
    const [addInterest,setAddInterest]=React.useState("")
    React.useEffect(() => {
        CheckLogin(dispatch)
    }, [])

    const getUserInterests=()=>{
        BackendClient.get('interests/get_all_interests/?user=' + user).then((res) => {
            setUserInterests(res.data)
        })
    }
    React.useEffect(() => {
        BackendClient.get('clubs/').then((res) => {
            console.log(res.data)
            setClubs(res.data)
        })
    }, [])

    React.useEffect(() => {
        if (user != null) {
           getUserInterests()
        }
    }, [user])

    const handleCardClick = (club) => {
        setModalClub(club.id);
    }
    const handleModalClose = () => {
        setModalClub(null);
    }
    const handleClubRecommendationModalClose=()=>{
        setclubRecommendationModalOpen(false)
    }
    const handleClubRecommendationModalOpen=()=>{
        setclubRecommendationModalOpen(true)
    }
    const handleAddInterestsChange=(e)=>{
        setAddInterest(e.target.value)
    }
    const handleAddInterestsSubmit=(e)=>{
        BackendClient.post('interests/',{
            interests:addInterest,
            user:user
        }).then((res)=>{
            getUserInterests()
        })
    }
    


    const handleUserInterestClick=(id)=>{
        BackendClient.delete('interests/'+userIntersts[id].id+'/').then((res)=>{
            setUserInterests((state)=>{
                const obj=[...state]
                obj[id].user_interest=false
                return obj
                
            })
        })
       

    }
    const handleInterestClick=(id)=>{
        BackendClient.post('interests/',{
            is_user_interest:true,
            name:userIntersts[id].name,
            user:user,
            club:null,
            weight:2,


        }).then((res)=>{
            setUserInterests((state)=>{
                const obj=[...state]
                obj[id].user_interest=true
                return obj
                
            })
        })
    }
    React.useEffect(()=>{
       console.log("userInterest changed")
    },[userIntersts])


    return (
        <Box sx={{ display: "flex", flexDirection: "column", alignContent: "center", flexWrap: "wrap" }}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <img src={require("../../assets/NewbieNexusLogo.png")} style={{ width: "20rem", height: "10rem", alignSelf: "center", }}></img>
            </Box>
            <Box sx={{ marginTop: "4rem", width: "40%", alignSelf: "center" }}>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <TextField sx={{ width: "40rem", marginRight: "3rem" }} label="interests" onChange={handleAddInterestsChange}></TextField>
                    <Button variant="contained" sx={{ width: "8rem" }} onClick={handleAddInterestsSubmit}>Add</Button>
                </Box>
                <Typography sx={{ color: "grey" }}>For eg: Music,Machine Learing,Competitive Programming</Typography>
                <Button variant="contained" onClick={handleClubRecommendationModalOpen}sx={{ width: "100%",marginTop:"2rem",height:"3.2rem" }}>Get Club Recommendations</Button>
            </Box>
            <ClubRecommendation 
             open={clubRecommendationModalOpen}
             onClose={handleClubRecommendationModalClose}

            />
            <Box sx={{ width: "100%", textAlign: "center", marginTop: "4rem" }}>
                <Typography variant="h3">Your interests</Typography>
            </Box>
            <Box sx={{ display: "flex", flexWrap: "wrap", width: "70%", alignSelf: "center", justifyContent: "center" }}>
                {userIntersts.map((data, id) => {
                    return data.user_interest ? (
                        <Chip
                            label={data.name}
                            color="secondary"
                            onClick={()=>{
                                handleUserInterestClick(id)
                            }}
                            onDelete={()=>{
                                handleUserInterestClick(id)
                            }}
                            sx={{ 
                            minWidth: "8rem", 
                            height: "2.5rem", 
                            fontSize: "1rem", 
                            margin: "1rem",
                            borderRadius:"1.25rem",
                            display:"flex",
                            justifyContent:"space-between"
                            }}>

                            </Chip>
                    ) :
                        (
                            <Chip 
                            label={data.name} 
                            color="primary"

                            onClick={()=>{
                                handleInterestClick(id)
                            }}
                            onDelete={()=>{
                                handleInterestClick(id)
                            }}
                            deleteIcon={<AddCircleIcon/>}
                            sx={{ 
                            minWidth: "8rem", 
                            height: "2.5rem", 
                            fontSize: "1rem", 
                            margin: "1rem",
                            borderRadius:"1.25rem",
                            display:"flex",
                            justifyContent:"space-between"
                            }}>

                            </Chip>
                        )
                })}
            </Box>

            <Box sx={{ width: "100%", textAlign: "center", marginTop: "4rem" }}>
                <Typography variant="h3">CLUBS</Typography>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-evenly", flexWrap: "wrap" }}>
                {clubs.map((data, id) => {
                    return (
                        <Box>
                            <ClubCard
                                club={data}
                                onClick={handleCardClick}
                            />
                            <ClubModal
                                club={data}
                                open={modalClub == data.id}
                                onClose={handleModalClose}
                            />
                        </Box>
                    )
                })}
            </Box>
        </Box>
    )
}