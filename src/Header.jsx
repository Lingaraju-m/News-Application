import React, { useState } from 'react';

const Header = ({ handle }) => {
  const [query, setQuery] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(()=>{
    return localStorage.getItem('theme')==='dark';
  });

  const toggleTheme = ()=>{
    const newTheme=isDarkMode ? 'light' :'dark';
    document.documentElement.setAttribute('data-theme',newTheme);
    localStorage.setItem('theme',newTheme);
    setIsDarkMode(!isDarkMode);
  }

  function abc() {
    const res = query.trim() || 'india';
    handle(res);
    setQuery('');
  }

  return (
    <div className="header-container">
      <header className="header-title">My News App</header>
      <div className="header-search-container">
        <input
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          value={query}
          placeholder="Search the topic..."
        />
        <button onClick={() => abc()}>Search</button>
        <button 
        id='btn2'
        onClick={toggleTheme}
        style={{
          color: isDarkMode ? 'black' : 'white',
        }}
        >
          {isDarkMode ? 'Ligth Mode':'Dark Mode'}</button>
      </div>
    </div>
  );
};

export default Header;
