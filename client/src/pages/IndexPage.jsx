import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function IndexPage() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    axios.get("/places").then((response) => {
      setPlaces([...response.data]);
    });
  }, []);

  return (
    <div>
      <div className="h-32 bg-local">
        <div className="grid grid-cols-1 gap-0 place-content-center">
          <div className="mt-8 text-primary text-3xl font-bold">
            Bumi Pusaka
          </div>
          <div className="text-md text-primary font-semibold">
            Mewartakan Alam Jawa Timur
          </div>
          <div className="text-xs text-primary">
            Temukan dan berbagi destinasimu
          </div>
        </div>
      </div>
      <div className="mt-8 grid gap-x-2 gap-y-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {places.length > 0 &&
          places.map((place) => (
            <Link
              key={place._id}
              to={"/place/" + place._id}
              className="p-2 hover:bg-gray-200 rounded-xl"
            >
              <div className="flex grid place-items-stretch bg-gray-300 shrink-0 rounded-xl">
                {place.photos.length > 0 && (
                  <img
                    className="object-cover rounded-xl aspect-square"
                    src={"http://localhost:4000/" + place.photos[0]}
                    alt=""
                  />
                )}
              </div>
              <h2 className="text-left text-base font-medium mt-1">
                {place.title}
              </h2>
              <h3 className="text-left text-sm font-normal text-gray-500 line-clamp-2 leading-tight">
                {place.address}
              </h3>
            </Link>
          ))}
      </div>
    </div>
  );
}
