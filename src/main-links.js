
import React, { Component } from 'react';

class Cabinet extends Component {

  render() {
    var story;
    var characters;
    var cast;
    if (this.props.activeSet === 2) {
      console.log('yes');
      story = 'active';
    } else if (this.props.activeSet === 3) {
      characters = 'active';
    } else if (this.props.activeSet === 4) {
      cast = 'active';
    }
    return (
      <ul>
        <li onClick={this.goToStory.bind(this)} className={story}><a>The Story</a></li>
        <li onClick={this.goToCharacters.bind(this)} className={characters}><a>Characters</a></li>
        <li onClick={this.goToCast.bind(this)} className={cast}><a>Cast + Crew</a></li>
        <li><a>Comic Book</a></li>
        <li onClick={this.openModal.bind(this)}><a>Follow Us!</a></li>
      </ul>
    );
  }

  goToStory() {
    this.props.goToSection(2);
  }

  goToCharacters() {
    this.props.goToSection(3);
  }

  goToCast() {
    this.props.goToSection(4);
  }

  openModal() {
    this.props.openModal(10);
  }
}

export default Cabinet;
