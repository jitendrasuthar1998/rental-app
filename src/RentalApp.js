import './App.css';
import Navbar from './components/Navbar';
import {Route, Routes } from 'react-router-dom';
import Favorites from './screens/Favorites';
import Main from './screens/Main';
function RentalApp() {

  return (
    <div className="App">
      <Navbar/>

      <Routes >
        <Route path='/' element={<Main/>}/>
        <Route path="/favorites" element={<Favorites/>} />
      </Routes>
    </div>
  );
}




export default RentalApp;
