import React from 'react';
import { useNavigate } from 'react-router';


function Header() {
    
    const navig=useNavigate();
  return (
    <div
      style={{
        backgroundColor: 'green',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 20px',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div>
        <h1 style={{ color: 'white', fontSize: '24px', margin: 0 }}>Nutriofuel</h1>
      </div>
      <div>
        <button
          style={{
            backgroundColor: 'white',
            color: 'green',
            border: 'none',
            borderRadius: '4px',
            padding: '8px 12px',
            margin: '0 10px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: 'bold',
          }}
          onClick={()=>navig('/')}
        >
          Home
        </button>
      </div>
      <div>
        <input
          type="search"
          placeholder="search"
          style={{
            padding: '8px 12px',
            border: '2px solid white',
            borderRadius: '4px',
            fontSize: '14px',
            outline: 'none',
          }}
        />
      </div>
      <div>
        <button
          style={{
            backgroundColor: 'white',
            color: 'green',
            border: 'none',
            borderRadius: '4px',
            padding: '8px 12px',
            margin: '0 10px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: 'bold',
          }}
          onClick={()=>navig('/Cart')}
        >
          Cart
        </button>
      </div>
    </div>
  );
}

export default Header;
