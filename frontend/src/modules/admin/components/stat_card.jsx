import { ChevronUp } from 'lucide-react';
export default function StatCard({Icon, price, title, percent, increase}) {
  return (
    <div style={{
      width: 208,
      height: 70,
      borderRadius: 6,
      backgroundColor: 'white',
      boxShadow: '0px 4px 12px rgba(0,0,0,0.2)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 40
    }}>
      <div>
        <p style={{
          fontFamily: '"Poppins", sans-serif',
          fontWeight: 700,
          fontSize: 16,
          color: 'rgba(19,21,35,1)',
        }}>{price}</p>
        <p style={{
          fontFamily: '"Poppins", sans-serif',
          fontWeight: 400,
          fontSize: 10,
          color: 'rgba(90,96,127,1)',
        }}>{title}</p>
        <div style={{
          display: 'flex',
          gap: 6,
          alignItems: 'center'
        }}>
          <p style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 400,
            fontSize: 10,
            color: increase ? 'rgba(6,165,97,1)' : 'rgba(240,20,47)',
          }}>{percent}%</p>
          <ChevronUp size={12} color={increase ? "rgba(6,165,97,1)" : "rgba(240,20,47,1)"}/>
        </div>
      </div>
      <div style={{
        width: 28,
        height: 28,
        borderRadius: '50%',
        backgroundColor: 'rgba(236, 242, 255, 1)', 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Icon size={12} color='rgba(30,94,255,1)'/>
      </div>
    </div>
  )
}