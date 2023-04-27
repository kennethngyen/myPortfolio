import React from "react";
import gitIcon from "../imgs/VectorGithub.svg"
import linkIcon from "../imgs/VectorLink.svg"



export default function Card(props){
    //for props, can also deconstruct right away using {img, rating, caption}
    //and can deconstruct with:
    //const person {img:"imgLink", phone: "123"}
    //const {img, phone} = perso, console.log(phone)
    //console.log(props)
    //rating = 5.0 (6) - USA


    //USE MAP OVER AN ARRAY TO RENDER EACH ELEMENT
    /*const jokeElements = jokesData.map(joke => {
        return <Joke setup={joke.setup} punchline={joke.punchline}/>
    })*/
    
    return(
        <div className="card">
            <img src={require(`../imgs/${props.img}`)} className="card-image"></img>
                <div>
                    <img className="card-icons" src={gitIcon}></img>
                    <img className="card-icons" src={linkIcon}></img>
                </div>
                <p className="card-title">{props.title}</p>
                <p className="card-description">{props.description}</p>
        </div>
    )
}


//CONDITIONALS:
//if, for example props.rating didn't exist, set it up at
//{props.rating && <h3>Rating:</h3>}
//EXPLAINED: if props.rating exist, then render it, else dont
//OR, ALTERNATIVELY
//<h3 style ={{display: props.setup? "block" : "none"}}> Rating:</h3>