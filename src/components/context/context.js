import React, { useState, useContext} from 'react'
// make sure to use https
import useFetch from '../useFetch';
import useFetchSeries from '../useFetchSeries';
import useFetchGames from '../useFetchGames';

export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`
//console.log(API_ENDPOINT)
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState('spider-man');
  const [hero, setHero] = useState('batman');
  const [vero, setVero] = useState('high-score');
  const [games, setGames] = useState('game');
  const [dizi, setDizi] = useState('series');
  const {isLoading,isError,data:movies } = useFetch(`&s=${query}`);
  const {isLoadingSerie,isErrorSerie,dataSerie:seriess } = useFetchSeries(`&s=${vero}&type=${dizi}`);
  const {isLoadingGame,isErrorGame,dataGame:gamiess } = useFetchGames(`&s=${hero}&type=${games}`);
  return <AppContext.Provider value={{isLoading,isError,movies,query,setQuery,dizi, setDizi,games, setGames, hero, setHero,vero, setVero,isLoadingSerie,isErrorSerie,seriess,isLoadingGame,isErrorGame,gamiess}}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider };
