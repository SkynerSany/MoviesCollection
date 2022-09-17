import React from 'react'

export default function DeleteMovie({ movieData }) {
  return (
    <>
      <h1 className='modal__title'>DELETE MOVIE</h1>
      <p className='modal__description'>Are you sure you want to delete this movie?</p>
      <div className='modal__containerBtns'>
        <button className='modal__btnConfirm'>CONFIRM</button>
      </div>
    </>
  )
}
