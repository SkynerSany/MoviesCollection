import React from 'react';
import './modal.scss';

export default function Modal({ children, setModal }) {
  return (
    <>
      <div onClick={() => setModal(false)} className='modal__backDrop'></div>
      <aside className='modal'>
        <button onClick={() => setModal(false)} className='modal__btnClose'>&times;</button>
        <div className='modal__container'>
        {
          children
        }
        </div>
      </aside>
    </>
  )
}
