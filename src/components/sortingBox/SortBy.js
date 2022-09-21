import React, { useState } from 'react'

export default function SortBy({ sortType, setSortType }) {
  const [sortBox, setSortBox] = useState(false);

  const sortTypes = {
    'release_date asc': 'release date ▲',
    'release_date desc': 'release date ▼',
    'title asc': 'title ▲',
    'title desc': 'title ▼',
    'vote_average asc': 'raiting ▲',
    'vote_average desc': 'raiting ▼',
  }

  const onClickSortType = (item) => {
    setSortType(item)
    setSortBox(false);
  }

  const CheckBoxModal = () => {
    return (
      <ul className='sortingBox__sortTypes'>
      {
        Object.keys(sortTypes)
          .map(item => <li 
            key={ item }
            onClick={() => onClickSortType(item)}
            className='sortingBox__sortType'
            data-type={ item }
            >{ sortTypes[item] }</li>
          )
      }
      </ul>
    )
  }

  return (
    <>
      <div onClick={() => setSortBox(true)} className="sortingBox__currentSortType">{ sortTypes[sortType] }</div>
      {
        sortBox && <CheckBoxModal />
      }
    </>
  )
}
