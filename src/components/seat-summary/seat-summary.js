import React, { Component } from 'react';
import './seat-summary.css';

export class SeatSummaryComponent extends Component {

    render() {
        return (
            <div className='ticket'>
                {this.getTicketLayout()}
                <div className='ticket-total'>
                    <div className='ticket-total_description'>Total</div>
                    <div className='ticket-total_value'>£ {this.props.selectedSeatValue}</div>
                </div>
            </div>
        )
    }

    getTicketLayout() {
        return this.props.selectedSeats.map((seat, i) => {
            return (
                <div className='ticket-list'>
                    <div className='ticket-row' key={i}>
                        <div className='ticket-row_description'>{seat.seatNumber}</div>
                        <div className='ticket-row_price'>{seat.price}</div>
                    </div>
                </div>
            );
        })
    }
}
