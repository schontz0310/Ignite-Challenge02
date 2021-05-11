import { useEffect, useState } from 'react';

import { MovieCard } from './components/MovieCard';

import { Content } from './components/Content';

import { api } from './services/api';

import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';
import { SideBar } from './components/SideBar';

import GenreProps from './DTOs/IGenreProps';
import MovieProps from './DTOs/IMoveProps';





export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  const [genres, setGenres] = useState<GenreProps[]>([]);

  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<GenreProps>({} as GenreProps);

  useEffect(() => {
    api.get<GenreProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);

  useEffect(() => {
    api.get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
      setMovies(response.data);
    });

    api.get<GenreProps>(`genres/${selectedGenreId}`).then(response => {
      setSelectedGenre(response.data);
    })
  }, [selectedGenreId]);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>   
      <SideBar 
      genres={genres}
      handleClickButton={handleClickButton}
      selectedGenre={selectedGenreId}
      />
      <Content
      genres={genres}
      movies={movies}
      selectedGenre={selectedGenre}
      />
    </div>
  )
}