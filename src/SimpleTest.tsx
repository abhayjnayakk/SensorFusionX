import React, { useEffect, useState } from 'react';

const SimpleTest = () => {
  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    setMounted(true);
    console.log("SimpleTest component mounted!");
    
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) {
    return (
      <div style={{ padding: '20px', textAlign: 'center', color: 'white' }}>
        <p>Loading React app...</p>
      </div>
    );
  }

  return (
    <div style={{ 
      padding: '20px', 
      textAlign: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <h1 style={{ 
        color: 'white', 
        fontSize: '3rem',
        marginBottom: '20px',
        textShadow: '0 0 20px rgba(255,255,255,0.5)'
      }}>
        🚀 React App is Working!
      </h1>
      <p style={{ 
        color: '#f0f0f0', 
        fontSize: '1.2rem',
        marginBottom: '20px'
      }}>
        If you can see this, the React application is mounting correctly.
      </p>
      <div style={{
        background: 'rgba(255,255,255,0.1)',
        padding: '20px',
        borderRadius: '10px',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255,255,255,0.2)'
      }}>
        <p style={{ color: '#fff', margin: '0' }}>
          Current Time: {time}
        </p>
        <p style={{ color: '#fff', margin: '10px 0 0 0' }}>
          Status: ✅ React App Successfully Loaded
        </p>
      </div>
    </div>
  );
};

export default SimpleTest;
