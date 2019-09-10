// ----
// Dependencies
import React from 'react';


// ----
// Child Component
import { Sidebar } from './Sidebar';
import { Tasks } from '../Tasks';

// ----
// Content component
export const Content = () => {
    return (
        <section className="content">
            <Sidebar />

            <Tasks />
        </section>
    );
}
