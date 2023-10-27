import React from 'react'
import SortBy from './SortBy';
import './sortingBox.scss'

export default function SortingBox({ setCategory, category, sortType, setSortType }) {
  const categories = ['ALL', 'DOCUMENTARY', 'COMEDY', 'HORROR', 'CRIME']

  const onClickCategory = (e) => {
    setCategory(e.target.textContent);
  }

  return (
    <section className="sortingBox">
      <ul className="sortingBox__categoryes">
        {
          categories.map(item => 
            <li 
              key={item}
              onClick={onClickCategory} 
              className={`sortingBox__category ${ category === item ? 'active' : ''}`}
            >{ item }</li>)
        }
      </ul>
      <div className="sortingBox__sort">
        <p className="sortingBox__sortTitle">SORT BY</p>
        <div className="sortingBox__currentSortBox">
          <SortBy sortType={sortType} setSortType={setSortType} />
        </div>
      </div>
    </section>
  )
}
