import { useState } from 'react';

export default function CouponType({ types }) {
  const [activeIndex, setActiveIndex] = useState(0); 
  return (
    <div style={{
      width: '100%',
      display: 'flex',
      gap: 24,
      marginTop: 24
    }}>
      {types.map((type, i) => {
        const isActive = i === activeIndex
        return (
          <button
            key={i}
            onClick={() => setActiveIndex(i)} 
            style={{
            flex: 1,
            height: 108,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 12,
            border: isActive ? '2px solid #1E5EFF' : '1px solid #D7DBEC',
            backgroundColor: 'white',
            borderRadius: 4,
            cursor: 'pointer'
          }}>
            <type.Icon size={24} color={isActive ? '#1E5EFF' : '#5A607F'}/>
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 400,
              fontSize: 16,
              color: isActive ? '#1E5EFF' : '#5A607F',
            }}>{type.name}</p>
          </button>
        )
      })}
    </div>
  )
}