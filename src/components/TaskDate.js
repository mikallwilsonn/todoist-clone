// ----
// Dependencies
import React from 'react';
import moment from 'moment';
import { FaSpaceShuttle, FaSun, FaRegPaperPlane } from 'react-icons/fa';


// ----
// TaskDate component
export const TaskDate = ({ setTaskDate, showTaskDate, setShowTaskDate }) => {
    return (
        showTaskDate && (
            <div className="task-date" data-testid="task-date-overlay">
                <ul className="task-date__list">
                    <li data-testid="task-date-today"> 
                        <div 
                            aria-label="Select Today as the task date"
                            onClick={() => {
                                setShowTaskDate( false );
                                setTaskDate( moment().format( 'DD-MM-YYYY' ));
                            }} 
                            onKeyDown={() => {
                                setShowTaskDate( false );
                                setTaskDate( moment().format( 'DD-MM-YYYY' ));
                            }} 
                            role="button" 
                            tabIndex={0} 
                        >
                            <span>
                                <FaSpaceShuttle />
                            </span>

                            <span>
                                Today
                            </span>
                        </div>

                    </li>

                    <li data-testid="task-date-tomorrow"> 
                        <div 
                            aria-label="Select Tomorrow as the task date"
                            onClick={() => {
                                setShowTaskDate( false );
                                setTaskDate( moment().add( 1, 'days' ).format( 'DD-MM-YYYY' ));
                            }} 
                            onKeyDown={() => {
                                setShowTaskDate( false );
                                setTaskDate( moment().add( 1, 'days' ).format( 'DD-MM-YYYY' ));
                            }} 
                            role="button" 
                            tabIndex={0}
                        >
                            <span>
                                <FaSun />
                            </span>

                            <span>
                                Tomorrow
                            </span>
                        </div>

                    </li>

                    <li data-testid="task-date-next-week"> 
                        <div 
                            aria-label="Select Next Week as the task date"
                            onClick={() => {
                                setShowTaskDate( false );
                                setTaskDate( moment().add( 7, 'days' ).format( 'DD-MM-YYYY' ));
                            }} 
                            onKeyDown={() => {
                                setShowTaskDate( false );
                                setTaskDate( moment().add( 7, 'days' ).format( 'DD-MM-YYYY' ));
                            }} 
                            role="button" 
                            tabIndex={0} 
                        > 
                            <span>
                                <FaRegPaperPlane />
                            </span>

                            <span>
                                Next Week
                            </span>
                        </div>

                    </li>
                </ul>
            </div>
        )
    );
}