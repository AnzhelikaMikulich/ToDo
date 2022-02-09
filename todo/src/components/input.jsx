import React from "react";
import { useState } from "react";

const Input = function () {
  const[value, setValue] = useState('Text');
  return(
    <div><h1>{value}</h1>
          <input type="text" value={value} onChange={event=>setValue(event.target.value)} /></div>
    
  )

  
}

export default Input