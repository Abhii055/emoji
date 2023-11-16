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
                <dt className='emoji'>
                <span>{props.emojiimage}</span>
                </dt>
                <span>{props.name}</span>
                <dd> {props.meaning} </dd>
            </div>
            </dl>
        </div>
    )
}
export default Card;
