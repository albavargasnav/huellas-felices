import React, { useState } from 'react';

function PhotoUploader() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      setSelectedImage(null);
    }
  };

  return (
    <div>
      <h1>Subir Foto</h1>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {selectedImage && (
        <div>
          <h2>Previsualización:</h2>
          <img
            src={selectedImage}
            alt="Tu imagen aparecerá aquí"
            style={{ maxWidth: '300px' }}
          />
        </div>
      )}
    </div>
  );
}

export default PhotoUploader;