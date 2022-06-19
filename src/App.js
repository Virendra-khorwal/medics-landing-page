import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Cta from './components/CTA/Cta';
import Features from './components/features/Features';
import Footer from './components/footer/footer';
import Intro from './components/Intro/Intro';
import Navbar from './components/Navbar/Navbar';
import Working from './components/working/Working';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Intro />
        <Features />
        <Working />
        <Cta />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
