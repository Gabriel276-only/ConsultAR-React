// App.jsx
import './App.css';
import React from 'react';
import NavBar from './components/navBar.tsx';
import Section from './components/section.tsx';
import  Footer  from './components/footer.tsx';
const App = () => {
  return (
    <div>
      <NavBar />
  <div className="flex flex-col min-h-screen">
  <main className="flex-grow">
        <div>
          <Section /> 
        <div className="flex z-10">
          </div>
        </div>
      </main>
      </div>
      <div> 
        <Footer />
      </div>
     
    </div>
  );
};

export default App;