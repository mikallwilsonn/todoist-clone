// ----
// Dependencies
import React from 'react';
import { firebase } from '../firebase';


// ----
// Checkbox component
export const Checkbox = ({ id, taskDesc }) => {
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
            onKeyDown={ () => archiveTask() } 
            role="button" 
            tabIndex={0} 
            aria-label={`Mark ${taskDesc} as complete`}
        >
            <span className="checkbox" />
        </div>
    );
}
