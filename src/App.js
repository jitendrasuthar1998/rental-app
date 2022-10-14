import React, {useState} from 'react'
import SelectItem from './components/SelectItem'
import RentalApp from './RentalApp';

export default function App() {

  const [selectItem, setSelectedItem] = useState("Select social media");
  
  return(
    <RentalApp/>
  )
}
