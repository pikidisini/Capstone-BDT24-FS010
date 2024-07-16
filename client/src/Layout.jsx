import Header from "./Header";
import HeaderMobile from "./HeaderMobile";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="py-2 px-2 flex flex-col min-h-screen">
      <Header />
      <HeaderMobile />
      <Outlet />
    </div>
  );
}