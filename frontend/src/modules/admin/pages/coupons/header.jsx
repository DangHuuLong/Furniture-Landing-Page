import { Plus } from "lucide-react";

export default function Header(){
  return (
    <div style={{
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
      <p style={{
        fontFamily: '"Poppins", sans-serif',
        fontWeight: 700,
        fontSize: 24,
        color: '#131523',
      }}>Coupons</p>
      <div style={{
        padding: '8px 52px',
        borderRadius: 4,
        backgroundColor: '#1E5EFF',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 4
      }}>
        <Plus size={24} color='white' />
        <p style={{
          fontFamily: '"Poppins", sans-serif',
          fontWeight: 400,
          fontSize: 16,
          color: 'white',
        }}>Create</p>
      </div>
    </div>
  )
}