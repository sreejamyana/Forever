import React from 'react'
import Filters from '../components/Filters'
import AllCollections from '../components/AllCollections'
import SearchBar from '../components/SearchBar'

const Collection = () => {
  return (
    <>
      <SearchBar />
      <div className='flex gap-12 mt-8'>
        <Filters />
        <AllCollections />
      </div>
    </>
  )
}

export default Collection