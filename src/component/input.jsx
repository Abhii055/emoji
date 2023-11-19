import React from 'react';

function Input(fprops){
    return(<div>
        <input type ={fprops.type} placeholder={fprops.placeholder}></input>
        </div>
        )
}
export default Input;