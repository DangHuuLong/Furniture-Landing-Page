import { Plus } from 'lucide-react';
export default function Orders(){
  return (
    <div style={{
      flex: 1,
      boxSizing: 'border-box',
      alignSelf: 'stretch',
      backgroundColor: '#F5F6FA',
      padding: '28px 40px 40px 40px'
    }}>
      {/**Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
      }}>
        <p style={{
          fontFamily: '"Poppins", sans-serif',
          fontWeight: 700,
          fontSize: 24,
          color: '#131523',
        }}>Orders</p>
        <div style={{
          display: 'flex',
          gap: 12
        }}>
          <div style={{
            width: 98,
            height: 40,
            borderRadius: 4,
            backgroundColor: 'white',
            border: '1px solid #D7DBEC',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 400,
              fontSize: 16,
              color: '#1E5EFF',
            }}>Export</p>
          </div>
          <div style={{
            width: 148,
            height: 40,
            borderRadius: 4,
            backgroundColor: '#1E5EFF',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Plus size={14} color='white' />
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 400,
              fontSize: 16,
              color: 'white',
              marginLeft: 10
            }}>Add Order</p>
          </div>
        </div>
      </div>
    </div>
  )
}