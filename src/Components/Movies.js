import { useEffect, useState } from "react";
import MoviesList from "./MoviesList";
import '../index.css'
import Logo from "./Logo";
import Search from "./Search";
const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('')

  // fetching api


  const Getapi = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=b167fec9`;
  
    try {
      const response = await fetch(url);  // Await the fetch response
      const responseJson = await response.json();
      if(responseJson.Search) {
        setMovies(responseJson.Search)  
      }  // Parse the response as JSON
      console.log(responseJson.Search);
      // Log the JSON data
    } catch (error) {
      console.error("Error fetching data:", error);  // Handle errors if the fetch fails
    }
  };
  
  useEffect(() => {
    Getapi(searchValue);
  }, [searchValue]);


  return (
    <div>
        <div className="header">
            <Logo/>
            <Search searchValue={searchValue} setSearchValue={setSearchValue}/>
        </div>
        <div className="movies">

            {movies.map((movie) => {
                return(
                    <div className="movie">
                         <MoviesList  Poster={movie.Poster} Title={movie.Title} Year={movie.Year}/>
                    </div>
                )
            })}
        </div>


     
    </div>
  );
}

export default Movies;


