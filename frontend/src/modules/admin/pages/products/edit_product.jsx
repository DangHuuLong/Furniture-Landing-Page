import ToggleButton from '../../components/toggle_button';
import SizeTag from '../../components/size_tag';
import { useState, useEffect } from 'react';
import Categories from './categories';
import Tags from './tags';
import SEOSettings from './SEO_settings';
import HeaderAddEditPage from '../../components/header_add_edit_page';
import FooterAddEditPage from '../../components/footer_add_edit_page';
import { useParams, useNavigate } from 'react-router-dom';

export default function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [categories] = useState([
    'Living Room',
    'Bedroom',
    'Dining Room',
    'Decor',
    'Storage',
    'Lighting',
  ]);

  const [tags, setTags] = useState([
    'furniture',
    'living room',
    'modern',
  ]);

  const [sizes, setSizes] = useState([
    { id: 1, label: 'S' },
    { id: 2, label: 'M' },
    { id: 3, label: 'L' },
  ]);
  const [sizeInput, setSizeInput] = useState('');

  const [sku, setSku] = useState('');
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [intendedUse, setIntendedUse] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [discount, setDiscount] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [fullDescription, setFullDescription] = useState('');
  const [mainImage, setMainImage] = useState('');
  const [subImagesText, setSubImagesText] = useState('');
  const [colorsText, setColorsText] = useState('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const handleRemoveSize = (id) => {
    setSizes((prev) => prev.filter((s) => s.id !== id));
  };

  const handleAddSize = () => {
    const value = sizeInput.trim();
    if (!value) return;
    setSizes((prev) => [
      ...prev,
      { id: Date.now(), label: value },
    ]);
    setSizeInput('');
  };

  useEffect(() => {
    async function fetchProduct() {
      try {
        setLoading(true);
        const res = await fetch(`http://localhost:3001/products/id/${id}`);
        if (!res.ok) {
          throw new Error('Cannot load product');
        }
        const p = await res.json();

        setSku(p.SKU ?? '');
        setName(p.name ?? '');
        setCategory(p.category ?? '');
        setIntendedUse(p.intendedUse ?? '');
        setPrice(p.price != null ? String(p.price) : '');
        setStock(p.stock != null ? String(p.stock) : '');
        setDiscount(p.discount != null ? String(p.discount) : '');
        setShortDescription(p.description?.short ?? '');
        setFullDescription(p.description?.full ?? '');
        setMainImage(p.images?.mainImage ?? '');
        setSubImagesText(
          Array.isArray(p.images?.subImages)
            ? p.images.subImages.join('\n')
            : ''
        );
        setColorsText(
          Array.isArray(p.colors)
            ? p.colors.join(', ')
            : ''
        );
        setSizes(
          Array.isArray(p.size) && p.size.length
            ? p.size.map((label, index) => ({
              id: index + 1,
              label,
            }))
            : [
              { id: 1, label: 'S' },
              { id: 2, label: 'M' },
              { id: 3, label: 'L' },
            ]
        );
        setTags(
          Array.isArray(p.tags) && p.tags.length
            ? p.tags
            : ['furniture', 'living room', 'modern']
        );
      } catch (err) {
        console.error('fetch product error:', err);
        alert('Cannot load product information');
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [id]);

  const handleSave = async () => {
    if (saving) return;

    if (!sku || !name || !category || !price) {
      alert('Please fill SKU, Product Name, Category and Price');
      return;
    }

    const payload = {
      SKU: sku,
      name,
      category,
      price: Number(price),
      unit: 'VND',
      stock: stock ? Number(stock) : 0,
      isNew: true,
      discount: discount ? Number(discount) : 0,
      intendedUse,
      images: {
        mainImage,
        subImages: subImagesText
          .split('\n')
          .map((s) => s.trim())
          .filter(Boolean),
      },
      description: {
        short: shortDescription,
        full: fullDescription,
      },
      size: sizes.map((s) => s.label),
      colors: colorsText
        .split(',')
        .map((c) => c.trim())
        .filter(Boolean),
      tags,
    };

    try {
      setSaving(true);
      const res = await fetch(`http://localhost:3001/products/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        console.error('Update product error:', data);
        alert(data?.message || 'Update product failed');
        return;
      }

      navigate('/products');
    } catch (err) {
      console.error('Update product error:', err);
      alert('Network error, please try again');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: '#F5F6FA',
          padding: '30px 40px 40px 40px',
          boxSizing: 'border-box',
        }}
      >
        <HeaderAddEditPage
          to={'/products'}
          name={'Edit Product'}
          saveFunction={handleSave}
        />
        <p
          style={{
            marginTop: 30,
            fontFamily: '"Poppins", sans-serif',
            fontSize: 16,
            color: '#5A607F',
          }}
        >
          Loading product...
        </p>
      </div>
    );
  }

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#F5F6FA',
        padding: '30px 40px 40px 40px',
        boxSizing: 'border-box',
      }}
    >
      <HeaderAddEditPage
        to={'/products'}
        name={'Edit Product'}
        saveFunction={handleSave}
      />

      <div
        style={{
          display: 'flex',
          gap: 30,
          margin: '30px 0',
        }}
      >
        <div
          style={{
            flex: 2,
            borderRadius: 6,
            backgroundColor: 'white',
            padding: 28,
            boxShadow: '0 4px 8px rgba(0,0,0,0.12)',
            boxSizing: 'border-box',
          }}
        >
          <p
            style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 700,
              fontSize: 16,
              color: '#131523',
            }}
          >
            Information
          </p>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginTop: 24,
              gap: 4,
            }}
          >
            <p
              style={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 400,
                fontSize: 14,
                color: '#5A607F',
              }}
            >
              SKU
            </p>
            <input
              type="text"
              placeholder="SOFA-MODERN-MS01"
              aria-label="SKU"
              value={sku}
              onChange={(e) => setSku(e.target.value)}
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
                color: '#131523',
                outline: 'none',
              }}
            />
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginTop: 24,
              gap: 4,
            }}
          >
            <p
              style={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 400,
                fontSize: 14,
                color: '#5A607F',
              }}
            >
              Product Name
            </p>
            <input
              type="text"
              placeholder="Modern Living Sofa"
              aria-label="Product Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
                color: '#131523',
                outline: 'none',
              }}
            />
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginTop: 24,
              gap: 4,
            }}
          >
            <p
              style={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 400,
                fontSize: 14,
                color: '#5A607F',
              }}
            >
              Category
            </p>
            <input
              type="text"
              placeholder="Living Room"
              aria-label="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
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
                color: '#131523',
                outline: 'none',
              }}
            />
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginTop: 24,
              gap: 4,
            }}
          >
            <p
              style={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 400,
                fontSize: 14,
                color: '#5A607F',
              }}
            >
              Intended Use
            </p>
            <input
              type="text"
              placeholder="A stylish and comfortable sofa for modern living spaces..."
              aria-label="Intended use"
              value={intendedUse}
              onChange={(e) => setIntendedUse(e.target.value)}
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
                color: '#131523',
                outline: 'none',
              }}
            />
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginTop: 24,
              gap: 4,
            }}
          >
            <p
              style={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 400,
                fontSize: 14,
                color: '#5A607F',
              }}
            >
              Short Description
            </p>
            <textarea
              placeholder="Short description..."
              aria-label="Short description"
              value={shortDescription}
              onChange={(e) => setShortDescription(e.target.value)}
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
                color: '#131523',
                outline: 'none',
                resize: 'vertical',
              }}
            />
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginTop: 24,
              gap: 4,
            }}
          >
            <p
              style={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 400,
                fontSize: 14,
                color: '#5A607F',
              }}
            >
              Full Description
            </p>
            <textarea
              placeholder="Full description..."
              aria-label="Full description"
              value={fullDescription}
              onChange={(e) => setFullDescription(e.target.value)}
              style={{
                width: '100%',
                height: 160,
                borderRadius: 4,
                backgroundColor: 'white',
                border: '1px solid #D9E1EC',
                padding: '8px 16px',
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 400,
                fontSize: 16,
                color: '#131523',
                outline: 'none',
                resize: 'vertical',
              }}
            />
          </div>

          <div
            style={{
              height: 1,
              width: '100%',
              backgroundColor: '#D7DBEC',
              marginTop: 40,
            }}
          />

          <div
            style={{
              marginTop: 32,
            }}
          >
            <p
              style={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 700,
                fontSize: 16,
                color: '#131523',
              }}
            >
              Images
            </p>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginTop: 24,
                gap: 4,
              }}
            >
              <p
                style={{
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: 400,
                  fontSize: 14,
                  color: '#5A607F',
                }}
              >
                Main Image URL
              </p>
              <input
                type="text"
                placeholder="https://..."
                aria-label="Main image url"
                value={mainImage}
                onChange={(e) => setMainImage(e.target.value)}
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
                  color: '#131523',
                  outline: 'none',
                }}
              />
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginTop: 24,
                gap: 4,
              }}
            >
              <p
                style={{
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: 400,
                  fontSize: 14,
                  color: '#5A607F',
                }}
              >
                Sub Image URLs (one per line)
              </p>
              <textarea
                placeholder={'https://...\nhttps://...\nhttps://...'}
                aria-label="Sub image urls"
                value={subImagesText}
                onChange={(e) => setSubImagesText(e.target.value)}
                style={{
                  width: '100%',
                  height: 120,
                  borderRadius: 4,
                  backgroundColor: 'white',
                  border: '1px solid #D9E1EC',
                  padding: '8px 16px',
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: 400,
                  fontSize: 16,
                  color: '#131523',
                  outline: 'none',
                  resize: 'vertical',
                }}
              />
            </div>
          </div>

          <div
            style={{
              height: 1,
              width: '100%',
              backgroundColor: '#D7DBEC',
              marginTop: 40,
            }}
          />

          <div
            style={{
              marginTop: 32,
            }}
          >
            <p
              style={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 700,
                fontSize: 16,
                color: '#131523',
              }}
            >
              Pricing & Inventory
            </p>

            <div
              style={{
                display: 'flex',
                gap: 16,
                marginTop: 24,
              }}
            >
              <div
                style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 4,
                }}
              >
                <p
                  style={{
                    fontFamily: '"Poppins", sans-serif',
                    fontWeight: 400,
                    fontSize: 14,
                    color: '#5A607F',
                  }}
                >
                  Product Price (VND)
                </p>
                <input
                  type="number"
                  placeholder="12500000"
                  aria-label="Product price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
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
                    color: '#131523',
                    outline: 'none',
                  }}
                />
              </div>

              <div
                style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 4,
                }}
              >
                <p
                  style={{
                    fontFamily: '"Poppins", sans-serif',
                    fontWeight: 400,
                    fontSize: 14,
                    color: '#5A607F',
                  }}
                >
                  Discount (%)
                </p>
                <input
                  type="number"
                  placeholder="20"
                  aria-label="Discount"
                  value={discount}
                  onChange={(e) => setDiscount(e.target.value)}
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
                    color: '#131523',
                    outline: 'none',
                  }}
                />
              </div>

              <div
                style={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 4,
                }}
              >
                <p
                  style={{
                    fontFamily: '"Poppins", sans-serif',
                    fontWeight: 400,
                    fontSize: 14,
                    color: '#5A607F',
                  }}
                >
                  Stock
                </p>
                <input
                  type="number"
                  placeholder="50"
                  aria-label="Stock"
                  value={stock}
                  onChange={(e) => setStock(e.target.value)}
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
                    color: '#131523',
                    outline: 'none',
                  }}
                />
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                marginTop: 24,
              }}
            >
              <ToggleButton />
              <p
                style={{
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: 400,
                  fontSize: 16,
                  color: '#131523',
                }}
              >
                Add tax for this product
              </p>
            </div>
          </div>

          <div
            style={{
              height: 1,
              width: '100%',
              backgroundColor: '#D7DBEC',
              marginTop: 40,
            }}
          />

          <div
            style={{
              marginTop: 32,
            }}
          >
            <p
              style={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 700,
                fontSize: 16,
                color: '#131523',
              }}
            >
              Different Options
            </p>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                marginTop: 24,
              }}
            >
              <ToggleButton />
              <p
                style={{
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: 400,
                  fontSize: 16,
                  color: '#131523',
                }}
              >
                This product has multiple options
              </p>
            </div>

            <p
              style={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 700,
                fontSize: 16,
                color: '#131523',
                marginTop: 32,
              }}
            >
              Size
            </p>

            <div
              style={{
                display: 'flex',
                marginTop: 16,
                gap: 12,
              }}
            >
              <div
                style={{
                  flex: 1,
                  position: 'relative',
                }}
              >
                <input
                  type="text"
                  placeholder="Add size (e.g. S, M, L)"
                  aria-label="Add size"
                  value={sizeInput}
                  onChange={(e) => setSizeInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      handleAddSize();
                    }
                  }}
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
                    color: '#131523',
                    outline: 'none',
                  }}
                />
              </div>
              <button
                type="button"
                onClick={handleAddSize}
                style={{
                  height: 40,
                  padding: '0 16px',
                  borderRadius: 4,
                  border: 'none',
                  backgroundColor: '#1E5EFF',
                  color: 'white',
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: 500,
                  fontSize: 14,
                  cursor: 'pointer',
                }}
              >
                Add
              </button>
            </div>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 8,
                marginTop: 16,
              }}
            >
              {sizes.map((s) => (
                <SizeTag
                  key={s.id}
                  id={s.id}
                  size={s.label}
                  onRemove={handleRemoveSize}
                />
              ))}
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginTop: 32,
                gap: 4,
              }}
            >
              <p
                style={{
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: 400,
                  fontSize: 14,
                  color: '#5A607F',
                }}
              >
                Colors (comma separated)
              </p>
              <input
                type="text"
                placeholder="gray, beige, charcoal"
                aria-label="Colors"
                value={colorsText}
                onChange={(e) => setColorsText(e.target.value)}
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
                  color: '#131523',
                  outline: 'none',
                }}
              />
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                marginTop: 32,
              }}
            >
              <ToggleButton />
              <p
                style={{
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: 400,
                  fontSize: 16,
                  color: '#131523',
                }}
              >
                This is digital item
              </p>
            </div>
          </div>
        </div>

        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: 30,
          }}
        >
          <Categories categories={categories} />
          <Tags tags={tags} />
          <SEOSettings />
        </div>
      </div>

      <FooterAddEditPage
        to={'/products'}
        saveFunction={handleSave}
      />
    </div>
  );
}
