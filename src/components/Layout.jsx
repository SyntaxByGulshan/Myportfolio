import Header from "./header/Header";
import Footer from "./footer/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="bg-blue-950 text-blue-400">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
