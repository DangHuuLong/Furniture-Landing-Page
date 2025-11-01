export default function Input({label, inputHeight, placeHolder, Icon, iconFunc}){
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      width: '100%'
    }}>
      <p style={{
        fontFamily: '"Poppins", sans-serif',
        fontWeight: 400,
        fontSize: 14,
        color: '#5A607F',
      }}>{label}</p>
      <div style={{
        position: 'relative'
      }}>
        <input type="text"
          placeholder={placeHolder}
          style={{
            height: inputHeight,
            width: '100%',
            borderRadius: 4,
            border: '1px solid #D9E1EC',
            padding: '8px 16px',
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 400,
            fontSize: 16,
            color: '#A1A7C4',
            outline: 'none'
          }}/>
        {Icon && <button style={{
          position: 'absolute',
          outline: 'none',
          backgroundColor: 'transparent',
          right: 0,
          top: '20%',
          border: 'none',
          cursor: 'pointer'
        }}
          onClick={iconFunc}>
          <Icon size={24} color='#7E84A3' />
        </button>}
      </div>
    </div>
  )
}