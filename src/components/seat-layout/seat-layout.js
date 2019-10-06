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
        console.log(this.props.selectedSeatNumbers);

        return keys.map((rowLetter, i) => {
            return (
                <div className='cinema-row' key={i}>
                    <div className='cinema-row_seat-letter'>{rowLetter}</div>
                    {
                        values[i].map((seat, j) => {
                            const activeClass = this.props.selectedSeatNumbers.indexOf(seat.seatNumber) > -1 ? ' active' : '';
                            if(activeClass) {
                                console.log(activeClass);
                            }
                            return (
                                <div
                                    key={j}
                                    className={`cinema-row_seat-number${activeClass}`}
                                    onClick={this.props.onSeatSelect(seat)}
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