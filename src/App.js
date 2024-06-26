import React, { useEffect, useState } from "react";
import axios from "axios"
import style from "./App.module.css"


function Tile({flagname,altname,name}) {
  return (
    <div className={style.bodydiv}>
      <img className={style.image} src={flagname} alt={altname}/>
      <h3 className={style.heading}>{name}</h3>
    </div>
  )
}



function App() {
  const [countrydata,setcountrydata]=useState([]);
  useEffect(()=>{
    const fetchdata=async()=>{
      try{ 
        const response=await axios.get("https://restcountries.com/v3.1/all")
        console.log("newline");
        setcountrydata(response.data)
        
      }
      catch(error){
        console.log(error);
      }
    }
   
    fetchdata();
   
  },[])
  console.log(countrydata);
  return (
    <div>
      
   
      <div className={style.data}>
        {countrydata.map((data,index)=><Tile key={index} flagname={data.flags.png} altname={data.flags.alt} name={data.name.common} />)}
       
      </div>
    
    </div>
  );
}

export default App;
