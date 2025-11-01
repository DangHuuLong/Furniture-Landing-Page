import { Download } from 'lucide-react';
export default function Header(){
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%'
    }}>
      <p style={{
        fontFamily: '"Poppins", sans-serif',
        fontWeight: 700,
        fontSize: 24,
        color: '#131523',
      }}>Reports</p>
      <div style={{
        padding: '8px 48px',
        borderRadius: 4,
        backgroundColor: '#1E5EFF',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 4
      }}>
        <Download size={24} color='white'/>
        <p style={{
          fontFamily: '"Poppins", sans-serif',
          fontWeight: 400,
          fontSize: 16,
          color: 'white',
        }}>Export</p>
      </div>
    </div>
  )
}