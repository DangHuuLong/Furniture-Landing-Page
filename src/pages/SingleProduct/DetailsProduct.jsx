function DetailsProduct() {
  return (
    <div style={{
      width: '100%',
      padding: '26px 100px 0px 100px',
      display: 'flex',
      gap: '105px',
      marginBottom: '66px',
    }}>
      {/*Images Product*/ }
      <div style={{
        display: 'flex',
        gap: '32px'
      }}>
        {/*Small Images*/ }
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '32px'
        }}>
          <div style={{
            width: '76px',
            height: '80px',
            borderRadius: '10px',
            backgroundColor: 'rgba(249, 241, 231, 1)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <img src="/src/pages/SingleProduct/images/Outdoor sofa set 2.png" style={{
              width: '100%',
              objectFit: 'cover',
            }}/>
          </div>
          <div style={{
            width: '76px',
            height: '80px',
            borderRadius: '10px',
            backgroundColor: 'rgba(249, 241, 231, 1)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <img src="/src/pages/SingleProduct/images/Outdoor sofa set_2 1.png" style={{
              width: '100%',
              objectFit: 'cover',
            }} />
          </div>
          <div style={{
            width: '76px',
            height: '80px',
            borderRadius: '10px',
            backgroundColor: 'rgba(249, 241, 231, 1)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <img src="/src/pages/SingleProduct/images/Stuart sofa 1.png" style={{
              width: '100%',
              objectFit: 'cover',
            }} />
          </div>
          <div style={{
            width: '76px',
            height: '80px',
            borderRadius: '10px',
            backgroundColor: 'rgba(249, 241, 231, 1)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <img src="/src/pages/SingleProduct/images/Maya sofa three seater (1).png" style={{
              width: '100%',
              objectFit: 'cover',
            }} />
          </div>
        </div>
        {/*Big Image*/ }
        <div style={{
          width: '423px',
          height: '500px',
          borderRadius: '10px',
          backgroundColor: 'rgba(249, 241, 231, 1)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <img src="/src/pages/SingleProduct/images/Asgaard sofa 3.png" style={{
            width: '100%',
            objectFit: 'cover',
          }} />
        </div>
      </div>
      {/*Details Product*/ }
      <div style={{
        display: 'flex',
        flexDirection: 'column',
      }}>
        <p style={{
          fontFamily: '"Poppins", sans-serif',
          fontWeight: '400',
          fontSize: '42px',
          color: 'rgba(0, 0, 0, 1)',
        }}>Asgaard sofa</p>
        <p style={{
          fontFamily: '"Poppins", sans-serif',
          fontWeight: '500',
          fontSize: '24px',
          color: 'rgba(159, 159, 159, 1)',
        }}>Rs. 250,000.00</p>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          marginTop: '10px',
        }}>
          {/*Rating*/ }
          <div style={{
            display: 'flex',
            gap: '6px',
            marginRight: '18px',
          }}>
            <img src="/src/pages/SingleProduct/images/dashicons_star-filled.png" />
            <img src="/src/pages/SingleProduct/images/dashicons_star-filled.png" />
            <img src="/src/pages/SingleProduct/images/dashicons_star-filled.png" />
            <img src="/src/pages/SingleProduct/images/dashicons_star-filled.png" />
            <img src="/src/pages/SingleProduct/images/carbon_star-half.png" />
          </div>
          <div style={{
            width: '1px',
            height: '30px',
            backgroundColor: 'rgba(159, 159, 159, 1)',
            marginRight: '22px',
          }}></div>
          <p style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: '400',
            fontSize: '13px',
            color: 'rgba(159, 159, 159, 1)',
          }}>5 Customer Review</p>
        </div>
        {/*Description*/ }
        <p style={{
          marginTop: '13px',
          width: '424px',
          flexWrap: 'wrap',
          fontFamily: '"Poppins", sans-serif',
          fontWeight: '400',
          fontSize: '13px',
          color: 'rgba(0, 0, 0, 1)',
        }}>
          Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
        </p>

        {/*Size*/ }
        <div style={{
          marginTop: '22px',
        }}>
          <p style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: '400',
            fontSize: '14px',
            color: 'rgba(159, 159, 159, 1)',
          }}>Size</p>
          <div style={{
            display: 'flex',
            gap: '16px',
            marginTop: '12px',
          }}>
            {/*Size L*/ }
            <div style={{
              width: '30px',
              height: '30px',
              borderRadius: '5px',
              backgroundColor: 'rgba(184, 142, 47, 1)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <p style={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: '400',
                fontSize: '13px',
                color: 'rgba(255, 255, 255, 1)',
              }}>L</p>
            </div>

            {/*Size XL*/ }
            <div style={{
              width: '30px',
              height: '30px',
              borderRadius: '5px',
              backgroundColor: 'rgba(249, 241, 231, 1)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <p style={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: '400',
                fontSize: '13px',
                color: 'rgba(0, 0, 0, 1)',
              }}>XL</p>
            </div>

            {/*Size XS*/}
            <div style={{
              width: '30px',
              height: '30px',
              borderRadius: '5px',
              backgroundColor: 'rgba(249, 241, 231, 1)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <p style={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: '400',
                fontSize: '13px',
                color: 'rgba(0, 0, 0, 1)',
              }}>XS</p>
            </div>
          </div>
        </div>

        {/*Color*/}
        <div style={{
          marginTop: '18px',
        }}>
          <p style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: '400',
            fontSize: '14px',
            color: 'rgba(159, 159, 159, 1)',
          }}>Color</p>
          <div style={{
            display: 'flex',
            gap: '16px',
            marginTop: '12px',
          }}>
            <div style={{
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              backgroundColor: 'rgba(129, 109, 250, 1)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}></div>
            <div style={{
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              backgroundColor: 'rgba(0, 0, 0, 1)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}></div>
            <div style={{
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              backgroundColor: 'rgba(184, 142, 47, 1)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}></div>

          </div>
        </div>

        {/*Buttons*/ }
        <div style={{
          display: 'flex',
          marginTop: '32px',
        }}>
          {/*Quantity Button*/}
          <div style={{
            width: '123px',
            height: '64px',
            borderRadius: '10px',
            backgroundColor: 'transparent',
            border: '1px solid rgba(159, 159, 159, 1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingInline: '15px',
            marginRight: '18px',
          }}>
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: '400',
              fontSize: '16px',
              color: 'rgba(0, 0, 0, 1)',
            }}>-</p>
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: '500',
              fontSize: '16px',
              color: 'rgba(0, 0, 0, 1)',
            }}>1</p>
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: '400',
              fontSize: '16px',
              color: 'rgba(0, 0, 0, 1)',
            }}>+</p>
          </div>
          {/*Add to Cart Button*/ }
          <div style={{
            width: '215px',
            height: '64px',
            borderRadius: '15px',
            backgroundColor: 'transparent',
            border: '1px solid rgba(0, 0, 0, 1)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: '10px',
          }}>
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: '400',
              fontSize: '20px',
              color: 'rgba(0, 0, 0, 1)',
            }}>Add To Cart</p>
          </div>
          {/*Compare Button*/ }
          <div style={{
            width: '215px',
            height: '64px',
            borderRadius: '15px',
            backgroundColor: 'transparent',
            border: '1px solid rgba(0, 0, 0, 1)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: '400',
              fontSize: '23px',
              color: 'rgba(0, 0, 0, 1)',
              marginRight: '10px',
            }}>+</p>
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: '400',
              fontSize: '20px',
              color: 'rgba(0, 0, 0, 1)',
            }}>Compare</p>
          </div>
        </div>

        {/*Line*/ }
        <div style={{
          width: '100%',
          height: '1px',
          backgroundColor: 'rgba(217, 217, 217, 1)',
          marginTop: '60px',
        }}></div>

        {/*Infor*/}
        <div style={{
          marginTop: '41px',
          display: 'flex',
        }}>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            marginRight: '16px',
          }}>
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: '400',
              fontSize: '16px',
              color: 'rgba(159, 159, 159, 1)',
            }}>SKU</p>
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: '400',
              fontSize: '16px',
              color: 'rgba(159, 159, 159, 1)',
            }}>Category</p>
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: '400',
              fontSize: '16px',
              color: 'rgba(159, 159, 159, 1)',
            }}>Tags</p>
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: '400',
              fontSize: '16px',
              color: 'rgba(159, 159, 159, 1)',
            }}>Share</p>
          </div>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            marginRight: '12px',
          }}>
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: '400',
              fontSize: '16px',
              color: 'rgba(159, 159, 159, 1)',
            }}>:</p>
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: '400',
              fontSize: '16px',
              color: 'rgba(159, 159, 159, 1)',
            }}>:</p>
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: '400',
              fontSize: '16px',
              color: 'rgba(159, 159, 159, 1)',
            }}>:</p>
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: '400',
              fontSize: '16px',
              color: 'rgba(159, 159, 159, 1)',
            }}>:</p>
          </div>
          
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            marginRight: '12px',
          }}>
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: '400',
              fontSize: '16px',
              color: 'rgba(159, 159, 159, 1)',
            }}>SS001</p>
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: '400',
              fontSize: '16px',
              color: 'rgba(159, 159, 159, 1)',
            }}>Sofas</p>
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: '400',
              fontSize: '16px',
              color: 'rgba(159, 159, 159, 1)',
            }}>Sofa, Chair, Home, Shop</p>
            <div style={{
              display: 'flex',
              gap: '25px',
            }}>
              <img src="/src/pages/SingleProduct/images/akar-icons_facebook-fill.png" style={{
                width: '20px',
                height: '20px',
              }}/>
              <img src="/src/pages/SingleProduct/images/akar-icons_linkedin-box-fill.png" style={{
                width: '20px',
                height: '20px',
              }} />
              <img src="/src/pages/SingleProduct/images/ant-design_twitter-circle-filled.png" style={{
                width: '20px',
                height: '20px',
              }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default DetailsProduct