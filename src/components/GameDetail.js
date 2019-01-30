import React, {Fragment} from 'react';
import GameSquare from './GameSquare';

class GameDetail  extends React.Component{
  render() {
    return(
      <Fragment>
        <div className="gameSquare" id="square0"> <GameSquare  squareInfo = {this.props.gameSquares[0]} handleUserInput =
          {this.props.handleUserInput} id = {0} /></div>
        <div className="gameSquare" id="square1"> <GameSquare squareInfo = {this.props.gameSquares[1]} handleUserInput =
          {this.props.handleUserInput} id = {1}/></div>
        <div className="gameSquare" id="square2"> <GameSquare squareInfo = {this.props.gameSquares[2]} handleUserInput =
          {this.props.handleUserInput} id = {2 }/></div>
        <div className="gameSquare" id="square3"> <GameSquare squareInfo = {this.props.gameSquares[3]} handleUserInput =
          {this.props.handleUserInput} id = {3}/></div>
        <div className="gameSquare" id="square4"> <GameSquare squareInfo = {this.props.gameSquares[4]} handleUserInput =
          {this.props.handleUserInput} id = {4} /></div>
        <div className="gameSquare" id="square5"> <GameSquare squareInfo = {this.props.gameSquares[5]} handleUserInput =
          {this.props.handleUserInput} id = {5}/></div>
        <div className="gameSquare" id="square6"> <GameSquare squareInfo = {this.props.gameSquares[6]} handleUserInput =
          {this.props.handleUserInput} id = {6} /></div>
        <div className="gameSquare" id="square7"> <GameSquare squareInfo = {this.props.gameSquares[7]} handleUserInput =
          {this.props.handleUserInput} id = {7}/></div>
        <div className="gameSquare" id="square8"> <GameSquare squareInfo = {this.props.gameSquares[8]} handleUserInput =
          {this.props.handleUserInput} id = {8}/></div>
      </Fragment>
    )

  }
}
export default GameDetail;
