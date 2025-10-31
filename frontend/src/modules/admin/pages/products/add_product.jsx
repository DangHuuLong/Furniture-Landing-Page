import { MoveLeft, ChevronDown } from 'lucide-react';
import { NavLink, useOutletContext } from 'react-router-dom';
import ToggleButton from '../../components/toggle_button';
import SizeTag from '../../components/size_tag';
import { useState } from 'react';
import Categories from './categories';
import Tags from './tags';
import SEOSettings from './SEO_settings';
import HeaderAddEditPage from '../../components/header_add_edit_page';
import FooterAddEditPage from '../../components/footer_add_edit_page';
export default function AddProduct(){
  const [categories, setCategories] = useState([
    'Women', 'Men', 'T-Shirt', 'Hoodie', 'Dress'
  ])
  const [tags, setTags] = useState([
    'T-Shirt', 'Men Clothes', 'Summer Collection'
  ])
  const [sizes, setSizes] = useState([
    { id: 1, label: 'S' },
    { id: 2, label: 'M' },
    { id: 3, label: 'L' },
  ]);
  const [sizeInput, setSizeInput] = useState('');
  const handleRemoveSize = (id) => {
    setSizes(prev => prev.filter(s => s.id !== id));
  };
  const {setImportData} = useOutletContext()
  return (
    <div style={{
      width: '100%',
      height: '100%',
      backgroundColor: '#F5F6FA',
      padding: '30px 40px 40px 40px',
    }}>
      <HeaderAddEditPage to={'/products'} name={'Add Product'} saveFunction={setImportData}/>

      {/**Form */}
      <div style={{
        display: 'flex',
        gap: 30,
        margin: '30px 0'
      }}>
        {/**Left */}
        <div style={{
          flex: 2,
          borderRadius: 6,
          backgroundColor: 'white',
          padding: 28,
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.12)'
        }}>
          <p style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 700,
            fontSize: 16,
            color: '#131523',
          }}>Information</p>

          {/**Product Name */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: 24,
            gap: 4
          }}>
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 400,
              fontSize: 14,
              color: '#5A607F',
            }}>Product Name</p>
            <input type='text' 
              placeholder='Summer T-Shirt'
              aria-label='Summer T-Shirt'
            style={{
              width: '100%',
              height: 40,
              borderRadius: 4,
              backgroundColor: 'white',
              border: '1px solid #D9E1EC',
              padding: '8px 16px',
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 400,
              fontSize: 16,
              color: "#A1A7C4",
              outline: "none",
            }}/>
          </div>

          {/**Product Description */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: 24,
            gap: 4
          }}>
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 400,
              fontSize: 14,
              color: '#5A607F',
            }}>Product Description</p>
            <textarea 
              placeholder='Product description'
              aria-label='Product description'
              style={{
                width: '100%',
                height: 96,
                borderRadius: 4,
                backgroundColor: 'white',
                border: '1px solid #D9E1EC',
                padding: '8px 16px',
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 400,
                fontSize: 16,
                color: "#A1A7C4",
                outline: "none",
              }} />
          </div>

          <div style={{
            height: 1,
            width: '100%',
            backgroundColor: '#D7DBEC',
            marginTop: 40
          }}></div>

          {/**Image */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 24,
            width: '100%',
            marginTop: 40
          }}>
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 700,
              fontSize: 16,
              color: '#131523',
            }}>Image</p>
            <div style={{
              width: '100%',
              height: 168,
              borderRadius: 4,
              border: '1px dashed #A1A7C4',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 12
              }}>
                <div style={{
                  width: 102,
                  height: 40,
                  borderRadius: 4,
                  border: '1px solid #D7DBEC',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <p style={{
                    fontFamily: '"Poppins", sans-serif',
                    fontWeight: 400,
                    fontSize: 16,
                    color: '#1E5EFF',
                  }}>Add File</p>
                </div>
                <p style={{
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: 400,
                  fontSize: 14,
                  color: '#5A607F',
                }}>Or drag and drop files</p>
              </div>
            </div>
          </div>

          <div style={{
            height: 1,
            width: '100%',
            backgroundColor: '#D7DBEC',
            marginTop: 40
          }}></div>
          
          {/**Price */}
          <div style={{
            marginTop: 28,
            display: 'flex',
            flexDirection: 'column',
            gap: 24
          }}>
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 700,
              fontSize: 16,
              color: '#131523',
            }}>Price</p>
            <div style={{
              display: 'flex',
              gap: 28
            }}>
              {/**Proudct Price */}
              <div style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                marginTop: 24,
                gap: 4
              }}>
                <p style={{
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: 400,
                  fontSize: 14,
                  color: '#5A607F',
                }}>Product Price</p>
                <input type='text'
                  placeholder='Enter price'
                  aria-label='Enter price'
                  style={{
                    width: '100%',
                    height: 40,
                    borderRadius: 4,
                    backgroundColor: 'white',
                    border: '1px solid #D9E1EC',
                    padding: '8px 16px',
                    fontFamily: '"Poppins", sans-serif',
                    fontWeight: 400,
                    fontSize: 16,
                    color: "#A1A7C4",
                    outline: "none",
                  }} />
              </div>
              {/**Discount Price */}
              <div style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                marginTop: 24,
                gap: 4
              }}>
                <p style={{
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: 400,
                  fontSize: 14,
                  color: '#5A607F',
                }}>Discount Price</p>
                <input type='text'
                  placeholder='Price at Discount'
                  aria-label='Price at Discount'
                  style={{
                    width: '100%',
                    height: 40,
                    borderRadius: 4,
                    backgroundColor: 'white',
                    border: '1px solid #D9E1EC',
                    padding: '8px 16px',
                    fontFamily: '"Poppins", sans-serif',
                    fontWeight: 400,
                    fontSize: 16,
                    color: "#A1A7C4",
                    outline: "none",
                  }} />
              </div>
            </div>
            <div style={{
              display: 'flex',
              gap: 12,
              alignItems: 'center'
            }}>
              <ToggleButton />
              <p style={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 400,
                fontSize: 16,
                color: '#131523',
              }}>Add tax for this product</p>
            </div>
          </div>

          <div style={{
            height: 1,
            width: '100%',
            backgroundColor: '#D7DBEC',
            marginTop: 40
          }}></div>

          {/**Different Options */}
          <div style={{
            marginTop: 28,
          }}>
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 700,
              fontSize: 16,
              color: '#131523',
            }}>Different Options</p>
            <div style={{
              display: 'flex',
              gap: 12,
              alignItems: 'center',
              marginTop: 24
            }}>
              <ToggleButton />
              <p style={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 400,
                fontSize: 16,
                color: '#131523',
              }}>This product has multiple options</p>
            </div>

            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 700,
              fontSize: 16,
              color: '#131523',
              marginTop: 40
            }}>Option 1</p>
            <div style={{
              display: 'flex',
              marginTop: 20,
              gap: 28
            }}>
              {/**Size */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
                flex: 1
              }}>
                <p style={{
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: 400,
                  fontSize: 14,
                  color: '#5A607F',
                }}>Size</p>
                <div style={{
                  width: '100%',
                  position: 'relative'
                }}>
                  <input disabled type='text'
                    placeholder='Size'
                    aria-label='Size'
                    style={{
                      width: '100%',
                      height: 40,
                      borderRadius: 4,
                      backgroundColor: 'white',
                      border: '1px solid #D9E1EC',
                      padding: '8px 16px',
                      fontFamily: '"Poppins", sans-serif',
                      fontWeight: 400,
                      fontSize: 16,
                      color: "#131523",
                      outline: "none",
                    }} />
                  <ChevronDown
                    size={20}
                    color="#7E84A3"
                    style={{
                      position: "absolute",
                      right: 10,
                      top: "50%",
                      transform: "translateY(-50%)",
                      pointerEvents: "none",
                    }}
                  />
                </div>
              </div>

              {/**Value */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
                flex: 1
              }}>
                <p style={{
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: 400,
                  fontSize: 14,
                  color: '#5A607F',
                }}>Value</p>
                <div style={{
                  width: '100%',
                }}>
                  <div 
                    style={{
                      width: '100%',
                      height: 40,
                      borderRadius: 4,
                      backgroundColor: 'white',
                      border: '1px solid #D9E1EC',
                      padding: '8px 16px',
                      outline: "none",
                      display: 'flex',
                      gap: 8,
                      alignItems: 'center'
                    }}>
                      {/** */} 
                      {sizes.map(s => (
                        <SizeTag key={s.id} id={s.id} size={s.label} onRemove={handleRemoveSize} />
                      ))}
                  </div> 
                </div>
              </div>
            </div>

            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 400,
              fontSize: 16,
              color: '#1E5EFF',
              marginTop: 20
            }}>Add More</p>
          </div>

          <div style={{
            height: 1,
            width: '100%',
            backgroundColor: '#D7DBEC',
            marginTop: 40
          }}></div>

          {/**Shipping */}
          <div style={{
            marginTop: 28,
            display: 'flex',
            flexDirection: 'column',
            gap: 24
          }}>
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 700,
              fontSize: 16,
              color: '#131523',
            }}>Shipping</p>
            <div style={{
              display: 'flex',
              gap: 28,
              marginTop: 24,
            }}>
              {/**Weight*/}
              <div style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                gap: 4
              }}>
                <p style={{
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: 400,
                  fontSize: 14,
                  color: '#5A607F',
                }}>Weight</p>
                <input type='text'
                  placeholder='Enter Weight'
                  aria-label='Enter Weight'
                  style={{
                    width: '100%',
                    height: 40,
                    borderRadius: 4,
                    backgroundColor: 'white',
                    border: '1px solid #D9E1EC',
                    padding: '8px 16px',
                    fontFamily: '"Poppins", sans-serif',
                    fontWeight: 400,
                    fontSize: 16,
                    color: "#A1A7C4",
                    outline: "none",
                  }} />
              </div>

              {/**Country */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
                flex: 1
              }}>
                <p style={{
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: 400,
                  fontSize: 14,
                  color: '#5A607F',
                }}>Size</p>
                <div style={{
                  width: '100%',
                  position: 'relative'
                }}>
                  <input 
                  disabled
                  type='text'
                    placeholder='Select Country'
                    aria-label='Select Country'
                    style={{
                      width: '100%',
                      height: 40,
                      borderRadius: 4,
                      backgroundColor: 'white',
                      border: '1px solid #D9E1EC',
                      padding: '8px 16px',
                      fontFamily: '"Poppins", sans-serif',
                      fontWeight: 400,
                      fontSize: 16,
                      color: "#131523",
                      outline: "none",
                    }} />
                  <ChevronDown
                    size={20}
                    color="#7E84A3"
                    style={{
                      position: "absolute",
                      right: 10,
                      top: "50%",
                      transform: "translateY(-50%)",
                      pointerEvents: "none",
                    }}
                  />
                </div>
              </div>
            </div>

            <div style={{
              display: 'flex',
              gap: 12,
              alignItems: 'center'
            }}>
              <ToggleButton />
              <p style={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 400,
                fontSize: 16,
                color: '#131523',
              }}>This is digital item</p>
            </div>
          </div>
        </div>
        {/**Right */}
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: 30,
        }}>
          <Categories categories={categories} />
          <Tags tags={tags}/>
          <SEOSettings />
        </div>
      </div>

      <FooterAddEditPage to={"/products"} saveFunction={setImportData} />
    </div>
  )
}