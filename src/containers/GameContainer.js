import React from 'react';
import GameDetail from '../components/GameDetail';

class GameContainer extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      gameSquares: ["","","","","","","","",""]
    }
    this.handleUserInput = this.handleUserInput.bind(this);
  }


  handleUserInput(userInput, id) {
    console.log(userInput);
    const currentSquares = Array.from(this.state.gameSquares);
    currentSquares[id] = userInput;
    this.setState({gameSquares: currentSquares})
  }


  render(){
    return(
      <>
      <h1>Noughts & Crosses</h1>
      <div id="gameSquareContainer">
      <GameDetail gameSquares ={this.state.gameSquares} handleUserInput = {this.handleUserInput}/>
      </div>
      </>
    )
  }

}


export default GameContainer;
