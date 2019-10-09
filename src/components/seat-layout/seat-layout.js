import React, { Component } from 'react';
import './seat-layout.css';

export class SeatLayoutComponent extends Component {

    render() {
        return (
            <div className='cinema-layout'>
                {this.getLayout()}
            </div>
        )
    }

    getLayout() {
        const values = Object.values(this.props.data);
        const keys = Object.keys(this.props.data);

        return keys.map((rowLetter, i) => {
            return (
                <div className='cinema-row' key={i}>
                    <div className='cinema-row_seat-letter'>{rowLetter}</div>
                    {
                        values[i].map((seat, j) => {
                            // TODO: add different types of tickets based on value e.g. sale, regular
                            const activeClass = this.props.selectedSeatNumbers.indexOf(seat.seatNumber) > -1 ? ' active' : ''; 
                            const soldClass = !seat.available ? ' sold' : ''; // TODO: Follow BEM
                            const accessibleClass = seat.disabilityAccessible ? ' accessible' : '';

                            return (
                                <div
                                    key={j}
                                    className={`cinema-row_seat-number${activeClass}${soldClass}${accessibleClass}`}
                                    onClick={seat.available ? this.props.onSeatSelect(seat) : null}
                                >
                                    {seat.seatNumber}
                                </div>
                            );
                        })
                    }
                </div>
            );
        })
    }
}
