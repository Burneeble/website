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
        <div className="tw-text-red-200">{props.children}</div>
      </main>
    </SidebarProvider>
  );
};

export default Sidebar;
