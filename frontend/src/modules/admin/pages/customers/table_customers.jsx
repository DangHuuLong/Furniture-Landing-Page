import { useState } from 'react';
import Pagination from '../../components/pagination';

export default function TableCustomers({ headers, datas }) {
  const pageSize = 14;
  const [page, setPage] = useState(1);

  const start = (page - 1) * pageSize;
  const visible = datas.slice(start, start + pageSize);
  return (
    <div style={{
      marginTop: 20,
      width: '100%'
    }}>
      {/**Header */}
      <div style={{
        width: '100%', 
        borderBottom: '1px solid #E6E9F4',
        paddingTop: 12, 
        paddingBottom: 12, 
        display: 'flex'
      }}>
        {headers.map((cell, i) => (
          <div key={i} style={{ flex: i === 0 ? 3 : 1, paddingLeft: 8, display: 'flex', alignItems: 'center' }}>
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
                      <div key={i} style={{ flex: i === 0 ? 3: 1, paddingLeft: 8, display: 'flex', alignItems: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                          <input type="checkbox" style={{ width: 20, height: 20, marginRight: 12 }} />
                          <div style={{
                            width: 48,
                            height: 48,
                            borderRadius: '50%',
                            backgroundColor: '#A1A7C4',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                          }}>
                            <p style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 700, fontSize: 24, color: '#FFFFFF' }}>
                              {cell.name?.charAt(0).toUpperCase()}
                            </p>
                          </div>
                          <p style={{ fontFamily: '"Poppins", sans-serif', fontWeight: 500, fontSize: 14, color: '#131523' }}>
                            {cell.name}
                          </p>
                        </div>
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
  )
}