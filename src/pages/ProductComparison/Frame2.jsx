function Frame2() {
  const sections = [
    {
      title: "General",
      rows: [
        { label: "Sales Package", left: "1 sectional sofa", right: "1 Three Seater, 2 Single Seater" },
        { label: "Model Number", left: "TFCBLIGRBL6SRHS", right: "DTUBLIGRBL568" },
        { label: "Secondary Material", left: "Solid Wood", right: "Solid Wood" },
        { label: "Configuration", left: "L-shaped", right: "L-shaped" },
        { label: "Upholstery Material", left: "Fabric + Cotton", right: "Fabric + Cotton" },
        { label: "Upholstery Color", left: "Bright Grey & Lion", right: "Bright Grey & Lion" },
      ],
    },
    {
      title: "Product",
      rows: [
        { label: "Filling Material", left: "Foam", right: "Matte" },
        { label: "Finish Type", left: "Bright Grey & Lion", right: "Bright Grey & Lion" },
        { label: "Adjustable Headrest", left: "No", right: "Yes" },
        { label: "Maximum Load Capacity", left: "280 KG", right: "300 KG" },
        { label: "Origin of Manufacture", left: "India", right: "India" },
      ],
    },
    {
      title: "Dimensions",
      rows: [
        { label: "Width", left: "265.32 cm", right: "265.32 cm" },
        { label: "Height", left: "76 cm", right: "76 cm" },
        { label: "Depth", left: "167.76 cm", right: "167.76 cm" },
        { label: "Weight", left: "45 KG", right: "65 KG" },
        { label: "Seat Height", left: "41.52 cm", right: "41.52 cm" },
        { label: "Leg Height", left: "5.46 cm", right: "5.46 cm" },
      ],
    },
    {
      title: "Warranty",
      rows: [
        { label: "Warranty Summary", left: "1 Year Manufacturing Warranty", right: "1.2 Year Manufacturing Warranty" },
        { label: "Warranty Service Type", left: "For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com", right: "For Warranty Claims or Any Product Related Issues Please Email at support@xyz.com" },
        { label: "Covered in Warranty", left: "Warranty Against Manufacturing Defect", right: "Warranty of the product is limited to manufacturing defects only." },
        { label: "Not Covered in Warranty", left: "The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.", right: "The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage." },
        { label: "Domestic Warranty", left: "1 Year", right: "3 Months" },
      ],
    }
  ];

  return (
    <div style={{ marginTop: '64px', width: '100%', borderTop: '1px solid rgba(232,232,232,1)' }}>
      {sections.map((sec) => (
        <div key={sec.title}>
          {/* dòng kẻ cột trên cùng */}
          <div style={{ display: 'flex', paddingLeft: '42px', height: '42px' }}>
            <div style={{ width: '300px', borderRight: '1px solid rgba(232,232,232,1)' }} />
            <div style={{ width: '344px', borderRight: '1px solid rgba(232,232,232,1)' }} />
            <div style={{ width: '344px', borderRight: '1px solid rgba(232,232,232,1)' }} />
          </div>

          {/* tiêu đề section */}
          <div style={{ display: 'flex', paddingLeft: '42px' }}>
            <div style={{ width: '300px', borderRight: '1px solid rgba(232,232,232,1)' }}>
              <p style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 500, fontSize: '28px', color: 'rgba(0,0,0,1)' }}>
                {sec.title}
              </p>
            </div>
            <div style={{ width: '344px', borderRight: '1px solid rgba(232,232,232,1)' }} />
            <div style={{ width: '344px', borderRight: '1px solid rgba(232,232,232,1)' }} />
          </div>

          {/* các dòng nội dung */}
          {sec.rows.map((r) => (
            <div key={r.label}>
              {/* line mỏng giữa các hàng */}
              <div style={{ display: 'flex', paddingLeft: '42px', height: '28px' }}>
                <div style={{ width: '300px', borderRight: '1px solid rgba(232,232,232,1)' }} />
                <div style={{ width: '344px', borderRight: '1px solid rgba(232,232,232,1)' }} />
                <div style={{ width: '344px', borderRight: '1px solid rgba(232,232,232,1)' }} />
              </div>

              {/* row */}
              <div style={{ display: 'flex', paddingLeft: '42px' }}>
                <div style={{ width: '300px', borderRight: '1px solid rgba(232,232,232,1)' }}>
                  <p style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 400, fontSize: '20px', color: 'rgba(0,0,0,1)' }}>
                    {r.label}
                  </p>
                </div>
                <div style={{ width: '344px', borderRight: '1px solid rgba(232,232,232,1)' }}>
                  <p style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 400, fontSize: '20px', color: 'rgba(0,0,0,1)', paddingLeft: '42px' }}>
                    {r.left}
                  </p>
                </div>
                <div style={{ width: '344px', borderRight: '1px solid rgba(232,232,232,1)' }}>
                  <p style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 400, fontSize: '20px', color: 'rgba(0,0,0,1)', paddingLeft: '42px' }}>
                    {r.right}
                  </p>
                </div>
              </div>

            </div>
          ))}
          {/* khoảng cách dưới mỗi hàng */}
          <div style={{ display: 'flex', paddingLeft: '42px', height: '54px' }}>
            <div style={{ width: '300px', borderRight: '1px solid rgba(232,232,232,1)' }} />
            <div style={{ width: '344px', borderRight: '1px solid rgba(232,232,232,1)' }} />
            <div style={{ width: '344px', borderRight: '1px solid rgba(232,232,232,1)' }} />
          </div>
        </div>
      ))}

      <div style={{ display: 'flex', paddingLeft: '42px' }}>
        <div style={{ width: '300px', borderRight: '1px solid rgba(232,232,232,1)' }}>
          
        </div>
        <div style={{ width: '344px', borderRight: '1px solid rgba(232,232,232,1)' }}>
          <div style={{
            width: '215px',
            height: '64px',
            backgroundColor: 'rgba(184, 142, 47, 1)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: '42px',
          }}>
            <p style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 400, fontSize: '20px', color: 'rgba(255,255,255,1)'}}>Add To Cart</p>
          </div>
          
        </div>
        <div style={{ width: '344px', borderRight: '1px solid rgba(232,232,232,1)' }}>
          <div style={{
            width: '215px',
            height: '64px',
            backgroundColor: 'rgba(184, 142, 47, 1)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: '42px',
          }}>
            <p style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 400, fontSize: '20px', color: 'rgba(255,255,255,1)'}}>Add To Cart</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Frame2;
