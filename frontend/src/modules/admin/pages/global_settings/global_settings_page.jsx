import { useState } from "react";
import PricingCard from "./pricing_card";
import FrequentlyAskedQuestions from "./frequently_asked_questions";
export default function GlobalSettingsPage(){
  const [activeIndex, setActiveIndex] = useState(0); 
  const pricings = [
    {
      price: "$12",
      unit: "month",
      title: "Basic Plan",
      description: "Start your business",
      recommended: false,
      planFeatures: [
        { name: "Free Domain", included: true },
        { name: "Google Ads Credit", included: true },
        { name: "Up to 5 Users", included: true },
        { name: "Free SSL Security", included: true },
        { name: "Up to 100 Products", included: true },
        { name: "Chat Inbox", included: false },
        { name: "Unlimited Storage", included: false },
        { name: "No Transaction Fee", included: false },
      ],
    },
    {
      price: "$20",
      unit: "month",
      title: "Professional",
      description: "Start your business",
      recommended: true,
      planFeatures: [
        { name: "Free Domain", included: true },
        { name: "Google Ads Credit", included: true },
        { name: "Up to 5 Users", included: true },
        { name: "Free SSL Security", included: true },
        { name: "Up to 100 Products", included: true },
        { name: "Chat Inbox", included: true },
        { name: "Unlimited Storage", included: false },
        { name: "No Transaction Fee", included: false },
      ],
    },
    {
      price: "$45",
      unit: "month",
      title: "Business",
      description: "Start your business",
      recommended: false,
      planFeatures: [
        { name: "Free Domain", included: true },
        { name: "Google Ads Credit", included: true },
        { name: "Up to 5 Users", included: true },
        { name: "Free SSL Security", included: true },
        { name: "Up to 100 Products", included: true },
        { name: "Chat Inbox", included: true },
        { name: "Unlimited Storage", included: true },
        { name: "No Transaction Fee", included: true },
      ],
    },
  ];
  return (
    <div style={{
      width: '100%',
      height: '100%',
      backgroundColor: '#F5F6FA',
      padding: 28
    }}>
      <p style={{
        fontFamily: '"Poppins", sans-serif',
        fontWeight: 700,
        fontSize: 24,
        color: '#131523',
      }}>Choose a Plan</p>
      <div style={{
        marginTop: 30,
        width: '100%',
        padding: '40px 28px',
        backgroundColor: 'white',
        borderRadius: 6,
        boxShadow: '0px 1px 4px 0px rgba(21, 34, 50, 0.08)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <p style={{
          fontFamily: '"Poppins", sans-serif',
          fontWeight: 700,
          fontSize: 20,
          color: '#131523',
        }}>Pricing Plans</p>
        <p style={{
          fontFamily: '"Poppins", sans-serif',
          fontWeight: 400,
          fontSize: 16,
          color: '#5A607F',
          marginTop: 16,
          textAlign: 'center'
        }}>Familiarize yourself with the payment plans below.<br/>
          Pick best pracing plan to fit your needs.</p>
        <div
          style={{
            display: "flex",
            width: 244,
            marginTop: 24,
            height: 40,
          }}
        >
          {["Bill Monthly", "Bill Annually"].map((label, i) => {
            const isActive = i === activeIndex;
            return (
              <div
                key={i}
                onClick={() => setActiveIndex(i)} 
                style={{
                  flex: 1,
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: isActive ? "2px solid #1E5EFF" : "1px solid #5A607F",
                  borderRadius: 4,
                  cursor: "pointer",
                }}
              >
                <p
                  style={{
                    fontFamily: '"Poppins", sans-serif',
                    fontWeight: 400,
                    fontSize: 16,
                    color: isActive ? "#1E5EFF" : "#5A607F",
                  }}
                >
                  {label}
                </p>
              </div>
            );
          })}
        </div>
        <div style={{
          display: 'flex',
          gap: 24,
          marginTop: 40,
          width: '100%'
        }}>
          {pricings.map((pricing, i) => <PricingCard key={i} pricing={pricing} />)}
        </div>
        <p style={{
          fontFamily: '"Poppins", sans-serif',
          fontWeight: 400,
          fontSize: 16,
          color: '#5A607F',
          marginTop: 28,
          textAlign: 'center'
        }}>Cancel or upgrade your plan anytime</p>
      </div>
      <FrequentlyAskedQuestions />
    </div>
  )
}