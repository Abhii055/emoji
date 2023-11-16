import React from "react";
import Card from "./Card";
import emojidata from "./emojidata";

function createCard(emojidata){
    return (
        <Card
        key={emojidata.id}
        id={emojidata.id}
        emojiimage={emojidata.emojiimage}
        meaning={emojidata.meaning}
         />
    )
}
function Dictionary(){
    return(
        <div>
         <h1> emoji</h1>
            {emojidata.map(createCard)}
        </div>
    )
}
export default Dictionary;