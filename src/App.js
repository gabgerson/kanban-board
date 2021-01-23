import React, {Component} from 'react'
import { Board } from './components/board/board.component'
import './App.css';

class App extends Component {
  constructor() {
  super();

  this.state = {
    columns: [
      {id:1,
       title: 'Pending',
       cardIds:[1]
      },
      {
        id:2,
        title: 'InProgess',
        cardIds:[2]
      },
      {
        id:3,
        title: 'Completed',
        cardIds:[3]
      }
    ],
    cards: {
      1:{
      title: 'card 1',
      cardData: 'Your Text Here'
      },
      2:{
        title: 'card 2',
        cardData: 'Your Text Here'
        },
      3:{
        title: 'card 3',
        cardData: 'Your Text Here'
        },
      },
      currentHighestId: 3,
  }
  

  
}

handleTextArea = e => {
  console.log("i did it")
  // this.setState({})
}

handleAddButton = e => {
  const columns = [...this.state.columns]
  const currentHighestId = this.state.currentHighestId + 1
  const cards = this.state.cards
  columns[e.target.id - 1].cardIds.push(currentHighestId)

  cards[currentHighestId] = {
    title: 'card' + currentHighestId,
    cardData: 'Your Text Here'
    } 

  this.setState({
                columns,
                cards,
                currentHighestId
              })

}

render(){

    
  return (
    <div className="App">
    <h1> Kanban Board </h1>
    <Board
      columns={this.state.columns}
      cards = {this.state.cards}
      handleTextArea={this.handleTextArea}
      handleAddButton={this.handleAddButton}
    />

    </div>
  );
}
}



export default App;
