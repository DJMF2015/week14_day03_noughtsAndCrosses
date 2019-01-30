import React, {Fragment} from 'react';

class GameSquare extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      squareInfo: ''
    };

    this.handleSquareChange = this.handleSquareChange.bind(this);
  }

  handleSquareChange(event){
    event.preventDefault();
    this.props.handleUserInput(event.target.value, this.props.id)
    this.setState({squareInfo: event.target.value})
  }


  render(){
    return(
      <Fragment>
      <p>{this.props.squareInfo}</p>
        <h2> {this.squareInfo}</h2>
            <input
              type="text"
              placeholder=" X/0? "
              value={this.squareInfo}
              onChange={this.handleSquareChange}
            />
      </Fragment>
    )
  }
}


export default GameSquare;
