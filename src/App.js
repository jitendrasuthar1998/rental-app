import React, {useState} from 'react'
import SelectItem from './components/SelectItem'
import RentalApp from './RentalApp';

export default function App() {

  const [selectItem, setSelectedItem] = useState("Select social media");
  

  // return (
  //   <div className='hero'>
  //     <SelectItem id="first"/>
  //     <SelectItem id="second"/>
  //   </div>
  // )

  return(
    <RentalApp/>
  )
}
