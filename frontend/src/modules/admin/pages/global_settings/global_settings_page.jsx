export default function GlobalSettingsPage(){
  return (
    <div style={{
      width: '100%',
      height: '100%',
      backgroundColor: '#F5F6FA',
      padding: 28
    }}>
      <p style={{
        fontFamily: '"Poppins", sans-serif',
        fontWeight: 700,
        fontSize: 24,
        color: '#131523',
      }}>Choose a Plan</p>
      <div style={{
        marginTop: 30,
        width: '100%',
        padding: '40px 28px',
        backgroundColor: 'white',
        borderRadius: 6,
        boxShadow: '0px 1px 4px 0px rgba(21, 34, 50, 0.08)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <p style={{
          fontFamily: '"Poppins", sans-serif',
          fontWeight: 700,
          fontSize: 20,
          color: '#131523',
        }}>Pricing Plans</p>
        <p style={{
          fontFamily: '"Poppins", sans-serif',
          fontWeight: 400,
          fontSize: 16,
          color: '#5A607F',
          marginTop: 16,
          textAlign: 'center'
        }}>Familiarize yourself with the payment plans below.<br/>
          Pick best pracing plan to fit your needs.</p>

      </div>
    </div>
  )
}