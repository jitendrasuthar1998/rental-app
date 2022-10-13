import React from 'react'
import { useSelector } from 'react-redux'
import Dashboard from './components/Dashboard';

function Favorites() {


    const favorites = useSelector((state) => state.favorites);


  return (
    <div>
        <h2>Favorites</h2>
        <Dashboard properties={favorites}/>

    </div>
  )
}

export default Favorites