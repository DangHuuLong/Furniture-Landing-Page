import React from 'react';

function Toast({ message, type, onDismiss }) {
  const toastStyle = {
    padding: '10px 15px',
    borderRadius: '8px',
    color: 'white',
    marginBottom: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer'
  };

  const getTypeStyle = (type) => {
    switch (type) {
      case 'success':
        return { backgroundColor: '#4CAF50' }; 
      case 'error':
        return { backgroundColor: '#F44336' }; 
      case 'warning':
        return { backgroundColor: '#FFC107' }; 
      default:
        return { backgroundColor: '#2196F3' }; 
    }
  };

  return (
    <div style={{ ...toastStyle, ...getTypeStyle(type) }} onClick={onDismiss}>
      <span style={{
        fontFamily: '"Poppins", sans-serif',
      }}>{message}</span>
      <span style={{ marginLeft: '10px' }}>&times;</span>
    </div>
  );
}

export default Toast;