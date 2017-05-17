import React from 'react';

export default class Pikachu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      size: 100
    };
    this.resizePikachu = this.resizePikachu.bind(this);
    this.makeBigger = this.makeBigger.bind(this);
    this.makeSmaller = this.makeSmaller.bind(this);
  }

  componentDidUpdate() {
    this.resizePikachu();
  }

  resizePikachu() {
    const pikachu = document.getElementById("pikachu");
    pikachu.height = this.state.size;
    pikachu.width = this.state.size;
  }

  makeBigger() {
    this.setState({
      size: this.state.size + 10
    });
  }

  makeSmaller() {
    this.setState({
      size: this.state.size - 10
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.makeBigger}>Bigger!</button>
        <button onClick={this.makeSmaller}>Smaller!</button>
      </div>
    )
  }
}
