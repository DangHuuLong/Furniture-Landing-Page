import Banner from '../Shop/Banner'
import FeaturesBar from '../Shop/FeaturesBar'
import { useState, useEffect } from 'react';
function Blog(){
  const categories = [
    { name: "Crafts", quantity: 2 },
    { name: "Design", quantity: 8 },
    { name: "Handmade", quantity: 7 },
    { name: "Interior", quantity: 1 },
    { name: "Wood", quantity: 6 },
  ];

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
      const fetchBlogs = async () => {
        try {
          const response = await fetch('http://localhost:3001/blogs');
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          setBlogs(data);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      };
  
    fetchBlogs();
    }, []);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };


  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 3;

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentbBogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <div
          key={i}
          onClick={() => paginate(i)}
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "10px",
            backgroundColor: currentPage === i ? "rgba(184, 142, 47, 1)" : "rgba(249, 241, 231, 1)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <p
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: "400",
              fontSize: "20px",
              color: currentPage === i ? "rgba(255,255,255,1)" : "rgba(0,0,0,1)",
            }}
          >
            {i}
          </p>
        </div>
      );
    }
    return pageNumbers;
  };

  if (loading) {
    return <div style={{ textAlign: 'center', padding: '50px' }}>Đang tải dữ liệu sản phẩm...</div>;
  }

  if (error) {
    return <div style={{ textAlign: 'center', padding: '50px', color: 'red' }}>Lỗi khi tải dữ liệu: {error.message}</div>;
  }

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
          {currentbBogs.map((blog, index)=>(
            <div key={index}>
              <img src={blog.image} style={{
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
                  <img src='/src/modules/customer/pages/Blog/images/dashicons_admin-users.png' style={{
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
                  <img src='/src/modules/customer/pages/Blog/images/uis_calender.png' style={{
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
                  <img src='/src/modules/customer/pages/Blog/images/ci_tag.png' style={{
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
            {renderPageNumbers()}
            {currentPage < totalPages && (
              <div
                onClick={handleNextPage}
                style={{
                  width: "98px",
                  height: "60px",
                  borderRadius: "10px",
                  backgroundColor: "rgba(249, 241, 231, 1)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <p style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "400",
                  fontSize: "20px",
                  color: "rgba(0,0,0,1)",
                }}>Next</p>
              </div>
            )}
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
              <img src='/src/modules/customer/pages/Blog/images/akar-icons_search.png' style={{
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
              {categories.map(((categorie, index)=>(
                <div key={index} style={{
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
              {blogs.map((post, index)=>(
                <div key={index} style={{
                  display: 'flex',
                  gap: '12px',
                  alignItems: 'center'
                }}>
                  <img src={post.image} style={{
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