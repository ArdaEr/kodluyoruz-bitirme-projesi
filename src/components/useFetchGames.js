import { useState, useEffect } from 'react';
const API_ENDPOINT = `https://www.omdbapi.com/?apikey=
${process.env.REACT_APP_MOVIE_API_KEY}`

 const useFetchG = (urlParamsss) => {
    const [isLoadingGame, setIsLoadingGame] = useState(true);
    const [isErrorG, setErrorG] = useState({show:false, msg:''});
    const [dataG, setDataG] = useState(null);
    
    const fetchMoviesG = async (url) => {
      //her aramada arama için
      setIsLoadingGame(true);
      try {
    const response = await fetch(url);
    const dataG = await response.json();
    console.log(dataG);
  if(dataG.Response === 'True' ){
      //console.log(data);
    setDataG(dataG.Search || dataG);
    setErrorG({show:false,msg: '' });
    
  }
  else if(dataG.Response=== null){
    setErrorG({show:true,msg:dataG.Error})
  }
  else{
    setErrorG({show:true,msg:dataG.Error})
  }
  setIsLoadingGame(false);
      } catch (error) {
        console.log(error)
        setIsLoadingGame(false);
      }
    };
  
  useEffect(() => {
    fetchMoviesG(`${API_ENDPOINT}&s=${urlParamsss}`) 
  },[urlParamsss])
    return {isLoadingGame, isErrorG, dataG }
}

export default useFetchG;
