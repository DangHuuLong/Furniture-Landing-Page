import { useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";
import CategoryCard from "./category_card";
import HeaderSubPage from '../../components/header_sub_page';
import EmptyStates from "../../components/empty_states";

export default function CategoriesPage() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const { setAddCategory } = useOutletContext();

  useEffect(() => {
    async function fetchCategories() {
      try {
        // 🔥 GỌI THẲNG TỚI BACKEND (port 3001)
        const res = await fetch('http://localhost:3001/categories');

        const contentType = res.headers.get('content-type') || '';

        if (!res.ok) {
          const text = await res.text();
          console.error('Failed to fetch categories:', res.status, text);
          throw new Error('Failed to fetch categories');
        }

        if (!contentType.includes('application/json')) {
          const text = await res.text();
          console.error('Expected JSON but got:', text.slice(0, 200));
          throw new Error('Response is not JSON');
        }

        const data = await res.json();
        setCategories(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error('fetchCategories error:', err);
        setCategories([]);
      } finally {
        setLoading(false);
      }
    }

    fetchCategories();
  }, []);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      boxSizing: 'border-box',
      alignSelf: 'stretch',
      backgroundColor: '#F5F6FA',
      padding: '28px 40px 40px 40px',
      position: 'relative'
    }}>
      {loading ? (
        <p
          style={{
            fontFamily: '"Poppins", sans-serif',
            fontSize: 16,
            color: '#5A607F'
          }}
        >
          Loading categories...
        </p>
      ) : categories.length ? (
        <>
          <HeaderSubPage
            headerTitle={'Categories'}
            addButtonTitle={'Category'}
            exportButton={false}
            addFunc={setAddCategory}
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
              gap: 30,
              marginTop: 30
            }}
          >
            {categories.map((category) => (
              <CategoryCard
                key={category._id || category.categoryName}
                category={category}
              />
            ))}
          </div>
        </>
      ) : (
        <EmptyStates
          namePage={'Categories'}
          imagePath={'categories.png'}
          title={'Create First Category'}
          content={'Organize all your items in stock by creating and adding them to categories. Categories helps to find items faster for your customers.'}
          btn={'Add Category'}
        />
      )}
    </div>
  );
}
