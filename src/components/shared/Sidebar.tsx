import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

import { IoListSharp } from "react-icons/io5";
import { FaAngleDoubleRight, FaRegCalendarAlt } from "react-icons/fa";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { VscKebabVertical } from "react-icons/vsc";

import { NavLink, Link } from "react-router-dom";

export function AppSidebar() {
  const navItems = [
    {
      label: "Upcoming",
      url: "/upcoming",
      icon: FaAngleDoubleRight,
    },
    {
      label: "Tasks",
      url: "/tasks",
      icon: IoListSharp,
    },
    {
      label: "Calendar",
      url: "/calendar",
      icon: FaRegCalendarAlt,
    },
  ];

  return (
    <Sidebar className="text-foreground  border-r-2 border-accent">
      <SidebarContent>
        <SidebarGroup>
          <SidebarHeader className="text-accent font-semibold text-[25px]">
            TaskList
          </SidebarHeader>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.url}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url}>
                      <item.icon /> <span>{item.label}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t-2 border-accent  p-2 ">
        <div className="flex justify-between items-center p-1">
          <div className="flex gap-x-2 items-center">
            <div>
              <Avatar>
                <AvatarFallback className="text-background">TL</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold">Marinelle Ando</span>
              <span className="text-sm font-light">User</span>
            </div>
          </div>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <VscKebabVertical />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background text-foreground">
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/settings">Settings</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
