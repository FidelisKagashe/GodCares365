import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import logo from '../assets/logo_transparent.png';

export default function PageLoader({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useLanguage();
  const { isDark } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className={`fixed inset-0 z-50 flex items-center justify-center ${
        isDark ? 'bg-gray-900' : 'bg-white'
      }`}>
        <div className="text-center space-y-6">
          <div className="relative">
            <img
              src={logo}
              alt="GOD CARES 365"
              className="w-24 h-24 mx-auto animate-pulse"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-green-500 to-blue-600 rounded-full opacity-20 animate-ping"></div>
          </div>
          
          <div className="space-y-2">
            <h1 className={`text-2xl font-bold ${
              isDark ? 'text-white' : 'text-gray-800'
            }`}>
              <span className="text-yellow-500">GOD </span>
              <span className="text-blue-600">CARES </span>
              <span className="text-green-600">365</span>
            </h1>
            <p className={`text-sm ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              {t('loading')}
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="w-8 h-8 border-4 border-t-transparent border-green-500 rounded-full animate-spin"></div>
          </div>
        </div>
      </div>
    );
  }

  return children;
}