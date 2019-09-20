import React from "react";
import {Route} from 'react-router-dom';
import Header from "./components/Header.js";
import CharacterCard from './components/CharacterCard'
import CharacterList from './components/CharacterList'


export default function App() {
  return (
    <main>
      <Header />
      <Route eact path='/' component={CharacterList} />
    </main>
  );
}
