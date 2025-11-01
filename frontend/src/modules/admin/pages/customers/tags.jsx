import { useState } from 'react';
import SizeTag from '../../components/size_tag';

export default function Tags() {
  const [tags, setTags] = useState([
    { id: 1, size: 'Vip Customer' },
    { id: 2, size: 'Europe' },
  ]);

  const handleRemove = (id) => {
    setTags((prev) => prev.filter((tag) => tag.id !== id));
  };

  const [inputValue, setInputValue] = useState('');

  const handleAdd = (e) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      setTags((prev) => [
        ...prev,
        { id: Date.now(), size: inputValue.trim() },
      ]);
      setInputValue('');
    }
  };

  return (
    <div
      style={{
        width: '100%',
        backgroundColor: 'white',
        padding: 28,
        borderRadius: 6,
        boxShadow: '0px 1px 4px 0px rgba(21, 34, 50, 0.08)',
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
        Tags
      </p>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
          marginTop: 24,
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
          Add Tags
        </p>

        {/* Ô nhập để thêm tag mới */}
        <input
          type="text"
          placeholder="Enter tag name"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleAdd}
          style={{
            height: 40,
            width: '100%',
            borderRadius: 4,
            border: '1px solid #D9E1EC',
            display: 'flex',
            alignItems: 'center',
            padding: 16,
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 400,
            fontSize: 16,
            color: '#131523',
            outline: 'none'
          }}
        />

        {/* Danh sách tag */}
        <div
          style={{
            display: 'flex',
            gap: 8,
            marginTop: 20,
            flexWrap: 'wrap',
          }}
        >
          {tags.map((tag) => (
            <SizeTag
              key={tag.id}
              id={tag.id}
              size={tag.size}
              onRemove={handleRemove}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
