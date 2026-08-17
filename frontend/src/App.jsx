import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Future routes will be hooked in Phase 3 */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Router>
  );
}
