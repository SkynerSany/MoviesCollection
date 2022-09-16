import React, { useEffect, useState } from 'react'
import './movie.scss';
import MoviEdit from './MoviEdit';

export default function Movie({ poster, title, genres, releaseDate, setModal }) {
  const [image, setImage] = useState();
  const [openSettings, setOpenSettings] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = poster;
    img.onload = () => {
      setImage(poster);
    };
    img.onerror = () => {
      setImage('./layout.png');
    };
  }, [poster])
  
  return (
    <div className="moviesCollection__movie">
      <div style={{backgroundImage: `url(${image})`}} className="moviesCollection__img" />
      <div onClick={() => setOpenSettings(false)} className='moviesCollection__settings'>
        <span className="moviesCollection__settingsImg">...</span>
      </div>
      {
        openSettings || <MoviEdit setOpenSettings={setOpenSettings} setModal={setModal} />
      }
      <div className="moviesCollection__info">
        <div className="moviesCollection__moviesInfo">
          <p className="moviesCollection__title">{title}</p>
          <p className="moviesCollection__year">{releaseDate}</p>
        </div>
        <p className="moviesCollection__genre">{genres.join(' & ')}</p>
      </div>
    </div>
  )
}
