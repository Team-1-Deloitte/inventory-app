import React, { useState } from 'react'

const Form = ({ onSubmit, addItem, item }) => {
  const deleteItem = (itemToDelete) => {
    setItems(items.filter(item => item.id !== itemToDelete.id)) // This assumes each item has a unique id
  }
  const [newItem, setNewItem] = useState({ name: '', image: '', body: '' })
  const [formData, setFormData] = useState({
    name: '',
    price: 0,
    description: '',
    category: '',
    imageUrl: ''
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    console.log('Form data:', formData) // Log form data
    if (typeof onSubmit === 'function') {
      onSubmit(formData)
    } else {
      console.error('onSubmit is not a function:', onSubmit) // Log error if onSubmit is not a function
    }
  }

  return (
    <form className="form" onSubmit={handleFormSubmit} >
      <p>Name</p>
    <input
      name='name'
      type='text'
      value={formData.name}
      onChange= {(e)=>handleChange(e)}
    />

    <p>Price</p>
    <input
      name='price'
      type='number'
      value={formData.price}
      onChange= {(e)=>handleChange(e)}
    />

    <p>Description</p>
    <input
      name='description'
      type='text'
      value={formData.description}
      onChange= {(e)=>handleChange(e)}
    />

    <p>Category</p>
    <input
      name='category'
      type='text'
      value={formData.category}
      onChange= {(e)=>handleChange(e)}
    />
    <p>image url</p>
    <input
      name='imageUrl'
      type='text'
      value={formData.imageUrl}
      onChange= {(e)=>handleChange(e)}
    />
      {/* <button type='submit'>Submit</button> */}
      <button onClick={() => addItem(formData)}> Add Item </button>
      <button onClick={() => deleteItem(formData)}> Remove Item </button>
    </form>
  )
}

export default Form