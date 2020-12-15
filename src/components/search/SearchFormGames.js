import React, {useState} from 'react';
import { useGlobalContext } from '../context/context';


const SearchFormGames = () => {
  const {hero, setHero,isErrorGame} = useGlobalContext();

  
  return (
  <form className="search-form" onSubmit={(e)=>
  e.preventDefault}>
    <h2>Search Games</h2>
    <input type="text " className="form-input" value={hero}
    onChange={(e)=> setHero(e.target.value)}/>
    {isErrorGame.show && <div className='error'>{isErrorGame.msg}</div>}
    </form>
  )
}

export default SearchFormGames;
