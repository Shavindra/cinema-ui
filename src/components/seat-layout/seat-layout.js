import React, { Component } from 'react';
import './seat-layout.css';

export class SeatLayoutComponent extends Component {

    constructor(props) {
        super(props)
        console.log(this.props.data);
    }

    render() {
        return (
            <div>
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
                            console.log(seat);
                            return (
                                <div
                                    key={j}
                                    className='cinema-row_seat-number'
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