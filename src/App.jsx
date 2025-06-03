import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Habari from './pages/Habari';
import Home from './pages/Home';
import Kuhusu from './pages/Kuhusu';
import Mafunzo from './pages/Mafunzo';
import MediaLib from './pages/MediaLib';
import Shop from './pages/Shop';
import Events from './pages/Events';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kuhusu-sisi" element={<Kuhusu />} />
        <Route path="/habari" element={<Habari />} />
        <Route path="/mafunzo" element={<Mafunzo />} />
        <Route path="/media" element={<MediaLib />} />
        <Route path="/duka" element={<Shop />} />
        <Route path="/matukio" element={<Events />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;