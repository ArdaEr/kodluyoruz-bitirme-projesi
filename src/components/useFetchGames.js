import { useState, useEffect } from 'react';
const API_ENDPOINT = `https://www.omdbapi.com/?apikey=
${process.env.REACT_APP_MOVIE_API_KEY}`

 const useFetchGames = (urlParamsg) => {
    const [isLoadingGame, setisLoadingGame] = useState(true);
    const [isErrorGame, setErrorGame] = useState({show:false, msg:''});
    const [dataGame, setDataGame] = useState(null);
    
    const fetchMoviesGame = async (url) => {
      //her aramada arama için
      setisLoadingGame(true);
      try {
    const response = await fetch(url);
    const dataGame = await response.json();
         /*console.log(data);*/
  if(dataGame.Response === 'True' ){
      //console.log(data);
    setDataGame(dataGame.Search || dataGame);
    setErrorGame({show:false,msg: '' });
  }
  else if(dataGame.Response=== null){
    setErrorGame({show:true,msg:dataGame.Error})
  }
  else{
    setErrorGame({show:true,msg:dataGame.Error})
  }
  setisLoadingGame(false);
      } catch (error) {
        console.log(error)
        setisLoadingGame(false);
      }
    };
  
  useEffect(() => {
    fetchMoviesGame(`${API_ENDPOINT}&s=${urlParamsg}`) 
  },[urlParamsg])
    return {isLoadingGame, isErrorGame, dataGame }
}

export default useFetchGames;
