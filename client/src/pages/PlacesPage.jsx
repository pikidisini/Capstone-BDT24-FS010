import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, Link, useParams } from "react-router-dom";
import PhotosUploader from "../PhotosUploader";
import AccountNav from "../AccountNav";
import MyRecomPage from "./MyRecomPage";
import AccountNavMobile from "../AccountNavMobile";

export default function PlacesPage() {
  const { action } = useParams();

  function LinkClasses(type = null) {
    let classes = "inline-flex gap-1 py-2 px-6 rounded-full";
    if (type === false) {
      classes += " bg-primary text-white";
    } else {
      classes += " bg-gray-400 hover:bg-primary text-white";
    }
    return classes;
  }

  return (
    <div>
      <AccountNav></AccountNav>
      <AccountNavMobile></AccountNavMobile>
      <div className="text-center">
        <Link className={LinkClasses("addnew")} to={"/account/places/new"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path d="M6 3a3 3 0 0 0-3 3v2.25a3 3 0 0 0 3 3h2.25a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6ZM15.75 3a3 3 0 0 0-3 3v2.25a3 3 0 0 0 3 3H18a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3h-2.25ZM6 12.75a3 3 0 0 0-3 3V18a3 3 0 0 0 3 3h2.25a3 3 0 0 0 3-3v-2.25a3 3 0 0 0-3-3H6ZM17.625 13.5a.75.75 0 0 0-1.5 0v2.625H13.5a.75.75 0 0 0 0 1.5h2.625v2.625a.75.75 0 0 0 1.5 0v-2.625h2.625a.75.75 0 0 0 0-1.5h-2.625V13.5Z" />
          </svg>
          Tambah Rekomendasi
        </Link>
      </div>
      <MyRecomPage></MyRecomPage>
    </div>
  );
}
