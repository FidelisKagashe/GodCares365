import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import PageLoader from './components/PageLoader';
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
    <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter basename='/GodCares365/'>
          <PageLoader>
            <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
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
            </div>
          </PageLoader>
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;