import React from 'react';

const News = ({ news, isDarkMode }) => {
  if (!news || news.length === 0) {
    return (
      <p className="loading-message">
        No valid news articles available to display.
      </p>
    );
  }

  const filteredNews = news.filter(
    (item) => item.title && item.description && item.url && item.urlToImage
  );

  if (filteredNews.length === 0) {
    return (
      <p className="loading-message">No news available to display.</p>
    );
  }

  return (
    <div className="news-container">
      {filteredNews.map((item, idx) => (
        <div key={idx} 
          style={{
            backgroundColor: isDarkMode ? '#333' : '#fff',
            color: isDarkMode ? '#fff' : '#000',
            border: `1px solid ${isDarkMode ? '#444' : '#ddd'}`, 
            borderRadius: '10px',
            padding: '15px',
            margin: '10px 0',
            boxShadow: isDarkMode ? '0 4px 8px rgba(0, 0, 0, 0.5)' : '0 4px 8px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            flexDirection: 'column',
            height: '100%', 
          }}
          className="news-card">
          <img
            src={item.urlToImage}
            alt={item.title || 'News'}
            className="news-image"
            style={{ width: '100%', borderRadius: '10px', marginBottom: '10px' }}
          />
          <div className="news-content" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flexGrow: 1 }}>
            <h3 className="news-title" 
              style={{ 
                fontSize: '1.75rem', 
                color: isDarkMode ? '#fff' : '#000',
                marginBottom: '10px',
                overflow: 'hidden', 
                textOverflow: 'ellipsis',
                whiteSpace: 'normal', 
                lineHeight: '1.4', 
              }}
            >
              {item.title}
            </h3>
            <p className="news-description" 
              style={{ 
                fontSize: '1rem', 
                lineHeight: '1.5', 
                color: isDarkMode ? '#ccc' : '#555', 
                marginBottom: '10px',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 3, 
              }}
            >
              {item.description}
            </p>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="news-link"
              style={{
                color: isDarkMode ? '#FFD700' : '#1E90FF', 
                textDecoration: 'none',
              }}
            >
              Read More
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default News;
