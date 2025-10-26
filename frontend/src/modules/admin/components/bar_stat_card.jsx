import { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
export default function BarStatCard({ total, title, percent, increase, bars }) {
  const max = bars.length ? Math.max(...bars) : 1;
  const colorsByTitle = {
    "Existing Users": { max: "#1E5EFF", other: "#D9E4FF" },
    "New Users": { max: "#1FD286", other: "#C4F8E2" },
    "Unique Visits": { max: "#FFC700", other: "#FFF4C9" },
  };
  const { max: maximumBarColor, other: otherBarColor } =
    colorsByTitle[title] ?? { max: "black", other: "pink" };
  
  return (
    <div style={{
      width: '100%',
      height: 70,
      borderRadius: 6,
      backgroundColor: 'white',
      boxShadow: '0px 4px 12px rgba(0,0,0,0.2)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingInline: 12
    }}>
      <div>
        <p style={{
          fontFamily: '"Poppins", sans-serif',
          fontWeight: 400,
          fontSize: 10,
          color: 'rgba(90,96,127,1)',
        }}>{title}</p>
        <p style={{
          fontFamily: '"Poppins", sans-serif',
          fontWeight: 700,
          fontSize: 16,
          color: 'rgba(19,21,35,1)',
        }}>{total}</p>
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
          {increase ? <ChevronUp size={12} color="rgba(6,165,97,1)" />: <ChevronDown size={12} color="rgba(240,20,47,1)"/>}
        </div>
      </div>
      <div style={{
        display: 'flex',
        gap: 2,
        height: 50,
        alignItems: 'flex-end',
      }}>
        {bars && bars.map(bar => {
          return <div style={{
            borderRadius: 4,
            width: 12,
            height: `${Math.max(4, Math.round((50 * bar) / max))}px`,
            backgroundColor: bar === max ? maximumBarColor : otherBarColor
          }}>
          </div>
        })}
      </div>
    </div>
  )
}