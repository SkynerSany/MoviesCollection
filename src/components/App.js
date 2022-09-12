import React from 'react'
import Footer from './footer/Footer'
import Header from './header/Header'
import MoviesTable from './moviesTable/MoviesTable'
import SortingBox from './sortingBox/SortingBox'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <SortingBox />
        <MoviesTable />
      </main>
      <Footer />
    </>
  )
}
