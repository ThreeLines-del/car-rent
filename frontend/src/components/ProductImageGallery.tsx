import { useState } from "react";

const ProductImageGallery = ({ images }: { images: string[] }) => {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="w-full h-[550px] flex flex-col">
      {/* Main Image */}
      <div className="h-full rounded overflow-hidden">
        <img
          src={mainImage}
          alt="Main"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-3 gap-4 mt-4">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setMainImage(img)}
            className={`border rounded overflow-hidden ${
              mainImage === img ? "ring-2 ring-[#cf1a17]" : ""
            }`}
          >
            <img
              src={img}
              alt={`Thumbnail ${idx + 1}`}
              className="w-full h-[100px] object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductImageGallery;
