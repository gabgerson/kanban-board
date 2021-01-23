import React from 'react';
import './card.styles.css'

export const Card = props =>(
    // console.log(props.cards[props.cardId].title),
    // console.log(props.cards[props.cardId].cardData),
    <div className='card' title={props.cards[props.cardId].title} >
        <input defaultValue={props.cards[props.cardId].title} type="text"/>
        <textarea className="textarea"  
        cols="30" onChange={props.handleTextArea} 
        rows="10" defaultValue={props.cards[props.cardId].cardData}></textarea>

    </div>
) 