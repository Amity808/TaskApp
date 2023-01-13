import React from 'react'

const SearchTask = ({ search, setSearch }) => {
  return (
    <form className='searchTask' onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="search">Search</label>
      <input type="text" name="search" id="search" 
      role='searchbox'
      placeholder='Search Task'
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  )
}

export default SearchTask
