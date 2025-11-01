import { ChevronDown, ChevronUp } from "lucide-react";

export default function FullWidthReports() {
  const userStats = [
    { title: "Existing Users", value: 5653, percent: 22.45, isIncrease: true },
    { title: "New Users", value: 1650, percent: 15.34, isIncrease: true },
    { title: "Total Visits", value: 9504, percent: 18.25, isIncrease: false },
    { title: "Unique Visits", value: 5423, percent: 10.24, isIncrease: false },
  ];

  return (
    <div
      style={{
        width: "100%",
        height: 136,
        borderRadius: 6,
        backgroundColor: "white",
        boxShadow: "0px 1px 4px 0px rgba(21, 34, 50, 0.08)",
        display: "flex",
      }}
    >
      {userStats.map((item, i) => (
        <div
          key={item.title}
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            padding: '28px 0px 28px 28px',
          }}
        >
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <p
              style={{
                fontFamily: '"Poppins", sans-serif',
                fontSize: 14,
                fontWeight: 400,
                color: "#5A607F",
              }}
            >
              {item.title}
            </p>
            <p
              style={{
                fontFamily: '"Poppins", sans-serif',
                fontSize: 20,
                fontWeight: 700,
                color: "#131523",
              }}
            >
              {item.value.toLocaleString("de-DE")}
            </p>
            <div
              style={{
                marginTop: 10,
                display: "flex",
                alignItems: "center",
                gap: 4,
              }}
            >
              <p
                style={{
                  fontFamily: '"Poppins", sans-serif',
                  fontSize: 14,
                  fontWeight: 400,
                  color: item.isIncrease ? "#06A561" : "#F0142F",
                }}
              >
                {item.percent}%
              </p>
              {item.isIncrease ? (
                <ChevronUp size={20} color="#06A561" />
              ) : (
                <ChevronDown size={20} color="#F0142F" />
              )}
            </div>
          </div>

          {/* vạch ngăn cách, chỉ vẽ nếu không phải item cuối */}
          {i !== userStats.length - 1 && (
            <div
              style={{
                width: 1,
                height: "100%", 
                backgroundColor: "#E6E9F4",
              }}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
}
