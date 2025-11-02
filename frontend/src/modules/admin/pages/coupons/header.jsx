import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <p
        style={{
          fontFamily: '"Poppins", sans-serif',
          fontWeight: 700,
          fontSize: 24,
          color: "#131523",
        }}
      >
        Coupons
      </p>

      {/* Nút Create */}
      <div
        onClick={() => navigate("/coupons/createcoupon")}
        style={{
          padding: "8px 52px",
          borderRadius: 4,
          backgroundColor: "#1E5EFF",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 4,
          cursor: "pointer", 
          userSelect: "none",
          transition: "all 0.2s ease",
        }}
      >
        <Plus size={24} color="white" />
        <p
          style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 400,
            fontSize: 16,
            color: "white",
          }}
        >
          Create
        </p>
      </div>
    </div>
  );
}
