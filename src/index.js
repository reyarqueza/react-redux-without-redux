import React, { createContext } from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';

export const AppContext = createContext();

const container = document.getElementById('root');  
const root = createRoot(container);

root.render(<App />);
