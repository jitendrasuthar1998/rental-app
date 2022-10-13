import React from 'react';
import { BiBath, BiArea, BiHeart } from 'react-icons/bi'
import {RiHeartFill} from 'react-icons/ri';

import { MdBed } from 'react-icons/md';
import './propertyItem.css';

import { useDispatch, useSelector } from 'react-redux';

import { addFavorite, deleteFavorite } from '../redux/favoriteSlice';


const PropertyItem = ({ item }) => {

  const dispatch = useDispatch();

  const favorites = useSelector((state) => state.favorites);

  const handleSaveToFavorite = (item) => {
    if (favorites.some((x) => x.name === item.name)) {
      dispatch(deleteFavorite({
        name: item.name
      }))
    } else {
      dispatch(addFavorite(item));
    }


  }


  return (
    <div className='property-item'>
      <img src={item.image} alt="property" />
      <div className='details-container'>
        <div className='price-like-container'>
          <p className='item-price-para'><span className='item-price'>${item.rent}</span> /month</p>
          <span className='heart-container' onClick={() => handleSaveToFavorite(item)}>
            {
              favorites.some((x) => x.name === item.name) ? (
                <RiHeartFill size={22} color="#7065f0" />
              ) : (
                <BiHeart size={22} color="#7065f0" />
              )
            }
          </span>
        </div>
        <h3 id="property-name">{item.name}</h3>
        <p id="property-location">{item.location}</p>
        <div className='property-item-border'></div>
        <div className='property-attribute'>
          <p className='attribute'><span className='attribute-icon'><MdBed /></span>{item.beds} beds</p>
          <p className='attribute'><span className='attribute-icon'><BiBath /></span>{item.bathrooms} bathrooms</p>
          <p className='attribute'><span className='attribute-icon'><BiArea /></span>{item.size} m<span id="super">2</span></p>
        </div>
      </div>
    </div>
  )
}


export default PropertyItem;