import React, { useEffect, useState } from 'react'
import Movie from './Movie'
import './moviesTable.scss'

export default function MoviesTable({ category, searchValue }) {
  const [collection, setCollection] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:4000/movies?search=${searchValue}&searchBy=title&filter=${category === 'ALL' ? '' : category}&limit=6`)
      .then(response => response.json())
      .then(response => {setCollection(response.data); console.log(response)})
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, [category, searchValue])

  return (
    <section className="moviesCollection">
      <p className="moviesCollection__found"><span>{collection.length}</span> movies found</p>
      <div className="moviesCollection__collection">
        {
          loading || collection.map(item =>
            <Movie 
              poster={item.poster_path} 
              title={item.title} 
              genres={item.genres} 
              releaseDate={item.release_date.slice(0,4)} 
            />)
        }
      </div>
    </section>
  )
}
