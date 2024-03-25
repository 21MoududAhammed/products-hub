import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Cart from "./Cart";

export default function Layout() {
  return (
    <>
      <Header />
      <div className="grid grid-cols-12 gap-2 ">
        <div className="col-span-10">
        <Outlet />
        </div>
        <div className="col-span-2">
        <Cart/>
        </div>
      </div>

      <Footer />
    </>
  );
}
