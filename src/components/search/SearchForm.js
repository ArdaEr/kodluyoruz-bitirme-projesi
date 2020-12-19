import React from 'react';
import { useGlobalContext } from '../context/context';
import Input from '../Input/Input';


const SearchForm = () => {
  const {query, setQuery,isError} = useGlobalContext();
  
  return (
  <form className="search-form" onSubmit={(e)=>
  e.preventDefault}>
    <h2>Search Movies</h2>
    <Input type="text " className="form-input" value={query}
    onChange={(e)=> setQuery(e.target.value)} onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault() }}/>
    {isError.show && <div className='error'>{isError.msg}</div>}
    </form>
  )
}

export default SearchForm
