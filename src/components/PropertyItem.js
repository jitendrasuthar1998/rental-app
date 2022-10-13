import React from 'react';
import { BiChevronDown, BiBath, BiArea, BiHeart } from 'react-icons/bi'
import { RiMailOpenFill } from 'react-icons/ri';
import { AiFillDownCircle } from 'react-icons/ai'
import { FaCalendarAlt } from 'react-icons/fa';
import { MdBed } from 'react-icons/md';
import './propertyItem.css';

const PropertyItem = ({ item }) => {
  return (
    <div className='property-item'>
      <img src={item.image} alt="property" />
      <div className='details-container'>
        <div className='price-like-container'>
          <p className='item-price-para'><span className='item-price'>${item.rent}</span> /month</p>
          <span className='heart-container'>
            <BiHeart size={22} color="#7065f0" />
          </span>
        </div>
        <h3 id="property-name">{item.name}</h3>
        <p id="property-location">{item.location}</p>
        <div className='property-item-border'></div>
        <div className='property-attribute'>
          <p className='attribute'><span className='attribute-icon'><MdBed /></span>{item.beds} beds</p>
          <p className='attribute'><span className='attribute-icon'><BiBath /></span>{item.bathrooms} bathrooms</p>
          <p className='attribute'><span className='attribute-icon'><BiArea /></span>{item.size} m2</p>
        </div>
      </div>
    </div>
  )
}


export default PropertyItem;