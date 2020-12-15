import { useState, useEffect } from 'react';
const API_ENDPOINT = `https://www.omdbapi.com/?apikey=
${process.env.REACT_APP_MOVIE_API_KEY}`

 const useFetchSeries = (urlParamss) => {
    const [isLoadingSerie, setIsLoadingSerie] = useState(true);
    const [isErrorSerie, setErrorSerie] = useState({show:false, msg:''});
    const [dataSerie, setDataSerie] = useState(null);
    
    const fetchMoviesSerie = async (url) => {
      //her aramada arama için
      setIsLoadingSerie(true);
      try {
    const response = await fetch(url);
    const dataSerie = await response.json();
         console.log(dataSerie);
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
        console.log(error)
        setIsLoadingSerie(false);
      }
    };
  
  useEffect(() => {
    fetchMoviesSerie(`${API_ENDPOINT}&s=${urlParamss}`) 
  },[urlParamss])
    return {isLoadingSerie, isErrorSerie, dataSerie }
}

export default useFetchSeries;
