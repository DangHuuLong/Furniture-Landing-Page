import { Plus, ChevronDown, Search, PenLine, Trash } from 'lucide-react';
export default function Orders(){
  return (
    <div style={{
      flex: 1,
      boxSizing: 'border-box',
      alignSelf: 'stretch',
      backgroundColor: '#F5F6FA',
      padding: '28px 40px 40px 40px'
    }}>
      {/**Header */}
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
        }}>Orders</p>
        <div style={{
          display: 'flex',
          gap: 12
        }}>
          <div style={{
            width: 98,
            height: 40,
            borderRadius: 4,
            backgroundColor: 'white',
            border: '1px solid #D7DBEC',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 400,
              fontSize: 16,
              color: '#1E5EFF',
            }}>Export</p>
          </div>
          <div style={{
            width: 148,
            height: 40,
            borderRadius: 4,
            backgroundColor: '#1E5EFF',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Plus size={14} color='white' />
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 400,
              fontSize: 16,
              color: 'white',
              marginLeft: 10
            }}>Add Order</p>
          </div>
        </div>
      </div>

      {/** */}
      <div style={{
        marginTop: 28,
        width: '100%',
        padding: '32px 28px 40px 28px',
        borderRadius: 6,
        backgroundColor: 'white',
        border: '1px solid #E6E9F4'
      }}>
        {/**Tool */}
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
              <Trash size={24} color='#1E5EFF' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}