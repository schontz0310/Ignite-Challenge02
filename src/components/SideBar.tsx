import React from "react";
import { Button } from "./Button";

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface SideBarProps{
  selectedGenre: number;
  genres: GenreResponseProps[];
  handleClickButton: (genreId: number) => void
}


export function SideBar({
genres,
handleClickButton,
selectedGenre
}: SideBarProps) { 
  return(
    <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={selectedGenre === genre.id}
            />
          ))}
        </div>

      </nav>
  )
}