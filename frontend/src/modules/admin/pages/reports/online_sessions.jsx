import { MoveUp } from 'lucide-react';
export default function OnlineSessions(){
  return (
    <div style={{
      flex: 1,
      borderRadius: 6,
      backgroundColor: "white",
      boxShadow: "0px 1px 4px 0px rgba(21, 34, 50, 0.08)",
      padding: 28,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }}>
      <p style={{
        fontFamily: '"Poppins", sans-serif',
        fontWeight: 700,
        fontSize: 16,
        color: '#131523',
      }}>Online Sessions</p>
      <div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 4,
        }}>
          <p style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 700,
            fontSize: 20,
            color: '#131523',
          }}>128</p>
          <MoveUp size={24} color='#1FD286' />
        </div>
        <p style={{
          fontFamily: '"Poppins", sans-serif',
          fontWeight: 400,
          fontSize: 14,
          color: '#5A607F',
        }}>Active Users</p>
      </div>
    </div>
  )
}