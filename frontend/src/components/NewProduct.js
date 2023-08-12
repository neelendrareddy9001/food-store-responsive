import React from 'react';

//import React-icons
import {AiOutlineCloudUpload} from 'react-icons/ai';

const NewProduct = () => {
  return (
    <div className='p-4'>
      <form className='m-auto w-full max-w-md shadow p-3 flex flex-col bg-white'>
        <label htmlFor='name'>Name</label>
        <input type={"text"} name='name'className='bg-slate-200 p-1 my-1' />

        <label htmlFor='categor'>Category</label>
        <select className='bg-slate-200 p-1 my-1' id='category'>
          <option>Fruits</option>
          <option>Vegetable</option>
          <option>Icream</option>
          <option>Dosa</option>
          <option>Pizza</option>
        </select>

        <div className='h-40 w-full bg-slate-300 rounded my-3 flex items-center justify-center'>
          <span className='text-5xl'><AiOutlineCloudUpload /></span>
        </div>
      </form>
    </div>
  )
}

export default NewProduct