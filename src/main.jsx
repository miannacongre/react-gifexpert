import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { GifExpertapp } from './GifExpertApp';
import './styles.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GifExpertapp />
  </StrictMode>,
);
