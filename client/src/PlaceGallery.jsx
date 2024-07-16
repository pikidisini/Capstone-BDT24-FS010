import { useState } from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import CSS untuk carousel
import Image from "./Image.jsx";

export default function PlaceGallery({ place }) {
  const [showAllPhotos, setShowAllPhotos] = useState(false);

  if (showAllPhotos) {
    return (
      <div className="absolute inset-0 bg-black text-white min-h-screen">
        <div className="bg-white p-8 grid gap-4">
          <div>
            <h2 className="flex text-black text-3xl font-bold mr-48">
              Galeri {place.title}
            </h2>
            <button
              onClick={() => setShowAllPhotos(false)}
              className="fixed right-12 top-8 flex gap-1 py-2 px-4 rounded-2xl shadow shadow-black bg-white text-black hover:bg-primary hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>
              Tutup
            </button>
          </div>
          {place?.photos?.length > 0 &&
            place.photos.map((photo) => (
              <div className="flex justify-center">
                <Image src={photo} alt="" />
              </div>
            ))}
        </div>
      </div>
    );
  }

  return (
    <button className="relative h-48 w-80 rounded-xl sm:h-96 sm:w-full">
      <div>
          {place?.photos?.length > 0 && (
            <Carousel showThumbs={false} showStatus={false} infiniteLoop useKeyboardArrows autoPlay>
              {place.photos.map((photo, index) => (
                <div onClick={() => setShowAllPhotos(true)} key={index} className="flex h-48 w-80 sm:h-96 sm:w-full">
                  <Image className="object-cover aspect-square" src={photo} alt={`Photo ${index + 1}`} />
                  <button onClick={() => setShowAllPhotos(true)}></button>
                </div>
              ))}
            </Carousel>
          )}
        </div>
    </button>
  );
}
