export default function Header() {
  return (
    <div style={{
      height: '68px',
      width: '100%',
      paddingInline: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: 'rgba(7,11,29,1)'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center'
      }}>
        <img style={{
          marginRight: '106px',
        }} src="/src/modules/admin/components/header/images/logo.png" />
        <img style={{
          marginRight: '8px',
        }} src="/src/modules/admin/components/header/images/search.png"/>
        <p style={{
          fontFamily: '"Poppins", sans-serif',
          fontWeight: 400,
          fontSize: '14px',
          color: 'rgba(255,255,255,1)',
        }}>Search...</p>
      </div>

      <div style={{
        display: 'flex',
        alignItems: 'center'
      }}>
        <img style={{
          marginRight: '20px',
          width: '24px',
          height: '24px'
        }} src="/src/modules/admin/components/header/images/chat.png"/>
        <div style={{
          marginRight: '36px',
          position: 'relative'
        }}>
          <img style={{
            width: '24px',
            height: '24px'
          }} src="/src/modules/admin/components/header/images/bell.png" />
          <div style={{
            position: 'absolute',
            width: '16px',
            height: '16px',
            borderRadius: '50%',
            backgroundColor: 'rgba(30,94,255)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            top: -5,
            right: -5
          }}>
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 700,
              fontSize: '12px',
              color: 'rgba(255,255,255,1)'
            }}>5</p>
          </div>
        </div>

        {/**User */}
        <div style={{
          display: 'flex',
          alignItems: 'center'
        }}>
          {/**Avatar */}
          <div style={{
            width: 36,
            height: 36,
            borderRadius: '50%',
            backgroundColor: 'rgba(31,210,134,1)',
            marginRight: 12,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 700,
              fontSize: '18px',
              color: 'rgba(255,255,255,1)'
            }}>R</p>
          </div>

          {/**Name */}
          <p style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 400,
            fontSize: '14px',
            color: 'rgba(255,255,255,1)'
          }}>Randhir kumar</p>

          <img style={{
            width: 24,
            height: 24
          }} src="/src/modules/admin/components/header/images/arrow_down.png"/>
        </div>
      </div>
    </div>
  )
}