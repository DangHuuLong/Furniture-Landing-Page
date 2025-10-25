function SocialButton({iconPath}) {
  return (
    <div style={{
      height: '56px',
      width: '100%',
      border: '1px solid rgba(81,93,239,1)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '4px'
    }}>
      <img src={iconPath} style={{width: '24px', height: '24px'}} />
    </div>
  )
}

export default SocialButton