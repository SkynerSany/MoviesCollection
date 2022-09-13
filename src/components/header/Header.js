import React, { useRef } from 'react'
import './header.scss'

export default function Header({ setSearchValue }) {
  const input = useRef();

  const onClickSearch = () => {
    setSearchValue(input.current.value);
    input.current.value = '';
  }

  return (
    <header className="header">
      <div className="header__logoContainer">
        <a href='#'>
          <img src="./logo.svg" alt="" className="header__logo" />
        </a>
        <button className="header__btnAddMovie">+ ADD MOVIE</button>
      </div>
      <div className="header__searchContainer">
        <h1 className="header__title">FIND YOUR MOVIE</h1>
        <div className="header__searchForm">
          <input ref={input} className="header__input" placeholder="What do you want to watch?" type="text" name="" id="" />
          <button onClick={onClickSearch} className="header__btnSearch">SEARCH</button>
        </div>
      </div>
    </header>
  )
}
