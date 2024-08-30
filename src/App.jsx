import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import MBTITest_retro from './components/MBTITest_retro';
import MBTITest_music from './components/MBTITest_music';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/retro-test" element={<MBTITest_retro />} />
          <Route path="/music-test" element={<MBTITest_music />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;