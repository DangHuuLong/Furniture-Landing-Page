import { ChevronDown, Search, PenLine, Trash } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { useOutletContext } from 'react-router-dom';

import TableProducts from './table_products';
import HeaderSubPage from '../../components/header_sub_page';
import EmptyStates from '../../components/empty_states';

export default function ProductsPage() {
  const headers = ['Product', 'Inventory', 'Color', 'Price (VND)', 'Rating'];

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterText, setFilterText] = useState('');
  const [searchText, setSearchText] = useState('');
  const [selectedIds, setSelectedIds] = useState([]);

  const {
    setDeleteItems,
    setDeleteCount,
    setDeleteHandler,
    setExportData,
    setImportData,
    setAddCategory,
  } = useOutletContext();

  // gọi API lấy products
  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        const res = await fetch('http://localhost:3001/products');
        const data = await res.json();

        setProducts(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error('fetch products error:', err);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  // filter + search
  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchSearch =
        !searchText ||
        p.name?.toLowerCase().includes(searchText.toLowerCase()) ||
        p.SKU?.toLowerCase().includes(searchText.toLowerCase());

      const matchFilter =
        !filterText ||
        p.category?.toLowerCase() === filterText.toLowerCase();

      return matchSearch && matchFilter;
    });
  }, [products, filterText, searchText]);

  // map sang format duy nhất cho TableProducts: { id, cells: [...] }
  const datas = useMemo(() => {
    return filtered.map((p) => {
      const image = p.images?.mainImage;
      const stock =
        typeof p.stock === 'number' && p.stock > 0
          ? p.stock
          : 'Out of Stock';
      const colors =
        Array.isArray(p.colors) && p.colors.length
          ? p.colors.join(', ')
          : '-';
      const price = p.price ?? 0;
      const rating = p.rating ?? 0;
      const reviews = p.reviews ?? 0;

      return {
        id: p._id, 
        cells: [
          {
            image,
            name: p.name,
            category: p.category,
          },
          stock,
          colors,
          price,
          {
            rating,
            reviews: `(${reviews} Reviews)`,
          },
        ],
      };
    });
  }, [filtered]);

  // nếu filter/search làm mất 1 số row thì bỏ luôn id đó khỏi selectedIds
  useEffect(() => {
    const currentIds = datas.map((d) => d.id);
    setSelectedIds((prev) => prev.filter((id) => currentIds.includes(id)));
  }, [datas]);

  const handleFilterChange = (e) => setFilterText(e.target.value);
  const handleSearchChange = (e) => setSearchText(e.target.value);

  // tick 1 dòng
  const handleToggleRow = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  // tick all dòng đang hiển thị (trong 1 trang)
  const handleToggleAll = (visibleIds, checked) => {
    setSelectedIds((prev) => {
      if (checked) {
        const set = new Set([...prev, ...visibleIds]);
        return Array.from(set);
      }
      return prev.filter((id) => !visibleIds.includes(id));
    });
  };

  // hàm thật sự gọi API xóa nhiều
  const handleConfirmDelete = async () => {
    if (!selectedIds.length) return false;

    try {
      const res = await fetch(
        'http://localhost:3001/products/bulk-delete',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ids: selectedIds }),
        }
      );

      if (!res.ok) {
        console.error('bulk delete failed');
        return false;
      }

      const data = await res.json();

      // xóa khỏi UI
      setProducts((prev) =>
        prev.filter((p) => !data.deletedIds.includes(p._id))
      );
      setSelectedIds([]);
      return true; 
    } catch (err) {
      console.error('handleConfirmDelete error:', err);
      return false;
    }
  };

  const hasData = datas.length > 0;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        boxSizing: 'border-box',
        alignSelf: 'stretch',
        backgroundColor: '#F5F6FA',
        padding: '28px 40px 40px 40px',
        position: 'relative',
      }}
    >
      {loading ? (
        <p
          style={{
            fontFamily: '"Poppins", sans-serif',
            fontSize: 16,
            color: '#5A607F',
          }}
        >
          Loading products...
        </p>
      ) : hasData ? (
        <>
          {/* Header */}
          <HeaderSubPage
            headerTitle="Products"
            addButtonTitle="Product"
            exportButton={true}
            to="/products/addproduct"
          />

          {/* Card */}
          <div
            style={{
              marginTop: 28,
              width: '100%',
              padding: '32px 28px 40px 28px',
              borderRadius: 6,
              backgroundColor: 'white',
              border: '1px solid #E6E9F4',
            }}
          >
            {/* Tool bar */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ display: 'flex' }}>
                {/* Filter by category */}
                <div style={{ position: 'relative', width: 180 }}>
                  <input
                    type="text"
                    placeholder="Filter by category"
                    aria-label="Filter by category"
                    value={filterText}
                    onChange={handleFilterChange}
                    style={{
                      height: 40,
                      width: '100%',
                      backgroundColor: 'white',
                      border: '1px solid #D9E1EC',
                      borderRadius: 6,
                      paddingLeft: 16,
                      paddingRight: 36,
                      fontFamily: '"Poppins", sans-serif',
                      fontWeight: 400,
                      fontSize: 16,
                      color: '#A1A7C4',
                      outline: 'none',
                    }}
                  />
                  <ChevronDown
                    size={20}
                    color="#7E84A3"
                    style={{
                      position: 'absolute',
                      right: 10,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      pointerEvents: 'none',
                    }}
                  />
                </div>

                {/* Search by name / SKU */}
                <div
                  style={{
                    position: 'relative',
                    width: 360,
                    marginLeft: 12,
                  }}
                >
                  <input
                    type="text"
                    placeholder="Search by name or SKU..."
                    aria-label="Search by name or SKU..."
                    value={searchText}
                    onChange={handleSearchChange}
                    style={{
                      height: 40,
                      width: '100%',
                      backgroundColor: 'white',
                      border: '1px solid #D9E1EC',
                      borderRadius: 6,
                      paddingLeft: 36,
                      paddingRight: 16,
                      fontFamily: '"Poppins", sans-serif',
                      fontWeight: 400,
                      fontSize: 16,
                      color: '#A1A7C4',
                      outline: 'none',
                    }}
                  />
                  <Search
                    size={20}
                    color="#7E84A3"
                    style={{
                      position: 'absolute',
                      left: 10,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      pointerEvents: 'none',
                    }}
                  />
                </div>
              </div>

              {/* Action buttons */}
              <div
                style={{
                  display: 'flex',
                  gap: 12,
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 4,
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #D7DBEC',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <PenLine size={24} color="#1E5EFF" />
                </div>
                <button
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 4,
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #D7DBEC',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: selectedIds.length ? 'pointer' : 'not-allowed',
                    opacity: selectedIds.length ? 1 : 0.5,
                  }}
                  onClick={() => {
                    if (!selectedIds.length) return;
                    setDeleteCount(selectedIds.length);         
                    setDeleteHandler(() => handleConfirmDelete); 
                    setDeleteItems(true);                        
                  }}
                >
                  <Trash size={24} color="#1E5EFF" />
                </button>
              </div>
            </div>

            {/* Table */}
            <TableProducts
              headers={headers}
              datas={datas}
              selectedIds={selectedIds}
              onToggleRow={handleToggleRow}
              onToggleAll={handleToggleAll}
            />
          </div>
        </>
      ) : (
        <EmptyStates
          namePage="Products"
          imagePath="products.png"
          title="Add Products"
          content="Start making sales by adding your products. You can import and manage your products at any time."
          btn="Add Product"
        />
      )}
    </div>
  );
}
