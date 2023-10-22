import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


export default function ClubCard(props){
    return (
        <Card sx={{ width: "20rem",margin:"3rem" }}>
        <CardActionArea sx={{display:"flex",flexDirection:"column",justifyContent:"space-between",height:"100%"}} onClick={()=>{
          props.onClick(props.club)
        }}>
          <CardMedia
            component="img"
            width="20rem"
            image={props.club.profile_picture}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.club.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    )
}