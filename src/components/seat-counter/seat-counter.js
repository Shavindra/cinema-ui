import React from 'react';

export const SeatCounterComponent = ({ ...props }) => {
    // TODO: Set max number of seats
    return (
        <div>
            Select number of seats: <input type="number" onChange={props.onChange} value={props.value} />
        </div>
    )
}
