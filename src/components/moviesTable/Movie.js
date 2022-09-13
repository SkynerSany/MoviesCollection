import React from 'react'

export default function Movie({ poster, title, genres, releaseDate }) {
  return (
    <div className="moviesCollection__movie">
      <img src={poster} alt="" className="moviesCollection__img" />
      <div className='moviesCollection__settings'>
        <span className="moviesCollection__settingsImg">...</span>
      </div>
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
