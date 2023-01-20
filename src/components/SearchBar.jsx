import style from './SearchBar.module.css'
import { useState } from 'react';

function SearchBar({onSearch}) {
   const[character, setCharacter] = useState('')
   const handleChange = (event) => {
      setCharacter(event.target.value)
   }
   return (
      <div className={style.searchBar}>
         <input className={style.input} type='search' value={character} onChange={handleChange}/>
         <button onClick={() => onSearch(character)} className={style.boton}>Agregar</button>
      </div>
   );
}

export default SearchBar;
