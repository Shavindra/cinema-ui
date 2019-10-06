import React, { Component } from 'react';

import { SeatCounterComponent, SeatLayoutComponent } from './components';
import { seatLayoutModel } from './data/seat-data';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      numberOfTickets: ''
    }
  }

  handleNumerOfTicketsCounterChange = (evt) => {
    const numberOfTickets = (evt.target.validity.valid) ? evt.target.value : this.state.numberOfTickets;
    this.setState({ numberOfTickets });
  }

  onSeatSelect = (seatInfo) => () => {
    console.log(seatInfo)
  }

  render() {
    return (
      <div className="App">
        <main>
          <SeatLayoutComponent data={seatLayoutModel} onSeatSelect={this.onSeatSelect} />
          <SeatCounterComponent onChange={this.handleNumerOfTicketsCounterChange} value={this.state.numberOfTickets} />
        </main>
      </div>
    );
  }
}

export default App;
