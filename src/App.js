import React, { Component } from 'react';

import { SeatCounterComponent, SeatLayoutComponent } from './components';
import { seatLayoutModel } from './data/seat-data';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      numberOfTickets: 1,
      selectedSeats: [],
      selectedSeatNumbers: [],
      selectedSeatValue: 0
    }
  }

  handleNumerOfTicketsCounterChange = (evt) => {
    const numberOfTickets = (evt.target.validity.valid) && evt.target.value > 0 && evt.target.value < 5 // TODO: Handle max value based on the available tickets
      ? parseInt(evt.target.value, 10)
      : this.state.numberOfTickets;

    this.setState(this.counterSelectState(numberOfTickets));
  }

  onSeatSelect = (seatInfo) => () => {
    this.setState(this.selectedSeatStates(seatInfo));
  }

  selectedSeatStates = (seatInfo) => {
    const selectedSeatIndex = this.state.selectedSeatNumbers.indexOf(seatInfo.seatNumber);
    let selectedSeats = [...this.state.selectedSeats];
    let selectedSeatNumbers = [...this.state.selectedSeatNumbers];
    let selectedSeatValue = this.state.selectedSeatValue;

    if (selectedSeatIndex < 0) {
      selectedSeats.push(seatInfo);
      selectedSeatNumbers.push(seatInfo.seatNumber);
      selectedSeatValue += seatInfo.value;
    } else {
      selectedSeats.splice(selectedSeatIndex, 1);
      selectedSeatNumbers.splice(selectedSeatIndex, 1);
      selectedSeatValue -= seatInfo.value;
    }

    if (this.state.numberOfTickets < selectedSeats.length) {
      const removedItem = selectedSeats.shift();
      selectedSeatNumbers.shift();
      selectedSeatValue -= removedItem.value;
    }

    return {
      selectedSeats,
      selectedSeatNumbers,
      selectedSeatValue
    }
  }

  counterSelectState = (numberOfTickets) => {
    let selectedSeats = [...this.state.selectedSeats];
    let selectedSeatNumbers = [...this.state.selectedSeatNumbers];
    let selectedSeatValue = this.state.selectedSeatValue;

    if (numberOfTickets < selectedSeats.length) {
      const removedItem = selectedSeats.shift();
      selectedSeatNumbers.shift();
      selectedSeatValue -= removedItem.value;
    }

    return {
      numberOfTickets,
      selectedSeats,
      selectedSeatNumbers,
      selectedSeatValue
    }
  }

  render() {
    return (
      <div className="App">
        <main>
          <SeatCounterComponent onChange={this.handleNumerOfTicketsCounterChange} value={this.state.numberOfTickets} />
          <SeatLayoutComponent
            data={seatLayoutModel}
            onSeatSelect={this.onSeatSelect}
            selectedSeatNumbers={this.state.selectedSeats.map((seat) => seat.seatNumber)}
          />
        </main>
      </div>
    );
  }
}

export default App;
