export default function Card({card}){
  return (
    <div style={{
      height: 400,
      flex: 1,
      borderRadius: 6,
      backgroundColor: 'white',
      padding: 28,
      boxShadow: '0px 1px 4px 0px rgba(21, 34, 50, 0.08)',
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'center'
      }}>
        <img src={card.img} style={{
          width: 140,
          objectFit: 'cover'
        }}/>
      </div>
      <p style={{
        marginTop: 28,
        fontFamily: '"Poppins", sans-serif',
        fontWeight: 700,
        fontSize: 20,
        color: '#131523',
      }}>{card.title}</p>
      <div style={{
        marginTop: 20,
        display: 'flex',
        flexDirection: 'column',
        gap: 12
      }}>
        {card.contents.map((content, i)=>{
          return <p key={i} style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 400,
            fontSize: 14,
            color: '#131523',
          }}>{content}</p>
        })}
      </div>
      <p style={{
        marginTop: 20,
        fontFamily: '"Poppins", sans-serif',
        fontWeight: 400,
        fontSize: 14,
        color: '#1E5EFF',
      }}>More Tutorials</p>
    </div>
  )
}