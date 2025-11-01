export default function TopProducts() {
  const headers = ['Name', 'Clicks', 'Units Sold']
  const products = [
    {
      image: "https://hips.hearstapps.com/hmg-prod/images/mhl-052224-hanes-1264-socialindex-6661f22b2f322.jpg?crop=0.412xw:0.824xh;0.301xw,0&resize=1120:*",
      name: "Men White T-Shirt",
      clicks: 12040,
      unitsSold: 195,
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWKzTkCr_ImdAWWVyt1ryI8BEbGxu0lGGzTw&s",
      name: "Women White T-Shirt",
      clicks: 11234,
      unitsSold: 146,
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_jXjyZC1DNr696m4zisr-uF11T-q-YK_hxA&s",
      name: "Women Striped T-Shirt",
      clicks: 10054,
      unitsSold: 122,
    },
    {
      image: "https://cdn.shopify.com/s/files/1/2185/2813/files/U3031RG_02910_b1_s1_a1_1_m214_fdd08ec7-7b16-484f-a688-7fcf7743f28e_750x.jpg?v=1747861993",
      name: "Men Grey Hoodie",
      clicks: 8405,
      unitsSold: 110,
    },
    {
      image: "https://www.onceuponatee.net/cdn/shop/products/Blank-WBas-Red.jpg?v=1578622244",
      name: "Women Red T-Shirt",
      clicks: 5600,
      unitsSold: 87,
    },
  ];


  return (
    <div style={{
      flex: 1,
      borderRadius: 6,
      backgroundColor: 'white',
      padding: 28,
      boxShadow: "0px 1px 4px 0px rgba(21, 34, 50, 0.08)",
    }}>
      <p style={{
        fontFamily: '"Poppins", sans-serif',
        fontWeight: 700,
        fontSize: 16,
        color: '#131523',
      }}>Top Customers</p>
      {/**Table */}
      <div style={{
        marginTop: 20
      }}>
        {/**Header */}
        <div style={{
          padding: '12px 0px',
          borderBottom: '1px solid #E6E9F4',
          display: 'flex'
        }}>
          {headers.map((cell, i) => {
            return <p key={i} style={{
              paddingLeft: 8,
              flex: i == 0 ? 2 : 1,
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 400,
              fontSize: 14,
              color: '#5A607F',
            }}>{cell}</p>
          })}
        </div>
        {/**Rows */}
        {products.map((product, i) => {
          return <div key={i} style={{
            padding: '8px 0px',
            borderBottom: i !== products.length - 1 ? "1px solid #E6E9F4" : "none",
            display: 'flex',
            alignItems: 'center'
          }}>
            {/**Name */}
            <div style={{
              flex: 2,
              display: 'flex',
              gap: 12,
              alignItems: 'center',
              paddingLeft: 8
            }}>
              <div style={{
                width: 36,
                height: 36,
                borderRadius: '4px',
                backgroundColor: '#ECF2FF',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden'
              }}>
                <img src={product.image} style={{
                  width: '100%',
                  objectFit: 'cover'
                }}/>
              </div>
              <p style={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 500,
                fontSize: 14,
                color: '#131523',
              }}>{product.name}</p>
            </div>
            {/**Clicks */}
            <p style={{
              flex: 1,
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 400,
              fontSize: 14,
              color: '#131523',
              paddingLeft: 8
            }}>{product.clicks.toLocaleString("de-DE")}</p>

            {/**Units Sold */}
            <p style={{
              flex: 1,
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 400,
              fontSize: 14,
              color: '#131523',
              paddingLeft: 8
            }}>{product.unitsSold}</p>
          </div>
        })}
      </div>
    </div>
  )
}