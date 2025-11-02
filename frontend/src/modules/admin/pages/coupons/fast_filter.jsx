import { useState } from 'react';

export default function FastFilter({ fastFilter }) {
  const [activeIndex, setActiveIndex] = useState(0); 

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 24,
        marginBottom: 16,
        width: '100%',
        borderBottom: '1px solid #E6E9F4'
      }}
    >
      {fastFilter.map((option, i) => {
        const isActive = i === activeIndex;
        return (
          <p
            key={i}
            onClick={() => setActiveIndex(i)}
            style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 400,
              fontSize: 16,
              color: isActive ? '#4944E6' : '#5A607F',
              paddingBottom: 14,
              borderBottom: isActive
                ? '2px solid #4944E6'
                : 'none',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            {option}
          </p>
        );
      })}
    </div>
  );
}
