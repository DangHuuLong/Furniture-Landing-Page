import Pagination from '../../components/pagination';
import { useState, useMemo } from 'react';

export default function TableProducts({
  headers = [],
  datas = [],          // [{ id, cells: [...] }]
  selectedIds = [],
  onToggleRow,
  onToggleAll,
}) {
  const [page, setPage] = useState(1);
  const pageSize = 8;

  const visible = useMemo(() => {
    const start = (page - 1) * pageSize;
    return datas.slice(start, start + pageSize);
  }, [datas, page]);

  // danh sách id của các row hiển thị trong trang hiện tại
  const visibleIds = visible.map((rowObj) => rowObj.id);

  const allVisibleSelected =
    visibleIds.length > 0 &&
    visibleIds.every((id) => selectedIds.includes(id));

  const handleHeaderCheckboxChange = (e) => {
    if (!onToggleAll) return;
    onToggleAll(visibleIds, e.target.checked);
  };

  return (
    <div style={{ width: '100%', marginTop: 24 }}>
      {/* Header */}
      <div
        style={{
          width: '100%',
          borderBottom: '1px solid #E6E9F4',
          paddingTop: 12,
          paddingBottom: 12,
          display: 'flex',
        }}
      >
        {headers.map((cell, i) => (
          <div
            key={i}
            style={{
              flex: i === 0 ? 2 : 1,
              paddingLeft: 8,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {i === 0 && (
              <input
                type="checkbox"
                style={{ width: 20, height: 20, marginRight: 12 }}
                checked={allVisibleSelected}
                onChange={handleHeaderCheckboxChange}
              />
            )}
            <p
              style={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 400,
                fontSize: 14,
                color: '#5A607F',
              }}
            >
              {cell}
            </p>
          </div>
        ))}
      </div>

      {/* Rows */}
      {visible.map((rowObj) => {
        const rowId = rowObj.id;
        const row = rowObj.cells || [];
        const checked = selectedIds.includes(rowId);

        return (
          <div
            key={rowId}
            style={{
              width: '100%',
              borderBottom: '1px solid #E6E9F4',
              paddingTop: 16,
              paddingBottom: 16,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {row.map((cell, i) => {
              // Cột 0: checkbox + ảnh + tên + category
              if (i === 0) {
                return (
                  <div
                    key={i}
                    style={{
                      flex: 2,
                      paddingLeft: 8,
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 12,
                      }}
                    >
                      <input
                        type="checkbox"
                        style={{
                          width: 20,
                          height: 20,
                          marginRight: 12,
                        }}
                        checked={checked}
                        onChange={() =>
                          onToggleRow && onToggleRow(rowId)
                        }
                      />
                      <div
                        style={{
                          width: 48,
                          height: 48,
                          borderRadius: 4,
                          backgroundColor: '#ECF2FF',
                          overflow: 'hidden',
                        }}
                      >
                        <img
                          src={cell.image}
                          alt={cell.name}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                          }}
                        />
                      </div>
                      <div>
                        <p
                          style={{
                            fontFamily: '"Poppins", sans-serif',
                            fontWeight: 500,
                            fontSize: 14,
                            color: '#131523',
                          }}
                        >
                          {cell.name}
                        </p>
                        <p
                          style={{
                            fontFamily: '"Poppins", sans-serif',
                            fontWeight: 400,
                            fontSize: 14,
                            color: '#5A607F',
                          }}
                        >
                          {cell.category}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              }

              // Cột 1: tồn kho
              if (i === 1) {
                const isOOS =
                  typeof cell === 'string' &&
                  cell.toLowerCase() === 'out of stock';
                return (
                  <div
                    key={i}
                    style={{
                      flex: 1,
                      paddingLeft: 8,
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    {isOOS ? (
                      <span
                        style={{
                          padding: '2px 8px',
                          borderRadius: 4,
                          backgroundColor: '#E6E9F4',
                          color: '#5A607F',
                          fontFamily: '"Poppins", sans-serif',
                          fontSize: 14,
                        }}
                      >
                        Out of Stock
                      </span>
                    ) : (
                      <span
                        style={{
                          fontFamily: '"Poppins", sans-serif',
                          fontWeight: 400,
                          fontSize: 14,
                          color: '#131523',
                        }}
                      >
                        {cell} in stock
                      </span>
                    )}
                  </div>
                );
              }

              // Cột 3: giá
              if (i === 3) {
                return (
                  <div
                    key={i}
                    style={{
                      flex: 1,
                      paddingLeft: 8,
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: '"Poppins", sans-serif',
                        fontWeight: 400,
                        fontSize: 14,
                        color: '#131523',
                      }}
                    >
                      {Number(cell).toLocaleString('vi-VN')} ₫
                    </span>
                  </div>
                );
              }

              // Cột 4: rating + reviews
              if (i === 4) {
                return (
                  <div
                    key={i}
                    style={{
                      flex: 1,
                      paddingLeft: 8,
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: '"Poppins", sans-serif',
                        fontWeight: 400,
                        fontSize: 14,
                        color: '#131523',
                      }}
                    >
                      {cell.rating}{' '}
                      <span style={{ color: '#5A607F' }}>
                        {cell.reviews}
                      </span>
                    </span>
                  </div>
                );
              }

              // Các cột còn lại
              return (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    paddingLeft: 8,
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <span
                    style={{
                      fontFamily: '"Poppins", sans-serif',
                      fontWeight: 400,
                      fontSize: 14,
                      color: '#131523',
                    }}
                  >
                    {cell}
                  </span>
                </div>
              );
            })}
          </div>
        );
      })}

      <Pagination
        total={datas.length}
        page={page}
        onChange={setPage}
        pageSize={pageSize}
      />
    </div>
  );
}
