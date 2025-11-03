import { ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react";

export default function FrequentlyAskedQuestions() {
  const [activeIndex, setActiveIndex] = useState(null); // ✅ không mở cái nào lúc đầu

  const questions = [
    {
      content: "Is there any discount for yearly subscription?",
      answer:
        "Yes, we offer a discounted rate for users who choose a yearly subscription instead of paying monthly. You can view the discounted pricing on the billing page before confirming your plan.",
    },
    {
      content: "Can I change my current plan?",
      answer:
        "Absolutely! You can upgrade or downgrade your current plan at any time. Simply go to your account settings or billing section and select the plan you’d like to switch to.",
    },
    {
      content: "How do I cancel a subscription?",
      answer:
        "You can cancel or change your subscription at any time without any additional charges. If you want to cancel your subscription, go to your profile page and click on billing information.",
    },
    {
      content: "How to purchase a domain?",
      answer:
        "To purchase a domain, go to the Domains section in your account settings. From there, you can search for an available domain name and follow the checkout process to complete your purchase.",
    },
  ];

  const handleToggle = (i) => {
    setActiveIndex(activeIndex === i ? null : i); 
  };

  return (
    <div style={{
      width: '100%',
      boxShadow: '0px 1px 4px 0px rgba(21, 34, 50, 0.08)',
      borderRadius: 6,
      padding: 28,
      backgroundColor: 'white',
      marginTop: 30
    }}>
      <p style={{
        fontFamily: '"Poppins", sans-serif',
        fontWeight: 700,
        fontSize: 20,
        color: '#131523',
      }}>Frequently Asked Questions</p>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        marginTop: 28
      }}>
        {questions.map((question, i) => {
          const isActive = i === activeIndex;
          return (
            <div key={i} style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 20,
              width: '100%',
              borderTop: '1px solid #E6E9F4',
              padding: '20px 20px 20px 24px'
            }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'pointer'
                }}
                onClick={() => handleToggle(i)} 
              >
                <p style={{
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: isActive ? 700 : 400,
                  fontSize: 16,
                  color: '#131523',
                }}>{question.content}</p>
                {isActive
                  ? <ChevronUp size={24} color="#7E84A3" />
                  : <ChevronDown size={24} color="#7E84A3" />}
              </div>
              {isActive && (
                <p style={{
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: 400,
                  fontSize: 16,
                  color: '#131523',
                  textWrap: 'wrap'
                }}>{question.answer}</p>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
