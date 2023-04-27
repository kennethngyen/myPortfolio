import React from "react";
import pfp from "../imgs/linkedinpfp.jpg"

export default function About(){
    return(
        <div className="frameWrapper">
            <div className="frame">
                <div className="about-top">
                    <div className="about-top-text">
                        <h1>Kenneth Nguyen</h1>
                        <h3>Computer Science and Regent's Scholar @ UC San Diego</h3>
                        <ul>
                            <li>Director of CSforEach Early Start Fellowship</li>
                            <li>Explorer Cadet at California Highway Patrol</li>
                        </ul>
                        <p>Technologies:</p>
                        <p>React, HTML, TailwindCSS, JavaScript, Python, Java</p>
                    </div>
                    <div>
                        <img src={pfp} className="pfp"></img>
                    </div>
                </div>
                <div>
                    <p>Relevant Coursework:</p>
                    <p>Data Structures/Algorithms & OOP, Computer Organization and Systems Programming, Python, Java, Discrete Math, Linear Algebra, Multivariable Calculus, Statistics</p>
                </div>
            </div>
        </div>
    )
}