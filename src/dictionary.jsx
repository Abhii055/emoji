import React from "react";
import Card from "./Card";
import emojidata from "./emojidata";

function createCard(emojidata){
    return (
        <Card
        key={emojidata.id}
        id={emojidata.id}
        emojiimage={emojidata.emojiimage}
        name={emojidata.name}
        meaning={emojidata.meaning}
         />
    )
}
function Dictionary(){
    return(
        <div>
         <h1> emoji</h1>
            <div className="dictionary">{emojidata.map(createCard)}</div>
        </div>
    )
}
export default Dictionary;