import React, { Component } from 'react';
import './modal.css';

class Modal extends Component {
  render() {
    let content = null;
    let activeClass = null;
    if (this.props.id) {
      activeClass = 'active';
      content = (
        <h5>Modal window</h5>
      );
    }

    return (
      <div className={'modal-container ' + activeClass}>
        {content}
      </div>
    );
  }
}

export default Modal;
