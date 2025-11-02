import { ChevronDown, Search, PenLine, Trash } from "lucide-react"
export default function Tools(){
  return(
    <div style={{
      display: 'flex',
      justifyContent: 'space-between'
    }}>
      <div style={{
        display: 'flex'
      }}>
        {/**Filter */}
        <div style={{ position: "relative", width: 180 }}>
          <input
            type="text"
            placeholder="Filter"
            aria-label="Filter"
            style={{
              height: 40,
              width: "100%",
              backgroundColor: "white",
              border: "1px solid #D9E1EC",
              borderRadius: 6,
              paddingLeft: 16,
              paddingRight: 36,
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 400,
              fontSize: 16,
              color: "#A1A7C4",
              outline: "none",
            }}
          />
          <ChevronDown
            size={20}
            color="#7E84A3"
            style={{
              position: "absolute",
              right: 10,
              top: "50%",
              transform: "translateY(-50%)",
              pointerEvents: "none",
            }}
          />
        </div>

        {/**Search */}
        <div style={{ position: "relative", width: 360, marginLeft: 12 }}>
          <input
            type="text"
            placeholder="Search..."
            aria-label="Search..."
            style={{
              height: 40,
              width: "100%",
              backgroundColor: "white",
              border: "1px solid #D9E1EC",
              borderRadius: 6,
              paddingLeft: 36,
              paddingRight: 16,
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 400,
              fontSize: 16,
              color: "#A1A7C4",
              outline: "none",
            }}
          />
          <Search
            size={20}
            color="#7E84A3"
            style={{
              position: "absolute",
              left: 10,
              top: "50%",
              transform: "translateY(-50%)",
              pointerEvents: "none",
            }}
          />
        </div>
      </div>

      <div style={{
        display: 'flex',
        gap: 12
      }}>
        <div style={{
          width: 40,
          height: 40,
          borderRadius: 4,
          backgroundColor: '#FFFFFF',
          border: '1px solid #D7DBEC',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <PenLine size={24} color='#1E5EFF' />
        </div>
        <button style={{
          width: 40,
          height: 40,
          borderRadius: 4,
          backgroundColor: '#FFFFFF',
          border: '1px solid #D7DBEC',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer'
        }}
          onClick={() => setDeleteItems(true)}>
          <Trash size={24} color='#1E5EFF' />
        </button>
      </div>
    </div>
  )
}