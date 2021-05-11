import React from "react";
import GenreProps from "../DTOs/IGenreProps";
import MovieProps from "../DTOs/IMoveProps";
import { MovieCard } from "./MovieCard";



interface ContentProps{
  selectedGenre: GenreProps;
  genres: GenreProps[];
  movies: MovieProps[];
}

export function Content({
genres,
movies,
selectedGenre
}: ContentProps) {
  return(
    <div className="container">
        <header>
          <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
        </header>
        <main>
          <div className="movies-list">
            {movies.map(movie => (
              <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
            ))}
          </div>
        </main>
      </div>
  )
}