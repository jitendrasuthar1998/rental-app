import React from 'react'
import PropertyItem from './PropertyItem'

function Dashboard({ properties }) {
    return (
        <div className='property-item-container'>
            {
                properties.map((item) => <PropertyItem key={item.name} item={item} />)
            }
        </div>
    )
}

export default Dashboard