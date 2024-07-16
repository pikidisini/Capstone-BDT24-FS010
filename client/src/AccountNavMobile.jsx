import {Link, useLocation} from "react-router-dom";

export default function AccountNavMobile() {

    const {pathname} = useLocation();
    let subpage = pathname.split('/')?.[2];
    if (subpage === undefined) {
      subpage = 'profile';
    }
    function LinkClasses(type = null) {
        let classes = "flex grid justify-items-center flex-col gap-1 py-2 px-6 rounded-full";
        if (type === subpage) {
          classes += " bg-primary text-white text-xs";
        } else {
          classes += " bg-gray-400 hover:bg-primary text-white text-xs";
        }
        return classes;
      }

    return(
        <nav className="w-full flex justify-center mt-8 gap-4 mb-8 sm:hidden">
        <Link className={LinkClasses("profile")} to="/account">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path
              fillRule="evenodd"
              d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
              clipRule="evenodd"
            />
          </svg>
          Profil Saya
        </Link>
        <Link className={LinkClasses("places")} to="/account/places">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path
              fillRule="evenodd"
              d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z"
              clipRule="evenodd"
            />
          </svg>
          Rekomendasi Saya
        </Link>    
      </nav>
    );
}