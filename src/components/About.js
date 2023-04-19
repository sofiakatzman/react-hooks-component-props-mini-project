import React from "react";

function About({image, about}){
    return (
        <aside>
        <img  alt = "blog logo" src = {image}/>
        <p>{about}</p>
        </aside>
    );
}

export default About
