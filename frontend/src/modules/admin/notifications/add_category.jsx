import { X, ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import Input from '../components/input';

export default function AddCategory({ open, onClose, onCreated }) {
  const [categoryName, setCategoryName] = useState('');
  const [allProducts, setAllProducts] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(false);
  const [selectedProductIds, setSelectedProductIds] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [saving, setSaving] = useState(false);

  // reset khi modal đóng
  useEffect(() => {
    if (!open) {
      setCategoryName('');
      setAllProducts([]);
      setSelectedProductIds([]);
      setDropdownOpen(false);
      setLoadingProducts(false);
      setSaving(false);
    }
  }, [open]);

  // khi mở modal thì load danh sách products để chọn
  useEffect(() => {
    if (!open) return;

    async function fetchProducts() {
      try {
        setLoadingProducts(true);
        const res = await fetch('http://localhost:3001/products');
        const data = await res.json();
        setAllProducts(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error('fetch products for category error:', err);
        setAllProducts([]);
      } finally {
        setLoadingProducts(false);
      }
    }

    fetchProducts();
  }, [open]);

  const toggleSelectProduct = (id) => {
    setSelectedProductIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const selectedLabel =
    selectedProductIds.length === 0
      ? ''
      : `${selectedProductIds.length} product(s) selected`;

  async function handleCreateCategory() {
    if (saving) return;

    if (!categoryName.trim()) {
      alert('Please enter category name');
      return;
    }

    try {
      setSaving(true);

      // 1. Tạo category mới (ĐỔI URL Ở ĐÂY)
      const res = await fetch('http://localhost:3001/categories', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          categoryName: categoryName.trim(),
          stock: 0,
          isVisible: true,
        }),
      });

      const newCategory = await res.json().catch(() => ({}));
      if (!res.ok) {
        console.error('create category error:', newCategory);
        alert(newCategory?.message || 'Create category failed');
        return;
      }

      // 2. Gán category cho các product đã chọn (giữ nguyên)
      if (selectedProductIds.length) {
        await Promise.all(
          selectedProductIds.map((productId) =>
            fetch(`http://localhost:3001/products/${productId}`, {
              method: 'PUT',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ category: newCategory._id }),
            }).catch((err) => {
              console.error('update product category error:', err);
            })
          )
        );
      }

      if (typeof onCreated === 'function') {
        onCreated(newCategory);
      }

      onClose();
    } catch (err) {
      console.error('handleCreateCategory error:', err);
      alert('Network error, please try again');
    } finally {
      setSaving(false);
    }
  }

  if (!open) return null;

  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        backgroundColor: 'rgba(19,21,35,0.4)',
        position: 'fixed',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          width: 540,
          padding: 28,
          backgroundColor: 'white',
          borderRadius: 4,
          boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <button
          style={{
            position: 'absolute',
            top: 12,
            right: 12,
            border: 'none',
            backgroundColor: 'transparent',
            cursor: 'pointer',
          }}
          onClick={onClose}
        >
          <X size={24} color="#7E84A3" />
        </button>
        <p
          style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 700,
            fontSize: 20,
            color: '#131523',
          }}
        >
          Add Category
        </p>

        <div
          style={{
            marginTop: 28,
            display: 'flex',
            flexDirection: 'column',
            gap: 24,
          }}
        >
          {/* Category Name */}
          <Input
            label="Category Name"
            inputHeight={40}
            placeHolder="Living Room"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
          />

          {/* Add Products dropdown (multi-select) */}
          <div style={{ position: 'relative' }}>
            <Input
              label="Add Products"
              inputHeight={40}
              placeHolder="Choose Products"
              Icon={ChevronDown}
              value={selectedLabel}
              readOnly
              onClick={() => setDropdownOpen((prev) => !prev)}
            />

            {dropdownOpen && (
              <div
                style={{
                  position: 'absolute',
                  top: 72,
                  left: 0,
                  right: 0,
                  maxHeight: 240,
                  overflowY: 'auto',
                  backgroundColor: 'white',
                  borderRadius: 4,
                  boxShadow: '0 4px 12px rgba(0,0,0,0.12)',
                  padding: 8,
                  zIndex: 10,
                }}
              >
                {loadingProducts ? (
                  <p
                    style={{
                      fontFamily: '"Poppins", sans-serif',
                      fontSize: 14,
                      color: '#5A607F',
                      padding: 8,
                    }}
                  >
                    Loading products...
                  </p>
                ) : allProducts.length === 0 ? (
                  <p
                    style={{
                      fontFamily: '"Poppins", sans-serif',
                      fontSize: 14,
                      color: '#5A607F',
                      padding: 8,
                    }}
                  >
                    No products available
                  </p>
                ) : (
                  allProducts.map((p) => (
                    <label
                      key={p._id}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 8,
                        padding: '6px 8px',
                        cursor: 'pointer',
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={selectedProductIds.includes(p._id)}
                        onChange={() => toggleSelectProduct(p._id)}
                      />
                      <span
                        style={{
                          fontFamily: '"Poppins", sans-serif',
                          fontSize: 14,
                          color: '#131523',
                        }}
                      >
                        {p.SKU} — {p.name}
                      </span>
                    </label>
                  ))
                )}
              </div>
            )}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            gap: 28,
            marginTop: 16,
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}
        >
          <button
            style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 400,
              fontSize: 16,
              color: '#1E5EFF',
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
            }}
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            type="button"
            disabled={saving}
            onClick={handleCreateCategory}
            style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 400,
              fontSize: 16,
              color: '#FFFFFF',
              padding: '8px 24px',
              backgroundColor: saving ? '#8CB3FF' : '#1E5EFF',
              borderRadius: 4,
              cursor: saving ? 'not-allowed' : 'pointer',
              border: 'none',
            }}
          >
            {saving ? 'Creating...' : 'Create Category'}
          </button>
        </div>
      </div>
    </div>
  );
}
