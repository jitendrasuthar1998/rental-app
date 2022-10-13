import './App.css';
import { BiChevronDown, BiBath, BiArea, BiHeart } from 'react-icons/bi'
import { RiMailOpenFill } from 'react-icons/ri';
import { AiFillDownCircle } from 'react-icons/ai'
import { FaCalendarAlt } from 'react-icons/fa';
import {MdBed} from 'react-icons/md'
import propertyData from './property-data';

import PropertyItem from './components/PropertyItem';
import { useState } from 'react';

const property = {
  rent:500,
  image:"https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  popular: false,
  location:"394 Manchester Blvd, Fl",
  propertyType:"houses",
  moveIn:"immediate",
  beds:4,
  bathrooms: 2,
  size:"5x6",
  name:"Palm Harbor",
  city:"Florida",
  state: "USA"
}

const propertyTypes = ["","Houses", "Apartment", "Villa"]
const moveIns = ["","Immediate", "In 1 day", "In 2-5 days", "In next week"]
const cities = ["","California", "New York", "Texas", "Florida"]
const prices = ["","$500-$1500", "$1500-$2500", "$2500-$3500", "$3500-$4500", "$4500-$6500"]
function RentalApp() {


  const [city, setCity] = useState("");
  const [moveIn, setMoveIn] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [price, setPrice] = useState("");
  const [properties, setProperties] = useState(propertyData)
  const handleCitySelect = (e) => {
    console.log(e.target.innerText)
    setCity(e.target.innerText);
    let locationOptions = document.getElementById("location-options");
  }

  const handleMoveInSelect = (e) => {
    console.log(e.target.innerText)
    setMoveIn(e.target.innerText)
  }

  const handlePropertyTypeSelect = (e) => {
    console.log(e.target.innerText)
    setPropertyType(e.target.innerText)
  }

  const handlePriceSelect = (e) => {
    setPrice(e.target.innerText);
  }

  const handleSearch = () => {
    if(city && !moveIn){
      let result = propertyData.filter((item) => item.city.toLowerCase() === city.toLowerCase());
      console.log("result is == ", result);
      setProperties(result);
    }

    if(!city && moveIn){
      let result = propertyData.filter((item) => {
        return item.moveIn.toLowerCase() === moveIn.toLowerCase()
         })
      console.log("only moveIn = ", result)
      setProperties(result);
    }

    if(!city && !moveIn && propertyType){
      let result = propertyData.filter((item) => {
        return item.propertyType.toLowerCase() === propertyType.toLowerCase()
         })
      console.log("only moveIn = ", result)
      setProperties(result);
    }

    if(city && moveIn && propertyData){
      let result = propertyData.filter((item) => {
     return item.city.toLowerCase() === city.toLowerCase() && item.moveIn.toLowerCase() === moveIn.toLowerCase() && item.propertyType.toLowerCase() === propertyType.toLowerCase()
      })
      console.log("result when city and moveIn and propertyType selected", result);
      setProperties(result);
    }
  }
  


  return (
    <div className="App">
      <nav>
        <div className='logo'>
          <p>
            <span><RiMailOpenFill color='#7065f0' size={25} /></span>
            <h1>Estray</h1>
          </p>
        </div>
        <ul className="nav-options">
          <a href='rent'><li>Rent</li></a>
          <a href='buy'><li>Buy</li></a>
          <a href='sell'><li>Sell</li></a>
          <a href='manage'><li>Manage Property <span className='down-icon'><BiChevronDown /></span></li></a>
          <a href='resources'><li>Resources <span className='down-icon'><BiChevronDown /></span></li></a>
        </ul>
        <div className='btn-container'>
          <button className='button login-btn'>Login</button>
          <button className='button signup-btn' >Sign Up</button>
        </div>
      </nav>
      <main style={{ paddingRight: "10%", paddingLeft: "10%", backgroundColor:"#f6f7fc" }}>
        <div style={{ paddingTop: "30px", paddingBottom: "20px", display: "flex", justifyContent: "space-between" }}>
          <h1>Search properties to rent</h1>
          <div style={{ height: 40, paddingLeft: 40, paddingRight: 40, display: "flex", justifyContent: "center", alignItems: "center", border: "2px solid #e2e0f7", borderRadius: 7, borderColor: "#e2e0f7" }}>
            Search with search bar <span style={{ marginLeft: 20, height: 20, width: 20, display: "flex", justifyContent: "center", alignItems: "center", borderRadius: 50, backgroundColor: "#f0effb" }}><BiChevronDown size={16} /></span>
          </div>
        </div>

        <div className='filter-panel' style={{ borderWidth: 1, display: "flex", flexDirection: "row" }}>
          <div className='filter-option'>
            <p>Location</p>
            <h3>{city}, USA</h3>
            <ul id='location-options' className='list-options'>
              {
                cities.map((item, index) => <li onClick={handleCitySelect} key={index}>{item}</li>)
              }                
            </ul>
          </div>
          <div className='border'></div>
          <div className='filter-option'>
            <p>When</p>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", alignItems: "center"}}>
              <h3>{moveIn}</h3>
              {/* <p>{moveIn}</p> */}
              {/* <span style={{ height: 20, width: 20, borderRadius: 50, backgroundColor: 'blue', display: "flex", justifyContent: 'center', alignItems: "center", marginLeft:10 }}><FaCalendarAlt size={10} color="white" /></span>
              <span style={{height:20, width: 40, color:"black"}}>{moveIn}</span> */}
            </div>
            <ul className='list-options'>
                {moveIns.map((item, index) => <li onClick={handleMoveInSelect} key={index}>{item}</li>)}
            </ul>
          </div>
          <div className='border'></div>
          <div className='filter-option'>
            <p>Price</p>
            <h3>{price}</h3>
            <ul className='list-options'>
                {prices.map((item) => <li onClick={handlePriceSelect}>{item}</li>)}
            </ul>
          </div>
          <div className='border'></div>
          <div className='filter-option'>
            <p>Property Type</p>
            <h3>{propertyType}</h3>
            <ul className='list-options'>
                {propertyTypes.map((item, index) => <li onClick={handlePropertyTypeSelect} key={index}>{item}</li>)}
            </ul>
          </div>
          <div className='border'></div>
          <button className='button signup-btn' onClick={handleSearch}>Search</button>
          
        </div>

        <div style={{margin:40, display:"flex",flexDirection:"row", justifyContent:"space-between", flexWrap:"wrap"}}>
          {
            properties.map((item) => <PropertyItem item={item}/>)
          }
        </div>
      </main>
    </div>
  );
}




export default RentalApp;
