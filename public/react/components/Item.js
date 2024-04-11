import React, { useState } from 'react'

export const Item = (props) => {
  const [newItem, setNewItem] = useState({ name: '', image: '', body: '' })

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/items', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newItem),
      })

      if (!response.ok) {
        throw new Error('failed to add the item')
      }

      const data = await response.json()
      console.log(data)
      setNewItem({ name: '', image: '', body: '' })
    } catch (error) {
      console.error(error)
    }
  }


//delete item request function here
const handleDelete = async (id) => {
  try{ 
    const response = await fetch(`/api/items/${id}`, {
      method: 'DELETE'
    });
  if (!response.ok) {
    throw new Error('failed to add the item');
  }
  
  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}

 };







return (
  <>
    <h3>{props.item.name}</h3>
    <img src={props.item.image} alt={props.item.name} />
    <button> Add Item </button>
  </>
  )
}


