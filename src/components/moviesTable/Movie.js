import React, { useEffect, useRef } from 'react'

export default function Movie({ poster, title, genres, releaseDate }) {
  const image = useRef();
  useEffect(() => {
    const img = new Image();
    img.src = poster;
    img.onload = function () { image.current = poster; }
    img.onerror = function (e) { e.preventDefault(); console.log(e) }
  }, [])

  return (
    <div className="moviesCollection__movie">
      <div style={{background: `url(${image})`}} className="moviesCollection__img" />
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
