import { StoryObj, Meta } from "@storybook/react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarProvider,
  SidebarTrigger,
} from "./sidebar";
import { ComponentProps } from "react";
import React from "react";

export default {
  title: "burneeble-website-components/ui/Sidebar",
  component: SidebarProvider,
} as Meta<typeof SidebarProvider>;

type Story = StoryObj<ComponentProps<typeof SidebarProvider>>;

export const baseSidebar: Story = {
  render: () => {
    return (
      <SidebarProvider>
        <Sidebar>
          <SidebarHeader />
          <SidebarContent>
            <SidebarGroup />
            <SidebarGroup />
          </SidebarContent>
          <SidebarFooter />
        </Sidebar>
        <main>
          <SidebarTrigger />
          <div className="text-sky-600">Hello World</div>
        </main>
      </SidebarProvider>
    );
  },
};
