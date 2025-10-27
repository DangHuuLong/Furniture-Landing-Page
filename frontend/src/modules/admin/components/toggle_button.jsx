import { useState } from "react"

export default function ToggleButton(){
  const [on, setOn] = useState(true)
  return (
    <button style={{
      padding: 0,
      width: 44,
      height: 24,
      borderRadius: 16,
      backgroundColor: on ? '#1E5EFF' : '#D9E4FF',
      display: 'flex',
      border: 'none',
      alignItems: 'center',
      cursor: 'pointer'
    }}
      onClick={()=>setOn(!on)}>
      <div style={{
        width: 16,
        height: 16,
        borderRadius: '50%',
        backgroundColor: 'white',
        marginLeft: on ? 'auto' : 4,
        marginRight: on ? 4 : 'auto',
        boxShadow: '0px 0px 6px 0px rgba(38, 44, 71, 0.16)'
      }}></div>
    </button>
  )
}