import React from 'react'
import { useGlobalContext } from '../context/context';
import { Link } from 'react-router-dom';
import Loader from '../Loader/Loader';

import SearchFormGames from '../search/SearchFormGames';


const url =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'

const Games = () => {
  
  const {gamies,isLoadingGame} = useGlobalContext();
 
  
  
 
  
  if(isLoadingGame){
    return <Loader />
  }


return (  
<section className="movies">
  
 
{gamies.map((gam)=>{
  const {imdbID: key, Poster:poster, Title:title, Year:year} =
  gam
  return <Link to= {`/games/${key}`} key ={key} className="movie">
    <article>
      <img src={poster === 'N/A'? url : poster} alt={title} />
      <div className="movie-info">
        <h4 className="title">{title}</h4>
        <p>{year}</p>
      </div>
    </article>
  </Link>
 
})}</section>)
}

export default Games;
