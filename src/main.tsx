import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AccessibilityPlayground } from '../playground/AccessibilityPlayground';
import './styles.css';

createRoot(document.getElementById('root')!).render(<StrictMode><AccessibilityPlayground /></StrictMode>);
