import React from 'react'
import './movieSettings.scss'
import DeleteMovie from './DeleteMovie'
import EditMovie from './EditMovie'

export default function MovieSettings({ setOpenSettings, setModal, movieData, setConfirm }) {
  
  return (
    <div className='moviesCollection__editContainer'>
      <button onClick={() => setOpenSettings(true)} className='moviesCollection__btnClose'>&times;</button>
      <ul onClick={() => setOpenSettings(true)} className='moviesCollection__listBtns'>
        <li onClick={() => setModal(<EditMovie movieData={movieData} setModal={setModal} setConfirm={setConfirm} />)} className='moviesCollection__btn'>Edit</li>
        <li onClick={() => setModal(<DeleteMovie movieData={movieData} />)} className='moviesCollection__btn'>Delete</li>
      </ul>
    </div>
  )
}
