import { useState, useEffect } from 'react';
const API_ENDPOINT = `https://www.omdbapi.com/?apikey=
${process.env.REACT_APP_MOVIE_API_KEY}`

 const useFetch = (urlParams) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setError] = useState({show:false, msg:''});
    const [data, setData] = useState(null);
    
    const fetchMovies = async (url) => {
      //her aramada arama için
      setIsLoading(true);
      try {
    const response = await fetch(url);
    const data = await response.json();
         console.log(data);
  if(data.Response === 'True' ){
      //console.log(data);
    setData(data.Search || data);
    setError({show:false,msg: '' });
  }
  else if(data.Response=== null){
    setError({show:true,msg:data.Error})
  }
  else{
    setError({show:true,msg:data.Error})
  }
  setIsLoading(false);
      } catch (error) {
        console.log(error)
        setIsLoading(false);
      }
    };
  //her zaman araması için burayı yazıyoruz
  useEffect(() => {
    fetchMovies(`${API_ENDPOINT}&s=${urlParams}`) 
  },[urlParams])
    return {isLoading, isError, data }
}

export default useFetch;