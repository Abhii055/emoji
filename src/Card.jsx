import React from 'react';
import emojidata from './emojidata';

function Card(props){
    return(
        <div>
            <div className="heading">
            </div>
            <dl className='dictionary'>
            <div className='term'>
            <p>{props.id}</p>
                <dt >{props.emojiimage}</dt>
                <dd> {props.meaning} </dd>
            </div>
            </dl>
        </div>

    )
}
export default Card;
