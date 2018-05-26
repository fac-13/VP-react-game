import React from 'react';
import './css/tamagotchi.css';
import ErrorBoundary from './ErrorBoundary';

const text = `{ 💜: 'complement my code', 🐶: 'send me an
emoji', ⭐: 'star one of my repos' }`;

const Legend = () => {
  return (
    <React.Fragment>
      <br />
      <p>
        const <strong>legend</strong> = {text}
      </p>
    </React.Fragment>
  );
};

export default ErrorBoundary(Legend);
