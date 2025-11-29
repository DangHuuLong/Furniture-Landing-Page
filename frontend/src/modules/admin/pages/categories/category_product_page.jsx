import {
  useLocation,
  useOutletContext,
  useNavigate,
  useParams,
  NavLink,
} from "react-router-dom";
import { useEffect, useState } from "react";
import { Plus } from "lucide-react";

import HeaderAddEditPage from "../../components/header_add_edit_page";
import ProductCategoryCard from "./product_category_card";
import CategoryVisibility from "./category_visibility";
import CategoryInfo from "./category_info";
import FooterAddEditPage from "../../components/footer_add_edit_page";

export default function CategoryProductPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { id: paramId } = useParams();

  // Category được truyền từ CategoryCard (ít nhất có _id, categoryName, imagePath, isVisible)
  const baseCategory = location.state;

  const {
    setDeleteItems,
    setDeleteCount,
    setDeleteHandler,
  } = useOutletContext();

  const [category, setCategory] = useState(baseCategory || null);
  const [categoryName, setCategoryName] = useState(
    baseCategory?.categoryName || ""
  );
  const [isVisible, setIsVisible] = useState(
    typeof baseCategory?.isVisible === "boolean"
      ? baseCategory.isVisible
      : true
  );
  const [imagePath, setImagePath] = useState(baseCategory?.imagePath || "");
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // notice: { type: 'success' | 'error', message: string } | null
  const [saveNotice, setSaveNotice] = useState(null);

  const categoryId = category?._id || baseCategory?._id || paramId;

  // ========== LOAD CATEGORY + PRODUCTS ==========
  useEffect(() => {
    if (!categoryId) {
      setLoading(false);
      return;
    }

    async function fetchCategoryWithProducts() {
      try {
        setLoading(true);
        const res = await fetch(
          `http://localhost:3001/categories/${categoryId}/products`
        );
        if (!res.ok) {
          console.error(
            "Failed to fetch category with products",
            res.status
          );
          setLoading(false);
          return;
        }

        const data = await res.json();
        const cat = data.category || {};

        setCategory(cat);
        setCategoryName(cat.categoryName || "");
        setIsVisible(
          typeof cat.isVisible === "boolean" ? cat.isVisible : true
        );
        setImagePath(cat.imagePath || "");
        setProducts(Array.isArray(data.products) ? data.products : []);
      } catch (err) {
        console.error("fetchCategoryWithProducts error:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchCategoryWithProducts();
  }, [categoryId]);

  // ========== SAVE CATEGORY ==========
  async function handleSaveCategory() {
    if (!categoryId) {
      console.warn("Không có categoryId, không thể update.");
      setSaveNotice({
        type: "error",
        message: "Không tìm thấy category để cập nhật.",
      });
      return;
    }

    try {
      setSaving(true);
      // clear thông báo cũ
      setSaveNotice(null);

      const body = {
        categoryName,
        imagePath,
        isVisible,
        // stock để BE tự tính lại từ products
      };

      const res = await fetch(
        `http://localhost:3001/categories/${categoryId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );

      if (!res.ok) {
        console.error("Failed to update category", res.status);

        let msg = `Cập nhật category thất bại (mã lỗi ${res.status}).`;

        if (res.status === 413) {
          msg =
            "Cập nhật category thất bại: ảnh quá lớn (413 Payload Too Large). Hãy chọn ảnh dung lượng nhỏ hơn hoặc tăng limit trên server.";
        }

        setSaveNotice({
          type: "error",
          message: msg,
        });
        return;
      }

      const updated = await res.json();
      setCategory(updated);
      setCategoryName(updated.categoryName || categoryName);
      setImagePath(updated.imagePath || imagePath);
      setIsVisible(
        typeof updated.isVisible === "boolean" ? updated.isVisible : isVisible
      );

      setSaveNotice({
        type: "success",
        message: "Cập nhật category thành công.",
      });
    } catch (err) {
      console.error("handleSaveCategory error:", err);
      setSaveNotice({
        type: "error",
        message: "Có lỗi xảy ra khi cập nhật category. Vui lòng thử lại.",
      });
    } finally {
      setSaving(false);
    }
  }

  // ========== EDIT PRODUCT ==========
  function handleEditProduct(product) {
    if (!product?._id) {
      console.warn("Product không có _id, không thể điều hướng edit.");
      return;
    }

    navigate(`/products/edit/${product._id}`, {
      state: product,
    });
  }

  // ========== DELETE PRODUCT ==========
  function handleAskDeleteProduct(product) {
    if (!product?._id) {
      console.warn("Product không có _id, không thể xoá.");
      return;
    }

    setDeleteCount(1);
    setDeleteHandler(() => async () => {
      try {
        const res = await fetch(
          `http://localhost:3001/products/${product._id}`,
          {
            method: "DELETE",
          }
        );

        if (!res.ok) {
          console.error("Failed to delete product", res.status);
          return;
        }

        setProducts((prev) =>
          prev.filter((p) => p._id !== product._id)
        );
      } catch (err) {
        console.error("Delete product error:", err);
      } finally {
        setDeleteItems(false);
      }
    });

    setDeleteItems(true);
  }

  // ========== RENDER ==========
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#F5F6FA",
        padding: "30px 40px 40px 40px",
      }}
    >
      <HeaderAddEditPage
        to={"/categories"}
        name={categoryName}
        saveFunction={handleSaveCategory}
        saving={saving}
      />

      {/* Thông báo save */}
      {saveNotice && (
        <div
          style={{
            marginTop: 16,
            marginBottom: 4,
            padding: "8px 12px",
            borderRadius: 4,
            fontFamily: '"Poppins", sans-serif',
            fontSize: 14,
            backgroundColor:
              saveNotice.type === "success" ? "#E6F9ED" : "#FDECEA",
            color:
              saveNotice.type === "success" ? "#1E7E34" : "#B00020",
            border:
              saveNotice.type === "success"
                ? "1px solid #A6E8BD"
                : "1px solid #F5C2C7",
          }}
        >
          {saveNotice.message}
        </div>
      )}

      <div
        style={{
          marginTop: 30,
          display: "flex",
          gap: 30,
        }}
      >
        {/* LEFT: PRODUCTS */}
        <div
          style={{
            flex: 2,
            padding: 28,
            borderRadius: 6,
            backgroundColor: "white",
            boxShadow: "0px 1px 4px 0px rgba(21, 34, 50, 0.08)",
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          <div
            style={{
              display: "flex",
              gap: 10,
              alignItems: "center",
            }}
          >
            <p
              style={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 700,
                fontSize: 16,
                color: "#131523",
              }}
            >
              Products
            </p>
            <p
              style={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 400,
                fontSize: 16,
                color: "#5A607F",
              }}
            >
              {products.length}
            </p>
          </div>

          {loading ? (
            <p
              style={{
                fontFamily: '"Poppins", sans-serif',
                fontSize: 14,
                color: "#5A607F",
              }}
            >
              Loading...
            </p>
          ) : (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 12,
                marginTop: 24,
              }}
            >
              {products.map((product) => {
                // name đúng theo ProductSchema
                const productName =
                  product.name ||
                  product.SKU ||
                  "Unnamed product";

                // ảnh chính đúng theo ProductSchema: images.mainImage
                const productImg =
                  product.images?.mainImage || null;

                return (
                  <ProductCategoryCard
                    key={product._id}
                    name={productName}
                    img={productImg}
                    onEdit={() => handleEditProduct(product)}
                    onDelete={() => handleAskDeleteProduct(product)}
                  />
                );
              })}
            </div>
          )}

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

        {/* RIGHT: VISIBILITY + INFO */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: 30,
          }}
        >
          <CategoryVisibility
            isVisible={isVisible}
            onToggle={() => setIsVisible((v) => !v)}
          />
          <CategoryInfo
            name={categoryName}
            onNameChange={setCategoryName}
            imagePath={imagePath}
            onImagePathChange={setImagePath}
          />
        </div>
      </div>

      <FooterAddEditPage
        to={"/categories"}
        saveFunction={handleSaveCategory}
        saving={saving}
      />
    </div>
  );
}
