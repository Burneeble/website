"use client";

import {
  Sidebar as SidebarComponent,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarProvider,
  SidebarTrigger,
} from "@burneeble/ui-components";
import { ComponentProps } from "react";

const Sidebar = (props: ComponentProps<typeof SidebarComponent>) => {
  return (
    <SidebarProvider>
      <SidebarComponent>
        <SidebarHeader />
        <SidebarContent>
          <SidebarGroup />
          <SidebarGroup />
        </SidebarContent>
        <SidebarFooter />
      </SidebarComponent>
      <main>
        <SidebarTrigger />
        <div className="text-sky-600">Hello World</div>
      </main>
    </SidebarProvider>
  );
};

export default Sidebar;
