import React from "react";
import Card from "./Card";
import emojidata from "./emojidata";
import shortlenmeaning from "./substring";

function createCard(emojidata,index){
    return(
        <div>    
            <Card
                key={emojidata.id}
                id={emojidata.id}
                emojiimage={emojidata.emojiimage}
                name={emojidata.name}
                meaning={shortlenmeaning[index]}
            />     
        </div>
    )
}
function Dictionary(){
    return(
        <div>
        <h1>emoji</h1>
            <div className="dictionary">{emojidata.map((item,index)=>createCard(item,index))}</div>
        </div>
    )
}
export default Dictionary;