import React, { useState, useEffect } from 'react';
import { SaucesList } from './SaucesList';
import { ItemsList } from './ItemsList';
import { Item } from './Item';

// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = (props) => {
  const [sauces, setSauces] = useState([]);
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  async function fetchSauces(){
    try {
      const response = await fetch(`${apiURL}/sauces`);
      const saucesData = await response.json();
      setSauces(saucesData);
    } catch (err) {
      console.log("Oh no an error! ", err)
    }
  }

  async function fetchItems(){
    try {
      const response = await fetch(`${apiURL}/items`);
      const itemsData = await response.json();
      setItems(itemsData);
    } catch (err) {
      console.log("Oh no an error!", err)
    }
  }

  useEffect(() => {
    fetchSauces();
    fetchItems();
  }, []);

 

  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);
  console.log(props)

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };
    
  return (
    <main>
      {/* <h1>Sauce Store</h1>
      <h2>All things 🔥</h2>
      <SaucesList sauces={sauces} /> */}

      <h1 onClick={handleClick}>Items Store</h1>
      {isOpen && 
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div>
        <h4>Click on an item to see more details</h4>        
          {items.map((item, index) => (
          <p key={index} onClick={() => handleItemClick(item)}>{item.name}</p>
          ))}
        </div>
        {selectedItem && 
        <div>
          <h4>Details:</h4>
          <p>{selectedItem.name}</p>
          <p>{selectedItem.category}</p>          
          <p>{selectedItem.description}</p>
          <p>${selectedItem.price}</p>
          <img src={selectedItem.image} alt={selectedItem.name} width='200px' height='200'/>
          {/* {Object.entries(selectedItem).map(([key, value]) => (
            <p key={key}>{key}: {value}</p>
          ))} */}
          </div>}
      </div>}
    </main>
  )
}