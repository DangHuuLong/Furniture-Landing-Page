export default function CustomerOrders(){
  const headers = ['Order', 'Date', 'Order Status', 'Price']
  const datas = [
    ["#23534D", "May 25, 3:12 PM", "Pending", '$29.74'],
    ["#12512B", "May 10, 2:00 PM", "Completed", '$23.06'],
    ["#23534D", "April 18, 8:00 AM", "Completed", '$29.74'],
    ["#76543E", "April 12, 8:00 AM", "Completed", '$23.06'],
    ["#51323C", "April 10, 4:12 PM", "Completed", '$23.06'],
  ];

  return (
    <div style={{
      width: '100%',
      backgroundColor: 'white',
      padding: 28,
      borderRadius: 6,
      boxShadow: '0px 1px 4px 0px rgba(21, 34, 50, 0.08)'
    }}>
      <p style={{
        fontFamily: '"Poppins", sans-serif',
        fontWeight: 700,
        fontSize: 16,
        color: '#131523',
      }}>Customer Orders</p>
      {/**Table */}
      <div style={{
        marginTop: 16,
        width: '100%'
      }}>
        {/**Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          padding: '12px 0',
          borderBottom: '1px solid #E6E9F4'
        }}>
          {headers.map((header, i)=>{
            return <div 
              key={i}
              style={{
                flex: 1,
                paddingLeft: 8
              }}>
              <p style={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 400,
                fontSize: 14,
                color: '#5A607F',
              }}>{header}</p>
            </div>
          })}
        </div>
        {/**Rows */}
        {datas.map((row, rowIndex) => (
          <div key={rowIndex} style={{
            display: 'flex',
            alignItems: 'center',
            padding: '16px 0',
            borderBottom: '1px solid #E6E9F4'
          }}>
            {row.map((cel, i) => (
              <div key={i} style={{
                flex: 1,
                paddingLeft: 8
              }}>
                {i==2&& <div style={{
                  padding: '2px 8px',
                  borderRadius: 4,
                  backgroundColor: cel == 'Pending' ? '#E6E9F4' : '#C4F8E2',
                  display: 'inline-flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                  <p style={{
                    fontFamily: '"Poppins", sans-serif',
                    fontWeight: 400,
                    fontSize: 14,
                    color: cel == 'Pending' ? '#5A607F' : '#06A561',
                  }}>{cel}</p>
                </div>}
                {i != 2 &&
                  <p style={{
                    fontFamily: '"Poppins", sans-serif',
                    fontWeight: 500,
                    fontSize: 14,
                    color: '#131523',
                  }}>{cel}</p>}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}