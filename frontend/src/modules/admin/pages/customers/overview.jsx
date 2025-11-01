export default function Overview(){
  const data = [
    {
      title: 'Address',
      content: 'Panapur langa\nHajipur, vaishali\n844124\nIndia'
    },
    {
      title: 'Email Address', 
      content: 'randhirppl@gmail.com'
    },
    {
      title: 'Phone',
      content: '+91 8804789764'
    }
  ]
  return (
    <div style={{
      width: '100%',
      backgroundColor: 'white',
      padding: 28,
      borderRadius: 6,
      boxShadow: '0px 1px 4px 0px rgba(21, 34, 50, 0.08)'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <p style={{
          fontFamily: '"Poppins", sans-serif',
          fontWeight: 700,
          fontSize: 16,
          color: '#131523',
        }}>Overview</p>
        <p style={{
          fontFamily: '"Poppins", sans-serif',
          fontWeight: 400,
          fontSize: 16,
          color: '#1E5EFF',
        }}>Edit</p>
      </div>
      <div style={{
        marginTop: 24,
        display: 'flex',
        flexDirection: 'column',
        gap: 24
      }}>
        {data.map((row, i) => {
          return <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 8
          }}>
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 400,
              fontSize: 14,
              color: '#A1A7C4',
            }}>{row.title}</p>
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 400,
              fontSize: 14,
              color: '#5A607F',
              textWrap: 'wrap',
              whiteSpace: 'pre-line'
            }}>{row.content}</p>
          </div>
        })}
      </div>
      <div style={{
        height: 1,
        width: '100%',
        backgroundColor: '#E6E9F4',
        marginTop: 28
      }}></div>
      <p style={{
        fontFamily: '"Poppins", sans-serif',
        fontWeight: 400,
        fontSize: 14,
        color: '#F0142F',
        marginTop: 20
      }}>Delete Customer</p>
    </div>
  )
}