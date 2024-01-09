import react, { useState } from 'react';
let time = new Date().toLocaleTimeString();
console.log(time);
function currentTime(){
    const [ct,Timefun]=useState(0);  

function Timefun(){

}
}
function Time(){
    return(<div>
        <h1>hello</h1>
        <button onClick={Timefun}> get time 
        </button>
        </div>
    );
}

export default Time;


// function Time(){
//     return( <div>
//         {   
//             console.log(time)}
//         </div>
//     );
// }

