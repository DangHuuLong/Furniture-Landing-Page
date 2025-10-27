export default function TopProducts(){
  const columns = ['Name', 'Price', 'Units Sold']
  const datas = [
    [
      {
        name: 'Men Grey Hoodie',
        image: 'https://www.harringtonjacketstore.co.uk/cdn/shop/products/GREY_1024x1024.png?v=1571398348',
      },
      49.90,
      204,
    ],
    [
      {
        name: 'Women Striped T-Shirt',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvTnKYQKF3l5oKKkXHi-4CqJ3tgH4A-ChMig&s',
      },
      34.90,
      155,
    ],
    [
      {
        name: 'Women White T-Shirt',
        image: 'https://hips.hearstapps.com/hmg-prod/images/gh-white-tshirt-66059c6ec5b44.png?crop=0.502xw:1.00xh;0.498xw,0&resize=640:*',
      },
      40.90,
      120,
    ],
    [
      {
        name: 'Men White T-Shirt',
        image: 'https://www.hancockfashion.com/cdn/shop/files/2c090c5b-cfa6-477d-bfab-755f18f8e41c1715236000781-Hancock-Men-Henley-Neck-Roll-Up-Sleeves-Pure-Cotton-T-shirt--3.jpg?v=1734411577',
      },
      49.90,
      204,
    ],
    [
      {
        name: 'Women Red T-Shirt',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ869-N2rizky-6dvcHNoWR61KRWTzbC44uQ&s',
      },
      34.90,
      155,
    ],
  ];
  return (
    <div style={{
      padding: 28,
      backgroundColor: 'white',
      borderRadius: 6,
      flex: 1
    }}>
      <p style={{
        fontFamily: '"Poppins", sans-serif',
        fontWeight: 700,
        fontSize: 24,
        color: '#131523)',
      }}>Top Products by Units Sold</p>

      {/**Table */}
      <div style={{
        marginTop: 20,
        width: '100%'
      }}>
        <div style={{
          display: 'flex',
          borderBottom: '1px solid #E6E9F4',
          width: '100%',
          paddingTop: 12,
          paddingBottom: 12,
        }}>
          {columns.map((column, i) => {
            return <p
              key={i}
              style={{
                padding: 8,
                flex: i==0 ? 2 : 1,
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 400,
                fontSize: 14,
                color: '#5A607F)',
              }}>{column}</p>
          })}
        </div>
        {datas.map((row, index) => {
          return <div
            key={index}
            style={{
              display: 'flex',
              borderBottom: '1px solid #E6E9F4',
              width: '100%',
              paddingTop: 16,
              paddingBottom: 16,
              alignItems: "center",
              justifyContent: 'center'
            }}> 
            {row.map((data, i) => {
              if(i==0) {
                return  <div
                key={i} 
                style={{
                  flex: 2,
                  paddingInline: 8,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12
                }}>
                  <div style={{
                    width: 36,
                    height: 36,
                    borderRadius: 4,
                    backgroundColor: '#ECF2FF',
                    overflow: 'hidden'
                  }}><img style={{objectFit: 'cover'}} src={data.image}/>
                  </div>

                  <p style={{
                    fontFamily: '"Poppins", sans-serif',
                    fontWeight: 500,
                    fontSize: 14,
                    color: '#131523'
                  }}>{data.name}</p>
                </div>
              } else {
                return <p
                  key={i}
                  style={{
                    padding: 8,
                    flex: 1,
                    fontFamily: '"Poppins", sans-serif',
                    fontWeight: 400,
                    fontSize: 14,
                    color: '#131523'
                  }}>{i == 1 ? '$' : ''}{data}
                </p>
              }
            })}
          </div>
        })}
      </div>
    </div>
  )
}