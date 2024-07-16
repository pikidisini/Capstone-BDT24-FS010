import { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import { Link, Navigate, useParams } from "react-router-dom";
import axios from "axios";
import PlacesPage from "./PlacesPage";
import MyRecomPage from "./MyRecomPage";
import AccountNav from "../AccountNav";
import AccountNavMobile from "../AccountNavMobile";

export default function ProfilePage() {
  const [redirect, setRedirect] = useState(null);
  const { ready, user, setUser } = useContext(UserContext);

  let { subpage } = useParams();
  if (subpage === undefined) {
    subpage = "profile";
  }

  async function logout() {
    await axios.post("/logout");
    setRedirect("/");
    setUser(null);
  }

  if (!ready) {
    return "loading...";
  }

  if (ready && !user && !redirect) {
    return <Navigate to={"/login"} />;
  }

  if (redirect) {
    return <Navigate to={redirect} />;
  }

  return (
    <div className="">
      <AccountNav></AccountNav>
      <AccountNavMobile></AccountNavMobile>
      {subpage === "profile" && (
        <div className="text-center max-w-lg mx-auto">
          <div className="font-bold text-xl">{user.username}</div>
          Anda sudah masuk sebagai {user.username} ({user.email})<br />
          <button onClick={logout} className="primary max-w-sm mt-4">
            Logout
          </button>
        </div>
      )}
      {subpage === "places" && <PlacesPage />}
    </div>
  );
}
