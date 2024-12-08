import { Outlet } from "react-router-dom";
import { SidebarProvider } from "../ui/sidebar";
import { AppSidebar } from "../shared/Sidebar";

const RootLayout = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className=" p-5 flex-1">
        <Outlet />
      </main>
    </SidebarProvider>
  );
};

export default RootLayout;
