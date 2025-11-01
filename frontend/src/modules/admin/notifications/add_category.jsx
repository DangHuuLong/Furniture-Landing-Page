import { X, ChevronDown } from 'lucide-react';
import Input from '../components/input'
export default function AddCategory({ open, onClose }) {
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
        }}>Add Category</p>
        <div style={{
          marginTop: 28,
          display: 'flex',
          flexDirection: 'column',
          gap: 24
        }}>
          <Input label={'Category Name'} inputHeight={40} placeHolder={'Women Clothes'} />
          <Input label={'Add Products'} inputHeight={40} placeHolder={'Choose a Product'} Icon={ChevronDown}/>
        </div>
        <div style={{
          display: 'flex',
          gap: 28,
          marginTop: 'auto',
          alignItems: 'center',
          justifyContent: 'flex-end',
          marginTop: 28
        }}>
          <button style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 400,
            fontSize: 16,
            color: '#1E5EFF',
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer'
          }}
            onClick={onClose}
          >Cancel</button>
          <p style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 400,
            fontSize: 16,
            color: '#FFFFFF',
            padding: '8px 24px',
            backgroundColor: '#1E5EFF',
            borderRadius: 4,
            cursor: 'pointer'
          }}>Create Category</p>
        </div>
      </div>
    </div>
  )
}