import React from 'react';
import { Routes, Route } from 'react-router-dom';
import '@assets/css/global.scss';
import { EventProvider } from '@/contexts/EventContext';
import Home from '@/pages/Home';

function App() {
  return (
    <EventProvider data={[]}>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </EventProvider>
  );
}

export default App;
