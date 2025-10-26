import { NavLink } from "react-router-dom";

export default function NavItem({ Icon, title, to, count }) {
  return (
    <NavLink
      to={to}
      style={({ isActive }) => ({
        width: 223,
        height: 44,
        borderRadius: 4,
        marginLeft: 16,
        paddingLeft: 16,
        display: "flex",
        alignItems: "center",
        textDecoration: "none",
        backgroundColor: isActive ? "#fff" : "transparent",
        color: isActive ? "rgb(90,69,127)" : "#fff",
      })}
    >
      <Icon size={24} color="currentColor" />

      <span
        style={{
          marginLeft: 16,
          fontFamily: '"Poppins", sans-serif',
          fontWeight: 400,
          fontSize: 14,
        }}
      >
        {title}
      </span>

      {typeof count === "number" && (
        <span
          style={{
            width: 26,
            height: 16,
            borderRadius: 12,
            backgroundColor: "rgb(19,21,35)",
            marginLeft: "auto",
            marginRight: 12,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 700,
            fontSize: 12,
            color: "#fff",
          }}
        >
          {count}
        </span>
      )}
    </NavLink>
  );
}
