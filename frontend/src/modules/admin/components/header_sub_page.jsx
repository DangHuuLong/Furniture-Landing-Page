import { Plus } from "lucide-react"
import { useOutletContext, NavLink } from "react-router-dom"
export default function HeaderSubPage({headerTitle, addButtonTitle, exportButton, to}){
  const { setExportData } = useOutletContext()
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end'
    }}>
      <p style={{
        fontFamily: '"Poppins", sans-serif',
        fontWeight: 700,
        fontSize: 24,
        color: '#131523',
      }}>{headerTitle}</p>
      <div style={{
        display: 'flex',
        gap: 12
      }}>
        {exportButton && <button style={{
          width: 98,
          height: 40,
          borderRadius: 4,
          backgroundColor: 'white',
          border: '1px solid #D7DBEC',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer'
        }}
          onClick={setExportData}>
          <p style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 400,
            fontSize: 16,
            color: '#1E5EFF',
          }}>Export</p>
        </button>}
        <NavLink
          to={to}
          style={{
            width: 148,
            height: 40,
            borderRadius: 4,
            backgroundColor: '#1E5EFF',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: 'none',
            textDecoration: "none",
            cursor: 'pointer'
          }}>
          <Plus size={14} color='white' />
          <p style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 400,
            fontSize: 16,
            color: 'white',
            marginLeft: 10
          }}>Add {addButtonTitle}</p>
        </NavLink>
      </div>
    </div>
  )
}