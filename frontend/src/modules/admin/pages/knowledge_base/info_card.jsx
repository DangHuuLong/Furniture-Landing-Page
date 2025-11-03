export default function InfoCard({infoCard}){
  return (
    <div style={{
      height: 176,
      flex: 1,
      borderRadius: 6,
      backgroundColor: 'white',
      padding: '28px 112px 28px 28px',
      boxShadow: '0px 1px 4px 0px rgba(21, 34, 50, 0.08)',
    }}>
      <p style={{
        fontFamily: '"Poppins", sans-serif',
        fontWeight: 700,
        fontSize: 20,
        color: '#131523',
      }}>{infoCard.title}</p>

      <p style={{
        fontFamily: '"Poppins", sans-serif',
        fontWeight: 400,
        fontSize: 14,
        color: '#131523',
        marginTop: 12
      }}>{infoCard.content}</p>

      <p style={{
        fontFamily: '"Poppins", sans-serif',
        fontWeight: 400,
        fontSize: 14,
        color: '#1E5EFF',
        marginTop: 20
      }}>{infoCard.action}</p>
    </div>
  )
}