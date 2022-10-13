import React, { useState } from 'react'
import "./selectItem.css";
import arrow from '../assets/images/arrow.png'
import facebook from '../assets/images/facebook.png'
import instagram from '../assets/images/instagram.png'
import pinterest from '../assets/images/pinterest.png'
import twitter from '../assets/images/twitter.png'
import youtube from '../assets/images/youtube.png'
import whatsapp from '../assets/images/whatsapp.png'


export default function SelectItem({ id }) {
    console.log('props at selectItem is == ', id)
    const [selectItem, setSelectedItem] = useState("Select social media");


    const handleSelect = (e) => {
        let list = document.getElementById(`list-${id}`);
        let arrowIcon = document.getElementById(`arrowIcon-${id}`);
        console.log(e.target.innerText)
        setSelectedItem(e.target.innerText)
        list.classList.toggle("hide");
        arrowIcon.classList.toggle("rotate");
    }

    const handleSelectField = () => {
        let list = document.getElementById(`list-${id}`);
        let arrowIcon = document.getElementById(`arrowIcon-${id}`);
        list.classList.toggle("hide");
        arrowIcon.classList.toggle("rotate");
    }


    return (

        <div className='selector'>
            <div id={`selectField-${id}`} onClick={handleSelectField} className="selectField">
                <p>{selectItem}</p>
                <img src={arrow} alt="arrow" id={`arrowIcon-${id}`} />
            </div>

            <ul id={`list-${id}`} className='list hide'>
                <li onClick={handleSelect} className='options'><img src={facebook} alt="facebook" /><p>Facebook</p></li>
                <li onClick={handleSelect} className='options'><img src={youtube} alt="youtube" /><p>Youtube</p></li>
                <li onClick={handleSelect} className='options'><img src={instagram} alt="instagram" /><p>Instagram</p></li>
                <li onClick={handleSelect} className='options'><img src={twitter} alt="twitter" /><p>Twitter</p></li>
                <li onClick={handleSelect} className='options'><img src={whatsapp} alt="whatsapp" /><p>Whatsapp</p></li>
                <li onClick={handleSelect} className='options'><img src={pinterest} alt="pinterest" /><p>Pinterest</p></li>
            </ul>



        </div>
    )
}
