import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import DepartmentsPage from './pages/DepartmentsPage';
import AcademicPage from './pages/AcademicPage';
import AdmissionPage from './pages/AdmissionPage';
import DownloadsPage from './pages/DownloadsPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/departments" element={<DepartmentsPage />} />
        <Route path="/academic" element={<AcademicPage />} />
        <Route path="/admission" element={<AdmissionPage />} />
        <Route path="/downloads" element={<DownloadsPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Router>
  );
}
