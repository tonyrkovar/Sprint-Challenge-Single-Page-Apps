import React from "react";
import styled from 'styled-components';

const CardContainer = styled.div`
  width: 30%; 
  margin: 0 auto;
  text-align: center;
`;

const CharactersCard = styled.div`
border: 2px solid black;
width: 100%;
// height: 20vh;
margin: 20px;
`;

const CharacterName = styled.h2`
  color: blue;
`;

const CharacterImg = styled.img`
  width: 100%;
`;

export default function CharacterCard(props) {
 

    return(
      <CardContainer>
        <CharactersCard>
          <CharacterName>{props.char.name}</CharacterName>
            <p>{props.char.origin.name}</p>
            <p>{props.char.species}</p>
            <p>{props.char.status}</p>
        <CharacterImg src={`https://rickandmortyapi.com/api/character/avatar/${props.char.id}.jpeg`}></CharacterImg>
        </CharactersCard>
      </CardContainer>
      )
    
}
