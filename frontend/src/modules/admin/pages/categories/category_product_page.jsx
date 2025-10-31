import { NavLink, useParams, useLocation, useOutletContext } from "react-router-dom";
import { Plus } from 'lucide-react';
import HeaderSubPage from "../../components/header_add_edit_page";
import ProductCategoryCard from "./product_category_card";
import CategoryVisibility from "./category_visibility";
import CategoryInfo from "./category_info";

export default function CategoryProductPage() {
  const { name } = useParams();
  const location = useLocation();
  const category = location.state; 
  const products = category?.products || [];

  const { setImportData } = useOutletContext()
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#F5F6FA",
        padding: "30px 40px 40px 40px",
      }}
    >
      <HeaderSubPage to={"/categories"} name={name} saveFunction={setImportData}/>
      <div style={{
        marginTop: 30,
        display: 'flex',
        gap: 30
      }}>
        {/**Products */}
        <div style={{
          flex: 2,
          padding: 28,
          borderRadius: 6,
          backgroundColor: 'white',
          boxShadow: '0px 1px 4px 0px rgba(21, 34, 50, 0.08)',
          gap: 24
        }}>
          
          <div style={{
            display: 'flex',
            gap: 10,
            alignItems: 'center'
          }}>
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 700,
              fontSize: 16,
              color: '#131523',
            }}>Products</p>
            <p style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 400,
              fontSize: 16,
              color: '#5A607F',
            }}>{ products ? products.length : 0}</p>
          </div>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            marginTop: 24
          }}>
            {products && products.map((product, i)=>{
              return <ProductCategoryCard name={product.name} img={product.img}/>
            })}
          </div>
          <NavLink
            to="/products/addproduct"
            style={{
              width: "100%",
              height: 40,
              borderRadius: 4,
              border: "1px solid #D7DBEC",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 4,
              marginTop: 20,
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            <Plus size={24} color="#1E5EFF" />
            <p
              style={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 400,
                fontSize: 16,
                color: "#1E5EFF",
              }}
            >
              Add Product
            </p>
          </NavLink>
        </div>
        {/**Right */}
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: 30
        }}>
          <CategoryVisibility />
          <CategoryInfo name={name}/>
        </div>
      </div>
      <div style={{
        borderTop: '1px solid #D7DBEC',
        width: '100%',
        height: 70,
        marginTop: '30px',
        display: 'flex',
        gap: 12,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
      }}>
        <NavLink
          to="/categories"
          style={{
            width: 102,
            height: 40,
            borderRadius: 4,
            backgroundColor: 'white',
            border: '1px solid #D7DBEC',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textDecoration: 'none'
          }}>
          <p style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 400,
            fontSize: 16,
            color: '#1E5EFF',
          }}>Cancel</p>
        </NavLink>
        <button style={{
          width: 86,
          height: 40,
          borderRadius: 4,
          backgroundColor: '#1E5EFF',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: 12,
          border: 'none',
          cursor: 'pointer',
        }}
          onClick={setImportData}>
          <p style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 400,
            fontSize: 16,
            color: 'white',
          }}>Save</p>
        </button>
      </div>
    </div>
  );
}
