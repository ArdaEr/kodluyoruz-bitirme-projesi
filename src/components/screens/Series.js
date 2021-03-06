import React from 'react'
import { useGlobalContext } from '../context/context';
import { Link } from 'react-router-dom';
import Loader from '../Loader/Loader';

const url =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'

const Series = () => {
  const { seriess ,isLoadingSerie} = useGlobalContext();
 
  
  

  
  if(isLoadingSerie){
    return <Loader />
  }
  /*const data = useGlobalContext()
  console.log(data);*/
return <section className="movies">
{seriess.map((ser)=>{
  const {imdbID: key, Poster:poster, Title:title, Year:year} =
  ser
  return <Link to= {`/series/${key}`} key ={key} className="movie">
    <article>
      <img src={poster === 'N/A'? url : poster} alt={title} />
      <div className="movie-info">
        <h4 className="title">{title}</h4>
        <p>{year}</p>
      </div>
    </article>
  </Link>

})}</section>
}

export default Series;
