import { useState, useEffect } from "react";

export default function ToggleButton({ checked, onChange, defaultOn = true }) {
  const isControlled = typeof checked === "boolean";

  const [internalOn, setInternalOn] = useState(
    isControlled ? checked : defaultOn
  );

  useEffect(() => {
    if (isControlled) {
      setInternalOn(checked);
    }
  }, [checked, isControlled]);

  const on = isControlled ? checked : internalOn;

  const handleClick = () => {
    if (isControlled) {
      onChange && onChange(!checked);
    } else {
      setInternalOn((prev) => {
        const next = !prev;
        onChange && onChange(next);
        return next;
      });
    }
  };

  return (
    <button
      style={{
        padding: 0,
        width: 44,
        height: 24,
        borderRadius: 16,
        backgroundColor: on ? "#1E5EFF" : "#D9E4FF",
        display: "flex",
        border: "none",
        alignItems: "center",
        cursor: "pointer",
      }}
      onClick={handleClick}
    >
      <div
        style={{
          width: 16,
          height: 16,
          borderRadius: "50%",
          backgroundColor: "white",
          marginLeft: on ? "auto" : 4,
          marginRight: on ? 4 : "auto",
          boxShadow: "0px 0px 6px 0px rgba(38, 44, 71, 0.16)",
        }}
      ></div>
    </button>
  );
}
