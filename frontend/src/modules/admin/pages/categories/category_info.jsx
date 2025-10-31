export default function CategoryInfo({name}){
  return (
    <div style={{
      width: '100%',
      borderRadius: 6,
      boxShadow: '0px 1px 4px 0px rgba(21, 34, 50, 0.08)',
      padding: 28,
      backgroundColor: 'white',
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }}>
      <p style={{
        fontFamily: '"Poppins", sans-serif',
        fontWeight: 700,
        fontSize: 16,
        color: '#131523',
      }}>Category Info</p>
      <div>
        <p style={{
          fontFamily: '"Poppins", sans-serif',
          fontWeight: 400,
          fontSize: 14,
          color: '#5A607F',
        }}>Category Name</p>
        <div style={{
          height: 40, 
          width: '100%',
          borderRadius: 4,
          border: '1px solid #D9E1EC',
          display: 'flex',
          alignItems: 'center',
          paddingLeft: 16,
          marginTop: 4
        }}>
          <p style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 400,
            fontSize: 16,
            color: '#131523',
          }}>{name}</p>
        </div>
      </div>
      <div>
        <p style={{
          fontFamily: '"Poppins", sans-serif',
          fontWeight: 400,
          fontSize: 14,
          color: '#5A607F',
        }}>Image</p>
        <div style={{
          height: 168,
          width: '100%',
          borderRadius: 4,
          border: '1px dashed #A1A7C4',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 4,
          gap: 12
        }}>
          <button style={{
            height: 40,
            width: 102,
            borderRadius: 4,
            border: '1px solid #D7DBEC', 
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
            cursor: 'pointer'
          }}>
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 400,
              fontSize: 16,
              color: '#1E5EFF',
            }}>Add File</p>
          </button>
          <p style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 400,
            fontSize: 14,
            color: '#5A607F',
          }}>Or drag and drop files</p>
        </div>
      </div>
    </div>
  )
}