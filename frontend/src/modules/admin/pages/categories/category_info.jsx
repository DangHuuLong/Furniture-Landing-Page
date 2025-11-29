import { useRef, useState } from "react";

export default function CategoryInfo({
  name,
  onNameChange,
  imagePath,
  onImagePathChange,
}) {
  const fileInputRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileToDataUrl = (file) => {
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result; // "data:image/png;base64,...."
      onImagePathChange && onImagePathChange(dataUrl);
    };
    reader.readAsDataURL(file);
  };

  const handleFileChange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    handleFileToDataUrl(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const file = e.dataTransfer.files && e.dataTransfer.files[0];
    if (!file) return;
    handleFileToDataUrl(file);
  };

  return (
    <div
      style={{
        width: "100%",
        borderRadius: 6,
        boxShadow: "0px 1px 4px 0px rgba(21, 34, 50, 0.08)",
        padding: 28,
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        gap: 24,
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
        Category Info
      </p>

      {/* Category Name */}
      <div>
        <p
          style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 400,
            fontSize: 14,
            color: "#5A607F",
          }}
        >
          Category Name
        </p>
        <input
          type="text"
          value={name}
          onChange={(e) => onNameChange && onNameChange(e.target.value)}
          style={{
            height: 40,
            width: "100%",
            borderRadius: 4,
            border: "1px solid #D9E1EC",
            paddingLeft: 16,
            marginTop: 4,
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 400,
            fontSize: 16,
            color: "#131523",
            outline: "none",
          }}
        />
      </div>

      {/* Image */}
      <div>
        <p
          style={{
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 400,
            fontSize: 14,
            color: "#5A607F",
          }}
        >
          Image
        </p>
        <div
          onClick={handleButtonClick}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          style={{
            position: "relative",
            height: 168,
            width: "100%",
            borderRadius: 4,
            border: isDragging
              ? "2px dashed #1E5EFF"
              : "1px dashed #A1A7C4",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 4,
            overflow: "hidden",
            cursor: "pointer",
          }}
        >
          {/* Ảnh fill toàn khu vực */}
          {imagePath && (
            <img
              src={imagePath}
              alt="Category"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          )}

          {/* Overlay button + text */}
          <div
            style={{
              position: "relative",
              zIndex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
              padding: 16,
              width: "100%",
              height: "100%",
              backgroundColor: imagePath
                ? "rgba(0, 0, 0, 0.25)"
                : "transparent",
            }}
          >
            <button
              type="button"
              onClick={handleButtonClick}
              style={{
                height: 40,
                width: 102,
                borderRadius: 4,
                border: "1px solid #D7DBEC",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",
                cursor: "pointer",
              }}
            >
              <p
                style={{
                  fontFamily: '"Poppins", sans-serif',
                  fontWeight: 400,
                  fontSize: 16,
                  color: "#1E5EFF",
                }}
              >
                Add File
              </p>
            </button>
            <p
              style={{
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 400,
                fontSize: 14,
                color: imagePath ? "#F5F6FA" : "#5A607F",
              }}
            >
              Or drag and drop files
            </p>
          </div>

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
        </div>
      </div>
    </div>
  );
}
