import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('light'); // Default theme
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Modal visibility

  // Apply the selected theme
  useEffect(() => {
    const root = window.document.documentElement;

    // Remove previous theme classes
    root.classList.remove('light', 'dark');
    if (theme === 'system') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
    } else {
      root.classList.add(theme);
    }

    // Save theme to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Load theme from localStorage on mount
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') || 'light';
    setTheme(storedTheme);
  }, []);

  return (
    <div className="relative inline-block text-left">
      {/* Toggle Button */}
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="btn btn-ghost btn-circle"
        aria-haspopup="true"
        title="Theme Toggle"
      >
        {theme === 'light' && <span>🌞</span>}
        {theme === 'dark' && <span>🌙</span>}
        {theme === 'system' && <span>💻</span>}
      </button>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div
          className="absolute right-0 mt-2 w-36 origin-top-right rounded-md bg-base-100 shadow-lg ring-1 ring-black ring-opacity-5 z-50"
          onClick={() => setIsDropdownOpen(false)} // Close dropdown when clicked
        >
          <div className="py-1">
            <button
              onClick={() => setTheme('light')}
              className={`flex items-center px-4 py-2 w-full text-left text-sm hover:bg-gray-100 ${
                theme === 'light' ? 'bg-gray-200 font-bold' : ''
              }`}
            >
              🌞 Light
            </button>
            <button
              onClick={() => setTheme('dark')}
              className={`flex items-center px-4 py-2 w-full text-left text-sm hover:bg-gray-100 ${
                theme === 'dark' ? 'bg-gray-200 font-bold' : ''
              }`}
            >
              🌙 Dark
            </button>
            <button
              onClick={() => setTheme('system')}
              className={`flex items-center px-4 py-2 w-full text-left text-sm hover:bg-gray-100 ${
                theme === 'system' ? 'bg-gray-200 font-bold' : ''
              }`}
            >
              💻 System
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;
