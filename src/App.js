import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Browse from './Components/Browse/Browse';
import ConceptSequence from './Components/ConceptSequence/ConceptSequence';
import Favorites from './Components/Favorites';
import YearlyLessonList from './Components/YearlyLessonList/YearlyLessonList';
import YearlySongList from './Components/YearlySongList/YearlySongList';
import NavBar from './Components/NavBar/NavBar';
import Sidebar from './Components/Sidebar/Sidebar';
import LessonTemplate from './Components/LessonTemplate/LessonTemplate';
import LanguageSettings from './Components//LanguageSettings/LanguageSettings';

import './App.css';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
      <div className="App">
        <NavBar toggleSidebar={toggleSidebar} />
        <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/concept-sequence" element={<ConceptSequence />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/yearly-lessons" element={<YearlyLessonList />} />
            <Route path="/yearly-songs" element={<YearlySongList />} />
            <Route path="/language-settings" element={<LanguageSettings />} />
            <Route path="/lesson-template" element={<LessonTemplate />} />
          </Routes>
        </div>
      </div>
  );
}

export default App;
