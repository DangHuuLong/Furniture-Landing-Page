import { MoveLeft, MoveRight } from 'lucide-react';

export default function Pagination({ total, page, onChange, pageSize = 14 }) {
  const totalPages = Math.ceil(total / pageSize);
  if (totalPages <= 1) return null;

  const go = (p) => onChange(Math.min(Math.max(1, p), totalPages));

  const buildPages = () => {
    if (totalPages <= 6) return Array.from({ length: totalPages }, (_, i) => i + 1);

    const pages = new Set([1, totalPages, page, page - 1, page + 1]);
    pages.add(2);
    pages.add(totalPages - 1);

    const sorted = [...pages].filter(p => p >= 1 && p <= totalPages).sort((a, b) => a - b);
    const withDots = [];
    for (let i = 0; i < sorted.length; i++) {
      withDots.push(sorted[i]);
      if (i < sorted.length - 1 && sorted[i + 1] - sorted[i] > 1) withDots.push('...');
    }
    return withDots;
  };

  const pages = buildPages();

  return (
    <div style={{
      width: '100%', marginTop: 28, display: 'flex',
      justifyContent: 'space-between', alignItems: 'center'
    }}>
      {/* Page Number */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {/* Prev */}
        <button
          onClick={() => go(page - 1)}
          disabled={page === 1}
          style={{
            width: 36, height: 36, marginRight: 12, background: 'transparent',
            border: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center',
            opacity: page === 1 ? 0.4 : 1, cursor: page === 1 ? 'not-allowed' : 'pointer'
          }}
          aria-label="Previous page"
        >
          <MoveLeft size={24} color="#7E84A3" />
        </button>

        {/* Pages */}
        {pages.map((p, i) => (
          p === '...' ? (
            <div key={`dots-${i}`} style={{
              width: 36, height: 36,
              display: 'flex', justifyContent: 'center', alignItems: 'center'
            }}>
              <p style={{ fontFamily: '"Poppins", sans-serif', fontSize: 16, color: '#5A607F' }}>…</p>
            </div>
          ) : (
            <button
              key={p}
              onClick={() => go(p)}
              style={{
                width: 36, height: 36, borderRadius: 6,
                backgroundColor: p === page ? '#ECF2FF' : 'transparent',
                display: 'flex', justifyContent: 'center', alignItems: 'center',
                border: 'none',
                cursor: 'pointer'
              }}
              aria-current={p === page ? 'page' : undefined}
            >
              <p style={{
                fontFamily: '"Poppins", sans-serif', fontSize: 16,
                  color: p === page ? '#1E5EFF' : '#5A607F', fontWeight: 500
              }}>
                {p}
              </p>
            </button>
          )
        ))}

        {/* Next */}
        <button
          onClick={() => go(page + 1)}
          disabled={page === totalPages}
          style={{
            width: 36, height: 36, marginLeft: 12, background: 'transparent',
            border: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center',
            opacity: page === totalPages ? 0.4 : 1, cursor: page === totalPages ? 'not-allowed' : 'pointer'
          }}
          aria-label="Next page"
        >
          <MoveRight size={24} color="#7E84A3" />
        </button>
      </div>

      {/* Tổng kết quả */}
      <p style={{
        fontFamily: '"Poppins", sans-serif', fontWeight: 400, fontSize: 16, color: '#5A607F'
      }}>
        {total} Results
      </p>
    </div>
  );
}
