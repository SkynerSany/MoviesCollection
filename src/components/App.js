import React, {useState} from 'react'
import Modal from '../sharing/modal/Modal'
import './app.scss'
import Footer from './footer/Footer'
import Header from './header/Header'
import MoviesTable from './moviesTable/MoviesTable'
import SortingBox from './sortingBox/SortingBox'

export default function App() {
  const [category, setCategory] = useState('ALL');
  const [searchValue, setSearchValue] = useState('');
  const [modal, setModal] = useState(false);

  return (
    <>
      <Header setSearchValue={setSearchValue} />
      <main>
        <SortingBox setCategory={setCategory} category={category} />
        <MoviesTable category={category} searchValue={searchValue} setModal={setModal} />
      </main>
      {
        modal && <Modal setModal={setModal} />
      }
      <Footer />
    </>
  )
}
