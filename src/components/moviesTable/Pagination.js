import React, { useState } from 'react'

export default function Pagination({ count, currentPage, setCurrentPage, fromPage, setFromPage, toPage, setToPage}) {

  const onChangePage = (from, to) => {
    setToPage(to);
    setFromPage(from);
  }

  const onClickPage = (e) => {
    if (+e.target.textContent === 1) {
      onChangePage(0, 12);
    } else if (+e.target.textContent === Math.ceil(count / 6)) {
      onChangePage(Math.ceil(count / 6) - 3, Math.ceil(count / 6))
    }
    if (+e.target.textContent >= 12) {
      onChangePage(+e.target.textContent - 10, +e.target.textContent + 1)
    }
    setCurrentPage(+e.target.textContent);
  }

  return (
    <>
    {
      [...Array(Math.ceil(count / 6))].map((_, i) => {
        if ((i >= fromPage || i === 0) && i < toPage || i > Math.ceil(count / 6) - 2) {
          return (<li onClick={onClickPage} key={i} className={`moviesCollection__page ${currentPage === i + 1 ? 'active' : ''}`}>{ i + 1 }</li>) 
        }
        if (i === toPage + 2 || i === fromPage - 1) {
          return (<li key={i} className='moviesCollection__dot'><span>...</span></li>)
        }
      })
    }
    </>
  )
}
