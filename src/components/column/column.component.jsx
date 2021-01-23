import React from 'react';
import { Card } from '../card/card.component';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './column.styles.css'

export const Column = props =>(
    console.log(props.cardIds),
    console.log(props.title),
  
    <DragDropContext onDragEnd={props.handleOnDragEnd}>
      <Droppable droppableId={props.title}>
        {(provided) => (
        <div className='column' {...provided.droppableProps} ref={provided.innerRef}>
            
            <h1> {props.title} </h1>
            <button id={props.id} onClick={props.handleAddButton}>+</button>
              
                
                {props.cardIds.map( (cardId, index)=>(
                // console.log(column.id),
                // console.log(column.title),
                // console.log(props.cards),
                // console.log(column.cardIds),
                <Draggable key={cardId} draggableId={props.cards[cardId].title} index = {index}>
                 {(provided) => (
                    <Card
                      provided = {provided}
                      innerRef={provided.innerRef}
                      handleTextArea={props.handleTextArea} 
                      cards={props.cards}  
                      cardId={cardId}  
                       />
                 )}
                </Draggable>
                ))}
                
            
         
            {provided.placeholder}
        </div>

        )}
      </Droppable>
    </DragDropContext>
    
    
);