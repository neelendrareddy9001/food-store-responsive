import React, { useState } from 'react';

import { ImageTobase64 } from '../utlity/ImageTobase64';

//import React-icons
import {AiOutlineCloudUpload} from 'react-icons/ai';
import { json } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const NewProduct = () => {

  const [data, setData] = useState({
      name : " ",
      category : " ",
      image : " ",
      price : "" ,
      description : " "
  });

  const handleChange = (e) => {
      const {name, value} = e.target

      setData((preve) => {
        return {
          ...preve,
          [name] : value
        }
      })
  }

  const uploadImage = async (e) => {
      const data = await ImageTobase64(e.target.files[0])
      // console.log(data);

      setData((preve) => {
        return {
          ...preve,
          image : data
        }
      })
  }

  const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(data);

      const {name, image, category, price, description} = data

      if(name && image && category && price) {
        const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/uploadProduct`, {
          method : "POST",
          headers : {
            "content-type" : "application/json" 
          },
          body : JSON.stringify(data)
        }) 
        const fetchRes = await fetchData.json()
  
        console.log(fetchRes)
        toast(fetchRes.message)
      }
      else {
        toast("Enter required fields")
      }
  }

  return (
    <div className='p-8'>
      <form className='m-auto w-full max-w-md shadow p-3 flex flex-col bg-white' onSubmit={handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input type={"text"} accept='image/*' value={data.name} name='name'className='bg-slate-200 p-1 my-1' onChange={handleChange} />

        <label htmlFor='category'>Category</label>
        <select className='bg-slate-200 p-1 my-1' id='category' name='categoty' onChange={handleChange}  value={data.category}>
          <option value={"other"}>select category</option>
          <option value={"fruits"}>Fruits</option>
          <option value={"vegetable"}>Vegetable</option>
          <option value={"iccream"}>Icream</option>
          <option value={"dosa"}>Dosa</option>
          <option value={"pizza"}>Pizza</option>
          <option value={"rice"}>Rice</option>
          <option value={"cake"}>Cake</option>
          <option value={"burger"}>Burger</option>
          <option value={"panner"}>Panner</option>
          <option value={"sandwitch"}>Sandwitch</option>
        </select>

        <label htmlFor='image'>Image
        <div className='h-40 w-full bg-slate-200 rounded flex items-center cursor-pointer justify-center'>
            {
              data.image ? <img src={data.image} className="h-full" /> : <span className='text-5xl'><AiOutlineCloudUpload style={{color : "black"}}/></span> 
            }
            
          <input type={"file"} id='image' onChange={uploadImage} className='hidden' />
        </div>
        </label>

        <label htmlFor='price'>Price</label>
        <input type={"text"} className='bg-slate-200 p-1 my-1'value={data.price} name='price' onChange={handleChange}></input>

        <label htmlFor='description'>Descripton</label>
        <textarea rows={3} className='bg-slate-200 p-1 my-1 resize-none' value={data.description} name='description' onChange={handleChange}></textarea>

        <button className='bg-red-500 hover:bg-red-600 text-white text-lg font-medium my-2 drop-shadow'>Save</button>
      </form>
    </div>
  )
}

export default NewProduct