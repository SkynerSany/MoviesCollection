import React, { useState, useRef, useEffect } from 'react'

export default function CheckBox({ selectedGenre=[], setGenres }) {
  const [checkBox, setCheckBox] = useState(false);
  const initGenres = ['Action', 'Adventure', 'Animation', 'Comedy', 'Drama', 'Fantasy', 'Family', 'Horror', 'Mystery', 'Romance','Science Fiction', 'Thriller', 'Western']
  const inputGenres = useRef([...selectedGenre])

  const onClickCheckBox = () => {
    setCheckBox(prev => !prev);
  }

  const onClickGenre = (item) => {
    if (inputGenres.current.includes(item)) {
      inputGenres.current.splice(inputGenres.current.indexOf(item), 1)
    } else {
      inputGenres.current.push(item)
    }
  }

  const CheckBoxModal = () => {
    useEffect(() => {
      setGenres(inputGenres.current);
    }, [])

    return (
      <div id='modal__checkboxes'>
      {
        initGenres.map(item => <label key={item} htmlFor={item}>
            <input onClick={() => onClickGenre(item)} type='checkbox' id={item} defaultChecked={inputGenres.current.includes(item) ? 'checked' : ''} />{item}</label>)
      }
      </div>
    )
  }

  return (
    <div className='modal__multiselect'>
      <div className='modal__selectBox' onClick={onClickCheckBox}>
        <select className='modal__input'>
          <option>Select Genre</option>
        </select>
        <div className='modal__overSelect'></div>
      </div>
      {
        checkBox && <CheckBoxModal />
      }
    </div>
  )
}
