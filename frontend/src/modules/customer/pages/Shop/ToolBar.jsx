function ToolBar(){
  return (
    <div style={{
      width: "100%",
      height: "100px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0 100px",
      backgroundColor: "rgba(249,241,231,1)",
    }}>
      {/* Left Side */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
        <img src="/src/modules/customer/pages/Shop/images/system-uicons_filtering.png" style={{
          width: "25px",
          height: "25px",
          marginRight: "12px",
        }}/>
        <p style={{
          fontFamily: "Poppins, sans-serif",
          fontWeight: "400",
          fontSize: "20px",
          color: "rgba(0,0,0,1)",
          marginRight: "24px",
        }}>Filter</p>
        <img src="/src/modules/customer/pages/Shop/images/ci_grid-big-round.png" style={{
          width: "25px",
          height: "25px",
          marginRight: "24px",
        }} />
        <img src="/src/modules/customer/pages/Shop/images/bi_view-list.png" style={{
          width: "25px",
          height: "25px",
          marginRight: "30px",
        }} />
        <div style={{
          width: "2px",
          height: "37px",
          backgroundColor: "rgba(159,159,159,1)",
          marginRight: "34px",
        }}>
        </div>
        <p style={{
          fontFamily: "Poppins, sans-serif",
          fontWeight: "400",
          fontSize: "16px",
          color: "rgba(0,0,0,1)",
        }}>Showing 1–16 of 32 results</p>
      </div>
      {/* Right Side */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
        <p style={{
          fontFamily: "Poppins, sans-serif",
          fontWeight: "400",
          fontSize: "20px",
          color: "rgba(0,0,0,1)",
          marginRight: "17px",
        }}>Show</p>
        <div style={{
          width: "55px",
          height: "55px",
          backgroundColor: "rgba(255,255,255,1)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginRight: "29px",
        }}>
          <p style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: "400",
            fontSize: "20px",
            color: "rgba(159,159,159,1)",
          }}>16</p>
        </div>
        <p style={{
          fontFamily: "Poppins, sans-serif",
          fontWeight: "400",
          fontSize: "20px",
          color: "rgba(0,0,0,1)",
          marginRight: "17px",
        }}>Short by</p>
        <div style={{
          width: "185px",
          height: "55px",
          backgroundColor: "rgba(255,255,255,1)",
          display: "flex",
          alignItems: "center",
          paddingLeft: "3 0px",
        }}>
          <p style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: "400",
            fontSize: "20px",
            color: "rgba(159,159,159,1)",
          }}>Default</p>

        </div>
      </div>
    </div>
  )
}
export default ToolBar;