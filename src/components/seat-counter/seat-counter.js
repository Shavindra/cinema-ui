import React from 'react';

export const SeatCounterComponent = ({ ...props }) => {
    return (
        <div>
            Select number of seats: <input type="number" onChange={props.onChange} value={props.value} />
        </div>
    )
}
