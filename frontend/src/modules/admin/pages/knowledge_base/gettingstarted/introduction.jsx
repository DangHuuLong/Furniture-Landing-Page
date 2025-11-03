import FastFilter from "../../coupons/fast_filter";

export default function Introduction() {
  // Mảng chứa nội dung hướng dẫn
  const guides = [
    'All billing plans are available on monthly and annual payment cycles. On an annual billing cycle, the average monthly cost is lower, and you can get a 3 months free.',
    'Upgrade to paid service to make your site public. If you need more time to design your site before going live, you can hide it behind a password.',
    'Site has a trial period. Trial period is free two-week period where you can explore the platform, upload content, experiment with ecommerce website.',
  ];

  // Mảng chứa các bộ lọc nhanh
  const fastFilter = ['Onboarding', 'Tutorials', 'Guides for Beginners'];

  return (
    <div
      style={{
        width: '100%',
        borderRadius: 6,
        backgroundColor: 'white',
        boxShadow: '0px 1px 4px 0px rgba(21, 34, 50, 0.08)',
      }}
    >
      {/* ---------- PHẦN GIỚI THIỆU ---------- */}
      <div style={{ padding: 28 }}>
        <p
          style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 700,
            fontSize: 20,
            color: '#131523',
          }}
        >
          Introduction to Product
        </p>
        <p
          style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 400,
            fontSize: 16,
            color: '#131523',
            textWrap: 'wrap',
            marginTop: 24,
          }}
        >
          Bolt is content management system, or CMS. Subscription includes content hosting,
          professionally designed layouts, 24/7 support, and access to our user-friendly platform
          for managing your business. You can use bolt to create management systems.
        </p>

        {/* Khối "Recommended" */}
        <div
          style={{
            marginTop: 24,
            padding: 20,
            borderRadius: 4,
            backgroundColor: '#F5F6FA',
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
          }}
        >
          <p
            style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 400,
              fontSize: 14,
              color: '#5A607F',
            }}
          >
            Recommended:
          </p>
          <p
            style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 400,
              fontSize: 14,
              color: '#5A607F',
            }}
          >
            You can learn faster by looking some onboarding videos in video gallery.
          </p>
        </div>

        {/* ---------- PHẦN HƯỚNG DẪN ---------- */}
        <div
          style={{
            height: 1,
            width: '100%',
            backgroundColor: '#E6E9F4',
            marginTop: 28,
          }}
        ></div>

        <p
          style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 700,
            fontSize: 20,
            color: '#131523',
            marginTop: 40,
          }}
        >
          Starting Guide
        </p>

        <p
          style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 400,
            fontSize: 16,
            color: '#131523',
            textWrap: 'wrap',
            marginTop: 24,
          }}
        >
          You can choose from a range of billing plans to get your idea working, whether you’re
          starting with a website or launching a new business.
        </p>

        {/* Danh sách các hướng dẫn có đánh số */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
            marginTop: 20,
          }}
        >
          {guides.map((guide, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 24,
              }}
            >
              {/* Số thứ tự trong vòng tròn */}
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: '50%',
                  backgroundColor: '#F5F6FA',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <p
                  style={{
                    fontFamily: '"Poppins", sans-serif',
                    fontWeight: 400,
                    fontSize: 16,
                    color: '#5A607F',
                  }}
                >
                  {i + 1}
                </p>
              </div>

              {/* Nội dung hướng dẫn */}
              <p
                style={{
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: 400,
                  fontSize: 16,
                  color: '#131523',
                }}
              >
                {guide}
              </p>
            </div>
          ))}
        </div>

        {/* ---------- PHẦN THÔNG TIN BỔ SUNG ---------- */}
        <div
          style={{
            height: 1,
            width: '100%',
            backgroundColor: '#E6E9F4',
            marginTop: 28,
          }}
        ></div>

        <p
          style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 700,
            fontSize: 20,
            color: '#131523',
            marginTop: 40,
          }}
        >
          Additional Information
        </p>

        {/* Bộ lọc nhanh (FastFilter) */}
        <div style={{ marginTop: 12 }}>
          <FastFilter fastFilter={fastFilter} color={'#1E5EFF'} />
        </div>

        {/* Đoạn mô tả bổ sung */}
        <p
          style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 400,
            fontSize: 16,
            color: '#131523',
            textWrap: 'wrap',
            marginTop: 20,
          }}
        >
          In addition to our guides and video tutorials, we offer webinars to help you get
          comfortable and explore our product functionality. In our webinars, we walk you through
          the basics of setting up and growing your business.
        </p>

        <p
          style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 400,
            fontSize: 16,
            color: '#131523',
            textWrap: 'wrap',
            marginTop: 20,
          }}
        >
          After it ends, we'll email you a video link to the webinar so you can remember everything
          you have learn anytime. If you can't attend the webinar at its scheduled time, you can
          watch it later.
        </p>
      </div>

      {/* ---------- PHẦN ĐÁNH GIÁ BÀI VIẾT ---------- */}
      <div
        style={{
          height: 1,
          width: '100%',
          backgroundColor: '#E6E9F4',
        }}
      ></div>

      <div style={{ padding: '40px 28px 28px' }}>
        <p
          style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 700,
            fontSize: 20,
            color: '#131523',
          }}
        >
          Was this article helpful?
        </p>

        {/* Hai nút "Yes" / "No" */}
        <div
          style={{
            marginTop: 20,
            display: 'flex',
            gap: 12,
          }}
        >
          {['Yes', 'No'].map((label) => (
            <div
              key={label}
              style={{
                width: 66,
                height: 36,
                borderRadius: 4,
                border: '1px solid #D7DBEC',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <p
                style={{
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: 400,
                  fontSize: 14,
                  color: '#1E5EFF',
                }}
              >
                {label}
              </p>
            </div>
          ))}
        </div>

        <p
          style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 400,
            fontSize: 12,
            color: '#5A607F',
            marginTop: 12,
          }}
        >
          50 people find this article helpful
        </p>
      </div>
    </div>
  );
}
