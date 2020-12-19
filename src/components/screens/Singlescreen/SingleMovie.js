import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useFetch from '../../useFetch';
import Button from '../../Button/Button';

const SingleMovie = () => {
  const {key} = useParams();
  const {isLoading,isError,data:movie} = useFetch(`&i=${key}`);
  const url =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png';

  if(isLoading){
    return <div className="loading"></div>
  }
  if(isError.show){
    return (<div className="page-error">
      <h1>{isError.msg}</h1>
     
      <Link to='/' >
        <Button text = "back to movies" className='btn'>
        </Button>
      </Link>

    </div>
    )
  }
  const{Poster:poster, Title:title, Plot:plot, Year:year, Genre:genre, Director: director, Type: type} = movie;
  //console.log(key);
  return (<section className="single-movie">
    <img src={poster === 'N/A'? url : poster} alt={title} />
    <div className="single-movie-info">
      <h2>{title}</h2>
      <h4>{genre}</h4>
      <p>{plot}</p>
      <h4>{year}</h4>
      <h4>{director}</h4>
      <h4>{type}</h4>
      
      
      <Link to='/' >
        <Button text = "back to movies" className='btn'>
        </Button>
      </Link>
      
    </div>
  </section >
  )
}

export default SingleMovie;
