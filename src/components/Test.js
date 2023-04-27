import Card from '@material-ui/core/Card';
import React from "react";
import data from "../projectData.js";
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';




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
