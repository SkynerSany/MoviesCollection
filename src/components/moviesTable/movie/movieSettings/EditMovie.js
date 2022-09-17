import React from 'react'

export default function EditMovie({ movieData }) {
  return (
    <>
      <h1 className='modal__title'>EDIT MOVIE</h1>
      <form action='' className='modal__form'>
        <div className='modal__inputContainer'>
          <label for='movieId' className='modal__label'>movie id</label>
          <input id='movieId' type='text' className='modal__input' value={movieData.id} disabled />
        </div>
        <div className='modal__inputContainer'>
          <label for='title' className='modal__label'>title</label>
          <input id='title' type='text' className='modal__input' value={movieData.title} />
        </div>
        <div className='modal__inputContainer'>
          <label for='releaseDate' className='modal__label'>release date</label>
          <input id='releaseDate' type='text' className='modal__input' value={movieData.release_date} />
        </div>
        <div className='modal__inputContainer'>
          <label for='posterUrl' className='modal__label'>poster url</label>
          <input id='posterUrl' type='text' className='modal__input' value={movieData.poster_path} />
        </div>
        <div className='modal__inputContainer'>
          <label for='genre' className='modal__label'>genre</label>
          <input id='genre' type='text' className='modal__input' value={movieData.genres} />
        </div>
        <div className='modal__inputContainer'>
          <label for='overview' className='modal__label'>overview</label>
          <input id='overview' type='text' className='modal__input' value={movieData.overview} />
        </div>
        <div className='modal__inputContainer'>
          <label for='runtime' className='modal__label'>runtime</label>
          <input id='runtime' type='text' className='modal__input' value={movieData.runtime} />
        </div>
      </form>
      <div className='modal__containerBtns'>
        <button className='modal__btnReset'>RESET</button>
        <button className='modal__btnConfirm'>SAVE</button>
      </div>
    </>
  )
}
