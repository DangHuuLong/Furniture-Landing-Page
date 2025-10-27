export default function RecentTransactions(){
  const columns = ['Name', 'Date', 'Amount', 'Status']
  const datas = [
    ['Jagarnath S.', '24.05.2023', 124.97, 'Paid'],
    ['Anand G.', '23.05.2023', 55.42, 'Pending'],
    ['Kartik S.', '23.05.2023', 89.90, 'Paid'],
    ['Rakesh S.', '22.05.2023', 144.94, 'Pending'],
    ['Anup S.', '22.05.2023', 70.52, 'Paid'],
  ];
  return (
    <div style={{
      padding: 28,
      backgroundColor: 'white',
      borderRadius: 6,
      border: '1px solid #E6E9F4',
      flex: 1
    }}>
      <p style={{
        fontFamily: '"Poppins", sans-serif',
        fontWeight: 700,
        fontSize: 24,
        color: '#131523)',
      }}>Recent Transactions</p>

      {/**Table */}
      <div style={{
        marginTop: 20,
        width: '100%'
      }}>
        <div style={{
          display: 'flex',
          borderBottom: '1px solid #E6E9F4',
          width: '100%',
          paddingTop: 12, 
          paddingBottom: 12,
        }}>
          {columns.map((column, i) => {
            return <p 
            key={i}
            style={{
              padding: 8,
              flex: 1,
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 400,
              fontSize: 14,
              color: '#5A607F)',
            }}>{column}</p>
          })}
        </div>
        {datas.map((row,index)=>{
          return <div 
          key={index}
          style={{
            display: 'flex',
            borderBottom: '1px solid #E6E9F4',
            width: '100%',
            paddingTop: 16,
            paddingBottom: 16,
            alignItems: "center",
            justifyContent: 'center'
          }}>
            {row.map((data, i) => {
              return <p
                key={i}
                style={{
                  padding: 8,
                  flex: 1,
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: i == 1 ? 500 : 400,
                  fontSize: 14,
                  ...(i < 3 ? { color: '#5A607F)', } : { 
                    color: data == 'Paid' ? '#06A561' : '#5A607F',
                    padding: '2px 8px',
                    backgroundColor: data == 'Paid' ? '#C4F8E2' : '#E6E9F4',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 4,
                    margin: 'auto'
                  })
                }}>{i==2 ? '$' : ''}{data} 
                </p>
            })}
          </div>
        })}
      </div>
    </div>
  )
}