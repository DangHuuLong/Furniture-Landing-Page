export default function CircularProgress({ percent = 75, size = 112, stroke = 10, colorProgress }) {
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <div
      style={{
        position: "relative",
        width: size,
        height: size,
      }}
    >
      <svg width={size} height={size}>
        {/* vòng ngoài (nền) */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke="#E6E9F4"
          strokeWidth={stroke}
        />

        {/* vòng trên (tiến độ) */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke= {colorProgress}
          strokeWidth={stroke}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{
            transform: "rotate(-90deg)",
            transformOrigin: "50% 50%",
          }}
        />
      </svg>

      {/* số % ở giữa */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: '"Poppins", sans-serif',
          fontWeight: 700,
          fontSize: 20,
          color: "#131523",
        }}
      >
        {percent}%
      </div>
    </div>
  );
}
