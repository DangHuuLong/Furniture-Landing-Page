import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

function TabBar({ product }) {
  return (
    <div
      style={{
        height: "100px",
        width: "100%",
        backgroundColor: "rgba(249,241,231,1)",
        paddingLeft: "100px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <p
        style={{
          fontFamily: '"Poppins", sans-serif',
          fontWeight: 400,
          fontSize: 16,
          color: "rgba(159, 159, 159, 1)",
          marginRight: 14,
        }}
      >
        <Link
          to="/"
          style={{ textDecoration: "none", color: "inherit", font: "inherit" }}
        >
          Home
        </Link>
      </p>

      <ChevronRight
        size={20}
        strokeWidth={1.8}
        style={{ marginRight: 24, color: "rgba(159, 159, 159, 1)" }}
      />

      <p
        style={{
          fontFamily: '"Poppins", sans-serif',
          fontWeight: 400,
          fontSize: 16,
          color: "rgba(159, 159, 159, 1)",
          marginRight: 14,
        }}
      >
        <Link
          to="/shop"
          style={{ textDecoration: "none", color: "inherit", font: "inherit" }}
        >
          Shop
        </Link>
      </p>

      <ChevronRight
        size={20}
        strokeWidth={1.8}
        style={{ marginRight: 24, color: "rgba(159, 159, 159, 1)" }}
      />

      <div
        style={{
          width: 2,
          height: 37,
          backgroundColor: "rgba(159, 159, 159, 1)",
          marginRight: 34,
        }}
      ></div>

      <p
        style={{
          fontFamily: '"Poppins", sans-serif',
          fontWeight: 400,
          fontSize: 16,
          color: "rgba(0, 0, 0, 1)",
        }}
      >
        {product.name}
      </p>
    </div>
  );
}

export default TabBar;
