export default function CircularMultiProgress({
  percents = [],
  colors = [],  
  size = 112,
  stroke = 10,
}) {
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;

  let accumulatedPercent = 0;

  return (
    <div style={{ position: "relative", width: size, height: size }}>
      <svg width={size} height={size}>
        {/* Nền vòng tròn */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke="#E6E9F4"
          strokeWidth={stroke}
        />

        {/* Các đoạn màu */}
        {percents.map((percent, i) => {
          const color = colors[i] || "#1E5EFF";
          const startOffset = (accumulatedPercent / 100) * circumference;
          const segmentLength = (percent / 100) * circumference;
          accumulatedPercent += percent;

          return (
            <circle
              key={i}
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="transparent"
              stroke={color}
              strokeWidth={stroke}
              strokeDasharray={`${segmentLength} ${circumference - segmentLength}`}
              strokeDashoffset={circumference - startOffset}
              strokeLinecap="round"
              style={{
                transform: "rotate(-90deg)",
                transformOrigin: "50% 50%",
              }}
            />
          );
        })}
      </svg>
    </div>
  );
}
