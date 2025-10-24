import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OutlinedInput from "../../components/outlined_input";
import SocialButton from "../../components/social_button";
import { useToast } from "../../contexts/ToastContext";

function Login() {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { showToast } = useToast();

  const handleSubmit = async (e) => {
    e?.preventDefault?.();

    if (!email || !pwd) {
      showToast("Please enter both email and password", "warning");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch("http://localhost:3001/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password: pwd }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        showToast(data?.message || "Login failed", "error");
        return;
      }

      if (data?.token) localStorage.setItem("authToken", data.token);
      showToast("Login successful", "success");
      navigate("/home");
    } catch (_err) {
      showToast("Network error. Please try again", "error");
    } finally {
      setLoading(false);
    }
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") handleSubmit(e);
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        minHeight: "100vh",
        margin: 0,
        display: "grid",
        gridTemplateAreas: '"stack"',
      }}
      onKeyDown={onKeyDown}
    >
      {/* Logo */}
      <div
        style={{
          gridArea: "stack",
          display: "flex",
          alignItems: "center",
          gap: 14,
          paddingTop: 52,
          paddingLeft: 62,
          placeSelf: "start start",
          zIndex: 2,
        }}
      >
        <img src="/src/pages/Auth/images/logo.png" alt="logo" />
        <p
          style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 700,
            fontSize: 36,
            color: "rgba(49,49,49,1)",
          }}
        >
          Your Logo
        </p>
      </div>

      {/* Body */}
      <div
        style={{
          gridArea: "stack",
          display: "grid",
          placeItems: "center",
          padding: 104,
          zIndex: 1,
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Left */}
          <div style={{ width: "512px" }}>
            <p
              style={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 600,
                fontSize: 40,
                color: "rgba(49,49,49,1)",
                marginBottom: 16,
              }}
            >
              Login
            </p>
            <p
              style={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 400,
                fontSize: 16,
                color: "rgba(49,49,49,1)",
                marginBottom: 36,
              }}
            >
              Login to access your travelwise account
            </p>

            {/* Form */}
            <OutlinedInput
              label="Email"
              type="email"
              placeholder="john.doe@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <OutlinedInput
              label="Password"
              type={showPwd ? "text" : "password"}
              icon={
                showPwd
                  ? "/src/pages/Auth/images/eye-off.png"
                  : "/src/pages/Auth/images/eye.png"
              }
              onIconClick={() => setShowPwd((v) => !v)}
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
            />

            <div
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "40px",
              }}
            >
              <div style={{ display: "flex", gap: 8 }}>
                <input
                  type="checkbox"
                  style={{ width: "24px", height: "24px" }}
                />
                <p
                  style={{
                    fontFamily: '"Poppins", sans-serif',
                    fontWeight: 500,
                    fontSize: 14,
                    color: "rgba(49,49,49,1)",
                  }}
                >
                  Remember me
                </p>
              </div>
              <p
                style={{
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: 500,
                  fontSize: 14,
                  color: "rgba(255,134,130,1)",
                }}
              >
                <Link
                  to="/forgotpassword"
                  style={{ textDecoration: "none", color: "inherit", font: "inherit" }}
                >
                  Forgot Password
                </Link>
              </p>
            </div>

            {/* Button login */}
            <button
              onClick={handleSubmit}
              disabled={loading}
              style={{
                width: "100%",
                height: "48px",
                backgroundColor: loading
                  ? "rgba(81,93,239,0.6)"
                  : "rgba(81,93,239,1)",
                borderRadius: "4px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "16px",
                border: "none",
                cursor: loading ? "not-allowed" : "pointer",
              }}
            >
              <p
                style={{
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: 600,
                  fontSize: 14,
                  color: "rgba(243,243,243,1)",
                }}
              >
                {loading ? "Logging in…" : "Login"}
              </p>
            </button>

            <p
              style={{
                width: "100%",
                textAlign: "center",
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 500,
                fontSize: 14,
                color: "rgba(49,49,49,1)",
                marginBottom: "40px",
              }}
            >
              Don’t have an account?{" "}
              <Link
                to="/signup"
                style={{
                  textDecoration: "none",
                  font: "inherit",
                  color: "rgba(255,134,130,1)",
                }}
              >
                Sign up
              </Link>
            </p>

            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "40px",
                gap: "16px",
              }}
            >
              <div
                style={{
                  height: "1px",
                  width: "100%",
                  backgroundColor: "rgba(49,49,49,0.25)",
                }}
              />
              <p
                style={{
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: 400,
                  fontSize: 14,
                  color: "rgba(49,49,49,0.25)",
                  textWrap: "nowrap",
                }}
              >
                Or login with
              </p>
              <div
                style={{
                  height: "1px",
                  width: "100%",
                  backgroundColor: "rgba(49,49,49,0.25)",
                }}
              />
            </div>

            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                gap: "16px",
              }}
            >
              <SocialButton iconPath="/src/pages/Auth/images/facebook.png" />
              <SocialButton iconPath="/src/pages/Auth/images/google.png" />
              <SocialButton iconPath="/src/pages/Auth/images/apple.png" />
            </div>
          </div>

          {/* Right */}
          <div style={{ position: "relative", display: "inline-block" }}>
            <img
              src="/src/pages/Auth/images/login.png"
              alt="login"
              style={{ display: "block", width: "100%", height: "auto" }}
            />

            {/* Indicator */}
            <div
              style={{
                position: "absolute",
                bottom: 24,
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                gap: 8,
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: 32,
                  height: 10,
                  borderRadius: 5,
                  backgroundColor: "rgba(81,93,239,1)",
                }}
              />
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  backgroundColor: "rgba(255,255,255,1)",
                }}
              />
              <div
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  backgroundColor: "rgba(255,255,255,1)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
