import Banner from '../Shop/Banner'
import FeaturesBar from '../Shop/FeaturesBar'
function Blog(){
  const blogs = [
    {
      image: "Rectangle 68.png",
      user: "Admin",
      date: "14 Oct 2022",
      tag: "Wood",
      title: "Going all-in with millennial design",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum."
    },
    {
      image: "Rectangle 68 (1).png",
      user: "Admin",
      date: "14 Oct 2022",
      tag: "Handmade",
      title: "Exploring new ways of decorating",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum."
    },
    {
      image: "Rectangle 68 (2).png",
      user: "Admin",
      date: "14 Oct 2022",
      tag: "Wood",
      title: "Handmade pieces that took time to make",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum."
    },
  ]
  const categories = [
    { name: "Crafts", quantity: 2 },
    { name: "Design", quantity: 8 },
    { name: "Handmade", quantity: 7 },
    { name: "Interior", quantity: 1 },
    { name: "Wood", quantity: 6 },
  ];

  const posts = [
    {
      title: 'Going all-in with millennial design',
      date: '03 Aug 2022',
      image: 'Rectangle 69.png',
    },
    {
      title: 'Exploring new ways of decorating',
      date: '03 Aug 2022',
      image: 'Rectangle 69 (1).png',
    },
    {
      title: 'Handmade pieces that took time to make',
      date: '03 Aug 2022',
      image: 'Rectangle 69 (2).png',
    },
    {
      title: 'Modern home in Milan',
      date: '03 Aug 2022',
      image: 'Rectangle 69 (3).png',
    },
    {
      title: 'Colorful office redesign',
      date: '03 Aug 2022',
      image: 'Rectangle 69 (4).png',
    },
  ];

  return (
    <>
      <Banner name='Blog' />
      <div style={{
        width: '100%',
        padding: '106px 100px 0px 100px',
        marginBottom: '58px',
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        {/**Left */}
        <div style={{
          width: '820px',
          display: 'flex',
          flexDirection: 'column',
          gap: '54px'
        }}>
          {blogs.map((blog)=>(
            <div>
              <img src={`/src/pages/Blog/images/${blog.image}`} style={{
                width: '100%',
                objectFit: 'cover',
                marginBottom: '18px'
              }}/>
              <div style={{
                display: 'flex',
                gap: '35px',
                alignItems: 'center',
                marginBottom: '15px'
              }}>

                {/**User */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '7px'
                }}>
                  <img src='/src/pages/Blog/images/dashicons_admin-users.png' style={{
                    width: '20px',
                    height: '20px'
                  }}/>
                  <p style={{
                    fontFamily: '"Poppins", sans-serif',
                    fontWeight: 400,
                    fontSize: '16px',
                    color: 'rgba(159,159,159,1)'
                  }}>{blog.user}</p>
                </div>

                {/**Date */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '7px'
                }}>
                  <img src='/src/pages/Blog/images/uis_calender.png' style={{
                    width: '20px',
                    height: '20px'
                  }} />
                  <p style={{
                    fontFamily: '"Poppins", sans-serif',
                    fontWeight: 400,
                    fontSize: '16px',
                    color: 'rgba(159,159,159,1)'
                  }}>{blog.date}</p>
                </div>

                {/**Tag */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '7px'
                }}>
                  <img src='/src/pages/Blog/images/ci_tag.png' style={{
                    width: '20px',
                    height: '20px'
                  }} />
                  <p style={{
                    fontFamily: '"Poppins", sans-serif',
                    fontWeight: 400,
                    fontSize: '16px',
                    color: 'rgba(159,159,159,1)'
                  }}>{blog.tag}</p>
                </div>
              </div>
              <p style={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 500,
                fontSize: '30px',
                color: 'rgba(0,0,0,1)',
                marginBottom: '12px'
              }}>{blog.title}</p>
              <p style={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 400,
                fontSize: '15px',
                color: 'rgba(159,159,159,1)',
                marginBottom: '30px'
              }}>{blog.content}</p>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}>
                <p style={{
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: 400,
                  fontSize: '16px',
                  color: 'rgba(0,0,0,1)',
                  marginBottom: '12px'
                }}>Read more</p>
                <div style={{
                  height: '1px',
                  width: '78px',
                  backgroundColor: 'rgba(0,0,0,1)'
                }}></div>
              </div>
            </div>
          ))}
          {/* Pagination controls can be added here */}
          <div style={{
            width: '100%',
            display: "flex",
            gap: "38px",
            justifyContent: 'flex-end'
          }}>
            <div style={{
              width: "60px",
              height: "60px",
              borderRadius: "10px",
              backgroundColor: "rgba(184, 142, 47, 1)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
              <p style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "400",
                fontSize: "20px",
                color: "rgba(255,255,255,1)",
              }}>1</p>
            </div>
            <div style={{
              width: "60px",
              height: "60px",
              borderRadius: "10px",
              backgroundColor: "rgba(249, 241, 231, 1)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
              <p style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "400",
                fontSize: "20px",
                color: "rgba(0,0,0,1)",
              }}>2</p>
            </div>
            <div style={{
              width: "60px",
              height: "60px",
              borderRadius: "10px",
              backgroundColor: "rgba(249, 241, 231, 1)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
              <p style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "400",
                fontSize: "20px",
                color: "rgba(0,0,0,1)",
              }}>3</p>
            </div>
            <div style={{
              width: "98px",
              height: "60px",
              borderRadius: "10px",
              backgroundColor: "rgba(249, 241, 231, 1)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
              <p style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "400",
                fontSize: "20px",
                color: "rgba(0,0,0,1)",
              }}>Next</p>
            </div>
          </div>
        </div>
        {/**Right */}
        <div>
          {/**Top */}
          <div style={{
            width: '393px',
            marginBottom: '41px'
          }}>
            <div style={{
              width: '100%',
              height: '58px',
              margin: '0px 41px 43px 41px',
              backgroundColor: 'transparent',
              border: '1px solid rgba(159,159,159,1)',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center'
            }}>
              <img src='/src/pages/Blog/images/akar-icons_search.png' style={{
                width: '20px',
                height: '20px',
                marginRight: '10px',
                marginLeft: 'auto'
              }}/>
            </div>
            <div style={{
              marginLeft: '77px',
              marginRight: '65px'
            }}>
              <p style={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 500,
                fontSize: '24px',
                color: 'rgba(0,0,0,1)',
                marginBottom: '33px'
              }}>Categories</p>
              {categories.map((categorie=>(
                <div style={{
                  width: '100%',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  display: 'flex',
                  marginBottom: '41px'
                }}>
                  <p style={{
                    fontFamily: '"Poppins", sans-serif',
                    fontWeight: 400,
                    fontSize: '16px',
                    color: 'rgba(159,159,159,1)',
                    marginBottom: '33px'
                  }}>{categorie.name}</p>
                  <p style={{
                    fontFamily: '"Poppins", sans-serif',
                    fontWeight: 400,
                    fontSize: '16px',
                    color: 'rgba(159,159,159,1)',
                    marginBottom: '33px'
                  }}>{categorie.quantity}</p>
                </div>
              )))}
            </div>
          </div>

          {/**Bottom */}
          <div style={{
            width: '393px',
            margin: '16px 0px 16px 76px'
          }}>
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 500,
              fontSize: '24px',
              color: 'rgba(0,0,0,1)',
              marginBottom: '26px'
            }}>Recent Posts</p>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '39px'
            }}>
              {posts.map((post)=>(
                <div style={{
                  display: 'flex',
                  gap: '12px',
                  alignItems: 'center'
                }}>
                  <img src={`/src/pages/Blog/images/${post.image}`} style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '10px',
                    objectFit: 'contain'
                  }} />
                  <div style={{
                    width: '120px',
                    display: 'flex',
                    flexDirection: 'column',
                  }}>
                    <p style={{
                      fontFamily: '"Poppins", sans-serif',
                      fontWeight: 400,
                      fontSize: '14px',
                      color: 'rgba(0,0,0,1)',
                    }}>{post.title}</p>
                    <p style={{
                      fontFamily: '"Poppins", sans-serif',
                      fontWeight: 400,
                      fontSize: '12px',
                      color: 'rgba(159,159,159,1)',
                    }}>{post.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <FeaturesBar />
    </>
  )
}
export default Blog