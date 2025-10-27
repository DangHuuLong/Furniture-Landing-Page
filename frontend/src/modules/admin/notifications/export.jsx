import { X, Check } from 'lucide-react';
export default function Export({ open, onClose }) {
  if (!open) return null;
  return (
    <div style={{
      width: '100%',
      height: '100vh',
      backgroundColor: 'rgba(19,21,35,0.4)',
      position: 'fixed',
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>

      <div style={{
        width: 540,
        height: 274,
        borderRadius: 6,
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 16,
        position: 'relative'
      }}>
        <button style={{
          position: 'absolute',
          top: 12,
          right: 12,
          border: 'none',
          backgroundColor: 'transparent',
          cursor: 'pointer'
        }}
          onClick={onClose}>
          <X size={24} color='#7E84A3' />
        </button >
        <div style={{
          width: 58,
          height: 58,
          borderRadius: '50%',
          backgroundColor: '#ECF2FF',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Check size={24} color='#1E5EFF' />
        </div>
        <p style={{
          fontFamily: '"Poppins", sans-serif',
          fontWeight: 700,
          fontSize: 20,
          color: '#131523'
        }}>Export Successfull</p>
        <button style={{
          marginTop: 30,
          height: 40,
          width: 100,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#1E5EFF',
          borderRadius: 4,
          border: 'none',
          cursor: 'pointer'
        }}
        onClick={onClose}>
          <p style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 400,
            fontSize: 16,
            color: '#FFFFFF'
          }}>Continue</p>
        </button>
      </div>
    </div>
  )
}