import React from "react";
import styled from "styled-components";

const NameStyle = styled.div`
    color: #990000;
    opacity: 0.9;
    font-style: oblique;`;
const HairStyle = styled.div`
    color: #1febfd;
    opacity: 0.9;`;

const CharacterPost = props => {
    return (
        <div className="character-post">
            <NameStyle>
            <h2>Name: {props.name}</h2>
            </NameStyle>
            <HairStyle>
            <p>Hair Color: {props.hairColor}</p>
            </HairStyle>
        </div>
    );
};

export default CharacterPost;