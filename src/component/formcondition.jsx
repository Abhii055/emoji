import React from 'react';
import {Forma, Formb} from './form';
 const inputvalue ="F";
 
 function FormCondition()
 {
   return <div className='container'>
   <form className='form'>
   <input type="text" placeholder='T/F' value={inputvalue}  />
   </form>
   { inputvalue === "T" ? <Forma /> : <Formb />}
   </div>
 }
export default FormCondition;