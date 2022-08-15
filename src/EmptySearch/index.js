import React from 'react'
import './EmptySearch.css'

export const EmptySearch = ( { searchText } ) => {
  return (
    <div className='empty-search'>There isn't results to <strong>{searchText}</strong></div>
  )
}
