// ----
// Dependencies
import React from 'react';
import { useProjectsValue } from '../contexts';


// ----
// ProjectOverlay component
export const ProjectOverlay = ({ setProject, showProjectOverlay, setShowProjectOverlay }) => {

    const { projects } = useProjectsValue();


    return (
        projects && showProjectOverlay && (
            <div className="project-overlay" data-testid="project-id">
                <ul className="project-overlay__list">
                    { projects.map( project => (
                        <li
                            key={project.projectId} 
                            data-testid="project-overlay-action" 
                        >
                            <div 
                                aria-label="select the task project"
                                onClick={() => {
                                    setProject( project.projectId );
                                    setShowProjectOverlay( false );
                                }} 
                                onKeyDown={() => {
                                    setProject( project.projectId );
                                    setShowProjectOverlay( false );
                                }} 
                                role="button" 
                                tabIndex={0} 
                            >
                                {project.name}
                            </div>
                            
                        </li>
                    )) }
                </ul>
            </div>
        )
    );
}
