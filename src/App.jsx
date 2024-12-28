import { useEffect, useState } from 'react';
import './App.css';
import News from './News';
import Header from './Header';

function App() {
  const [param, setParam] = useState('india');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
 

  const handleSearch = (query) => {
    setParam(query);
  };

  useEffect(() => {
    const fetchData = async () => {
      const currentDate = new Date();
      currentDate.setDate(currentDate.getDate()-1);      
      const previousDate=currentDate.toISOString().split('T')[0];
      try {
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=${param}&from=${previousDate}&apiKey=3261a6dc09394235bac157e2597a9e88`
        );
        const result = await response.json();
        if (response.ok) {
          setData(result.articles); 
          //console.log(result.articles);
          
        } else {
          console.error('Error fetching news:', result.message || 'Unknown error');
        }
      } catch (err) {
        console.error('Error occurred:', err);
      } finally {
        setLoading(false); 
      }
    };

    fetchData();
  }, [param]);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);
  
  return (
    <>
      <Header  handle={handleSearch} />
      {loading ? (<p className="loading-message">
        Loading News.....</p>):
      data ?(<News news={data} />):
      (<p> 
        No News Available. Please try again later.</p>)}
    </>
  );
}

export default App;
