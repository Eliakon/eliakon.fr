import React, { Component } from 'react';
import ReactTimeout from 'react-timeout';
import './pikachu.css';
import './pikachu-anims.css';

class Pikachu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blink: false,
      moveTale: false,
      moveEar: false,
      showSparkle: false
    };
  }

  blink = () => {
    this.setState({blink: true});
    this.props.setTimeout(() => this.setState({blink: false}), 300);
  };

  moveTale = () => {
    this.setState({moveTale: true});
    this.props.setTimeout(() => this.setState({moveTale: false}), 1100);
  };

  moveEar = () => {
    this.setState({moveEar: true});
    this.props.setTimeout(() => this.setState({moveEar: false}), 400);
  };

  showSparkle = () => {
    this.setState({showSparkle: true});
    this.props.setTimeout(() => this.setState({showSparkle: false}), 1500);
  };

  randomAnim = () => {
    const anims = [this.moveTale, this.moveEar, this.showSparkle];
    anims[Math.floor(Math.random() * anims.length)]();
  };

  componentDidMount = () => {
    this.props.setInterval(this.blink, 3000);
    this.props.setInterval(this.randomAnim, 5000);
  };

  render = () => (
    <div id="pikachu">
      <img src="images/pikachu/shadow.png" role="presentation" />
      <div className="pikachu-body">
        <img className={`tale${this.state.moveTale ? ' move': ''}`} src="images/pikachu/tale.png" role="presentation" />
        <img src="images/pikachu/left-ear.png" role="presentation" />
        <img className={`ear${this.state.moveEar ? ' move': ''}`} src="images/pikachu/right-ear.png" role="presentation" />
        <img src="images/pikachu/body.png" role="presentation" />
        <img className={`eyes${this.state.blink ? ' blink': ''}`} src="images/pikachu/eyes.png" role="presentation" />
        <img className={`sparkle${this.state.showSparkle ? ' show': ''}`} src="images/pikachu/sparkle.png" role="presentation" />
      </div>
    </div>
  );
}

export default ReactTimeout(Pikachu);
