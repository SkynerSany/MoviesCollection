import React, { useEffect, useRef } from 'react';
import './movieInfo.scss';

export default function MovieInfo({ movieInfo, setMovieInfo }) {
  const movieAside = useRef();

  useEffect(() => {
    movieAside.current.focus();
  }, [movieInfo])

  return (
    <aside ref={movieAside} className="movie" tabIndex='2'>
      <div className="movie__logoContainer">
        <img onClick={() => window.location.reload()} src="./logo.svg" alt="" className="movie__logo" />
        <button onClick={() => setMovieInfo(false)} className="movie__btnSearch"></button>
      </div>
      <div className="movie__container">
        <img src={movieInfo.poster_path} alt='movie poster' className='movie__poster' />
        <div className="movie__info">
          <div className='movie__titleContainer'>
            <h2 className="movie__title">{movieInfo.title}</h2>
            <p className='movie__voteAverange'>{movieInfo.vote_average}</p>
          </div>
          <div className='movie__timesData'>
            <span className='movie__time'>{movieInfo.release_date.slice(0, 4)}</span>
            <span className='movie__time'>{movieInfo.runtime} min</span>
          </div>
          <p className='movie__description'>{movieInfo.overview}</p>
        </div>
      </div>
    </aside>
  )
}
