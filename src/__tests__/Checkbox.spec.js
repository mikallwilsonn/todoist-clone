// -----
// Dependencies
import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';


// ----
// Component
import { Checkbox } from '../components/Checkbox';


// ----
// Tests
beforeEach( cleanup );


// Mocking Firebase
jest.mock( '../firebase', () => ({
    firebase: {
        firestore: jest.fn(() => ({
            collection: jest.fn(() => ({
                doc: jest.fn(() => ({
                    update: jest.fn()
                }))
            }))
        }))
    }
}));


describe( '<Checkbox />', () => {
    describe( 'success', () => {
        it( 'renders the task checkbox', () => {
            const { queryByTestId } = render( 
                <Checkbox id="1" taskDesc="Mark this task as done?" /> 
            );

            expect( queryByTestId( 'checkbox-action' )).toBeTruthy();
        });


        it( 'renders the task checkbox and accepts a click', () => {
            const { queryByTestId } = render( 
                <Checkbox id="1" taskDesc="Mark this task as done?" /> 
            );

            expect( queryByTestId( 'checkbox-action' )).toBeTruthy();
            fireEvent.click( queryByTestId( 'checkbox-action' ));
        });


        it( 'renders the task checkbox and accepts an onKeydown', () => {
            const { queryByTestId } = render( 
                <Checkbox id="1" taskDesc="Mark this task as done?" /> 
            );

            expect( queryByTestId( 'checkbox-action' )).toBeTruthy();
            fireEvent.keyDown( queryByTestId( 'checkbox-action' ));
        });
    });
})