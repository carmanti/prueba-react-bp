import "./InputForm.css";

import React, { useState } from "react";

function ImageList() {
  const [url, setUrl] = useState("");
  const [imageUrls, setImageUrls] = useState([]);

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  const handleAddClick = () => {
    setImageUrls([...imageUrls, url]);
    setUrl("");
  };

  const handleRemoveClick = (index) => {
    setImageUrls(imageUrls.filter((_, i) => i !== index));
  };

  return (
    <>
      <div className="content">
        <input
          className="content__input"
          type="text"
          value={url}
          onChange={handleUrlChange}
          placeholder="Gift URL"
        />
        <button className="content__button" onClick={handleAddClick}>
          Agregar
        </button>
      </div>
      <div className="list">
        <ul>
          {imageUrls.map((url, index) => (
            <li key={index}>
              <img src={url} alt={url} />
              <button
                className="button__eliminar"
                onClick={() => handleRemoveClick(index)}
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ImageList;
