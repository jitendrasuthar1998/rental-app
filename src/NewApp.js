import './App.css';
import { BiChevronDown, BiBath, BiArea, BiHeart } from 'react-icons/bi'
import { RiMailOpenFill } from 'react-icons/ri';
import { AiFillDownCircle } from 'react-icons/ai'
import { FaCalendarAlt } from 'react-icons/fa';
import {MdBed} from 'react-icons/md'
import propertyData from './property-data';
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



function NewApp() {
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
          <a href='manage'><li>Manage Property <span><BiChevronDown /></span></li></a>
          <a href='resources'><li>Resources <span><BiChevronDown /></span></li></a>
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
            <h3>New York, USA</h3>
          </div>
          <div className='border'></div>
          <div className='filter-option'>
            <p>When</p>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between", alignItems: "center"}}>
              <h3>Select Move-in Date</h3>
              <span style={{ height: 20, width: 20, borderRadius: 50, backgroundColor: 'blue', display: "flex", justifyContent: 'center', alignItems: "center", marginLeft:10 }}><FaCalendarAlt size={10} color="white" /></span>
            </div>
          </div>
          <div className='border'></div>
          <div className='filter-option'>
            <p>Location</p>
            <h3>New York, USA</h3>
          </div>
          <div className='border'></div>
          <div className='filter-option'>
            <p>Location</p>
            <h3>New York, USA</h3>
          </div>
          <div className='border'></div>
          <button className='button signup-btn' >Sign Up</button>
          
        </div>

        <div style={{margin:40, display:"flex",flexDirection:"row", justifyContent:"space-between", flexWrap:"wrap"}}>
          {
            propertyData.map((item) => <PropertyItem item={item}/>)
          }
        </div>
      </main>
    </div>
  );
}


const PropertyItem = ({item}) => {
  return(
    <div style={{border:"1px solid #e8e7f8", width:400, borderRadius:7, marginBottom:20}}>
            <img src={item.image} style={{height:250, width:"100%", objectFit:"cover", borderTopLeftRadius:7, borderTopRightRadius:7}} alt="property"/>
            <div style={{padding:10, backgroundColor:"white", borderBottomLeftRadius:7, borderBottomRightRadius:7}}>
              <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}><p><span className='item-price'>${item.rent}</span> /month</p><span style={{height:40, width:40, borderRadius:50, border:"1px solid #e8e7f8", justifyContent:"center", alignItems:"center", display:"flex"}}><BiHeart size={22} color="#7065f0"/></span></div>
              <h3>{item.name}</h3>
              <p>{item.location}</p>
              <div style={{border:"1px solid #e8e7f8", backgroundColor:"#e8e7f8", width:"100%"}}></div>
              <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between", borderBottomLeftRadius:7, borderBottomRightRadius:7,}}>
                <p className='attribute'><span style={{marginRight:5}}><MdBed/></span>{item.beds} beds</p>
                <p className='attribute'><span style={{marginRight:5}}><BiBath/></span>{item.bathrooms} bathrooms</p>
                <p className='attribute'><span style={{marginRight:5}}><BiArea/></span>{item.size} m2</p>
              </div>
            </div>
          </div>
  )
}

export default NewApp;