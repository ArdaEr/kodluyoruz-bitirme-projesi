import { useState, useEffect } from 'react';
const API_ENDPOINT = `https://www.omdbapi.com/?apikey=
${process.env.REACT_APP_MOVIE_API_KEY}`

 const useFetchSeries = (urlParams) => {
    const [isLoadingSerie, setIsLoadingSerie] = useState(true);
    const [errorSerie, setErrorSerie] = useState({show:false, msg:''});
    const [dataSerie, setDataSerie] = useState(null);
    
    const fetchMoviesSerie = async (url) => {
      //her aramada arama için
      setIsLoadingSerie(true);
      try {
    const response = await fetch(url);
    const dataSerie = await response.json();
         
  if(dataSerie.Response === 'True' ){
      //console.log(data);
    setDataSerie(dataSerie.Search || dataSerie);
    setErrorSerie({show:false,msg: '' });
  }
  else if(dataSerie.Response=== null){
    setErrorSerie({show:true,msg:dataSerie.Error})
  }
  else{
    setErrorSerie({show:true,msg:dataSerie.Error})
  }
  setIsLoadingSerie(false);
      } catch (error) {
        setIsLoadingSerie(false);
      }
    };
  
  useEffect(() => {
    fetchMoviesSerie(`${API_ENDPOINT}&s=${urlParams}`) 
  },[urlParams])
    return {isLoadingSerie, errorSerie, dataSerie }
}

export default useFetchSeries;
