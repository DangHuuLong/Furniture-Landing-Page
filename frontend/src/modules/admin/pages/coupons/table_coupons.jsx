import { useState } from 'react';
import { Tag, Truck } from 'lucide-react';
import Pagination from '../../components/pagination';

export default function TableCoupons({ headers, datas }) {
  const pageSize = 8;
  const [page, setPage] = useState(1);

  const start = (page - 1) * pageSize;
  const visible = datas.slice(start, start + pageSize);

  return (
    <div style={{ marginTop: 20, width: '100%' }}>
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
            style={{ flex: i === 0 ? 3 : 1, paddingLeft: 8, display: 'flex', alignItems: 'center' }}
          >
            {i === 0 && (
              <input
                type="checkbox"
                style={{ width: 20, height: 20, marginRight: 12 }}
                onClick={(e) => e.stopPropagation()}
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
      {visible.map((row, rowIndex) => {
        return (
          <div
            key={rowIndex}
            style={{
              width: '100%',
              borderBottom: '1px solid #E6E9F4',
              paddingTop: 16,
              paddingBottom: 16,
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
            }}
          >
            {/* Col 1: tên coupon */}
            <div
              style={{
                flex: 3,
                paddingLeft: 8,
                display: 'flex',
                alignItems: 'center',
                gap: 12,
              }}
            >
              <input
                type="checkbox"
                style={{ width: 20, height: 20, marginRight: 12 }}
                onClick={(e) => e.stopPropagation()}
              />
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 4,
                  backgroundColor:
                    row.couponName.type === 'discount' ? '#336DFF' : '#7E84A3',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {row.couponName.type === 'discount' ? (
                  <Tag size={24} color="white" />
                ) : (
                  <Truck size={24} color="white" />
                )}
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
                  {row.couponName.name}
                </p>
                <p
                  style={{
                    fontFamily: '"Poppins", sans-serif',
                    fontWeight: 400,
                    fontSize: 14,
                    color: '#5A607F',
                  }}
                >
                  {row.couponName.subdes}
                </p>
              </div>
            </div>

            {/* Col 2: usage */}
            <div style={{ flex: 1, paddingLeft: 8, display: 'flex', alignItems: 'center' }}>
              <span
                style={{
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: 400,
                  fontSize: 14,
                  color: '#131523',
                }}
              >
                {row.usage} times
              </span>
            </div>

            {/* Col 3: status */}
            <div style={{ flex: 1, paddingLeft: 8, display: 'flex', alignItems: 'center' }}>
              <span
                style={{
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: 400,
                  fontSize: 14,
                  color: row.status === 'active' ? '#06A561' : '#5A607F',
                  backgroundColor: row.status === 'active' ? '#C4F8E2' : '#E6E9F4',
                  padding: '4px 8px',
                  borderRadius: 4,
                  textTransform: 'capitalize',
                }}
              >
                {row.status}
              </span>
            </div>

            {/* Col 4: date */}
            <div style={{ flex: 1, paddingLeft: 8, display: 'flex', alignItems: 'center' }}>
              <span
                style={{
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: 400,
                  fontSize: 14,
                  color: '#131523',
                }}
              >
                {row.date.from} - {row.date.to}
              </span>
            </div>
          </div>
        );
      })}

      {/* Pagination */}
      <Pagination total={datas.length} page={page} onChange={setPage} pageSize={pageSize} />
    </div>
  );
}
