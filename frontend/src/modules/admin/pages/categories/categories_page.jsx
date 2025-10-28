import { NavLink } from "react-router-dom";
import { Plus } from 'lucide-react';
import { useState } from "react";
import CategoryCard from "./category_card";
export default function CategoriesPage(){
  const [categories, setCategories] = useState([
    {
      imagePath: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/LEI0440_Leica_IIIf_chrom_-_Sn._580566_1951-52-M39_Blitzsynchron_front_view-6531_hf-.jpg/1200px-LEI0440_Leica_IIIf_chrom_-_Sn._580566_1951-52-M39_Blitzsynchron_front_view-6531_hf-.jpg",
      productName: "Camera",
      stock: 42,
    },
    {
      imagePath: "https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/03/Headphones-8.jpg",
      productName: "Headphones",
      stock: 87,
    },
    {
      imagePath: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80",
      productName: "Sneakers",
      stock: 120,
    },
    {
      imagePath: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80",
      productName: "Smart Watch",
      stock: 56,
    },
    {
      imagePath: "https://bizweb.dktcdn.net/thumb/large/100/362/971/products/anh-chup-man-hinh-2025-08-20-210545.png?v=1755698811690",
      productName: "Laptop",
      stock: 30,
    },
    {
      imagePath:
        "https://amnhacvietthanh.vn/wp-content/uploads/2020/10/Yamaha-GC12C.jpg",
      productName: "Guitar",
      stock: 15,
    },
    {
      imagePath:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF45HLV6cMeX4fWm3jrzMvwjUCCpvfhODyUw&s",
      productName: "Sunglasses",
      stock: 73,
    },
    {
      imagePath:
        "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80",
      productName: "Kitchen Set",
      stock: 48,
    },
    {
      imagePath:
        "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&w=600&q=80",
      productName: "Backpack",
      stock: 90,
    },
    {
      imagePath:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80",
      productName: "Office Chair",
      stock: 22,
    },  
  ]);

  return (
    <div style={{
      flex: 1,
      boxSizing: 'border-box',
      alignSelf: 'stretch',
      backgroundColor: '#F5F6FA',
      padding: '28px 40px 40px 40px',
      position: 'relative'
    }}>
      {/**Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
      }}>
        <p style={{
          fontFamily: '"Poppins", sans-serif',
          fontWeight: 700,
          fontSize: 24,
          color: '#131523',
        }}>Categories</p>
        <NavLink
          to="/products/addcategory"
          style={{
            width: 148,
            height: 40,
            borderRadius: 4,
            backgroundColor: '#1E5EFF',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: 'none',
            textDecoration: "none",
            cursor: 'pointer'
          }}
          onClick={() => setAddProduct(!addProduct)}>
          <Plus size={14} color='white' />
          <p style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 400,
            fontSize: 16,
            color: 'white',
            marginLeft: 10
          }}>Add Category</p>
        </NavLink>
      </div>
      {/** */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
          gap: 30,
          marginTop: 30
        }}
      >
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            imagePath={category.imagePath}
            productName={category.productName}
            stock={category.stock}
          />
        ))}
      </div>
    </div>
  )
}