// ----
// Dependencies
import React, { useState } from 'react';
import { FaPizzaSlice, FaPlus } from 'react-icons/fa';


// ----
// Child Components
import { AddTask } from '../AddTask';

// ----
// Header component
export const Header = ({ darkMode, setDarkMode }) => {

    const [ shouldShowMain, setShouldShowMain ] = useState( false );
    const [ showQuickAddTask, setShowQuickAddTask ] = useState( false );

    return (
        <header className="header" data-testid="header">
            <nav>
                <div className="logo">
                    <img src="/images/logo.png" alt="Todoist" />
                </div>

                <div className="settings">
                    <ul>
                        <li 
                            className="settings__add" 
                            data-testid="quick-add-task-action" 
                        >
                            <button 
                                aria-label="Quick Add Task"
                                type="button" 
                                onClick={() => {
                                    setShowQuickAddTask( true );
                                    setShouldShowMain( true );
                                }} 
                                onKeyDown={() => {
                                    setShowQuickAddTask( true );
                                    setShouldShowMain( true );
                                }} 
                                tabIndex={0} 
                            >
                                <FaPlus />
                            </button>
                        </li>

                        <li 
                            className="settings__darkmode" 
                            data-testid="dark-mode-action" 
                        >
                            <button 
                                type="button"
                                onClick={() => setDarkMode( !darkMode )} 
                                onKeyDown={() => setDarkMode( !darkMode )}
                                tabIndex={0} 
                                aria-label="Dark Mode on/of"
                            >
                                <FaPizzaSlice />
                            </button>
                            
                        </li>
                    </ul>
                </div>
            </nav>

            <AddTask 
                showAddTaskMain={false}
                shouldShowMain={shouldShowMain}
                setShouldShowMain={setShouldShowMain}
                showQuickAddTask={showQuickAddTask}
                setShowQuickAddTask={setShowQuickAddTask}
            />
        </header>
    );
}
