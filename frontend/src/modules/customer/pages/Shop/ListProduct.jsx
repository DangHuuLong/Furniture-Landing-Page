import { useState, useEffect } from "react";
import Product from "../../components/Product";

function ListProduct() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3001/products");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(Array.isArray(data) ? data : []);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Helper: lấy tên category an toàn (handle nhiều kiểu dữ liệu)
  const getCategoryName = (product) => {
    // Trường hợp BE populate: category là object
    if (
      product.category &&
      typeof product.category === "object" &&
      "categoryName" in product.category
    ) {
      return product.category.categoryName;
    }

    // Trường hợp BE project riêng ra categoryName
    if (product.categoryName) {
      return product.categoryName;
    }

    // Trường hợp category chỉ là string id → không có tên hiển thị
    return "";
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(products.length / productsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

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
            backgroundColor:
              currentPage === i
                ? "rgba(184, 142, 47, 1)"
                : "rgba(249, 241, 231, 1)",
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
              color:
                currentPage === i ? "rgba(255,255,255,1)" : "rgba(0,0,0,1)",
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
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>
        Đang tải dữ liệu sản phẩm...
      </div>
    );
  }

  if (error) {
    return (
      <div
        style={{ textAlign: "center", padding: "50px", color: "red" }}
      >
        Lỗi khi tải dữ liệu: {error.message}
      </div>
    );
  }

  return (
    <div
      style={{
        marginTop: "46px",
        marginBottom: "85px",
        padding: "17px 0px 0px 100px",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          rowGap: "70px",
        }}
      >
        {/* Render danh sách sản phẩm của trang hiện tại */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))", // 4 sản phẩm 1 hàng
            columnGap: "32px",
            rowGap: "40px",
          }}
        >
          {currentProducts.map((product) => (
            <Product
              key={product.SKU || product._id}
              image={product.images?.mainImage || ""}
              name={product.name}
              category={getCategoryName(product)}
              price={product.price}
              discount={product.discount}
              isNew={product.isNew}
              unit={product.unit}
              productData={product}
            />
          ))}
        </div>

        {/* Các nút phân trang */}
        <div
          style={{
            display: "flex",
            gap: "38px",
          }}
        >
          {/* Render các nút số */}
          {renderPageNumbers()}
          {/* Nút Next */}
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
              <p
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "400",
                  fontSize: "20px",
                  color: "rgba(0,0,0,1)",
                }}
              >
                Next
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ListProduct;
