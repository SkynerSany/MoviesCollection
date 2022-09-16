import React from 'react'

export default function MoviEdit({ setOpenSettings, setModal }) {
  return (
    <div className='moviesCollection__editContainer'>
      <button onClick={() => setOpenSettings(true)} className='moviesCollection__btnClose'>&times;</button>
      <ul className='moviesCollection__listBtns'>
        <li onClick={() => setModal(true)} className='moviesCollection__btn'>Edit</li>
        <li onClick={() => setModal(true)} className='moviesCollection__btn'>Delete</li>
      </ul>
    </div>
  )
}
