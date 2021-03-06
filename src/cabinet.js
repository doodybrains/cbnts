import React, { Component } from 'react';
import './cabinet.css';

class Cabinet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showInnerCabinet: false
    };
  }

  render() {
    const active = this.state.showInnerCabinet;
    const activeClass = active ? 'inner-active' : 'outer-active';

    return (
      <div onClick={this.handleClick.bind(this)} className={'cabinet ' + activeClass}>
        <div className="door-layer">
          <p>door layer</p>
        </div>
        <div className="top-layer">
          <p></p>
        </div>
        <div className="bottom-layer">
          <div></div>
          <div className="door"></div>
        </div>
      </div>
    );
  }

  handleClick() {
    this.setState({
      showInnerCabinet: !this.state.showInnerCabinet
    });
  }
}

export default Cabinet;
