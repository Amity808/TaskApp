import React from 'react'

const Header = ({ title }) => {
  return (
    <header style={{
        backgroundColor: 'skyblue',
        color: '#fffff'
    }}>
      <h1>{title}</h1>
    </header>
  )
}

export default Header
