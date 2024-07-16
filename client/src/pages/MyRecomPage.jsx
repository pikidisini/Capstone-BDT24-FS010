import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function MyRecomPage() {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    axios.get("/user-places").then(({ data }) => {
      setPlaces(data);
    });
  }, []);
  return (
    <div className="mt-4">
      {places.length > 0 &&
        places.map((place) => (
          <Link key={place._id} to={'/account/places/' + place._id} className="flex gap-3 cursor-pointer bg-gray-200 hover:bg-primary hover:text-white p-2 my-2 rounded-2xl">
            <div className="flex grid place-items-stretch w-32 h-32 bg-gray-300 shrink-0 rounded-xl">
              {place.photos.length > 0 && (
                <img className="object-cover rounded-xl aspect-square" src={"http://localhost:4000/" + place.photos[0]} alt="" />
                )}
            </div>
            <div className="text-left grow-0 shrink">
              <h2 className="text-md sm:text-xl font-medium">{place.title}</h2>
              <p className="text-xs sm:text-sm mt-0 font-light line-clamp-2">{place.address}</p>
              <p className="text-sm sm:text-md mt-1 line-clamp-3">{place.description}</p>
            </div>
          </Link>
        ))}
    </div>
  );
}
