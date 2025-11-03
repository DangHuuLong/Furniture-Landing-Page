import { CircleCheck, CircleMinus } from 'lucide-react';
export default function PricingCard({ pricing }){
  return (
    <div style={{
      borderRadius: 4,
      border: '1px solid #E6E9F4',
      padding: 28,
      position: 'relative',
      flex: 1,
    }}>
      <span style={{
        fontFamily: '"Poppins", sans-serif',
        fontWeight: 700,
        fontSize: 32,
        color: '#131523',
      }}>{pricing.price}</span>
      <span style={{
        fontFamily: '"Poppins", sans-serif',
        fontWeight: 400,
        fontSize: 16,
        color: '#5A607F',
        marginLeft: 8
      }}>/{pricing.unit}</span>
      <p style={{
        fontFamily: '"Poppins", sans-serif',
        fontWeight: 700,
        fontSize: 20,
        color: '#131523',
        marginTop: 20
      }}>{pricing.title}</p>
      <p style={{
        fontFamily: '"Poppins", sans-serif',
        fontWeight: 400,
        fontSize: 16,
        color: '#5A607F',
        marginTop: 8
      }}>{pricing.description}</p>
      <div style={{
        height: 1,
        width: '100%',
        backgroundColor: '#5A607F',
        marginTop: 28
      }}></div>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        marginTop: 28,
        gap: 12
      }}>
        {pricing.planFeatures.map((planFeature, i) => {
          return <div key={i} style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12
          }}>
            {planFeature.included
              ? <CircleCheck size={24} color='#1FD286' />
              : <CircleMinus size={24} color='#7E84A3' />}
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 400,
              fontSize: 16,
              color: '#131523',
            }}>{planFeature.name}</p>
          </div>
        })}
      </div>
      <div style={{
        height: 40,
        width: '100%',
        borderRadius: 4,
        border: pricing.recommended ? 'none' : '1px solid #D7DBEC',
        backgroundColor: pricing.recommended ? '#1E5EFF' : 'transparent',
        marginTop: 28,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <p style={{
          fontFamily: '"Poppins", sans-serif',
          fontWeight: 400,
          fontSize: 16,
          color: pricing.recommended ? 'white' : '#1E5EFF',
        }}>Select Plan</p>
      </div>

      {pricing.recommended && <div style={{
        position: 'absolute',
        width: 116,
        height: 28,
        borderRadius: 4,
        backgroundColor: '#1E5EFF',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        top: -14,
        left: '50%',
        transform: 'translateX(-50%)',
      }}>
        <p style={{
          fontFamily: '"Poppins", sans-serif',
          fontWeight: 400,
          fontSize: 14,
          color: 'white',
        }}>Recommended</p>
      </div>}
    </div>
  )
}