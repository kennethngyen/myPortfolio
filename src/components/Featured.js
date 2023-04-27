import React from "react";
import Card from "./Card"
import data from "../projectData.js"

export default function Featured(props){
    const cards = data.map(item => {
        return(
            
            <Card
                key={item.id}
                title={item.title}
                description={item.description}
                img={item.img}
            />
        )
    })
    return(
        <div>
            <div className="frameWrapper">
                <div className="frame">
                    <h1>Featured Projects</h1>
                    <div className="card-showcase">
                        {cards}
                    </div>
                </div>
            </div>
        </div>
    )
}