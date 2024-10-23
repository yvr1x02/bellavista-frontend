import React, { useState, useEffect } from "react";
import "./Galleria.css"; // Importa il file CSS
import Header from "../HomePage/header/Header";

const Galleria = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null); // Stato per l'immagine in primo piano

  useEffect(() => {
    const imageImports = import.meta.glob("/src/Galleria-img/img*.jpg");
    const imagePaths = Object.keys(imageImports);

    const loadImages = async () => {
      const paths = await Promise.all(imagePaths.map((path) => imageImports[path]()));
      setImages(paths);
    };

    loadImages();
  }, []);

  // Funzione per chiudere la visualizzazione in primo piano
  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <Header></Header>

      <div className="title p-5">
        <h1>LA NOSTRA STRUTTURA</h1>
      </div>
      <div>
        <div className="galleria">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.default}
              alt={`Galleria ${index}`}
              className="galleria-img"
              onClick={() => setSelectedImage(image.default)} // Al click, imposta l'immagine in primo piano
            />
          ))}
        </div>

        {/* Visualizza l'immagine in primo piano */}
        {selectedImage && (
          <div className="galleria-overlay" onClick={closeImage}>
            <img src={selectedImage} alt="In primo piano" className="galleria-img-primo-piano" />
          </div>
        )}
      </div>
    </>
  );
};

export default Galleria;
