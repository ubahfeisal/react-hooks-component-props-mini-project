import React from "react";

function About ({imageSrc, aboutText }){
    const defaultImage ="https://via.placeholder.com/215";

    return (
        <aside>
            <img src={imageSrc || defaultImage} alt="blog logo"/>
            <p>{aboutText}</p>
        </aside>
    );
}

export default About;