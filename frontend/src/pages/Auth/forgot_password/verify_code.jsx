import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "../../../contexts/ToastContext";
import OutlinedInput from "../../../components/outlined_input";

function VerifyCode() {
  const [code, setCode] = useState("");
  const [showCode, setShowCode] = useState(false);
  const [loading, setLoading] = useState(false);
  const { showToast } = useToast();
  const navigate = useNavigate();

  const handleVerify = async () => {
    const email = localStorage.getItem("fp_email");
    if (!email) { showToast("Missing email context. Start over.", "warning"); return; }
    if (!code) { showToast("Please enter the code", "warning"); return; }

    try {
      setLoading(true);
      const res = await fetch("http://localhost:3001/auth/verify-reset", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, code })
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) { showToast(data?.message || "Verification failed", "error"); return; }

      localStorage.setItem("fp_token", data.resetToken);
      showToast("Code verified", "success");
      navigate("/setnewpassword");
    } catch {
      showToast("Network error. Please try again", "error");
    } finally {
      setLoading(false);
    }
  };


  return (
    <div
      style={{
        position: 'relative',
        width: '100vw',
        minHeight: '100vh',
        margin: 0,
        display: 'grid',
        gridTemplateAreas: '"stack"',
      }}
    >
      {/* Logo */}
      <div
        style={{
          gridArea: 'stack',
          display: 'flex',
          alignItems: 'center',
          gap: 14,
          paddingTop: 52,
          paddingLeft: 62,
          placeSelf: 'start start',
          zIndex: 2,
        }}
      >
        <img src="/src/pages/Auth/images/logo.png" alt="logo" />
        <p style={{
          fontFamily: '"Poppins", sans-serif',
          fontWeight: 700,
          fontSize: 36,
          color: 'rgba(49,49,49,1)'
        }}>
          Your Logo
        </p>
      </div>

      {/* */}
      <div
        style={{
          gridArea: 'stack',
          display: 'grid',
          placeItems: 'center',
          padding: 104,
          zIndex: 1,
        }}
      >
        <div style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          {/**Left */}
          <div style={{
            width: '512px',
          }}>
            <Link
              to="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 4,
                textDecoration: 'none',
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 500,
                fontSize: 14,
                color: 'rgba(49,49,49,1)',
                cursor: 'pointer',
                marginBottom: 16
              }}
              aria-label="Back to login"
            >
              <img
                src="/src/pages/Auth/images/arrow_left.png"
                alt=""
                style={{ display: 'block' }}
              />
              <span>Back to login</span>
            </Link>
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 600,
              fontSize: 40,
              color: 'rgba(49,49,49,1)',
              marginBottom: 16
            }}>
              Verify code
            </p>
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 400,
              fontSize: 16,
              color: 'rgba(49,49,49,1)',
              textWrap: 'wrap',
              marginBottom: '48px'
            }}>
              An authentication code has been sent to your email.
            </p>

            {/**Form */}
            <OutlinedInput
              label="Enter Code"
              type={showCode ? "text" : "password"}
              icon={showCode
                ? "/src/pages/Auth/images/eye-off.png"
                : "/src/pages/Auth/images/eye.png"}
              onIconClick={() => setShowCode((v) => !v)}
              onChange={(e) => setCode(e.target.value)} />

            <p style={{
              width: '100%',
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 500,
              fontSize: 14,
              color: 'rgba(49,49,49,1)',
              marginBottom: '32px'
            }}>
              Didn’t receive a code? <span style={{ color: 'rgba(255,134,130,1)' }}>Resend</span>
            </p>

            {/**Button login */}
            <button
              onClick={handleVerify}
              to="/setnewpassword"
              style={{
                width: '100%', height: '48px',
                backgroundColor: 'rgba(81,93,239,1)',
                borderRadius: '4px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '16px', textDecoration: 'none',
                outline: 'none',
                boxShadow: 'none', 
                cursor: loading ? 'not-allowed' : 'pointer',
                opacity: loading ? 0.6 : 1,
                border: 'none',
              }}
            >
              <span style={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 600,
                fontSize: 14,
                color: 'rgba(243,243,243,1)',
              }}>
                Verify
              </span>
            </button>
          </div>

          {/**Right */}
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <img
              src="/src/pages/Auth/images/login.png"
              alt="login"
              style={{ display: 'block', width: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerifyCode;
