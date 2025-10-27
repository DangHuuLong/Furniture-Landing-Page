export default function Categories({categories}){
  return (
      <div style={{
        width: '100%',
        borderRadius: 6,
        backgroundColor: 'white',
        padding: 28
      }}>
      <p style={{
        fontFamily: '"Poppins", sans-serif',
        fontWeight: 700,
        fontSize: 16,
        color: '#131523',
      }}>Categories</p>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 12, 
        marginTop: 24
      }}>
        {categories.map((category,i)=>{
          return <div key={i} style={{
            display: 'flex',
            gap: 12,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <input type="checkbox" style={{
              width: 20,
              height: 20,
              backgroundColor: 'white',
              borderRadius: 4,
              border: '1px solid #D7DBEC'
            }}/>
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 400,
              fontSize: 16,
              color: '#131523',
            }}>{category}</p>
          </div>
        })}
        <p style={{
          fontFamily: '"Poppins", sans-serif',
          fontWeight: 400,
          fontSize: 16,
          color: '#1E5EFF',
          marginTop: 20,
        }}>Create New</p>
      </div>
      </div>
  )
}