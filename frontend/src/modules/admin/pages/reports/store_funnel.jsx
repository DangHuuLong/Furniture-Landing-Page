import { useRef, useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export default function StoreFunnel() {
  // Dữ liệu khách hàng theo tháng
  const funnelData = [
    {
      label: "Visited Site",
      value: 420,
    },
    {
      label: "Added to Cart",
      value: 310,
    },
    {
      label: "Proceed to Checkout",
      value: 220,
    },
    {
      label: "Made a Purchase",
      value: 150,
    },
  ];
  const percents = [73, 65, 58]


  // Tìm giá trị lớn nhất giữa returning và new customers
  const maxValue = Math.max(...funnelData.flatMap(item => item.value));
  const roundedMax = Math.ceil(maxValue / 100) * 100; // Làm tròn lên bội số 100

  const barsRef = useRef(null);        // cái absolute bọc ngoài
  const percentsRef = useRef(null);    // cái flex:22 để đo width
  const [innerHeight, setInnerHeight] = useState(0);
  const [innerWidth, setInnerWidth] = useState(0);

  useEffect(() => {
    if (barsRef.current) {
      const h = barsRef.current.offsetHeight;
      setInnerHeight(h - 44);
    }
    if (percentsRef.current) {
      setInnerWidth(percentsRef.current.offsetWidth);
    }
  }, []);

  return (
    <div
      style={{
        flex: 3,
        borderRadius: 6,
        width: "100%",
        backgroundColor: "white",
        padding: 28,
        boxShadow: "0px 1px 4px 0px rgba(21, 34, 50, 0.08)",
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <p style={{
          fontFamily: '"Poppins", sans-serif', fontWeight: 700, fontSize: 16, color: "#131523"
        }}>
          Store Funnel
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <p style={{
            fontFamily: '"Poppins", sans-serif',
            fontSize: 14,
            fontWeight: 400,
            color: "#5A607F"
          }}>Last 7 Days</p>
          <ChevronDown size={24} color="#7E84A3" />
        </div>
      </div>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        marginTop: 4
      }}>
        <p style={{
          fontFamily: '"Poppins", sans-serif',
          fontWeight: 400,
          fontSize: 14,
          color: '#5A607F',
        }}>Conversion Rate</p>
        <p style={{
          fontFamily: '"Poppins", sans-serif',
          fontWeight: 700,
          fontSize: 14,
          color: '#131523',
          marginLeft: 6
        }}>28%</p>
        <p style={{
          fontFamily: '"Poppins", sans-serif',
          fontWeight: 400,
          fontSize: 14,
          color: '#06A561',
          marginLeft: 12,
          padding: '2px 8px',
          borderRadius: 4,
          backgroundColor: '#C4F8E2'
        }}>4% Increase</p>
        
      </div>

      {/* Biểu đồ */}
      <div style={{ marginTop: 24 }}>
        <div style={{ position: "relative" }}>
          {/* Lưới chia theo trục tung */}
          {Array.from({ length: roundedMax / 100 + 1 }, (_, i) => i)
            .reverse()
            .map((i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 20,
                  width: "100%",
                  height: 44,
                }}
              >
                <p style={{
                  flex: 1,
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: 400,
                  fontSize: 12,
                  color: "#A1A7C4"
                }}>{i * 100}</p>
                <div style={{ height: 1, flex: 22, border: "1px dashed #D9E1EC" }}></div>
              </div>
            ))}

          {/* Cột dữ liệu */}
          <div
            ref={barsRef}
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              gap: 20,
            }}
          >
            <div style={{ flex: 1 }}></div>
            <div
              style={{
                height: "100%",
                padding: "22px 0",
                boxSizing: "border-box",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "flex-end",
                flex: 22,
              }}
            >
              {funnelData.map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-end" }}>
                  <div
                    style={{
                      width: 60,
                      borderRadius: 4,
                      backgroundColor: "#1E5EFF",
                      height: innerHeight
                        ? Math.round((item.value / roundedMax) * innerHeight)
                        : 0,
                    }}
                  ></div>
                </div>
              ))}
            </div>
          </div>

          {/* Overlay chứa các thẻ % trên biểu đồ */}
          <div
            ref={barsRef} // dùng để đo chiều cao tổng thể
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              gap: 20,
            }}
          >
            <div style={{ flex: 1 }}></div>

            {/* Vùng hiển thị các thẻ % */}
            <div
              ref={percentsRef} // đo chiều ngang của vùng chứa
              style={{
                height: "100%",
                padding: "22px 0",
                paddingInline: (percentsRef - 60 * 4) / 4,
                boxSizing: "border-box",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "flex-end",
                flex: 22,
              }}
            >
              {percents.map((percent, i) => (
                <p
                  key={i}
                  style={{
                    marginBottom: Math.round((innerHeight * 75) / roundedMax),
                    padding: "2px 10px",
                    borderRadius: 2,
                    backgroundColor: "#333752",
                    fontFamily: '"Poppins", sans-serif',
                    fontWeight: 700,
                    fontSize: 12,
                    color: "#FFFFFF",
                  }}
                >
                  {percent}%
                </p>
              ))}
            </div>
          </div>


        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 20, height: 32 }}>
          <div style={{ flex: 1 }}></div>
          <div
            style={{
              flex: 22,
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            {funnelData.map((item, i) => (
              <p key={i} style={{
                fontFamily: '"Poppins", sans-serif', 
                fontSize: 12, 
                fontWeight: 500,
                color: "#131523"
              }}>
                {item.label}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
