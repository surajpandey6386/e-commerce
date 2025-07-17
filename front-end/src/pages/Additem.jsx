import React, {useState} from 'react'
import "./additem.css";
import axios from 'axios';
const additem = () => {
  const [formData, setFormData] = useState({
    imgLink:'',
    description:'',
    price:'',
    rating:'',
    itemname:'',
    select:''
  });
  const [select, setSelect] = useState('');
  const change = (e) => {

  }
  const Formchange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(formData);
  };
  const HandleSubmit = async(e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:3000/addItem', formData)
    console.log(res);
  }
  return (
   <>
   <div className="super">
   <div className="maincomponent">
    <form className='detail' onSubmit={HandleSubmit}>
        <h1>Add Item</h1>
        <input onChange={Formchange} name='imgLink' type="text" placeholder='Enter imagelink' className='inn'/>
        <input onChange={Formchange} name='description' type="text" placeholder='Enter image Discription' className='inn' />
        <input onChange={Formchange} name='price' type="text" placeholder='Enter price in Rupees' className='inn' />
        <input onChange={Formchange} name='rating' type="text" placeholder='Rating under 5 Stars' className='inn' />
        <input onChange={Formchange} name='itemname' type="text" placeholder='Enter item name' className='inn' />
        <select onChange={Formchange} name="select" value={formData.select} placeholder="select">
          <option value="shoes for Men" >shoes for Men</option>
          <option value="Wireless Headphones" >Wireless Headphones</option>
          <option value="Smart Phones" >Smart Phones</option>
          <option value="Smart Watch" >Smart Watch</option>
          <option value="Smart Watch" >Smart Watch</option>
          <option value="Health Cares" >Health Cares</option>
          <option value="Laptops" >Laptops</option>
          <option value="Tablets" >Tablets</option>
          <option value="Books" >Books</option>
          <option value="Slippers for Men" >Slippers for Men</option>
          <option value="Wireless Speakers" >Wireless Speakers</option>
          <option value="Cricket KIt for Boys" >Cricket KIt for Boys</option>
          <option value="Notebooks" >Notebooks</option>
          <option value="Mobile Covers" >Mobile Covers</option>
          <option value="Keyboard & Mouse" >Keyboard & Mouse</option>
          <option value="Grocery Items" >Grocery Items</option>
        </select>
        <button className='Additem-button' type='submit'>Add Item</button>
    </form>
   </div>
   </div>
   </>
  )
}

export default additem
