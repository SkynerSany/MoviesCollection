import React, {useState} from 'react'
import './app.scss'
import Footer from './footer/Footer'
import Header from './header/Header'
import MoviesTable from './moviesTable/MoviesTable'
import SortingBox from './sortingBox/SortingBox'

export default function App() {
  const [category, setCategory] = useState('ALL');
  const [searchValue, setSearchValue] = useState('');

  return (
    <>
      <Header setSearchValue={setSearchValue} />
      <main>
        <SortingBox setCategory={setCategory} category={category}/>
        <MoviesTable category={category} searchValue={searchValue} />
      </main>
      <Footer />
    </>
  )
}
