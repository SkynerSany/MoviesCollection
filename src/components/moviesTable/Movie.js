import React from 'react'

export default function Movie() {
  return (
    <div className="moviesCollection__movie">
      <img src="" alt="" className="moviesCollection__img" />
      <div className='moviesCollection__settings'>
        <span className="moviesCollection__settingsImg">...</span>
      </div>
      <div className="moviesCollection__info">
        <div className="moviesCollection__moviesInfo">
          <p className="moviesCollection__title">Pulp Fiction</p>
          <p className="moviesCollection__year">2004</p>
        </div>
        <p className="moviesCollection__genre">Action & Adventure</p>
      </div>
    </div>
  )
}
