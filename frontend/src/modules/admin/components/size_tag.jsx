import { X } from "lucide-react"

export default function SizeTag({ id, size, onRemove }){
  return (
    <div style={{
      padding: '2px 8px',
      borderRadius: 4,
      backgroundColor: '#E6E9F4',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 4
    }}>
      <p style={{
        fontFamily: '"Poppins", sans-serif',
        fontWeight: 400,
        fontSize: 14,
        color: '#5A607F',
      }}>{size}</p>
      <button
        type="button"
        onClick={() => onRemove?.(id)}
        aria-label={`Remove ${size}`}
        style={{ 
          border: 'none', 
          background: 'transparent', 
          padding: 0, cursor: 'pointer' ,
          margin: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <X size={16} color="#7E84A3" />
      </button>
    </div>
  )
}