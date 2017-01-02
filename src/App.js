import React, { Component } from 'react';
import './App.css';
import CabinetContainer from './cabinet-container';
import MainLinks from './main-links';
import Modal from './modal';
import next from './next.svg';
import prev from './prev.svg';
import Velocity from 'velocity-animate';

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
  }

  componentDidMount() {
    const slider = document.getElementById('slider');
    Velocity(slider, {translateX:'+=-12.5%'}, {duration: 350, easing: 'easeIn'});
    const first = document.getElementById('home');
    const last = document.getElementById('tba');
    const firstClone = first.cloneNode(true);
    const lastClone = last.cloneNode(true);
    first.parentNode.insertBefore(lastClone, first);
    first.parentNode.appendChild(firstClone);
  }

  render() {
    let slideClass = 'one';
    if (this.state.activeSet === 2) {
      slideClass = 'two';
    }
    if (this.state.activeSet === 3) {
      slideClass = 'three';
    }
    if (this.state.activeSet === 4) {
      slideClass = 'four';
    }

    return (
      <div className="home">
        <MainLinks activeSet={this.state.activeSet} goToSection={this.goToSection.bind(this)} openModal={this.openModal.bind(this)} />
        <div className="cabinet-arrows">
          <div id="prev" onClick={this.goToPrevSet.bind(this)}><img src={prev} alt="prev" /></div>
          <div id="next" onClick={this.goToNextSet.bind(this)}><img src={next} alt="next" /></div>
        </div>
        <div id="slider">
          <div id="slider-wrapper" className={'container ' + slideClass}>
            <CabinetContainer id="1" name="home" activeSet={this.state.activeSet} items={homeCabinets} />
            <CabinetContainer id="2" name="story" activeSet={this.state.activeSet} items={storyCabinets} />
            <CabinetContainer id="3" name="characters" activeSet={this.state.activeSet} items={castCabinets} />
            <CabinetContainer id="4" name="cast" activeSet={this.state.activeSet} items={castCabinets} />
            <CabinetContainer id="5" name="book" activeSet={this.state.activeSet} items={castCabinets} />
            <CabinetContainer id="6" name="follow" activeSet={this.state.activeSet} items={tbaCabinets} />
          </div>
        </div>

        <Modal id={this.state.modalOpen} closeModal={this.closeModal.bind(this)} />
      </div>
    );
  }

  goToNextSet() {
    let id = 1;
    if (this.state.activeSet === 1) {
      id = 2;
    }
    if (this.state.activeSet === 2) {
      id = 3;
    }
    if (this.state.activeSet === 3) {
      id = 4;
    }
    this.setState({
      activeSet: id
    });

    this.cycleSlides('next');
  }


  goToPrevSet() {
    let id = 4;
    if (this.state.activeSet === 4) {
      id = 3;
    }
    if (this.state.activeSet === 3) {
      id = 2;
    }
    if (this.state.activeSet === 2) {
      id = 1;
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
    const slide = (-12.5 / 100) * 100;
    const move = slide * delta;

    Velocity(slider, {translateX: '+=' + move + '%'}, {duration: 350, easing: 'easeIn'});
    if (cycle) {
      current = (current === 0) ? length : 1;
      const reset = slide * current;
      Velocity(slider, {translateX: reset + '%'}, {duration: 0, easing: 'easeIn'});
    }
  }


  goToSection(id) {
    this.setState({
      activeSet: id
    });
  }

  openModal(id) {
    this.setState({
      modalOpen: id
    });
  }

  closeModal() {
    this.setState({
      modalOpen: 0
    });
  }
}

export default App;
