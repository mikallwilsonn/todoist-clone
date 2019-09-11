// -----
// Dependencies
import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { useSelectedProjectValue } from '../contexts';

// ----
// Component
import { AddTask } from '../components/AddTask';


// ----
// Tests

// Mocking context
jest.mock( '../contexts', () => ({
    useSelectedProjectValue: jest.fn(() => ({
        selectedProject: 1
    })),
    useProjectsValue: jest.fn(() => ({ projects: []}))
}));


// Mocking Firebase
jest.mock( '../firebase', () => ({
    firebase: {
        firestore: jest.fn(() => ({
            collection: jest.fn(() => ({
                add: jest.fn(() => Promise.resolve( 'Never mock firebase' ))
            }))
        }))
    }
}));


beforeEach( cleanup );


describe( '<AddTask />', () => {

    afterEach(() => {
        jest.clearAllMocks();
    });


    describe( 'success', () => {
        it( 'renders the component', () => {
            const { queryByTestId } = render( <AddTask /> );

            expect( queryByTestId( 'add-task-comp' )).toBeTruthy();
        });


        it( 'renders the quick overlay', () => {
            const setShowQuickAddTask = jest.fn();

            const { queryByTestId } = render( 
                <AddTask 
                    showAddTaskMain  
                    shouldShowMain={false} 
                    showQuickAddTask 
                    setShowQuickAddTask={setShowQuickAddTask} 
                /> 
            );

            expect( queryByTestId( 'quick-add-task' )).toBeTruthy();
        });


        it( 'renders the <AddTask /> main showable when clicked', () => {
            const { queryByTestId } = render( <AddTask showAddTaskMain /> );

            fireEvent.click( queryByTestId( 'show-main-action' ));

            expect( queryByTestId( 'add-task-main' )).toBeTruthy();
        });


        it( 'renders the <AddTask /> main showable when clicked', () => {
            const { queryByTestId } = render( <AddTask showAddTaskMain /> );

            fireEvent.click( queryByTestId( 'show-main-action' ));

            expect( queryByTestId( 'add-task-main' )).toBeTruthy();
        });
    });
});