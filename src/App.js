// ----
// Dependencies
import React from 'react';
import { ProjectsProvider, SelectedProjectProvider } from './contexts';


// ----
// Child Components
import { Header } from './components/layout/Header';
import { Content } from './components/layout/Content';


// ----
// App component
export const App = () => {
  return (
    <SelectedProjectProvider>
      <ProjectsProvider>
        <div className="App">
          <Header />
          <Content />
        </div>
      </ProjectsProvider>
    </SelectedProjectProvider>
  )
};

