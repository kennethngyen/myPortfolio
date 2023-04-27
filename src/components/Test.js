import Card from '@mui/material/Card';
import React from "react";
import data from "../projectData.js";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';




export default function Featured(){
    return(
        <div>
            <div>
                <div>
                    <Card sx={{maxWidth:345}}>
                        <CardMedia 
                            sx={{height:140}} 
                            image="../imgs/gunCountPFP.jpg"
                        />
                        <CardContent>
                            <Typography>Word</Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share</Button>
                        </CardActions>
                    </Card>
                </div>
            </div>
        </div>
    )
}
