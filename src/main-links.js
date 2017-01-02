import React, { Component } from 'react';

class Cabinet extends Component {

  render() {
    var story;
    var characters;
    var cast;
    var book;
    var follow;
    if (this.props.activeSet === 2) {
      story = 'active';
    } else if (this.props.activeSet === 3) {
      characters = 'active';
    } else if (this.props.activeSet === 4) {
      cast = 'active';
    } else if (this.props.activeSet === 5) {
      book = 'active';
    } else if (this.props.activeSet === 6) {
      follow = 'active';
    }
    return (
      <div className="home-header">
        <a className="wordmark" onClick={this.goToHome.bind(this)}>THE WOMAN IN THE CABINET</a>
        <ul>
          <li onClick={this.goToStory.bind(this)} className={story}><a>The Story</a></li>
          <li onClick={this.goToCharacters.bind(this)} className={characters}><a>Characters</a></li>
          <li onClick={this.goToCast.bind(this)} className={cast}><a>Cast + Crew</a></li>
          <li onClick={this.goToBook.bind(this)} className={book}><a>Comic Book</a></li>
          <li onClick={this.goToFollow.bind(this)} className={follow}><a>Follow Us!</a></li>
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

  goToBook() {
    this.props.goToSection(5);
  }

  goToFollow() {
    this.props.goToSection(6);
  }
}

export default Cabinet;
