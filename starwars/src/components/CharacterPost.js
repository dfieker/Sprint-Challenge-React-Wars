import React from "react";

const CharacterPost = props => {
    return (
        <div className="character-post">
            <h2>Name: {props.name}</h2>
            <p>Hair Color: {props.hairColor}</p>
        </div>
    );
};

export default CharacterPost;