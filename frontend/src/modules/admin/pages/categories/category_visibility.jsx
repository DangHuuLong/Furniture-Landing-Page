import ToggleButton from '../../components/toggle_button'
export default function CategoryVisibility(){
  return (
    <div style={{
      width: '100%',
      borderRadius: 6,
      boxShadow: '0px 1px 4px 0px rgba(21, 34, 50, 0.08)',
      padding: 28,
      backgroundColor: 'white'
    }}>
      <p style={{
        fontFamily: '"Poppins", sans-serif',
        fontWeight: 700,
        fontSize: 16,
        color: '#131523',
      }}>Category Visibility</p>
      <div style={{
        marginTop: 24,
        display: 'flex',
        alignItems: 'center',
        gap: 12
      }}>
        <ToggleButton />
        <p style={{
          fontFamily: '"Poppins", sans-serif',
          fontWeight: 400,
          fontSize: 16,
          color: '#131523',
        }}>Visible on site</p>
      </div>
    </div>
  )
}