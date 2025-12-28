import React, { useEffect, useState } from 'react'
import Cards from './Cards';
import './ApiCall.css'
import { useNavigate } from 'react-router-dom';
import NavBar1 from './NavBars/NavBar1';

function ApiCall() {
    const [apidata,setApidata] = useState([]);
    const navigate = useNavigate()

    const handleapiCall = async ()=>{
        const data = await fetch("https://fakestoreapi.com/products")
        const realdata = await data.json()
        setApidata(realdata)
    }
    console.log(apidata)
    // handleapiCall()
    useEffect(()=>{
      handleapiCall()
    },[])
  return (
    <div>
      <NavBar1/>
        <div>
        {/* <h1 onClick={()=>navigate('/')}>Product list</h1> */}
        {/* <button onClick={handleapiCall}>Show Products</button> */}
        </div>
        <div className='products'>
        {apidata.map((res)=>(
            <div>
                       <Cards data={res}/>
            </div>
        ))}
        </div>
   
    </div>
  )
}

export default ApiCall
