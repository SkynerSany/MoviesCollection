import React, { useState } from 'react'

export default function AddMovie() {
  const [checkBox, setCheckBox] = useState(false);

  const onClickCheckBox = () => {
    setCheckBox(prev => !prev);
  }

  const CheckBox = () => {
    return (
      <div id="modal__checkboxes">
        <label for="crime">
          <input type="checkbox" id="crime" />Crime</label>
        <label for="documentary">
          <input type="checkbox" id="documentary" />Documentary</label>
        <label for="horror">
          <input type="checkbox" id="horror" />Horror</label>
        <label for="comedy">
          <input type="checkbox" id="comedy" />Comedy</label>
      </div>
    )
  }

  return (
    <>
      <h1 className='modal__title'>add movie</h1>
      <form action='' className='modal__form'>
        <div className='modal__inputContainer'>
          <label for='title' className='modal__label'>title</label>
          <input id='title' type='text' className='modal__input' />
        </div>
        <div className='modal__inputContainer'>
          <label for='releaseDate' className='modal__label'>release date</label>
          <input id='releaseDate' type='date' className='modal__input' />
        </div>
        <div className='modal__inputContainer'>
          <label for='posterUrl' className='modal__label'>poster url</label>
          <input id='posterUrl' type='text' className='modal__input' />
        </div>
        <div className='modal__inputContainer'>
          <label for='genre' className='modal__label'>genre</label>
          <div class="modal__multiselect">
            <div class="modal__selectBox" onClick={onClickCheckBox}>
              <select className='modal__input'>
                <option>Select Genre</option>
              </select>
              <div class="modal__overSelect"></div>
            </div>
            {
              checkBox && <CheckBox />
            }
          </div>
        </div>
        <div className='modal__inputContainer'>
          <label for='overview' className='modal__label'>overview</label>
          <input id='overview' type='text' className='modal__input' />
        </div>
        <div className='modal__inputContainer'>
          <label for='runtime' className='modal__label'>runtime</label>
          <input id='runtime' type='text' className='modal__input' />
        </div>
      </form>
      <div className='modal__containerBtns'>
        <button className='modal__btnReset'>RESET</button>
        <button className='modal__btnConfirm'>submit</button>
      </div>
    </>
  )
}
