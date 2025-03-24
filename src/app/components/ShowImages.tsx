"use client";

import Image from "next/image";

import { ImageType } from "../api/type";

interface ShowImagesProps {
  images: ImageType[];
}

const ShowImages = ({ images }: ShowImagesProps) => {
  return (
    <div
      className={`grid gap-4 ${
        images.length < 3 ? "grid-cols-1" : "grid-cols-3"
      }`}
    >
      {images.map((img, index) => (
        <div key={index} className="relative group overflow-hidden">
          <Image
            src={img.imageUrl || "/images/Extension-1.png"}
            alt={img.caption || "Image"}
            width={500}
            height={300}
            className="w-full h-auto rounded-lg shadow-md object-cover"
          />
          {img.caption && (
            <p className="text-center text-sm mt-2 text-gray-700">
              {img.caption}
            </p>
          )}
          {img.caption && (
            <div className="absolute bottom-0 left-0 w-full h-7 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-gray-800 bg-opacity-70 transition-opacity duration-300 rounded-b-lg transform translate-y-full group-hover:translate-y-0">
              <span className="text-white text-sm font-semibold">
                {img.caption} Hello world
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ShowImages;
