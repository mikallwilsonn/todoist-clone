// ----
// Dependencies
import React from 'react';
import { firebase } from '../firebase';


// ----
// Checkbox component
export const Checkbox = ({ id }) => {
    const archiveTask = () => {
        firebase
            .firestore()
            .collection( 'tasks' )
            .doc( id )
            .update({ arhived: true })
    }

    return (
        <div 
            className="checkbox-holder" 
            data-testid="checkbox-action" 
            onClick={ () => archiveTask() }
        >
            <span className="checkbox" />
        </div>
    );
}
