import {useState} from "react";

export function Strike(){
    document.getElementById("one").style.textDecoration="line-through";
}
export function unStrike(){
    document.getElementById("one").style.textDecoration= null;
}

function Cal(){
const [count,setCount]= useState(0);

function increase(){
    setCount(count + 1);
}
function decrease(){
    setCount(count - 1);
}
return(
    <div className="container">
    <h1 id="one">mydyenasol</h1>
    <h1>{count}</h1><div className="button">
    <button onClick={Strike}>Strike Through</button>
    <button onClick={unStrike}>unStrike</button>
    <button onClick={increase}>+</button>
    <button onClick={decrease}>-</button>
    </div></div>
)
}
export default Cal;