import React from 'react';
import GameDetail from '../components/GameDetail';

class GameContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      gameSquares: ["X","0","X","0","X","0","X","0", "X"]
    }
  }
  render(){
    return(
      <GameDetail gameSquares ={this.state.gameSquares}/>
    )
  }
  }


export default GameContainer;
