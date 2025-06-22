// src/components/Navbar.jsx
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
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
} from 'react-icons/hi';

// import logo image
import logo from '../assets/logo_transparent.png';

// Menu items with corresponding icon components
const items = [
  { to: '/GodCares365', label: 'Nyumbani', icon: HiHome },
  { to: '/GodCares365/kuhusu-sisi', label: 'Kuhusu Sisi', icon: HiInformationCircle },
  { to: '/GodCares365/habari', label: 'Habari & Vipengele', icon: HiNewspaper },
  { to: '/GodCares365/mafunzo', label: 'Masomo ya Biblia', icon: HiBookOpen },
  { to: '/GodCares365/media', label: 'Maktaba ya Media', icon: HiPhotograph },
  { to: '/GodCares365/duka', label: 'Duka', icon: HiShoppingCart },
  { to: '/GodCares365/matukio', label: 'Matukio Maalum', icon: HiCalendar },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [showBar, setShowBar] = useState(true);
  const { pathname } = useLocation();

  // Show top white bar only when at very top (scrollY = 0)
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.pageYOffset;
      setShowBar(currentY === 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const bgClass = 'bg-gray-800';
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
        <div className="w-full bg-white flex items-center justify-center space-x-4 p-4 shadow">
          <span className="text-xl md:text-2xl font-bold text-gray-800">
            <span className="text-yellow-500">GOD </span>
            <span className="text-blue-900">CARES </span>
            <span className="text-green-800">365</span>
          </span>
        </div>
      )}

      {/* Colored nav is always sticky at top */}
      <nav className={`${bgClass} sticky top-0 z-50 text-white px-4 py-2 flex items-center justify-between`}>
        {/* Logo as image with improved size */}
        <Link to="/" onClick={handleLinkClick} className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="h-8 md:h-10 lg:h-12 w-auto"
          />
        </Link>

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
                <span>Zaidi</span>
                <HiChevronDown className={`transform transition-transform ${moreOpen ? 'rotate-180' : ''}`} />
              </button>
              {/* Dropdown only toggled by click */}
              {moreOpen && (
                <ul
                  className="absolute right-0 mt-2 w-40 bg-white text-black rounded shadow-lg overflow-hidden z-10"
                >
                  {overflowItems.map(({ to, label, icon }) => {
                    const IconComponent = icon;
                    const isActive = pathname === to;
                    return (
                      <li key={to}>
                        <Link
                          to={to}
                          onClick={handleLinkClick}
                          className={`flex items-center space-x-2 p-2 hover:bg-gray-200 ${isActive ? 'font-bold' : ''}`}
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

        {/* Mobile Toggle Button */}
        <button className="md:hidden focus:outline-none" onClick={() => setOpen(!open)}>
          {open ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full z-50 w-64 ${bgClass} text-white transform transition-transform duration-300 ease-in-out ${open ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <ul className="flex flex-col mt-16 space-y-4 p-4">
          {items.map(({ to, label, icon }) => {
            const IconComponent = icon;
            const isActive = pathname === to;
            return (
              <li key={to}>
                <Link
                  to={to}
                  onClick={handleLinkClick}
                  className={`flex items-center space-x-3 p-2 rounded ${isActive ? activeClass : ''} hover:bg-gray-700`}
                >
                  <IconComponent size={22} />
                  <span>{label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

// Reminder: npm install react-icons
