import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/molecules/Header/Header';
import GraphTable from './components/organisms/GraphTable/GraphTable';
import GraphMonths from './components/organisms/GraphMonths/GraphMonths';
import GraphYear from './components/organisms/GraphYear/GraphYear';
import data from './components/atoms/Data';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <header>
          <Header />
        </header>
        <main className="main-content">
          <Routes>
            <Route path="/table/:month/:numberOfDays" element={<GraphTable data={data} />} />
            <Route path="/meses" element={<GraphMonths />} />
            <Route path="/year" element={<GraphYear data={data} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
