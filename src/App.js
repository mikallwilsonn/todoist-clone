// ----
// Dependencies
import React, { useState } from 'react';
import { ProjectsProvider, SelectedProjectProvider } from './contexts';


// ----
// Child Components
import { Header } from './components/layout/Header';
import { Content } from './components/layout/Content';


// ----
// App component
export const App = ({ darkModeDefault = false }) => {

  const [ darkMode, setDarkMode ] = useState( darkModeDefault );

  return (
    <SelectedProjectProvider>
      <ProjectsProvider>
        <main 
          className={ darkMode ? 'darkmode' : undefined } 
          data-testid="application"
        >
          <Header 
            darkMode={darkMode} 
            setDarkMode={setDarkMode} 
          />

          <Content />
        </main>
      </ProjectsProvider>
    </SelectedProjectProvider>
  )
};

