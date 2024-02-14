import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function CreateC() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');

  const navigate=useNavigate();

  const handlerSubmit=(e)=>{
     e.preventDefault();
     axios.post('https://659bacd9d565feee2dab769a.mockapi.io/crud',{
      e_name:name,
      e_age:age,
      e_email:email
     }).then(()=>{
      navigate('/');
     })
  }
  return (
    <>
      
        <div className='row'>
         <div className='col-md-4'>
         <div className='mb-2 mt-2'>
                <Link to='/'>
                <button className='btn btn-primary'>Read Data</button>
                </Link>
              </div>
         <div className='bg-primary p-4 text-center'>
           <h1>Create Data</h1>
         </div>
          <form onSubmit={handlerSubmit}>
            <div className='form-group'>
            <label>Enter Name:&nbsp;</label>
            <input type='text' placeholder='Enter Your Name' className='form-control' onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div>
            <label>Enter Age:&nbsp;</label>
            <input type='number' placeholder='Enter Your Age' className='form-control' onChange={(e)=>setAge(e.target.value)}/>
            </div>
            <div>
            <label>Enter Email:&nbsp;</label>
            <input type='email' placeholder='Enter Your Email' className='form-control' onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className='d-grid'>
            <input type='submit' value='Submit' className='btn btn-primary'/>
            </div>
          </form>
          <br/>
          {name}
          <br/>
          {age}
          <br/>
          {email}
         </div>

        </div>
     </>
  )
}

export default CreateC