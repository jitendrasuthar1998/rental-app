import React from 'react'
import { useSelector } from 'react-redux'
import Dashboard from '../components/Dashboard';
import './favorites.css'
function Favorites() {

  const favorites = useSelector((state) => state.favorites);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Favorites</h1>

      {
        favorites.length > 0 &&
        <h2 style={{ textAlign: "center" }}>Total properties is favorites are = {favorites.length}</h2>
      }
      {
        favorites.length ? <Dashboard properties={favorites} /> : (
          <div className='warning'>
            <h2>Don't have any favorite property selected</h2>
          </div>

        )
      }

    </div>
  )
}

export default Favorites