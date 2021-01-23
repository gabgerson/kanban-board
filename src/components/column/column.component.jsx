import React from 'react';
import { Card } from '../card/card.component';
import './column.styles.css'
export const Column = props =>(
    // console.log(props.id),
    <div className='column'>
        
        <h1> {props.title} </h1>
        <button id={props.id} onClick={props.handleAddButton}>+</button>
        {props.cardIds.map( cardId=>(
            // console.log(column.id),
            // console.log(column.title),
            // console.log(props.cards),
            // console.log(column.cardIds),
            <Card handleTextArea={props.handleTextArea} cards={props.cards}  cardId={cardId} key={cardId}  />
        ))}

    </div>
    
);