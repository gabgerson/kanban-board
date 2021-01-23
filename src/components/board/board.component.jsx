import React from 'react';
import { Column } from '../column/column.component';

export const Board = props => (
    
    <div className='board'>
        {props.columns.map(column =>(
            // console.log(column.id),
            // console.log(column.title),
            // console.log(props.cards),
            // console.log(column.cardIds),
            <Column handleTextArea={props.handleTextArea} 
                    handleAddButton={props.handleAddButton}
                    handleOnDragEnd={props.handleOnDragEnd}
                    cards ={props.cards} 
                    cardIds={column.cardIds} 
                    key={column.id} 
                    id={column.id}
                    title={column.title} />

        ))}
    </div>
)
