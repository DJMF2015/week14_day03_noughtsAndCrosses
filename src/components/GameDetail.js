import React, {Fragment} from 'react';
import GameSquare from './GameSquare';

class GameDetail  extends React.Component{
  render() {
    return(
      <Fragment>
      <div id="square0"> <GameSquare squareInfo = {this.props.gameSquares[0]}/></div>
      <div id="square1"> <GameSquare squareInfo = {this.props.gameSquares[1]}/></div>
      <div id="square2"> <GameSquare squareInfo = {this.props.gameSquares[2]}/></div>
      <div id="square3"> <GameSquare squareInfo = {this.props.gameSquares[3]}/></div>
      <div id="square4"> <GameSquare squareInfo = {this.props.gameSquares[4]}/></div>
      <div id="square5"> <GameSquare squareInfo = {this.props.gameSquares[5]}/></div>
      <div id="square6"> <GameSquare squareInfo = {this.props.gameSquares[6]}/></div>
      <div id="square7"> <GameSquare squareInfo = {this.props.gameSquares[7]}/></div>
      <div id="square8"> <GameSquare squareInfo = {this.props.gameSquares[8]}/></div>
      </Fragment>
    )

  }
}
export default GameDetail;
