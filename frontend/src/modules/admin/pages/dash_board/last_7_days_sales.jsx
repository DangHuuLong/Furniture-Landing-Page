export default function Last7DaysSales() {
  const charts = [3000 ,3900 ,3500 ,4000 ,4500 ,5000, 4900]
  const max = Math.max(...charts)
  return (
    <div style={{
      flex: 1,
      height: 470,
      borderRadius: 6,
      backgroundColor: 'white',
      padding: 28,
      display: 'flex', 
      flexDirection: 'column'
    }}>
      <p style={{
        fontFamily: '"Poppins", sans-serif',
        fontWeight: 700,
        fontSize: 16,
        color: '#131523',
      }}>Last 7 Days Sales</p>
      <p style={{
        fontFamily: '"Poppins", sans-serif',
        fontWeight: 700,
        fontSize: 20,
        color: '#131523',
        marginTop: 24
      }}>1,259</p>
      <p style={{
        fontFamily: '"Poppins", sans-serif',
        fontWeight: 400,
        fontSize: 14,
        color: '#5A607F',
      }}>Items Sold</p>
      <p style={{
        fontFamily: '"Poppins", sans-serif',
        fontWeight: 700,
        fontSize: 20,
        color: '#131523',
        marginTop: 20
      }}>$12,546</p>
      <p style={{
        fontFamily: '"Poppins", sans-serif',
        fontWeight: 400,
        fontSize: 14,
        color: '#5A607F',
      }}>Revenue</p>
      <div style={{
        height: 1,
        marginTop: 30,
        backgroundColor: '#E6E9F4',
        width: '100%'
      }}></div>
      <div style={{
        marginTop: 'auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
      }}>
        {charts.map((chart, index)=>{
          return <div
          key={index} 
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 14
          }}>
            <div style={{
              width: 10,
              height: Math.round(160*chart/max),
              borderRadius: 4,
              backgroundColor: '#1FD286'
            }}></div>
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 400,
              fontSize: 12,
              color: '#A1A7C4',
              padding: 0
            }}>{index+12}</p>
          </div>
        })}
      </div>
    </div>
  )
}