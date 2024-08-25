import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import MBTITest from './components/MBTITest';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/retro-test" element={<MBTITest />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;