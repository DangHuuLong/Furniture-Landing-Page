import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../../contexts/CartContext";
import { User, Search, Heart, ShoppingCart } from "lucide-react";

function Header() {
  const { toggleCart } = useContext(CartContext);

  return (
    <>
      <div
        style={{
          height: 100,
          backgroundColor: "rgba(255,255,255,1)",
          padding: "0px 100px 0px 54px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        {/* Logo Section */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 5,
          }}
        >
          <img
            src="./src/modules/customer/pages/Home/images/Meubel House_Logos-05.png"
            style={{
              width: 50,
              height: 32,
            }}
          />
          <p
            style={{
              fontFamily: '"Montserrat", sans-serif',
              fontWeight: 700,
              fontSize: 34,
              textTransform: "uppercase",
              color: "#000000ff",
            }}
          >
            Furniro
          </p>
        </div>

        {/* Navigation Section */}
        <div
          style={{
            width: 430,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginLeft: 266,
            marginRight: "auto",
          }}
        >
          <p
            style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 500,
              fontSize: 16,
              color: "#000000ff",
            }}
          >
            <Link
              to="/home"
              style={{
                textDecoration: "none",
                color: "inherit",
                font: "inherit",
              }}
            >
              Home
            </Link>
          </p>
          <p
            style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 500,
              fontSize: 16,
              color: "#000000ff",
            }}
          >
            <Link
              to="/shop"
              style={{
                textDecoration: "none",
                color: "inherit",
                font: "inherit",
              }}
            >
              Shop
            </Link>
          </p>
          <p
            style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 500,
              fontSize: 16,
              color: "#000000ff",
            }}
          >
            About
          </p>
          <p
            style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 500,
              fontSize: 16,
              color: "#000000ff",
            }}
          >
            <Link
              to="/contact"
              style={{
                textDecoration: "none",
                color: "inherit",
                font: "inherit",
              }}
            >
              Contact
            </Link>
          </p>
          <p
            style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 500,
              fontSize: 16,
              color: "#000000ff",
            }}
          >
            <Link
              to="/blog"
              style={{
                textDecoration: "none",
                color: "inherit",
                font: "inherit",
              }}
            >
              Blog
            </Link>
          </p>
        </div>

        {/* Icons Section */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 45,
          }}
        >
          <User size={28} strokeWidth={1.5} />

          <Search size={28} strokeWidth={1.5} />

          <Heart size={28} strokeWidth={1.5} />

          <button
            type="button"
            onClick={toggleCart}
            style={{
              background: "none",
              border: "none",
              padding: 0,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ShoppingCart size={28} strokeWidth={1.5} />
          </button>
        </div>

        <div></div>
      </div>
    </>
  );
}

export default Header;
