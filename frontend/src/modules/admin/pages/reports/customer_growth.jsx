import { useRef, useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export default function CustomerGrowth() {
  // Dữ liệu khách hàng theo tháng
  const customerData = [
    { month: "Jan", returning: 450, new: 320 },
    { month: "Feb", returning: 370, new: 260 },
    { month: "Mar", returning: 340, new: 180 },
    { month: "Apr", returning: 420, new: 270 },
    { month: "May", returning: 440, new: 200 },
    { month: "Jun", returning: 360, new: 250 },
    { month: "Jul", returning: 400, new: 190 },
    { month: "Aug", returning: 410, new: 150 },
    { month: "Sep", returning: 420, new: 190 },
    { month: "Oct", returning: 390, new: 270 },
    { month: "Nov", returning: 420, new: 150 },
    { month: "Dec", returning: 410, new: 120 },
  ];

  // Tìm giá trị lớn nhất giữa returning và new customers
  const maxValue = Math.max(...customerData.flatMap(item => [item.returning, item.new]));
  const roundedMax = Math.ceil(maxValue / 100) * 100; // Làm tròn lên bội số 100

  // Đo chiều cao thật của phần biểu đồ
  const barsRef = useRef(null);
  const [innerHeight, setInnerHeight] = useState(0);

  useEffect(() => {
    if (barsRef.current) {
      const h = barsRef.current.offsetHeight;
      setInnerHeight(h - 44);
    }
  }, []);

  return (
    <div
      style={{
        borderRadius: 6,
        width: "100%",
        backgroundColor: "white",
        padding: 28,
        boxShadow: "0px 1px 4px 0px rgba(21, 34, 50, 0.08)",
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <p style={{ fontFamily: '"Poppins"', fontWeight: 700, fontSize: 16, color: "#131523" }}>
          Customer Growth
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <p style={{ fontFamily: '"Poppins"', fontSize: 14, color: "#5A607F" }}>Last 12 Months</p>
          <ChevronDown size={24} color="#7E84A3" />
        </div>
      </div>

      {/* Chú thích màu */}
      <div style={{ display: "flex", alignItems: "center", gap: 20, marginTop: 8 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 12, height: 12, borderRadius: 2, backgroundColor: "#D7DBEC" }}></div>
          <p style={{ fontFamily: '"Poppins"', fontSize: 14, color: "#5A607F" }}>Returning customers</p>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 12, height: 12, borderRadius: 2, backgroundColor: "#1E5EFF" }}></div>
          <p style={{ fontFamily: '"Poppins"', fontSize: 14, color: "#5A607F" }}>New customers</p>
        </div>
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
                <p style={{ flex: 1, fontFamily: '"Poppins"', fontSize: 12, color: "#A1A7C4" }}>{i * 100}</p>
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
              {customerData.map((row, i) => (
                <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-end" }}>
                  {/* Returning customers */}
                  <div
                    style={{
                      width: 8,
                      borderRadius: 4,
                      backgroundColor: "#D7DBEC",
                      height: innerHeight
                        ? Math.round((row.returning / roundedMax) * innerHeight)
                        : 0,
                    }}
                  ></div>
                  {/* New customers */}
                  <div
                    style={{
                      width: 8,
                      borderRadius: 4,
                      backgroundColor: "#1E5EFF",
                      height: innerHeight ? Math.round((row.new / roundedMax) * innerHeight) : 0,
                    }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trục tháng */}
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
            {customerData.map((cell, i) => (
              <p key={i} style={{ fontFamily: '"Poppins"', fontSize: 12, color: "#A1A7C4" }}>
                {cell.month}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
