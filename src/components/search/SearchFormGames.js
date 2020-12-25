import React from 'react';
import { useGlobalContext } from '../context/context';
import Input from '../Input/Input';


const SearchFormGames = () => {
  const {hero, setHero,errorGame} = useGlobalContext();
  
  
  return (
  <form className="search-form" onSubmit={(e)=>
  e.preventDefault}>
    <h2>Search Games</h2>
    <Input type="text " className="form-input" value={hero}
    onChange={(e)=> setHero(e.target.value)} />
    {errorGame.show && <div className='error'>{errorGame.msg}</div>}
    
    </form>
  )
}

export default SearchFormGames;
