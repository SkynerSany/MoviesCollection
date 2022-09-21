import React from 'react'
import './addConfirm.scss'

export default function AddConfirm({ setModal }) {
  return (
    <div className='modal__confirmContainer'>
      <div className='modal__confirmImage'></div>
      <h2 className='modal__confirmTitle'>congratulations !</h2>
      <p className='modal__confirmDescription'>The movie has been added to database successfuly</p>
    </div>
  )
}
