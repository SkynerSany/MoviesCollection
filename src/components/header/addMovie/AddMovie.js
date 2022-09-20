import React, { useRef, useState } from 'react'
import CheckBox from '../../../sharing/CheckBox';
import AddConfirm from './AddConfirm';

export default function AddMovie({ setModal }) {
  const [genres, setGenres] = useState([]);
  const form = useRef();

  const addFilmToDB = (movie) => {
    fetch(`http://localhost:4000/movies`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(movie)
      })
      .then(response => response.json())
      .then(result => result.messages ? alert(result.messages.join('\n')) : setModal(<AddConfirm setModal={setModal} />))
      .catch(err => console.error(err))
  }

  const onClickSubmit = (e) => {
    const formData = Array.from(form.current.elements);
    const movie = {
      "title": formData[0].value,
      "tagline": "Here's to the fools who dream.",
      "vote_average": 7.9,
      "vote_count": 6782,
      "release_date": formData[1].value,
      "poster_path": formData[2].value,
      "overview": formData[4].value,
      "budget": 30000000,
      "revenue": 445435700,
      "runtime": +formData[5].value,
      "genres": genres,
    };

    if (Object.values(movie).includes('')) return;
  
    e.preventDefault();
    addFilmToDB(movie);
  }

  const onClickReset = () => {
    Array.from(form.current.elements).forEach(item => {
      if (item.tagName !== 'SELECT') item.value = '';
    });
  }

  return (
    <>
      <h1 className='modal__title'>add movie</h1>
      <form ref={form} id='modal__form' action='' className='modal__form'>
        <div className='modal__inputContainer'>
          <label htmlFor='title' className='modal__label'>title</label>
          <input id='title' placeholder='Title here' type='text' className='modal__input' required />
        </div>
        <div className='modal__inputContainer'>
          <label htmlFor='releaseDate' className='modal__label'>release date</label>
          <input id='releaseDate' type='date' className='modal__input' required />
        </div>
        <div className='modal__inputContainer'>
          <label htmlFor='posterUrl' className='modal__label'>poster url</label>
          <input id='posterUrl' placeholder='Poster URL here' type='text' className='modal__input' required />
        </div>
        <div className='modal__inputContainer'>
          <label htmlFor='genre' className='modal__label'>genre</label>
          <CheckBox setGenres={setGenres} />
        </div>
        <div className='modal__inputContainer'>
          <label htmlFor='overview' className='modal__label'>overview</label>
          <input id='overview'placeholder='Overview here' type='text' className='modal__input' required />
        </div>
        <div className='modal__inputContainer'>
          <label htmlFor='runtime' className='modal__label'>runtime</label>
          <input id='runtime' placeholder='Runtime here' type='text' className='modal__input' required />
        </div>
      </form>
      <div className='modal__containerBtns'>
        <button onClick={onClickReset} className='modal__btnReset'>RESET</button>
        <button onClick={onClickSubmit} className='modal__btnConfirm' form='modal__form'>submit</button>
      </div>
    </>
  )
}
