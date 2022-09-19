import React, { useEffect, useState } from 'react'
import './moviesTable.scss'
import Movie from './movie/Movie'
import Pagination from './Pagination';

export default function MoviesTable({ category, searchValue, setModal, setMovieInfo, confirm, setConfirm }) {
  const [collection, setCollection] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [collectionCount, setCollectionCount] = useState(0);

  const [fromPage, setFromPage] = useState(0);
  const [toPage, setToPage] = useState(12);

  useEffect(() => {
    setConfirm(false);
    setLoading(true);
    fetch(`http://localhost:4000/movies?search=${searchValue}&searchBy=title&filter=${category === 'ALL' ? '' : category}&offset=${(currentPage - 1) * 6}&limit=6`)
      .then(response => response.json())
      .then(result => {
        setCollection(result.data);
        setCollectionCount(result.totalAmount);
      })
      .catch(err => console.error(err))
      .finally(() => {
        setLoading(false);
      });
  }, [category, searchValue, currentPage, confirm])

  useEffect(() => {
    setCurrentPage(1);
  }, [category])

  const MoviesCollection = () => {
    return (
      <>
        <p className="moviesCollection__found"><span>{collectionCount}</span> movies found</p>
        <div className="moviesCollection__collection">
          {
            loading || collection.map(item =>
              <Movie key={item.id}
                setModal={setModal}
                movieData={item}
                setMovieInfo={setMovieInfo}
                setConfirm={setConfirm}
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
      </>
    )
  }

  return (
    <section className="moviesCollection">
      {
        collectionCount ? <MoviesCollection /> : <h2 className='moviesCollection__notFound'>No Movie found</h2>
      }
    </section>
  )
}
