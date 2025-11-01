import { StarHalf, Star } from 'lucide-react';
export default function Info({ name, location, orders }) {
  const safeName = name || '';
  const firstLetter = safeName.charAt(0).toUpperCase() || '?';

  return (
    <div style={{
      width: '100%',
      height: 360,
      borderRadius: 6,
      backgroundColor: 'white',
      padding: 28
    }}>
      <div style={{
        display: 'flex',
      }}>
        <div style={{
          width: 72,
          height: 72,
          borderRadius: '50%',
          backgroundColor: '#A1A7C4',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <p style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 700,
            fontSize: 32,
            color: '#FFFFFF',
          }}>{firstLetter}</p>
        </div>
        <div style={{
          marginLeft: 18
        }}>
          <p style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 700,
            fontSize: 16,
            color: '#131523',
            marginBottom: 8
          }}>{name}</p>
          <p style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 400,
            fontSize: 14,
            color: '#5A607F',
          }}>{location}</p>
          <p style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 400,
            fontSize: 14,
            color: '#5A607F',
          }}>{orders} Orders</p>
          <p style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 400,
            fontSize: 14,
            color: '#5A607F',
          }}>Customer for 2 years</p>
        </div>
        {/**Rating */}
        <div style={{
          display: 'flex',
          gap: 4,
          marginLeft: 'auto',
          marginTop: 12
        }}>
          <Star size={24} color='#FFC700' />
          <Star size={24} color='#FFC700' />
          <Star size={24} color='#FFC700' />
          <Star size={24} color='#FFC700' />
          <StarHalf size={24} color='#FFC700' />
        </div>
      </div>
      <div style={{
        marginTop: 40,
        height: 1,
        width: '100%',
        backgroundColor: '#E6E9F4'
      }}></div>
      <p style={{
        marginTop: 28,
        fontFamily: '"Poppins", sans-serif',
        fontWeight: 700,
        fontSize: 16,
        color: '#131523',
      }}>Customer Notes</p>
      <div style={{
        marginTop: 28
      }}>
        <p style={{
          fontFamily: '"Poppins", sans-serif',
          fontWeight: 400,
          fontSize: 14,
          color: '#5A607F',
        }}>Notes</p>
        <textarea
          placeholder='Add notes about customer'
          style={{
            height: 72,
            width: '100%',
            border: '1px solid #D9E1EC',
            padding: '12px 16px',
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 400,
            fontSize: 16,
            color: '#A1A7C4',
            borderRadius: 4,
            marginTop: 4,
            outline: 'none'
          }}/>
      </div>
    </div>
  )
}