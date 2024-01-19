import React from "react";
import App from '.App.jsx';
import { createRoot } from 'react-dom/client';


console.log('hieee');

// Clear the existing HTML content
document.body.innerHTML = '<div id="app"></div>';

// Render your React component instead
const root = createRoot(document.getElementById('app'));
root.render(<h1>Hello, world</h1>);



//import the audio from the file 
// let beat = new Audio('audio.mp3');

