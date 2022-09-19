import React, { useEffect, useRef } from 'react';
import './modal.scss';

export default function Modal({ children, setModal, setConfirm }) {
  const modalAside = useRef();
  const onClickClose = () => {
    setConfirm(true);
    setModal(false)
  }

  useEffect(() => {
    modalAside.current.focus();
  }, [])

  return (
    <>
      <div onClick={() => setModal(false)} className='modal__backDrop'></div>
      <aside ref={modalAside} className='modal' tabIndex='2'>
        <button onClick={onClickClose} className='modal__btnClose'>&times;</button>
        <div className='modal__container'>
        {
          children
        }
        </div>
      </aside>
    </>
  )
}
