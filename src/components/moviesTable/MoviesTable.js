import React, { useEffect, useState } from 'react'
import Movie from './Movie'
import './moviesTable.scss'
import Pagination from './Pagination';

export default function MoviesTable({ category, searchValue }) {
  const [collection, setCollection] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [collectionCount, setCollectionCount] = useState(0);

  const [fromPage, setFromPage] = useState(0);
  const [toPage, setToPage] = useState(12);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:4000/movies?search=${searchValue}&searchBy=title&filter=${category === 'ALL' ? '' : category}&offset=${(currentPage - 1) * 6}&limit=6`)
      .then(response => response.json())
      .then(response => {
        setCollection(response.data);
        setCollectionCount(response.totalAmount);
        console.log(response);
      })
      .catch(err => console.error(err))
      .finally(() => {
        setLoading(false);
      });
  }, [category, searchValue, currentPage])

  useEffect(() => {
    setCurrentPage(1);
  }, [category])

  return (
    <section className="moviesCollection">
      <p className="moviesCollection__found"><span>{collectionCount}</span> movies found</p>
      <div className="moviesCollection__collection">
        {
          loading || collection.map(item =>
            <Movie key={item.title}
              poster={item.poster_path} 
              title={item.title} 
              genres={item.genres} 
              releaseDate={item.release_date.slice(0,4)} 
            />)
        }
      </div>
      <ul className='moviesCollection__paginationContainer'>
        {
          loading || <Pagination 
            count={collectionCount} 
            currentPage={currentPage} 
            setCurrentPage={setCurrentPage}
            fromPage={fromPage}
            setFromPage={setFromPage}
            toPage={toPage}
            setToPage={setToPage}
            />
        }
      </ul>
    </section>
  )
}
