import { useTheme } from '../contexts/ThemeContext';

export default function LoadingSpinner({ size = 'medium', text = 'Loading...' }) {
  const { isDark } = useTheme();
  
  const sizeClasses = {
    small: 'w-6 h-6',
    medium: 'w-12 h-12',
    large: 'w-16 h-16'
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className={`${sizeClasses[size]} animate-spin`}>
        <div className={`w-full h-full border-4 border-t-transparent rounded-full ${
          isDark ? 'border-green-400' : 'border-green-600'
        }`}></div>
      </div>
      <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
        {text}
      </p>
    </div>
  );
}