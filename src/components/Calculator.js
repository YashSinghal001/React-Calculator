import React from 'react'

export const Calculator = () => {
  let arr=["AC","/","*","+","-","%","1","2","3","4","5","6","7","8","9","10"]
  return (
    <div>
 <div className="container calout ">
       <input type="text" name="" id="" className='display'/>
      
      {arr.map((num)=>
      <button className="btn btn-success btncal">{num}</button> 
)}
    

    </div>


    </div>
  )
}
