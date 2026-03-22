import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import CyreneAI from './pages/CyreneAI';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ai" element={<CyreneAI />} />
        </Routes>
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
