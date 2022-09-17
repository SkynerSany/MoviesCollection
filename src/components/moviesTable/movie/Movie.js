import React, { useEffect, useState } from 'react'
import './movie.scss';
import MovieSettings from './movieSettings/MovieSettings';

export default function Movie({ setModal, movieData }) {
  const [image, setImage] = useState();
  const [openSettings, setOpenSettings] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = movieData.poster_path;
    img.onload = () => {
      setImage(movieData.poster_path);
    };
    img.onerror = () => {
      setImage('./layout.png');
    };
  }, [movieData.poster_path])
  
  return (
    <div className="moviesCollection__movie">
      <div style={{backgroundImage: `url(${image})`}} className="moviesCollection__img" />
      <div onClick={() => setOpenSettings(false)} className='moviesCollection__settings'>
        <span className="moviesCollection__settingsImg">...</span>
      </div>
      {
        openSettings || <MovieSettings setOpenSettings={setOpenSettings} setModal={setModal} movieData={movieData} />
      }
      <div className="moviesCollection__info">
        <div className="moviesCollection__moviesInfo">
          <p className="moviesCollection__title">{movieData.title}</p>
          <p className="moviesCollection__year">{movieData.release_date.slice(0,4)}</p>
        </div>
        <p className="moviesCollection__genre">{movieData.genres.join(' & ')}</p>
      </div>
    </div>
  )
}
