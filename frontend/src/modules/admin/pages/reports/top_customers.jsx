export default function TopCustomers(){
  const headers = ['Name', 'Orders', 'Spent']
  const rows = [
    {
      name: "Lee Henry",
      orders: 52,
      spent: 969.37,
    },
    {
      name: "Myrtie McBride",
      orders: 43,
      spent: 909.54,
    },
    {
      name: "Tommy Walker",
      orders: 41,
      spent: 728.90,
    },
    {
      name: "Lela Cannon",
      orders: 38,
      spent: 679.42,
    },
    {
      name: "Jimmy Cook",
      orders: 34,
      spent: 549.71,
    },
  ];

  return (
    <div style={{
      flex: 1,
      borderRadius: 6,
      backgroundColor: 'white',
      padding: 28,
      boxShadow: "0px 1px 4px 0px rgba(21, 34, 50, 0.08)",
    }}> 
      <p style={{
        fontFamily: '"Poppins", sans-serif',
        fontWeight: 700,
        fontSize: 16,
        color: '#131523',
      }}>Top Customers</p>
      {/**Table */}
      <div style={{
        marginTop: 20
      }}>
        {/**Header */}
        <div style={{
          padding: '12px 0px',
          borderBottom: '1px solid #E6E9F4',
          display: 'flex'
        }}>
          {headers.map((cell, i)=>{
            return <p key={i} style={{
              paddingLeft: 8,
              flex: i == 0 ? 2 : 1,
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 400,
              fontSize: 14,
              color: '#5A607F',
            }}>{cell}</p>
          })}
        </div>
        {/**Rows */}
        {rows.map((row, i)=>{
          return <div style={{
            padding: '8px 0px',
            borderBottom: i !== rows.length - 1 ? "1px solid #E6E9F4" : "none",
            display: 'flex',
            alignItems: 'center'
          }}>
            {/**Name */}
            <div style={{
              flex: 2,
              display: 'flex',
              gap: 12,
              alignItems: 'center',
              paddingLeft: 8
            }}>
              <div style={{
                width: 36,
                height: 36,
                borderRadius: '50%',
                backgroundColor: '#1E5EFF',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
                <p style={{
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: 700,
                  fontSize: 18,
                  color: '#FFFFFF',
                }}>{row.name.charAt(0)}</p>
              </div>
              <p style={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 500,
                fontSize: 14,
                color: '#131523',
              }}>{row.name}</p>
            </div>
            {/**Orders */}
            <p style={{
              flex: 1,
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 400,
              fontSize: 14,
              color: '#131523',
              paddingLeft: 8
            }}>{row.orders}</p>

            {/**Spent */}
            <p style={{
              flex: 1,
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 400,
              fontSize: 14,
              color: '#131523',
              paddingLeft: 8
            }}>${row.spent}</p>
          </div>
        })}
      </div>
    </div>
  )
}