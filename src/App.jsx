// App.jsx
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/navBar.tsx';
import ServicesSection from './components/section.tsx';
import Footer from './components/footer.tsx';
import FormsPage from './components/forms.tsx';

const App = () => {
  return (
    <Router>
      <NavBar />
        <Routes>
          <Route path="/" element={<ServicesSection />} />
          <Route path="/forms" element={<FormsPage/>} />
        </Routes>
        <div>
      <Footer /> 
      </div>
    </Router>
  );
};

export default App;
