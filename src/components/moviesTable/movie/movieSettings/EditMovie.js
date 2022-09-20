import React, { useState, useRef, useEffect } from 'react'
import CheckBox from '../../../../sharing/CheckBox';

export default function EditMovie({ movieData, setModal, setConfirm }) {
  const [genres, setGenres] = useState(movieData.genres);
  const form = useRef();

  useEffect(() => {
    form.current.elements[1].focus();
  }, [])

  const addFilmToDB = (movie) => {
    fetch(`http://localhost:4000/movies`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(movie)
      })
      .then(response => response.json())
      .then(result => {
        if (result.messages) {
          alert(result.messages.join('\n'))
        } else {
          setConfirm(true);
          setModal(false);
        } 
      })
      .catch(err => console.error(err))
  }

  const onClickSave = (e) => {
    const formData = Array.from(form.current.elements);
    const movie = {
      "title": formData[1].value,
      "tagline": "Here's to the fools who dream.",
      "vote_average": 7.9,
      "vote_count": 6782,
      "release_date": formData[2].value,
      "poster_path": formData[3].value,
      "overview": formData[5].value,
      "budget": 30000000,
      "revenue": 445435700,
      "runtime": +formData[6].value,
      "genres": genres,
      "id": +formData[0].value,
    };

    if (Object.values(movie).includes('')) return;
  
    e.preventDefault();
    addFilmToDB(movie);
  }

  const onClickReset = () => {
    const formInputs = form.current.elements;
    formInputs[0].value = movieData.id;
    formInputs[1].value = movieData.title;
    formInputs[2].value = movieData.release_date;
    formInputs[3].value = movieData.poster_path;
    formInputs[5].value = movieData.overview;
    formInputs[6].value = movieData.runtime;
  }

  return (
    <>
      <h1 className='modal__title'>EDIT MOVIE</h1>
      <form ref={form} id='modal__form' action='' className='modal__form'>
        <div className='modal__inputContainer'>
          <label htmlFor='movieId' className='modal__label'>movie id</label>
          <input id='movieId' type='text' className='modal__input' defaultValue={movieData.id} disabled />
        </div>
        <div className='modal__inputContainer'>
          <label htmlFor='title' className='modal__label'>title</label>
          <input id='title' type='text' className='modal__input' defaultValue={movieData.title} />
        </div>
        <div className='modal__inputContainer'>
          <label htmlFor='releaseDate' className='modal__label'>release date</label>
          <input id='releaseDate' type='text' className='modal__input' defaultValue={movieData.release_date} />
        </div>
        <div className='modal__inputContainer'>
          <label htmlFor='posterUrl' className='modal__label'>poster url</label>
          <input id='posterUrl' type='text' className='modal__input' defaultValue={movieData.poster_path} />
        </div>
        <div className='modal__inputContainer'>
          <label htmlFor='genre' className='modal__label'>genre</label>
          <CheckBox selectedGenre={genres} setGenres={setGenres} />
        </div>
        <div className='modal__inputContainer'>
          <label htmlFor='overview' className='modal__label'>overview</label>
          <input id='overview' type='text' className='modal__input' defaultValue={movieData.overview} />
        </div>
        <div className='modal__inputContainer'>
          <label htmlFor='runtime' className='modal__label'>runtime</label>
          <input id='runtime' type='text' className='modal__input' defaultValue={movieData.runtime} />
        </div>
      </form>
      <div className='modal__containerBtns'>
        <button onClick={onClickReset} className='modal__btnReset'>RESET</button>
        <button onClick={onClickSave} className='modal__btnConfirm' form='modal__form'>SAVE</button>
      </div>
    </>
  )
}
