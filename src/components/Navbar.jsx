// src/components/Navbar.jsx
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import {
  HiMenu,
  HiX,
  HiHome,
  HiInformationCircle,
  HiNewspaper,
  HiBookOpen,
  HiPhotograph,
  HiShoppingCart,
  HiCalendar,
  HiChevronDown,
  HiSun,
  HiMoon,
  HiTranslate,
} from 'react-icons/hi';

// import logo image
import logo from '../assets/logo_transparent.png';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [showBar, setShowBar] = useState(true);
  const { pathname } = useLocation();
  const { isDark, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();

  // Menu items with corresponding icon components
  const items = [
    { to: '/', label: t('home'), icon: HiHome },
    { to: '/kuhusu-sisi', label: t('about'), icon: HiInformationCircle },
    { to: '/habari', label: t('news'), icon: HiNewspaper },
    { to: '/mafunzo', label: t('studies'), icon: HiBookOpen },
    { to: '/media', label: t('media'), icon: HiPhotograph },
    { to: '/duka', label: t('shop'), icon: HiShoppingCart },
    { to: '/matukio', label: t('events'), icon: HiCalendar },
  ];

  // Show top white bar only when at very top (scrollY = 0)
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.pageYOffset;
      setShowBar(currentY === 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const bgClass = isDark ? 'bg-gray-900' : 'bg-gray-800';
  const activeClass = 'text-yellow-400';

  const handleLinkClick = () => {
    setOpen(false);
    setMoreOpen(false);
  };

  // split items: first 4 always visible; rest go into "Zaidi"
  const visibleItems = items.slice(0, 4);
  const overflowItems = items.slice(4);

  return (
    <>
      {/* Top white bar with logo and text, scrolls naturally */}
      {showBar && (
        <div className={`w-full flex items-center justify-center space-x-4 p-4 shadow transition-colors ${
          isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
        }`}>
          <span className="text-xl md:text-2xl font-bold text-gray-800">
            <span className="text-yellow-500">GOD </span>
            <span className="text-blue-900">CARES </span>
            <span className="text-green-800">365</span>
          </span>
        </div>
      )}

      {/* Colored nav is always sticky at top */}
      <nav className={`${bgClass} sticky top-0 z-50 text-white px-4 py-2 flex items-center justify-between transition-colors`}>
        <div className="flex items-center space-x-4">
        {/* Logo as image with improved size */}
        <Link to="/" onClick={handleLinkClick} className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="h-8 md:h-10 lg:h-12 w-auto"
          />
        </Link>
        </div>

        {/* Desktop & Tablet Menu */}
        <ul className="hidden md:flex space-x-6 items-center">
          {visibleItems.map(({ to, label, icon }) => {
            const IconComponent = icon;
            const isActive = pathname === to;
            return (
              <li key={to}>
                <Link
                  to={to}
                  onClick={handleLinkClick}
                  className={`flex items-center space-x-2 hover:underline ${isActive ? activeClass : ''}`}
                >
                  <IconComponent size={20} />
                  <span>{label}</span>
                </Link>
              </li>
            );
          })}

          {/* "Zaidi" dropdown for md & lg only */}
          {overflowItems.length > 0 && (
            <li className="relative hidden md:inline-block xl:hidden">
              <button
                onClick={() => setMoreOpen(!moreOpen)}
                className="flex items-center space-x-1 hover:underline"
              >
                <span>{t('more')}</span>
                <HiChevronDown className={`transform transition-transform ${moreOpen ? 'rotate-180' : ''}`} />
              </button>
              {/* Dropdown only toggled by click */}
              {moreOpen && (
                <ul
                  className={`absolute right-0 mt-2 w-40 rounded shadow-lg overflow-hidden z-10 ${
                    isDark ? 'bg-gray-800 text-white' : 'bg-white text-black'
                  }`}
                >
                  {overflowItems.map(({ to, label, icon }) => {
                    const IconComponent = icon;
                    const isActive = pathname === to;
                    return (
                      <li key={to}>
                        <Link
                          to={to}
                          onClick={handleLinkClick}
                          className={`flex items-center space-x-2 p-2 transition-colors ${
                            isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-200'
                          } ${isActive ? 'font-bold' : ''}`}
                        >
                          <IconComponent size={18} />
                          <span>{label}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          )}

          {/* Full links on xl */}
          {overflowItems.map(({ to, label, icon }) => {
            const IconComponent = icon;
            const isActive = pathname === to;
            return (
              <li key={to} className="hidden xl:block">
                <Link
                  to={to}
                  onClick={handleLinkClick}
                  className={`flex items-center space-x-2 hover:underline ${isActive ? activeClass : ''}`}
                >
                  <IconComponent size={20} />
                  <span>{label}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Theme and Language toggles */}
        <div className="hidden md:flex items-center space-x-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-700 transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? <HiSun size={20} /> : <HiMoon size={20} />}
          </button>
          <button
            onClick={toggleLanguage}
            className="flex items-center space-x-1 p-2 rounded-full hover:bg-gray-700 transition-colors"
            aria-label="Toggle language"
          >
            <HiTranslate size={20} />
            <span className="text-sm font-medium">{language.toUpperCase()}</span>
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <div className="flex items-center space-x-2 md:hidden">
        <button className="focus:outline-none" onClick={() => setOpen(!open)}>
          {open ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full z-50 w-64 ${bgClass} text-white transform transition-transform duration-300 ease-in-out ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4 border-b border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <span className="text-lg font-semibold">Menu</span>
            <button onClick={() => setOpen(false)}>
              <HiX size={24} />
            </button>
          </div>
          
          {/* Mobile Theme and Language toggles */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-700 transition-colors"
            >
              {isDark ? <HiSun size={20} /> : <HiMoon size={20} />}
              <span className="text-sm">{isDark ? 'Light' : 'Dark'}</span>
            </button>
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <HiTranslate size={20} />
              <span className="text-sm">{language === 'sw' ? 'English' : 'Kiswahili'}</span>
            </button>
          </div>
        </div>
        
        <ul className="flex flex-col space-y-2 p-4">
          {items.map(({ to, label, icon }) => {
            const IconComponent = icon;
            const isActive = pathname === to;
            return (
              <li key={to}>
                <Link
                  to={to}
                  onClick={handleLinkClick}
                  className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${isActive ? activeClass : ''} hover:bg-gray-700`}
                >
                  <IconComponent size={22} />
                  <span>{label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      
      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}
