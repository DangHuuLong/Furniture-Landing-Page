import { PenLine } from 'lucide-react';
import { useState } from 'react';

export default function CategoryCard({ imagePath, productName, stock }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      style={{
        flex: 1,
        height: 324,
        backgroundColor: 'white',
        borderRadius: 6,
        boxShadow: '0px 1px 4px 0px rgba(21, 34, 50, 0.08)',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Khu vực ảnh */}
      <div
        style={{
          width: '100%',
          height: 240,
          position: 'relative',
          overflow: 'hidden',
          cursor: 'pointer',
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <img
          src={imagePath}
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
            display: 'block',
            transition: 'transform 0.3s ease',
            transform: hover ? 'scale(1.05)' : 'scale(1)',
          }}
        />
        {hover && (
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(51, 55, 82, 0.7)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                width: 98,
                height: 40,
                borderRadius: 4,
                backgroundColor: 'white',
                border: '1px solid #D7DBEC',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 4,
              }}
            >
              <PenLine size={24} color="#1E5EFF" />
              <p
                style={{
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: 400,
                  fontSize: 16,
                  color: '#1E5EFF',
                }}
              >
                Edit
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Nội dung dưới ảnh */}
      <div
        style={{
          padding: '20px 28px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <p
          style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 700,
            fontSize: 16,
            color: '#131523',
          }}
        >
          {productName}
        </p>

        <p
          style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 400,
            fontSize: 14,
            color: '#131523',
          }}
        >
          {stock} items
        </p>
      </div>
    </div>
  );
}
