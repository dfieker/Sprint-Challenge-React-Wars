import React from "react";
import CharacterPost from "./CharacterPost";

const Characters = props => {
    console.log("Characters", props);
    return (
        <div className="character-list">
            {props.characterData.results.map(element => {
          <CharacterPost
            key={element.height}
            name={element.name}
            hairColor={element.hair_color}
          />
            })}
            {/* <h2>Character: {props.name}</h2>
            <p>Hair Color: {props.hairColor}</p> */}
        </div>
    );
};

export default Characters;