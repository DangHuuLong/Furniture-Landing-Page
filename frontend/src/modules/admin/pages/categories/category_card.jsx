export default function CategoryCard({imagePath, productName, stock}) {
  return (
    <div style={{
      flex: 1,
      height: 324,
      backgroundColor: 'white',
      borderRadius: 6,
      boxShadow: '0px 1px 4px 0px rgba(21, 34, 50, 0.08)',
      overflow: 'hidden'
    }}>
      <div style={{
        width: '100%',
        height: 240,
      }}>
        <img src={imagePath} style={{
          objectFit: 'cover',
          height: '100%',
        }}/>
        <div style={{
          padding: '20px 28px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}>
          <p style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 700,
            fontSize: 16,
            color: '#131523'
          }}>{productName}</p>

          <p style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 400,
            fontSize: 14,
            color: '#131523'
          }}>{stock} items</p>
        </div>
      </div>
    </div>
  )
}