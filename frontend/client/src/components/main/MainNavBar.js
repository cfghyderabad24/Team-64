import React from 'react';
import Header from './Header';

export default function MainNavBar({ onLogin }) {
  return (
    <div>
      <Header onLogin={onLogin} />
    </div>
  );
}
