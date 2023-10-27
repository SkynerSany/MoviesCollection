import React, { useCallback, useEffect, useMemo, useState } from 'react'
import './moviesTable.scss'
import Movie from './movie/Movie'
import Pagination from './Pagination';

export default function MoviesTable({ category, searchValue, setModal, setMovieInfo, confirm, setConfirm, sortType }) {
  const [collection, setCollection] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [collectionCount, setCollectionCount] = useState(0);

  const [fromPage, setFromPage] = useState(0);
  const [toPage, setToPage] = useState(12);

  useEffect(() => {
    const currentSortType = sortType.split(' ');
    setConfirm(false);
    setLoading(true);
    fetch(`https://maroon-snail-coat.cyclic.app/movies-api/movies?sortBy=${currentSortType[0]}&sortOrder=${currentSortType[1]}&search=${searchValue}&searchBy=title&filter=${category === 'ALL' ? '' : category}&offset=${(currentPage - 1) * 6}&limit=6`)
      .then(response => response.json())
      .then(result => {
        setCollection(result.data);
        setCollectionCount(result.totalAmount);
      })
      .catch(err => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }, [category, searchValue, currentPage, confirm, sortType])

  useEffect(() => {
    setCurrentPage(1);
  }, [category])

  const MoviesCollection = useCallback(() => {
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
  }, [loading])

  return (
    <section className="moviesCollection">
      {
        collectionCount ? <MoviesCollection /> : <h2 className='moviesCollection__notFound'>No Movie found</h2>
      }
    </section>
  )
}
