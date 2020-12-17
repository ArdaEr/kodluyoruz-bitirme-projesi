import React from 'react';
import { useGlobalContext } from '../context/context';
import Input from '../Input/Input';


const SearchFormGames = () => {
  const {hero, setHero,isErrorG} = useGlobalContext();

  
  return (
  <form className="search-form" onSubmit={(e)=>
  e.preventDefault}>
    <h2>Search Games</h2>
    <Input type="text " className="form-input" value={hero}
    onChange={(e)=> setHero(e.target.value)}/>
    {isErrorG.show && <div className='error'>{isErrorG.msg}</div>}
    </form>
  )
}

export default SearchFormGames;
