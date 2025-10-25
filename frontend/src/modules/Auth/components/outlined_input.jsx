import { useState } from "react";

function OutlinedInput({
  label = "Email",
  value,
  onChange,
  type = "text",
  placeholder = "",
  bg = "#fff", 
  icon,       
  onIconClick,
}) {
  const [focused, setFocused] = useState(false);

  const fieldsetStyle = {
    border: `1px solid ${focused ? "#1d4ed8" : "rgba(121,116,126,1)"}`,
    borderRadius: 8,
    padding: "0 16px",
    minHeight: 56,
    position: "relative",
  };

  const legendStyle = {
    marginLeft: 12,
    padding: "0 6px",
    fontFamily: '"Poppins", sans-serif',
    fontWeight: 400,
    fontSize: 14,
    color: focused ? "#1d4ed8" : "rgba(28,27,31,1)",
    lineHeight: 1,
  };

  const legendSpanStyle = {
    background: bg,
    display: "inline-block",
  };

  const inputStyle = {
    width: "100%",
    height: 56,
    border: 0,
    outline: 0,
    background: "transparent",
    fontFamily: '"Poppins", sans-serif',
    fontSize: 16,
    color: "rgba(49,49,49,1)",
    paddingRight: 52,
  };

  const iconWrapStyle = {
    position: "absolute",
    right: 12,
    top: "50%",
    transform: "translateY(-50%)",
    width: 24,
    height: 24,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    pointerEvents: "auto",
    cursor: "pointer",
  };

  return (
    <div style={{ 
      width: '100%',
      marginBottom: '24px'
    }}>
      <fieldset style={fieldsetStyle}>
        <legend style={legendStyle}>
          <span style={legendSpanStyle}>{label}</span>
        </legend>

        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          style={inputStyle}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />

        {/* Icon ở mép phải */}
        {icon && (
          <div
            style={iconWrapStyle}
            onMouseDown={(e) => e.preventDefault()} 
            onClick={onIconClick}
            role={onIconClick ? "button" : undefined}
          >
            <img src={icon} alt="" width={24} height={24} />
          </div>
        )}
      </fieldset>
    </div>
  );
}

export default OutlinedInput