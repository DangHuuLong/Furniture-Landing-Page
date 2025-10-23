function FuniroFurniture() {
  return (
    <div style={{
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: '67px',
      marginBottom: '50px',
    }}>
      <p style={{
        fontFamily: '"Poppins", sans-serif',
        fontWeight: '600',
        fontSize: '20px',
        color: 'rgba(97, 97, 97, 1)',
      }}>Share your setup with</p>
      <p style={{
        fontFamily: '"Poppins", sans-serif',
        fontWeight: '700',
        fontSize: '40px',
        color: 'rgba(58, 58, 58, 1)',
      }}>#FuniroFurniture</p>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '16px'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            gap: '16px'
          }}>
            <img src="/src/pages/Home/images/Rectangle 36.png" />
            <img src="/src/pages/Home/images/Rectangle 38.png" />
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'flex-start',
            gap: '16px'
          }}>
            <img src="/src/pages/Home/images/Rectangle 37.png" />
            <img src="/src/pages/Home/images/Rectangle 39.png" />
          </div>
        </div>
        <img src="/src/pages/Home/images/Rectangle 40.png"/>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'flex-end',
            gap: '16px'
          }}>
            <img src="/src/pages/Home/images/Rectangle 43.png" />
            <img src="/src/pages/Home/images/Rectangle 45.png" />
          </div>
          <div style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            gap: '16px'
          }}>
            <img src="/src/pages/Home/images/Rectangle 41.png" />
            <img src="/src/pages/Home/images/Rectangle 44.png" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default FuniroFurniture;
