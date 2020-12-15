import React, {useState} from 'react'
import { useGlobalContext } from '../context/context';
import { Link } from 'react-router-dom';

const url =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'

const Games = () => {
  
  const {gamiess,isLoading} = useGlobalContext();
 
  
  
 
  
  if(isLoading){
    return <div className='loading'></div>
  }
  /*const data = useGlobalContext()
  console.log(data);*/
return <section className="movies">
{gamiess.map((gami)=>{
  const {imdbID: key, Poster:poster, Title:title, Year:year} =
  gami
  return <Link to= {`/games/${key}`} key ={key} className="movie">
    <article>
      <img src={poster === 'N/A'? url : poster} alt={title} />
      <div className="movie-info">
        <h4 className="title">{title}</h4>
        <p>{year}</p>
      </div>
    </article>
  </Link>
  /*console.log(movie);
  return <h4>movie</h4>*/
})}</section>
}

export default Games;
