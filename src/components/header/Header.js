import React, { useRef } from 'react'
import './header.scss'
import AddMovie from './addMovie/AddMovie';
import MovieInfo from './movieInfo/MovieInfo';

export default function Header({ setSearchValue, setModal, movieInfo, setMovieInfo }) {
  const input = useRef();

  const onClickEnter = (e) => {
    if (e.keyCode === 13) onClickSearch();
  }

  const onClickSearch = () => {
    setSearchValue(input.current.value);
  }

  return (
    <header className="header">
      {
        movieInfo && <MovieInfo movieInfo={movieInfo} setMovieInfo={setMovieInfo} />
      }
      <div className="header__logoContainer">
        <img onClick={() => window.location.reload()} src="./logo.svg" alt="" className="header__logo" />
        <button onClick={() => setModal(<AddMovie setModal={setModal} />)} className="header__btnAddMovie">+ ADD MOVIE</button>
      </div>
      <div className="header__searchContainer">
        <h1 className="header__title">FIND YOUR MOVIE</h1>
        <div className="header__searchForm">
          <input ref={input} onKeyDown={onClickEnter} className="header__input" placeholder="What do you want to watch?" type="text" name="" id="" />
          <button onClick={onClickSearch} className="header__btnSearch">SEARCH</button>
        </div>
      </div>
    </header>
  )
}
