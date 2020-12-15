import React from 'react';
import { useGlobalContext } from '../context/context';


const SearchFormType = () => {
  const {vero, setVero,isErrorSerie} = useGlobalContext();
  
  return (
  <form className="search-form" onSubmit={(e)=>
  e.preventDefault}>
    <h2>Search Series</h2>
    <input type="text " className="form-input" value={vero}
    onChange={(e)=> setVero(e.target.value)}/>
    {isErrorSerie.show && <div className='error'>{isErrorSerie.msg}</div>}
    </form>
  )
}

export default SearchFormType;