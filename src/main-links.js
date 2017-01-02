
import React, { Component } from 'react';

class Cabinet extends Component {

  render() {
    var story;
    var characters;
    var cast;
    if (this.props.activeSet === 2) {
      story = 'active';
    } else if (this.props.activeSet === 3) {
      characters = 'active';
    } else if (this.props.activeSet === 4) {
      cast = 'active';
    }
    return (
      <div className="home-header">
        <a className="wordmark" onClick={this.goToHome.bind(this)}>THE WOMAN IN THE CABINET</a>
        <ul>
          <li onClick={this.goToStory.bind(this)} className={story}><a>The Story</a></li>
          <li onClick={this.goToCharacters.bind(this)} className={characters}><a>Characters</a></li>
          <li onClick={this.goToCast.bind(this)} className={cast}><a>Cast + Crew</a></li>
          <li><a href="https://s3.amazonaws.com/womaninthecabinet.com/Woman+in+the+Cabinet+Comic+Book+(small-size).pdf" target="_blank">Comic Book</a></li>
          <li onClick={this.openModal.bind(this)}><a>Follow Us!</a></li>
        </ul>
      </div>
    );
  }

  goToHome() {
    this.props.goToSection(1);
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
