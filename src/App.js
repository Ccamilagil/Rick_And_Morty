import './App.css'
import Cards from './components/Cards.jsx'
import Nav from './components/Nav';
import About from './components/About';
import Detail from './components/Detail';
import { useState } from 'react';
import { Route, Link, Routes } from 'react-router-dom';

function App () {
 const[characters, setCharacters] = useState([]);
  
 const onSearch = (character) => {
  fetch(`https://rickandmortyapi.com/api/character/${character}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
          window.alert('No hay personajes con ese ID');
     }
    });
  }
  
  const onClose = (id) => {
    setCharacters(
      characters.filter(character => character.id !== id)
    )
  }
  return (
    <div className='App' style={{ padding: '25px' }} >
      <Routes>
        <Route path="/">
          <Nav onSearch={onSearch}/>
        </Route>
        <Route path="/home">
          <Cards 
            onClose={onClose}
            characters={characters}
          />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path={"/detail/:detailId"}>
          <Detail />
        </Route>
      </Routes>
    </div>
  )
}

export default App
