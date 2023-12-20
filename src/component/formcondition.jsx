import React from 'react';
import Form from './form';
 const inputvalue ="T";
 
 function FormCondition(){
   return <div className='container'><form className='form'>
   <input type="text" placeholder='T/F' value={inputvalue}  />
   </form>

   { inputvalue === "T" ? <h1>Welcome</h1> : <Form />}
   </div>}
export default FormCondition;