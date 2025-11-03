export default function Questions(){
  return (
    <div style={{
      width: '100%',
      height: 172,
      borderTop: '1px solid #D7DBEC',
      marginTop: 30,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      alignItems: 'center'
    }}>
      <p style={{
        fontFamily: '"Poppins", sans-serif',
        fontWeight: 700,
        fontSize: 24,
        color: '#131523',
      }}>Still Need Help?</p>
      <p style={{
        fontFamily: '"Poppins", sans-serif',
        fontWeight: 400,
        fontSize: 16,
        color: '#5A607F',
        marginTop: 8
      }}>Get in touch with us and we will be happy to help you out!</p>

      <p style={{
        fontFamily: '"Poppins", sans-serif',
        fontWeight: 400,
        fontSize: 16,
        color: '#FFFFFF',
        marginTop: 28,
        padding: '8px 28px',
        backgroundColor: '#1E5EFF',
        borderRadius: 4,
        cursor: 'pointer'
      }}>Contact Support</p>
    </div>
  )
}