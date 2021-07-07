import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';
import styled from 'styled-components';
import SearchForm from './SearchForm';

const CharactersListed = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 20px;
`;

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  const [apiValue, setApiValue] = useState('');
  const [searchValue, setSearchValue] =useState('')

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios 
      .get(`https://rickandmortyapi.com/api/character/${apiValue}`)
      .then(res => {
        console.log(res.data.results);
        setCharacters(res.data.results)
      })
  }, []);


  // const handleSearchInputChangers = e => {
  //   // Use Target to pull your data
  //   setSearchValue(e.target.value);
  //   console.log('1111',e.target.value)
  // }

  const callSearch = (e) => {
    e.preventDefault();
    characters.name.filter(setApiValue(characters.id));
    console.log('2222',searchValue)
  }

  // const search = searchValue => {
  //   axios 
  //     .get
  // }

  return(
    <>
    <SearchForm callSearch={callSearch}/>
      <CharactersListed>
        {characters.map(char => {
          return <CharacterCard key={char.id} char={char}/>
        })}
        {/* <p>{characters.name}</p> */}
      </CharactersListed>
    </>
  );
}
