// App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Message from './pages/Messages';
import ViMi from './pages/vissionmission'
import Courses from './pages/Courses';

import Faculty from './pages/Faculty';
import Library from './pages/Library';
import Research from './pages/Research';

import Events from './pages/Events';

import Contact from './pages/Contact';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Header from './components/Header';
import MootCourt from './pages/moot';
import Event from './pages/event';
import Bph from './pages/BPH';
import Bha from './pages/bha';
import Bot from './pages/bot';
import Bscmit from './pages/bscmit';
import Bscmlt from './pages/Bscmlt';
import Bscrdt from './pages/bscrdt';
import Mha from './pages/mha';
import Mic from './pages/mic';
import Mscmltcb from './pages/mscmltcb';
import Mscmlthb from './pages/mscmlthb';
import Mscmltmi from './pages/mscmltmi';
import Seminar from './pages/seminar';
import Internships from './pages/internships';

import State from './pages/statelevelconference';
import National from './pages/nationallevelconference';
import Bloodcamp from './pages/bloodcamp';


import Training from './pages/training';


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <Header />

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="w-full">
          <div className="max-w-[2000px] mx-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/messages" element={<Message />} />
              <Route path="/vm" element={<ViMi />} />
              <Route path="/bph" element={<Bph />} />
              <Route path="/bha" element={<Bha />} />
              <Route path="/bot" element={<Bot />} />
              <Route path="/bscmit" element={<Bscmit />} />
              <Route path="/bscmlt" element={<Bscmlt />} />
              <Route path="/bscrdt" element={<Bscrdt />} />
              <Route path="/mha" element={<Mha />} />
              <Route path="/mic" element={<Mic />} />
              <Route path="/mscmltcb" element={<Mscmltcb />} />
              <Route path="/mscmlthb" element={<Mscmlthb />} />
              <Route path="/mscmltmi" element={<Mscmltmi />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/state" element={<State />} />
              <Route path="/national" element={<National />} />
              <Route path="/bloodcamp" element={<Bloodcamp />} />
              
              <Route path="/moot-court" element={<MootCourt />} />
              
              <Route path="/seminar" element={<Seminar />} />
              <Route path="/internships" element={<Internships />} />
              <Route path="/event" element={<Event/>} />
              <Route path="/faculty" element={<Faculty />} />
              <Route path="/library" element={<Library />} />
              <Route path="/research" element={<Research />} />
              
              <Route path="/training" element={<Training />} />
              <Route path="/events" element={<Events />} />
              
              <Route path="/contact" element={<Contact />} />
              
            </Routes>
          </div>
        </main>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
