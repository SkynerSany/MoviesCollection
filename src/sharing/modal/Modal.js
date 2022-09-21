import React, { useEffect, useRef } from 'react';
import './modal.scss';

export default function Modal({ children, setModal, setConfirm }) {
  const modalAside = useRef();
  const onClickClose = () => {
    if (children[1].type.name === 'AddConfirm') {
      setConfirm(true);
    }
    setModal(false)
  }

  useEffect(() => {
    modalAside.current.focus();
  }, [])

  return (
    <>
      <div onClick={onClickClose} className='modal__backDrop'></div>
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
