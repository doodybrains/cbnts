import React, { Component } from 'react';
import Cabinet from './cabinet';

class CabinetContainer extends Component {
  render() {
    const items = this.props.items.map(item => {
      return (
        <Cabinet key={item.id} id={item.id} title={item.title} />
      );
    });

    const isActive = parseInt(this.props.id.substring(this.props.id.length - 1), 10) === this.props.activeSet;
    const activeClass = isActive ? 'active' : '';
    return (
      <div className={'cabinet-container ' + activeClass}>
        {items}
      </div>
    );
  }
}

export default CabinetContainer;
