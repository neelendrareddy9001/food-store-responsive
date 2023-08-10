import React from 'react';

const NewProduct = () => {
  return (
    <div>
      <form>
        <label htmlFor='name'>Name</label>
        <input type={"text"} name='name' />

        <select>
          <option>Fruits</option>
          <option>Vegetable</option>
          <option>Icream</option>
          <option>Dosa</option>
          <option>Pizza</option>
        </select>
      </form>
    </div>
  )
}

export default NewProduct