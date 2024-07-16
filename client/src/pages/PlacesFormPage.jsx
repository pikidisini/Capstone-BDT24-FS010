import { useEffect, useState } from "react";
import axios from "axios";
import AccountNav from "../AccountNav";
import PhotosUploader from "../PhotosUploader.jsx";
import { Navigate, useParams } from "react-router-dom";
import AccountNavMobile from "../AccountNavMobile.jsx";

export default function PlacesFormPage() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [addedPhotos, setAddedPhotos] = useState([]);
  const [description, setDescription] = useState("");
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get("/places/" + id).then((response) => {
      const { data } = response;
      setTitle(data.title);
      setAddress(data.address);
      setAddedPhotos(data.photos);
      setDescription(data.description);
    });
  }, [id]);

  function inputHeader(text) {
    return <h2 className="font-semibold mt-4">{text}</h2>;
  }
  function inputDescription(text) {
    return <p className="text-gray-500 text-sm">{text}</p>;
  }
  function preInput(header, description) {
    return (
      <>
        {inputHeader(header)}
        {inputDescription(description)}
      </>
    );
  }

  async function savePlace(ev) {
    ev.preventDefault();
    const placeData = {
      title,
      address,
      addedPhotos,
      description,
    };
    if (id) {
      // update
      await axios.put("/places", {
        id,
        ...placeData,
      });
      setRedirect(true);
    } else {
      // new place
      await axios.post("/places", placeData);
      setRedirect(true);
    }
  }

  if (redirect) {
    return <Navigate to={"/account/places"} />;
  }

  return (
    <div>
      <AccountNav></AccountNav>
      <AccountNavMobile></AccountNavMobile>
      <div>
        <form onSubmit={savePlace}>
          {preInput("Nama Tempat", "Nama tempat yang kamu rekomendasikan")}
          <input
            type="text"
            value={title}
            onChange={(ev) => setTitle(ev.target.value)}
            placeholder="Nama, contoh: Gunung Bromo"
          />
          {preInput("Alamat", "Lokasi tempat yang kamu rekomendasikan")}
          <input
            type="text"
            value={address}
            onChange={(ev) => setAddress(ev.target.value)}
            placeholder="Alamat, contoh: Tengger, Bromo"
          />

          {preInput(
            "Foto dari Link atau Galeri",
            "Foto tempat yang kamu rekomendasikan melalui Link"
          )}
          <PhotosUploader
            addedPhotos={addedPhotos}
            onChange={setAddedPhotos}
          ></PhotosUploader>

          {preInput("Deskripsi", "Deskripsi tempat yang kamu rekomendasikan")}
          <textarea
            value={description}
            onChange={(ev) => setDescription(ev.target.value)}
            className="border border-gray-300 rounded-lg p-2"
            placeholder="Bromo merupakan kawasan wisata yang dilindungi"
          ></textarea>
          <button className="primary">Simpan</button>
        </form>
      </div>
    </div>
  );
}
