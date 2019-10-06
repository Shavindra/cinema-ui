import React, { Component } from 'react';

import { SeatCounterComponent, SeatLayoutComponent } from './components';
import { seatLayoutModel } from './data/seat-data';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      numberOfTickets: '',
      selectedSeats: [],
      selectedSeatNumbers: [],
      selectedSeatValue: 0
    }
  }

  handleNumerOfTicketsCounterChange = (evt) => {
    const numberOfTickets = (evt.target.validity.valid) ? evt.target.value : this.state.numberOfTickets;
    this.setState({ numberOfTickets });
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


    return {
      selectedSeats,
      selectedSeatNumbers,
      selectedSeatValue
    }

  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <main>
          <SeatLayoutComponent
            data={seatLayoutModel}
            onSeatSelect={this.onSeatSelect}
            selectedSeatNumbers={this.state.selectedSeats.map((seat) => seat.seatNumber)}
          />
          <SeatCounterComponent onChange={this.handleNumerOfTicketsCounterChange} value={this.state.numberOfTickets} />
        </main>
      </div>
    );
  }
}

export default App;
