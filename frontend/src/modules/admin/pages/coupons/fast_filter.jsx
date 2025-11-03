import { useState } from 'react';

export default function FastFilter({ fastFilter, color, navFunc = null }) {
  const [activeIndex, setActiveIndex] = useState(0); 

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 24,
        width: '100%',
        borderBottom: '1px solid #E6E9F4'
      }}
    >
      {fastFilter.map((option, i) => {
        const isActive = i === activeIndex;
        return (
          <p
            key={i}
            onClick={() => {
              setActiveIndex(i)
              if(navFunc) navFunc(option)
            }}
            style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 400,
              fontSize: 16,
              color: isActive ? `${color}` : '#5A607F',
              paddingBottom: 14,
              borderBottom: isActive
                ? `2px solid ${color}`
                : 'none',
              cursor: 'pointer',
            }}
          >
            {option}
          </p>
        );
      })}
    </div>
  );
}
