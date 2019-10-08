
import React from 'react';
import ReactDOM from 'react-dom';
import * as TestUtils from 'react-dom/test-utils';
import { SeatLayoutComponent } from './seat-layout';

describe('SeatLayoutComponent', () => {
    it('SeatLayoutComponent it should render correct markup', () => {

        const props = {
            data: {
                A: [ // Available seat, Accessible seat
                    {
                        seatNumber: '1A',
                        price: '£19.99',
                        available: true,
                        disabilityAccessible: true,
                        seatRow: 'A',
                        seatRowPosition: 1,
                        value: 19.99
                    }
                ],
                B: [ // Sold seat, Accessible seat
                    {
                        seatNumber: '1B',
                        price: '£19.99',
                        available: false,
                        disabilityAccessible: true,
                        seatRow: 'A',
                        seatRowPosition: 1,
                        value: 19.99
                    }
                ],
                C: [ // Available seat, Non accessible
                    {
                        seatNumber: '1C',
                        price: '£19.99',
                        available: true,
                        disabilityAccessible: false,
                        seatRow: 'A',
                        seatRowPosition: 1,
                        value: 19.99
                    }
                ]
            },
            onSeatSelect: () => { },
            selectedSeatNumbers: ['1A']
        }

        const layout = TestUtils.renderIntoDocument(
            <SeatLayoutComponent {...props} />
        );

        const layoutNode = ReactDOM.findDOMNode(layout);
        expect(layoutNode.outerHTML).toEqual('<div class="cinema-layout"><div class="cinema-row"><div class="cinema-row_seat-letter">A</div><div class="cinema-row_seat-number active accessible">1A</div></div><div class="cinema-row"><div class="cinema-row_seat-letter">B</div><div class="cinema-row_seat-number sold accessible">1B</div></div><div class="cinema-row"><div class="cinema-row_seat-letter">C</div><div class="cinema-row_seat-number">1C</div></div></div>');
    });
})
