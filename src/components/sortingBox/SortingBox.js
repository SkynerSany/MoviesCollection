import React from 'react'
import './sortingBox.scss'

export default function SortingBox() {
  return (
    <section className="sortingBox">
      <ul className="sortingBox__categoryes">
        <li className="sortingBox__category active">ALL</li>
        <li className="sortingBox__category">DOCUMENTARY</li>
        <li className="sortingBox__category">COMEDY</li>
        <li className="sortingBox__category">HORROR</li>
        <li className="sortingBox__category">CRIME</li>
      </ul>
      <div className="sortingBox__sort">
        <p className="sortingBox__sortTitle">SORT BY</p>
        <div className="sortingBox__currentSortBox">
          <span className="sortingBox__currentSortType">RELEASE DATE</span>
          <div className='sortingBox__btnArrow'>&#9660;</div>
        </div>
      </div>
    </section>
  )
}
