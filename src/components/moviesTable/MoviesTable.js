import React, { useEffect, useState } from 'react'
import Movie from './Movie'
import './moviesTable.scss'

export default function MoviesTable() {
  const [collection, setCollection] = useState({});
  // const options = {
  //   method: 'GET',
  //   headers: {
  //     'X-RapidAPI-Key': '7663806e86msh3508ab01aa95d31p19e16cjsn12d89b251ba8',
  //     'X-RapidAPI-Host': 'utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com'
  //   }
  // };

  // useEffect(() => {
  //   fetch('https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=bojack&country=uk', options)
  //     .then(response => response.json())
  //     .then(response => console.log(response))
  //     .catch(err => console.error(err));
  // }, [])

  return (
    <section className="moviesCollection">
      <p className="moviesCollection__found"><span>39</span> movies found</p>
      <div className="moviesCollection__collection">
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
      </div>
    </section>
  )
}
