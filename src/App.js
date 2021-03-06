import React, { Component } from 'react';
import './App.css';
import CabinetContainer from './cabinet-container';
import MainLinks from './main-links';
import next from './next.svg';
import prev from './prev.svg';
import Velocity from 'velocity-animate';
import {duplicateFirstLastSlides} from './slider.js';

const homeCabinets = [
  {id: '1', title: 'cabinet-one'},
  {id: '2', title: 'cabinet-two'},
  {id: '3', title: 'cabinet-three'},
  {id: '4', title: 'cabinet-four'},
  {id: '5', title: 'cabinet-five'},
  {id: '6', title: 'cabinet-six'},
  {id: '7', title: 'cabinet-seven'},
  {id: '8', title: 'cabinet-eight'},
  {id: '9', title: 'cabinet-nine'},
  {id: '10', title: 'cabinet-ten'},
  {id: '11', title: 'cabinet-eleven'},
  {id: '12', title: 'cabinet-twelve'},
];

const castCabinets = [
  {id: '13', title: 'cabinet-thirteen'},
  {id: '14', title: 'cabinet-fourteen'},
  {id: '15', title: 'cabinet-fifteen'},
  {id: '16', title: 'cabinet-sixteen'},
  {id: '17', title: 'cabinet-seventeen'},
  {id: '18', title: 'cabinet-eighteen'},
  {id: '19', title: 'cabinet-nineteen'},
  {id: '20', title: 'cabinet-twenty'},
  {id: '21', title: 'cabinet-twenty-one'},
  {id: '22', title: 'cabinet-twenty-two'},
  {id: '23', title: 'cabinet-twenty-three'},
  {id: '24', title: 'cabinet-twenty-four'}
];

const storyCabinets = [
  {id: '25', title: 'cabinet-twenty-five'},
  {id: '26', title: 'cabinet-twenty-six'},
  {id: '27', title: 'cabinet-twenty-seven'},
  {id: '28', title: 'cabinet-twenty-eight'},
  {id: '29', title: 'cabinet-twenty-nine'},
  {id: '30', title: 'cabinet-thirty'},
  {id: '31', title: 'cabinet-thirty-one'},
  {id: '32', title: 'cabinet-thirty-two'},
  {id: '33', title: 'cabinet-thirty-three'},
  {id: '34', title: 'cabinet-thirty-four'},
  {id: '35', title: 'cabinet-thirty-five'},
  {id: '36', title: 'cabinet-thirty-six'}
];

const tbaCabinets = [
  {id: '37', title: 'cabinet-thirty-seven'},
  {id: '38', title: 'cabinet-thirty-eight'},
  {id: '39', title: 'cabinet-thirty-nine'},
  {id: '40', title: 'cabinet-forty'},
  {id: '41', title: 'cabinet-forty-one'},
  {id: '42', title: 'cabinet-forty-two'},
  {id: '43', title: 'cabinet-forty-three'},
  {id: '44', title: 'cabinet-forty-four'},
  {id: '45', title: 'cabinet-forty-five'},
  {id: '46', title: 'cabinet-forty-six'},
  {id: '47', title: 'cabinet-forty-seven'},
  {id: '48', title: 'cabinet-forty-eight'}
];

let current = 1;
const length = 6;

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cabinetState: 0,
      activeSet: 1,
      modalOpen: 0
    };

    this.goToPrevSet = this.goToPrevSet.bind(this);
    this.goToNextSet = this.goToNextSet.bind(this);
    this.goToSection = this.goToSection.bind(this);
  }

  componentDidMount() {
    const slider = document.getElementById('slider');
    const first = document.getElementById('home');
    const last = document.getElementById('follow');

    duplicateFirstLastSlides(slider, first, last);
  }

  render() {
    const {activeSet} = this.state;
    let slideClass = 'one';

    switch (activeSet) {
      case 2:
        slideClass = 'two';
        break;
      case 3:
        slideClass = 'three';
        break;
      case 4:
        slideClass = 'four';
        break;
      case 5:
        slideClass = 'five';
        break;
      case 6:
        slideClass = 'six';
        break;
    }

    return (
      <div className="home">
        <MainLinks activeSet={activeSet} goToSection={this.goToSection} />

        <div className="cabinet-arrows">
          <div id="prev" onClick={this.goToPrevSet}><img src={prev} alt="prev" /></div>
          <div id="next" onClick={this.goToNextSet}><img src={next} alt="next" /></div>
        </div>

        <div id="slider">
          <div id="slider-wrapper" className={'container ' + slideClass}>
            <CabinetContainer id="1" name="home" activeSet={activeSet} items={homeCabinets} />

            <CabinetContainer id="2" name="story" activeSet={activeSet} items={storyCabinets} />

            <CabinetContainer id="3" name="characters" activeSet={activeSet} items={castCabinets} />

            <CabinetContainer id="4" name="cast" activeSet={activeSet} items={castCabinets} />

            <CabinetContainer id="5" name="book" activeSet={activeSet} items={castCabinets} />

            <CabinetContainer id="6" name="follow" activeSet={activeSet} items={tbaCabinets} />
          </div>
        </div>
      </div>
    );
  }

  goToNextSet() {
    let id = 1;

    switch (this.state.activeSet) {
      case 1:
        id = 2;
        break;
      case 2:
        id = 3;
        break;
      case 3:
        id = 4;
        break;
      case 4:
        id = 5;
        break;
      case 5:
        id = 6;
        break;
    }

    this.setState({
      activeSet: id
    });

    this.cycleSlides('next');
  }


  goToPrevSet() {
    let id = 6;

    switch (this.state.activeSet) {
      case 6:
        id = 5;
        break;
      case 5:
        id = 4;
        break;
      case 4:
        id = 3;
        break;
      case 3:
        id = 2;
        break;
      case 2:
        id = 1;
        break;
    }

    this.setState({
      activeSet: id
    });

    this.cycleSlides('prev');
  }


  cycleSlides(direction) {
    const delta = (direction === 'prev') ? -1 : 1;
    current += delta;

    const cycle = (current === 0 || current > length);
    const slider = document.getElementById('slider');
    const slideDistance = (-12.5 / 100) * 100;
    const move = slideDistance * delta;

    Velocity(slider, {translateX: '+=' + move + '%'}, {duration: 350, easing: 'easeIn'});

    if (cycle) {
      current = (current === 0) ? length : 1;
      const reset = slideDistance * current;
      Velocity(slider, {translateX: reset + '%'}, {duration: 0});
    }
  }


  goToSection(id) {
    const slider = document.getElementById('slider');
    const slideDistance = (-12.5 / 100) * 100;

    const reset = slideDistance * id;
    Velocity(slider, {translateX: reset + '%'}, {duration: 350, easing: 'easeIn'});

    this.setState({
      activeSet: id
    });
  }
}

export default App;
