import { Outlet } from "react-router-dom";

import Topbar from "../components/ui/shared/TopBar";
import Bottombar from "../components/ui/shared/BottomBar";
import LeftSidebar from "../components/ui/shared/LeftSideBar";

const RootLayout = () => {
  return (
    <div className="w-full md:flex">
      <Topbar />
      <LeftSidebar />

      <section className="flex flex-1 h-full">
        <Outlet />
      </section>

      <Bottombar />
    </div>
  );
};

export default RootLayout;