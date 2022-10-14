import React, {useState} from 'react'
import Dashboard from '../components/Dashboard'
import propertyData from '../property-data'
import { BiChevronDown } from 'react-icons/bi'

const propertyTypes = ["", "Houses", "Apartment", "Villa"]
const moveIns = ["", "Immediate", "In 1 day", "In 2-5 days", "In next week"]
const cities = ["", "California", "New York", "Texas", "Florida"]

const priceRanges = [
  { min: 500, max: 1500 },
  { min: 1500, max: 2500 },
  { min: 2500, max: 3500 },
  { min: 3500, max: 4500 },
  { min: 4500, max: 5500 },
  { min: 5500, max: 6500 },
]

function Main() {

  const [city, setCity] = useState("");
  const [moveIn, setMoveIn] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [price, setPrice] = useState({ min: 0, max: 0 });
  const [properties, setProperties] = useState(propertyData)


  const [showCityOptions, setShowCityOptions] = useState(false);
  const [showMoveInOptions, setShowMoveInOptions] = useState(false);
  const [showPropertyTypes, setShowPropertyTypes] = useState(false);
  const [showPriceOptions, setShowPriceOptions] = useState(false);



  const handleCitySelect = (e) => {
    console.log(e.target.innerText)
    setCity(e.target.innerText);
  }

  const handleMoveInSelect = (e) => {
    console.log(e.target.innerText)
    setMoveIn(e.target.innerText)
  }

  const handlePropertyTypeSelect = (e) => {
    console.log(e.target.innerText)
    setPropertyType(e.target.innerText)
  }

  const handlePriceSelect = (minimum, maximum) => {
    setPrice({
      min: minimum, max: maximum
    })


  }

  const handleSearch = () => {

    if(!city && !moveIn && !price.max && !propertyType){
        alert("Please select a filter of your choice.");
    }

    if (city && !moveIn && !price.max && !propertyType) {
      let result = propertyData.filter((item) => item.city.toLowerCase() === city.toLowerCase());
      console.log("result is == ", result);
      console.log("only city selected")
      if (result.length) {
        setProperties(result);
      } else {
        setProperties(propertyData);
        alert("such property not available. so change your options.");
      }
    }

    if (!city && moveIn && !price.max && !propertyType) {
      let result = propertyData.filter((item) => {
        return item.moveIn.toLowerCase() === moveIn.toLowerCase()
      })
      console.log("only moveIn = ", result)
      console.log("only moveIn selected")
      if (result.length) {
        setProperties(result);
      } else {
        setProperties(propertyData);
        alert("such property not available. so change your options.");
      }
    }

    if (!city && !moveIn && propertyType && !price.min && !price.max) {
      let result = propertyData.filter((item) => {
        return item.propertyType.toLowerCase() === propertyType.toLowerCase()
      })
      console.log("only moveIn = ", result)
      console.log("only propertyType selected");
      if (result.length) {
        setProperties(result);
      } else {
        setProperties(propertyData);
        alert("such property not available. so change your options.");
      }
    }

    if (!city && !moveIn && !propertyType && price.min && price.max) {
      let result = propertyData.filter((item) => {
        return price.min < item.rent && item.rent < price.max
      })
      console.log("result at handlePriceSelect is == ", result);
      console.log("only price min and max selected");
      if (result.length) {
        setProperties(result);
      } else {
        setProperties(propertyData);
        alert("such property not available. so change your options.");
      }
    }

    if (city && moveIn && !propertyType && !price.min && !price.max) {
        let result = propertyData.filter((item) => {
          return item.city.toLowerCase() === city.toLowerCase() && item.moveIn.toLowerCase() === moveIn.toLowerCase()
        })
        console.log("result when city and moveIn selected", result);
        if (result.length) {
          setProperties(result);
        } else {
          setProperties(propertyData);
          alert("such property not available. so change your options.");
        }
      }
  
    

    if (city && moveIn && propertyType && !price.min && !price.max) {
      let result = propertyData.filter((item) => {
        return item.city.toLowerCase() === city.toLowerCase() && item.moveIn.toLowerCase() === moveIn.toLowerCase() && item.propertyType.toLowerCase() === propertyType.toLowerCase()
      })
      console.log("result when city, moveIn and propertyType selected", result);
      if (result.length) {
        setProperties(result);
      } else {
        setProperties(propertyData);
        alert("such property not available. so change your options.");
      }
    }


    if (city && !moveIn && propertyData && price.min && price.max) {
      let result = propertyData.filter((item) => {
        return item.city.toLowerCase() === city.toLowerCase() && price.min < item.rent && item.rent < price.max && item.propertyType.toLowerCase() === propertyType.toLowerCase()
      })
      console.log("result when city, price and propertyType selected", result);
      if (result.length) {
        setProperties(result);
      } else {
        setProperties(propertyData);
        alert("such property not available. so change your options.");
      }
    }


    if (city && moveIn && propertyData && price.min && price.max) {
      let result = propertyData.filter((item) => {
        return item.city.toLowerCase() === city.toLowerCase() && item.moveIn.toLowerCase() === moveIn.toLowerCase() && price.min < item.rent && item.rent < price.max && item.propertyType.toLowerCase() === propertyType.toLowerCase()
      })
      console.log("result when city, moveIn, price and propertyType selected", result);
      if (result.length) {
        setProperties(result);
      } else {
        setProperties(propertyData);
        alert("such property not available. so change your options.");
      }
    }

    if(city && propertyType && !moveIn && !price.max){
        console.log("only city and propertyType selected");
        let result = propertyData.filter((item) => {
            return item.city.toLowerCase() === city.toLowerCase() && item.propertyType.toLowerCase() === propertyType.toLowerCase()
          })
          console.log("result when city, propertyType selected", result);
          if (result.length) {
            setProperties(result);
          } else {
            setProperties(propertyData);
            alert("such property not available. so change your options.");
          }
    }
  }


  return (
    <main className='main-section'>
    <div style={{ paddingTop: "30px", paddingBottom: "20px", display: "flex", justifyContent: "space-between" }}>
      <h1>Search properties to rent</h1>
      <div style={{ height: 40, paddingLeft: 40, paddingRight: 40, display: "flex", justifyContent: "center", alignItems: "center", border: "2px solid #e2e0f7", borderRadius: 7, borderColor: "#e2e0f7" }}>
        Search with search bar <span style={{ marginLeft: 20, height: 20, width: 20, display: "flex", justifyContent: "center", alignItems: "center", borderRadius: 50, backgroundColor: "#f0effb" }}><BiChevronDown size={16} /></span>
      </div>
    </div>

    <div className='filter-panel'>
      <div className='filter-option' onClick={() => setShowCityOptions(!showCityOptions)}>
        <p>Location</p>
        <h3>{city ? city + ", USA" : "Select a city"}</h3>
        {
          showCityOptions && (
            <ul id='location-options' className='list-options'>
              {
                cities.map((item, index) =>
                  <li className={city === item ? "selected" : ""} onClick={handleCitySelect} key={index}>{item}</li>)
              }
            </ul>
          )
        }
      </div>
      <div className='border'></div>
      <div className='filter-option' onClick={() => setShowMoveInOptions(!showMoveInOptions)}>
        <p>When</p>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", alignItems: "center" }}>
          <h3>{moveIn ? moveIn : "Select move in"}</h3>
        </div>
        {
          showMoveInOptions && (
            <ul className='list-options'>
              {moveIns.map((item, index) =>
                <li className={moveIn === item && "selected"} onClick={handleMoveInSelect} key={index}>{item}</li>)}
            </ul>
          )
        }
      </div>
      <div className='border'></div>
      <div className='filter-option' onClick={() => setShowPriceOptions(!showPriceOptions)}>
        <p>Price</p>
        <h3>{price.min && price.max ? `$${price.min}-$${price.max}` : "Select a price range"}</h3>
        {
          showPriceOptions && (
            <ul className='list-options'>
              <li className={price.min === "" ? "selected" : ""} onClick={() => handlePriceSelect("", "")}>{" "}</li>
              {priceRanges.map((item) =>
              
                item.min && item.max ? (
                  <li key={item.min} className={price.min === item.min ? "selected" : ""} onClick={() => handlePriceSelect(item.min, item.max)}>${item.min}-${item.max}</li>
                ) :
                  <li>{""}</li>
              )}
            </ul>
          )
        }
      </div>
      <div className='border'></div>
      <div className='filter-option' onClick={() => setShowPropertyTypes(!showPropertyTypes)}>
        <p>Property Type</p>
        <h3>{propertyType ? propertyType : "Select a property type"}</h3>
        {
          showPropertyTypes && (
            <ul className='list-options'>
              {propertyTypes.map((item, index) =>
                <li className={propertyType === item && "selected"} onClick={handlePropertyTypeSelect} key={index}>{item}</li>)}
            </ul>
          )
        }
      </div>
      <div className='border'></div>
      <button className='button signup-btn' onClick={handleSearch}>Search</button>

    </div>

    <Dashboard properties={properties} />
  </main>
  )
}

export default Main;