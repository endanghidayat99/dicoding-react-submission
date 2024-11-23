import React from 'react';
import { createRoot } from 'react-dom/client';

// import style
import './styles/style.css';
import NotesApp from "./components/NotesApp.jsx";

const root = createRoot(document.getElementById('root'));
root.render(<NotesApp/>);