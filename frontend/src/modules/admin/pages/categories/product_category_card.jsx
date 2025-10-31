import { useState } from "react"
import { PenLine, Trash } from 'lucide-react';
export default function ProductCategoryCard({name, img}){
  const [hover, setHover] = useState(false)
  return (

    <div style={{
      height: 80,
      width: '100%',
      borderRadius: 4,
      border: '1px solid #E6E9F4',
      display: 'flex',
      alignItems: 'center',
      padding: 16,
    }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 4
      }}>
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            style={{
              width: 4,
              height: 4,
              borderRadius: '50%',
              backgroundColor: '#59657A',
            }}
          ></div>
        ))}
      </div>
      <div style={{
        height: 48,
        width: 48,
        borderRadius: 4,
        backgroundColor: '#ECF2FF',
        overflow: 'hidden',
        marginLeft: 16,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <img src={img} style={{
          objectFit: 'cover',
          height: '100%'
        }} />
      </div>
      <p style={{
        fontFamily: '"Poppins", sans-serif',
        fontWeight: 500,
        fontSize: 14,
        color: '#131523',
        marginLeft: 16
      }}>{name}</p>
      {hover && <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
        marginLeft: 'auto'
      }}>
        <PenLine size={24} color="#7E84A3" style={{ cursor: 'pointer' }} />
        <Trash size={24} color="#7E84A3" style={{ cursor: 'pointer' }} />
      </div>}
    </div>
  )
}