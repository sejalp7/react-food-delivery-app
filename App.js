import React from 'react';
import ReactDOM from 'react-dom/client';


const parent = React.createElement('div', { id: 'parent'}, [
    React.createElement('h1', {id: 'child'}, 'React Project Inception from scratch')
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(parent);