import React from 'react';
import { Column } from '../column/column.component';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
export const Board = props => (
    <DragDropContext >
      <Droppable droppableId={props.columns[1].title}>
        {(provided) => (
        <div className='board' {...provided.droppableProps} ref={provided.innerRef}>
            {props.columns.map(column =>(
                // console.log(column.id),
                // console.log(column.title),
                // console.log(props.cards),
                // console.log(column.cardIds),
                <Column handleTextArea={props.handleTextArea} 
                        handleAddButton={props.handleAddButton}
                        handleOnDragEnd={props.handleOnDragEnd}
                        provided = {provided}
                        innerRef={provided.innerRef}
                        cards ={props.cards} 
                        cardIds={column.cardIds} 
                        key={column.id} 
                        id={column.id}
                        title={column.title} />
    
            ))}
        {provided.placeholder}
        </div>
        )}
      </Droppable>
    </DragDropContext>
)
