import React, { Component } from 'react';
import './cabinet.css';

class Cabinet extends Component {
  render() {
    let activeClass = null;
    if (this.props.isOpen === this.props.id) {
      activeClass = 'active';
    }

    return (
      <div onClick={this.handleClick.bind(this)} className={'cabinet ' + activeClass}>
        <p>{this.props.title}</p>
      </div>
    );
  }

  handleClick() {
    this.props.openCabinet(this.props.id);
  }
}

export default Cabinet;
