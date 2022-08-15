import React from 'react'
import './EmptySearch.css'

export const EmptySearch = ( { searchText } ) => {
  return (
    <div className='empty-search'>
      <p>
        No results for:<br/>
          <strong>{searchText}</strong>
      </p>
    </div>
  )
}
