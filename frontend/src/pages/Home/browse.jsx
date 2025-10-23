function Browse() {
  return (
    <>
      <div style={{
        width: '100%',
        paddingTop: '56px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 63,
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          <p style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 700,
            fontSize: 32,
            color: 'rgba(51, 51, 51, 1)',
          }}>Browse The Range</p>
          <p style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 400,
            fontSize: 20,
            color: 'rgba(102, 102, 102, 1)',
          }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div style={{
          width: 1183,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 30,
          }}>
            <img src="./src/pages/Home/images/dining.png" style={{
              width: 381,
              height: 480,
            }}/>
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 600,
              fontSize: 24,
            }}>Dining</p>
          </div>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 30,
          }}>
            <img src="./src/pages/Home/images/living.png" style={{
              width: 381,
              height: 480,
            }} />
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 600,
              fontSize: 24,
            }}>Living</p>
          </div>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 30,
          }}>
            <img src="./src/pages/Home/images/bedroom.png" style={{
              width: 381,
              height: 480,
            }} />
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 600,
              fontSize: 24,
            }}>Bedroom</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Browse