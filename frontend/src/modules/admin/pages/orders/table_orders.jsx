import { useState } from 'react';
import Pagination from '../../components/pagination';

export default function TableOrders({ headers, datas }) {
  const statusStyles = {
    Paid: { color: '#06A561', backgroundColor: '#C4F8E2' },
    Pending: { color: '#5A607F', backgroundColor: '#E6E9F4' },
    Ready: { color: '#FFFFFF', backgroundColor: '#F99600' },
    Shipped: { color: '#FFFFFF', backgroundColor: '#5A607F' },
    Received: { color: '#FFFFFF', backgroundColor: '#1E5EFF' },
  };

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
          <div key={i} style={{ flex: 1, paddingLeft: 8, display: 'flex', alignItems: 'center' }}>
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
            const isStatusCol = i === 3 || i === 4;
            return (
              <div key={i} style={{ flex: 1, paddingLeft: 8, display: 'flex', alignItems: 'center' }}>
                {i === 0 && <input type="checkbox" style={{ width: 20, height: 20, marginRight: 12 }} />}

                {isStatusCol ? (
                  <p style={{
                    padding: '2px 8px', borderRadius: 4,
                    fontFamily: '"Poppins", sans-serif', fontWeight: 400, fontSize: 14,
                    ...(statusStyles[cell] || {})
                  }}>
                    {cell}
                  </p>
                ) : (
                  <p style={{
                    fontFamily: '"Poppins", sans-serif', fontWeight: i === 0 ? 500 : 400,
                    fontSize: 14, color: '#131523'
                  }}>
                    {i === 5 ? `$ ${cell}` : cell}
                  </p>
                )}
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
