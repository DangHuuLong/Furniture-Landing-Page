import { X, Check } from 'lucide-react';
import { useState } from 'react';
export default function DeleteItems({ open, onClose }) {
  const [deleteBtn, setDeleteBtn] = useState(false)
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
      {!deleteBtn ?
        <div style={{
          width: 540,
          height: 208,
          padding: 28,
          backgroundColor: 'white',
          borderRadius: 4,
          boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
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
          <p style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 700,
            fontSize: 20,
            color: '#131523'
          }}>Delete Items</p>
          <p style={{
            marginTop: 20,
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 400,
            fontSize: 16,
            color: '#131523'
          }}>Are you sure you want to delete 5 selected items?</p>
          <div style={{
            display: 'flex',
            gap: 28,
            marginTop: 'auto',
            alignItems: 'center',
            justifyContent: 'flex-end'
          }}>
            <button style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 400,
              fontSize: 16,
              color: '#F0142F',
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer'
            }}
              onClick={() => setDeleteBtn(!deleteBtn)}
              >Cancel</button>
            <button style={{
              width: 98,
              height: 40,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#F0142F',
              borderRadius: 4,
              border: 'none',
              cursor: 'pointer'
            }}
            onClick={()=>setDeleteBtn(!deleteBtn)}>
              <p style={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 400,
                fontSize: 16,
                color: '#FFFFFF'
              }}>Delete</p>
            </button>
          </div>
        </div> 
        :
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
          <div style={{
            width: 58,
            height: 58,
            borderRadius: '50%',
            backgroundColor: '#FFA8B3',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <Check size={24} color='white'/>
          </div>  
          <p style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 700,
            fontSize: 20,
            color: '#131523'
          }}>Delete Successfull</p>
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
        </div>}
    </div>
  )
}