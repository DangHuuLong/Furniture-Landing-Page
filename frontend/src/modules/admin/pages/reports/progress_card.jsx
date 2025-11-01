import CircularProgress from '../../components/circular_progress'
export default function ProgressCard({title, percent, color, datas}){
  return (
    <div style={{
      flex: 1,
      padding: 28,
      borderRadius: 6,
      backgroundColor: 'white',
      display: 'flex',
      flexDirection: 'column',
      gap: 40
    }}>
      <p style={{
        fontFamily: '"Poppins", sans-serif',
        fontWeight: 700,
        fontSize: 16,
        color: '#131523',
      }}>{title}</p>
      <div style={{
        display: 'flex',
        justifyContent: 'center'
      }}>
        <CircularProgress percent={percent} colorProgress={color} />
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }}>
        {datas.map((item, i) => {
          return <div key={i} style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 400,
              fontSize: 14,
              color: '#5A607F',
            }}>{item.title}:</p>
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 700,
              fontSize: 14,
              color: '#131523',
            }}>{item.value}</p>
          </div>
        })}
      </div>
    </div>
  )
}