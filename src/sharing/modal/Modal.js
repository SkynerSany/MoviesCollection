import React from 'react';
import './modal.scss';

export default function Modal({ children, setModal, title }) {
  return (
    <>
      <div onClick={() => setModal(false)} className='modal__backDrop'></div>
      <aside className='modal'>
        <button onClick={() => setModal(false)} className='modal__btnClose'>&times;</button>
        <h1 className='modal__title'>{ title }</h1>
        {
          children
        }
      </aside>
    </>
  )
}
