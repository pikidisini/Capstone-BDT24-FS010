import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import PlaceGallery from "../PlaceGallery";
import AddressLink from "../AddressLink";

export default function PlacePage() {
  const { id } = useParams();
  const [place, setPlace] = useState(null);
  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get(`/places/${id}`).then((response) => {
      setPlace(response.data);
    });
  }, [id]);

  if (!place) return "";

  return (
    <div className="mt-4 -mx-8 px-8 pt-8">
      <h1 className="text-3xl font-bold text-left">{place.title}</h1>
      <AddressLink className="mt-1 mb-6 text-sm text-left">{place.address}</AddressLink>
      <PlaceGallery className="" place={place} />
      <div className="mt-1 mb-1 text-left">
        <div className="my-4">
          <h2 className="font-semibold text-2xl text-left mb-2">Deskripsi</h2>
          {place.description}
        </div>
      </div>
    </div>
  );
}
