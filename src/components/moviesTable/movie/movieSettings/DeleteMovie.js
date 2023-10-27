import React from 'react'

export default function DeleteMovie({ movieData }) {
  const removeFilmFromDB = () => {
    fetch(`https://maroon-snail-coat.cyclic.app/movies-api/movies/${movieData.id}`, {
      method: 'DELETE',
    })
    .then(response => response.json())
    .then(result => console.log(result.messages))
    .then(window.location.reload())
    .catch(err => console.error(err))
  }

  return (
    <>
      <h1 className='modal__title'>DELETE MOVIE</h1>
      <p className='modal__description'>Are you sure you want to delete this movie?</p>
      <div className='modal__containerBtns'>
        <button onClick={removeFilmFromDB} className='modal__btnConfirm'>CONFIRM</button>
      </div>
    </>
  )
}
