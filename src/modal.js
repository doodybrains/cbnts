import React, { Component } from 'react';
import './modal.css';

class Modal extends Component {
  render() {
    let content = null;
    let activeClass = null;
    if (this.props.id === 10) {
      activeClass = 'active';
      content = (
        <div className="follow-block">
          <div className="newsletter">
            <h5>Subscribe to our newsletter here:</h5>
          </div>
          <div className="social-block">
            <h5>Follow us here and here</h5>
          </div>
        </div>
      );
    }

    return (
      <div className={'modal-container ' + activeClass}>
        <div onClick={this.closeModal.bind(this)} className="close"><p>x</p></div>
        {content}
      </div>
    );
  }

  closeModal() {
    this.props.closeModal();
  }
}

export default Modal;
