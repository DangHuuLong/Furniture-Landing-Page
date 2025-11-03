import {Search} from 'lucide-react'
export default function KnowledgeBasePage(){
  return (
    <div style={{
      flex: 1,
      boxSizing: 'border-box',
      alignSelf: 'stretch',
      backgroundColor: '#F5F6FA',
      padding: '30px 40px 40px 40px',
    }}>
      <p style={{
        fontFamily: '"Poppins", sans-serif',
        fontWeight: 700,
        fontSize: 24,
        color: '#131523',
      }}>Knowledge Base</p>

      {/**Search */}
      <div style={{
        marginTop: 54,
        position: 'relative'
      }}>
        <input type="text" 
          placeholder="Search..."
        style={{
          width: '100%',
          height: 48,
          borderRadius: 4,
          border: '1px solid #D9E1EC',
          outline: 'none',
          paddingLeft: 48,
          fontFamily: '"Poppins", sans-serif',
          fontWeight: 400,
          fontSize: 16,
          color: '#A1A7C4',
        }}/>
        <div style={{
          position: 'absolute',
          top: '25%',
          left: 15,
        }}>
          <Search size={24} color='#7E84A3'/>
        </div>
      </div>
    </div>
  )
}