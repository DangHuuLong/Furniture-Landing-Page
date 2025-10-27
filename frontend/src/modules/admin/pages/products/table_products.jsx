import { useState } from 'react';
import Pagination from '../../components/pagination';

export default function TableProducts({ headers, datas }) {
  const pageSize = 14;
  const [page, setPage] = useState(1);

  const start = (page - 1) * pageSize;
  const visible = datas.slice(start, start + pageSize);

  return (
    <div style={{ width: '100%', marginTop: 16 }}>
      {/* Header */}
      <div style={{
        width: '100%', borderBottom: '1px solid #E6E9F4',
        paddingTop: 12, paddingBottom: 12, display: 'flex'
      }}>
        {headers.map((cell, i) => (
          <div key={i} style={{ flex: i===0 ? 2 : 1, paddingLeft: 8, display: 'flex', alignItems: 'center' }}>
            {i === 0 && <input type="checkbox" style={{ width: 20, height: 20, marginRight: 12 }} />}
            <p style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 400, fontSize: 14, color: '#5A607F' }}>
              {cell}
            </p>
          </div>
        ))}
      </div>

      {/* Rows */}
      {visible.map((row, rowIndex) => (
        <div key={rowIndex} style={{
          width: '100%', borderBottom: '1px solid #E6E9F4',
          paddingTop: 16, paddingBottom: 16, display: 'flex', alignItems: 'center'
        }}>
          {row.map((cell, i) => {
            // CỘT 0: ảnh + tên + category
            if (i === 0) {
              return (
                <div key={i} style={{ flex: i === 0 ? 2 : 1, paddingLeft: 8, display: 'flex', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <input type="checkbox" style={{ width: 20, height: 20, marginRight: 12 }} />
                    <div style={{
                      width: 48, height: 48, borderRadius: 4, backgroundColor: '#ECF2FF',
                      overflow: 'hidden'  
                    }}>
                      <img src={cell.image} alt={cell.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div>
                      <p style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 500, fontSize: 14, color: '#131523' }}>
                        {cell.name}
                      </p>
                      <p style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 400, fontSize: 14, color: '#5A607F' }}>
                        {cell.category}
                      </p>
                    </div>
                  </div>
                </div>
              );
            }

            // CỘT 1: tồn kho (hiển thị badge nếu Out of Stock)
            if (i === 1) {
              const isOOS = typeof cell === 'string' && cell.toLowerCase() === 'out of stock';
              return (
                <div key={i} style={{ flex: 1, paddingLeft: 8, display: 'flex', alignItems: 'center' }}>
                  {isOOS ? (
                    <span style={{
                      padding: '2px 8px',
                      borderRadius: 4,
                      backgroundColor: '#E6E9F4',
                      color: '#5A607F',
                      fontFamily: '"Poppins", sans-serif',
                      fontSize: 14,
                    }}>
                      Out of Stock
                    </span>
                  ) : (
                    <span style={{
                      fontFamily: '"Poppins", sans-serif', fontWeight: 400, fontSize: 14, color: '#131523'
                    }}>
                      {cell} in stock
                    </span>
                  )}
                </div>
              );
            }

            // CỘT 3: giá (thêm $)
            if (i === 3) {
              return (
                <div key={i} style={{ flex: 1, paddingLeft: 8, display: 'flex', alignItems: 'center' }}>
                  <span style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 400, fontSize: 14, color: '#131523' }}>
                    ${cell.toFixed ? cell.toFixed(2) : cell}
                  </span>
                </div>
              );
            }

            // CỘT 4: rating + reviews (object)
            if (i === 4) {
              return (
                <div key={i} style={{ flex: 1, paddingLeft: 8, display: 'flex', alignItems: 'center' }}>
                  <span style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 400, fontSize: 14, color: '#131523' }}>
                    {cell.rating}{' '}
                    <span style={{ color: '#5A607F' }}>{cell.reviews}</span>
                  </span>
                </div>
              );
            }

            // CÁC CỘT CÒN LẠI (màu sắc, v.v.)
            return (
              <div key={i} style={{ flex: 1, paddingLeft: 8, display: 'flex', alignItems: 'center' }}>
                <span style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 400, fontSize: 14, color: '#131523' }}>
                  {cell}
                </span>
              </div>
            );
          })}
        </div>
      ))}

      {/* Pagination */}
      <Pagination total={datas.length} page={page} onChange={setPage} pageSize={pageSize} />
    </div>
  );
}
