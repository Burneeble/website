/* eslint-disable react/prop-types */
/* eslint-disable @burneeble/burneeble/camel-case-vars */
"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { VariantProps, cva } from "class-variance-authority";
import { PanelLeft } from "lucide-react";

import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const SIDEBAR_COOKIE_NAME = "sidebar:state";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const SIDEBAR_WIDTH = "16rem";
const SIDEBAR_WIDTH_MOBILE = "18rem";
const SIDEBAR_WIDTH_ICON = "3rem";
const SIDEBAR_KEYBOARD_SHORTCUT = "b";

type SidebarContext = {
  state: "expanded" | "collapsed";
  open: boolean;
  setOpen: (open: boolean) => void;
  openMobile: boolean;
  setOpenMobile: (open: boolean) => void;
  isMobile: boolean;
  toggleSidebar: () => void;
};

const SidebarContext = React.createContext<SidebarContext | null>(null);

function useSidebar() {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a Sidebar.");
  }

  return context;
}

const SidebarProvider = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    defaultOpen?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
  }
>(
  (
    {
      defaultOpen = true,
      open: openProp,
      onOpenChange: setOpenProp,
      className,
      style,
      children,
      ...props
    },
    ref
  ) => {
    const isMobile = useIsMobile();
    const [openMobile, setOpenMobile] = React.useState(false);

    // This is the internal state of the sidebar.
    // We use openProp and setOpenProp for control from outside the component.
    const [_open, _setOpen] = React.useState(defaultOpen);
    const open = openProp ?? _open;
    const setOpen = React.useCallback(
      (value: boolean | ((value: boolean) => boolean)) => {
        if (setOpenProp) {
          return setOpenProp?.(
            typeof value === "function" ? value(open) : value
          );
        }

        _setOpen(value);

        // This sets the cookie to keep the sidebar state.
        document.cookie = `${SIDEBAR_COOKIE_NAME}=${open}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
      },
      [setOpenProp, open]
    );

    // Helper to toggle the sidebar.
    const toggleSidebar = React.useCallback(() => {
      return isMobile
        ? setOpenMobile((open) => !open)
        : setOpen((open) => !open);
    }, [isMobile, setOpen, setOpenMobile]);

    // Adds a keyboard shortcut to toggle the sidebar.
    React.useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (
          event.key === SIDEBAR_KEYBOARD_SHORTCUT &&
          (event.metaKey || event.ctrlKey)
        ) {
          event.preventDefault();
          toggleSidebar();
        }
      };

      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }, [toggleSidebar]);

    // We add a state so that we can do data-state="expanded" or "collapsed".
    // This makes it easier to style the sidebar with Tailwind classes.
    const state = open ? "expanded" : "collapsed";

    const contextValue = React.useMemo<SidebarContext>(
      () => ({
        state,
        open,
        setOpen,
        isMobile,
        openMobile,
        setOpenMobile,
        toggleSidebar,
      }),
      [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
    );

    return (
      <SidebarContext.Provider value={contextValue}>
        <TooltipProvider delayDuration={0}>
          <div
            style={
              {
                "--sidebar-width": SIDEBAR_WIDTH,
                "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
                ...style,
              } as React.CSSProperties
            }
            className={cn(
              `
                tw-group/sidebar-wrapper tw-flex tw-min-h-svh tw-w-full
                tw-text-sidebar-foreground

                has-[[data-variant=inset]]:tw-bg-sidebar
              `,
              className
            )}
            ref={ref}
            {...props}
          >
            {children}
          </div>
        </TooltipProvider>
      </SidebarContext.Provider>
    );
  }
);
SidebarProvider.displayName = "SidebarProvider";

const Sidebar = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    side?: "left" | "right";
    variant?: "sidebar" | "floating" | "inset";
    collapsible?: "offcanvas" | "icon" | "none";
  }
>(
  (
    {
      side = "left",
      variant = "sidebar",
      collapsible = "offcanvas",
      className,
      children,
      ...props
    },
    ref
  ) => {
    const { isMobile, state, openMobile, setOpenMobile } = useSidebar();

    if (collapsible === "none") {
      return (
        <div
          className={cn(
            `
              tw-flex tw-h-full tw-w-[--sidebar-width] tw-flex-col tw-bg-sidebar
              tw-text-sidebar-foreground
            `,
            className
          )}
          ref={ref}
          {...props}
        >
          {children}
        </div>
      );
    }

    if (isMobile) {
      return (
        <Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
          <SheetContent
            data-sidebar="sidebar"
            data-mobile="true"
            className={`
              tw-w-[--sidebar-width] tw-bg-sidebar tw-p-0
              tw-text-sidebar-foreground

              [&>button]:tw-hidden
            `}
            style={
              {
                "--sidebar-width": SIDEBAR_WIDTH_MOBILE,
              } as React.CSSProperties
            }
            side={side}
          >
            <div className="tw-flex tw-h-full tw-w-full tw-flex-col">
              {children}
            </div>
          </SheetContent>
        </Sheet>
      );
    }

    return (
      <div
        ref={ref}
        className={`
          tw-group tw-peer tw-hidden

          md:tw-block
        `}
        data-state={state}
        data-collapsible={state === "collapsed" ? collapsible : ""}
        data-variant={variant}
        data-side={side}
      >
        {/* This is what handles the sidebar gap on desktop */}
        <div
          className={cn(
            `
              tw-relative tw-h-svh tw-w-[--sidebar-width] tw-duration-200
              tw-bg-transparent tw-transition-[width] tw-ease-linear
            `,
            "group-data-[collapsible=offcanvas]:tw-w-0",
            "group-data-[side=right]:tw-rotate-180",
            variant === "floating" || variant === "inset"
              ? `
                group-data-[collapsible=icon]:tw-w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]
              `
              : "group-data-[collapsible=icon]:tw-w-[--sidebar-width-icon]"
          )}
        />
        <div
          className={cn(
            `
              tw-fixed tw-inset-y-0 tw-z-10 tw-hidden tw-h-svh
              tw-w-[--sidebar-width] tw-transition-[left,right,width]
              tw-duration-200 tw-ease-linear

              md:tw-flex
            `,
            side === "left"
              ? `
                tw-left-0

                group-data-[collapsible=offcanvas]:tw-left-[calc(var(--sidebar-width)*-1)]
              `
              : `
                tw-right-0

                group-data-[collapsible=offcanvas]:tw-right-[calc(var(--sidebar-width)*-1)]
              `,
            // Adjust the padding for floating and inset variants.
            variant === "floating" || variant === "inset"
              ? `
                tw-p-2

                group-data-[collapsible=icon]:tw-w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]
              `
              : `
                group-data-[collapsible=icon]:tw-w-[--sidebar-width-icon]

                group-data-[side=left]:tw-border-r

                group-data-[side=right]:tw-border-l
              `,
            className
          )}
          {...props}
        >
          <div
            data-sidebar="sidebar"
            className={`
              tw-flex tw-h-full tw-w-full tw-flex-col tw-bg-sidebar

              group-data-[variant=floating]:tw-rounded-lg
              group-data-[variant=floating]:tw-border
              group-data-[variant=floating]:tw-border-sidebar-border
              group-data-[variant=floating]:tw-shadow
            `}
          >
            {children}
          </div>
        </div>
      </div>
    );
  }
);
Sidebar.displayName = "Sidebar";

const SidebarTrigger = React.forwardRef<
  React.ElementRef<typeof Button>,
  React.ComponentProps<typeof Button>
>(({ className, onClick, ...props }, ref) => {
  const { toggleSidebar } = useSidebar();

  return (
    <Button
      ref={ref}
      data-sidebar="trigger"
      variant="ghost"
      size="icon"
      className={cn("tw-h-7 tw-w-7", className)}
      onClick={(event) => {
        onClick?.(event);
        toggleSidebar();
      }}
      {...props}
    >
      <PanelLeft />
      <span className="tw-sr-only">Toggle Sidebar</span>
    </Button>
  );
});
SidebarTrigger.displayName = "SidebarTrigger";

const SidebarRail = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button">
>(({ className, ...props }, ref) => {
  const { toggleSidebar } = useSidebar();

  return (
    <button
      ref={ref}
      data-sidebar="rail"
      aria-label="Toggle Sidebar"
      tabIndex={-1}
      onClick={toggleSidebar}
      title="Toggle Sidebar"
      className={cn(
        `
          tw-absolute tw-inset-y-0 tw-z-20 tw-hidden tw-w-4 tw--translate-x-1/2
          tw-transition-all tw-ease-linear

          after:tw-absolute after:tw-inset-y-0 after:tw-left-1/2
          after:tw-w-[2px]

          group-data-[side=left]:tw--right-4

          group-data-[side=right]:tw-left-0

          hover:after:tw-bg-sidebar-border

          sm:tw-flex
        `,
        `
          [[data-side=left]_&]:tw-cursor-w-resize

          [[data-side=right]_&]:tw-cursor-e-resize
        `,
        `
          [[data-side=left][data-state=collapsed]_&]:tw-cursor-e-resize

          [[data-side=right][data-state=collapsed]_&]:tw-cursor-w-resize
        `,
        `
          group-data-[collapsible=offcanvas]:tw-translate-x-0
          group-data-[collapsible=offcanvas]:after:tw-left-full
          group-data-[collapsible=offcanvas]:hover:tw-bg-sidebar
        `,
        "[[data-side=left][data-collapsible=offcanvas]_&]:tw--right-2",
        "[[data-side=right][data-collapsible=offcanvas]_&]:tw--left-2",
        className
      )}
      {...props}
    />
  );
});
SidebarRail.displayName = "SidebarRail";

const SidebarInset = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"main">
>(({ className, ...props }, ref) => {
  return (
    <main
      ref={ref}
      className={cn(
        `
          tw-relative tw-flex tw-min-h-svh tw-flex-1 tw-flex-col
          tw-bg-background
        `,
        `
          md:peer-data-[variant=inset]:tw-m-2
          md:peer-data-[state=collapsed]:peer-data-[variant=inset]:tw-ml-2
          md:peer-data-[variant=inset]:tw-ml-0
          md:peer-data-[variant=inset]:tw-rounded-xl
          md:peer-data-[variant=inset]:tw-shadow

          peer-data-[variant=inset]:tw-min-h-[calc(100svh-theme(spacing.4))]
        `,
        className
      )}
      {...props}
    />
  );
});
SidebarInset.displayName = "SidebarInset";

const SidebarInput = React.forwardRef<
  React.ElementRef<typeof Input>,
  React.ComponentProps<typeof Input>
>(({ className, ...props }, ref) => {
  return (
    <Input
      ref={ref}
      data-sidebar="input"
      className={cn(
        `
          tw-h-8 tw-w-full tw-bg-background tw-shadow-none

          focus-visible:tw-ring-2 focus-visible:tw-ring-sidebar-ring
        `,
        className
      )}
      {...props}
    />
  );
});
SidebarInput.displayName = "SidebarInput";

const SidebarHeader = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="header"
      className={cn("tw-flex tw-flex-col tw-gap-2 tw-p-2", className)}
      {...props}
    />
  );
});
SidebarHeader.displayName = "SidebarHeader";

const SidebarFooter = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="footer"
      className={cn("tw-flex tw-flex-col tw-gap-2 tw-p-2", className)}
      {...props}
    />
  );
});
SidebarFooter.displayName = "SidebarFooter";

const SidebarSeparator = React.forwardRef<
  React.ElementRef<typeof Separator>,
  React.ComponentProps<typeof Separator>
>(({ className, ...props }, ref) => {
  return (
    <Separator
      ref={ref}
      data-sidebar="separator"
      className={cn("tw-mx-2 tw-w-auto tw-bg-sidebar-border", className)}
      {...props}
    />
  );
});
SidebarSeparator.displayName = "SidebarSeparator";

const SidebarContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="content"
      className={cn(
        `
          tw-flex tw-min-h-0 tw-flex-1 tw-flex-col tw-gap-2 tw-overflow-auto

          group-data-[collapsible=icon]:tw-overflow-hidden
        `,
        className
      )}
      {...props}
    />
  );
});
SidebarContent.displayName = "SidebarContent";

const SidebarGroup = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="group"
      className={cn(
        "tw-relative tw-flex tw-w-full tw-min-w-0 tw-flex-col tw-p-2",
        className
      )}
      {...props}
    />
  );
});
SidebarGroup.displayName = "SidebarGroup";

const SidebarGroupLabel = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & { asChild?: boolean }
>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      ref={ref}
      data-sidebar="group-label"
      className={cn(
        `
          tw-flex tw-h-8 tw-shrink-0 tw-items-center tw-rounded-md tw-px-2
          tw-text-xs tw-font-medium tw-text-sidebar-foreground/70
          tw-outline-none tw-ring-sidebar-ring tw-transition-[margin,opa]
          tw-duration-200 tw-ease-linear

          [&>svg]:tw-size-4 [&>svg]:tw-shrink-0

          focus-visible:tw-ring-2
        `,
        `
          group-data-[collapsible=icon]:tw--mt-8
          group-data-[collapsible=icon]:tw-opacity-0
        `,
        className
      )}
      {...props}
    />
  );
});
SidebarGroupLabel.displayName = "SidebarGroupLabel";

const SidebarGroupAction = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & { asChild?: boolean }
>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      ref={ref}
      data-sidebar="group-action"
      className={cn(
        `
          tw-absolute tw-right-3 tw-top-3.5 tw-flex tw-aspect-square tw-w-5
          tw-items-center tw-justify-center tw-rounded-md tw-p-0
          tw-text-sidebar-foreground tw-outline-none tw-ring-sidebar-ring
          tw-transition-transform

          [&>svg]:tw-size-4 [&>svg]:tw-shrink-0

          focus-visible:tw-ring-2

          hover:tw-bg-sidebar-accent hover:tw-text-sidebar-accent-foreground
        `,
        // Increases the hit area of the button on mobile.
        "after:tw-absolute after:tw--inset-2 after:md:tw-hidden",
        "group-data-[collapsible=icon]:tw-hidden",
        className
      )}
      {...props}
    />
  );
});
SidebarGroupAction.displayName = "SidebarGroupAction";

const SidebarGroupContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-sidebar="group-content"
    className={cn("tw-w-full tw-text-sm", className)}
    {...props}
  />
));
SidebarGroupContent.displayName = "SidebarGroupContent";

const SidebarMenu = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    data-sidebar="menu"
    className={cn(
      "tw-flex tw-w-full tw-min-w-0 tw-flex-col tw-gap-1",
      className
    )}
    {...props}
  />
));
SidebarMenu.displayName = "SidebarMenu";

const SidebarMenuItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    data-sidebar="menu-item"
    className={cn("tw-group/menu-item tw-relative", className)}
    {...props}
  />
));
SidebarMenuItem.displayName = "SidebarMenuItem";

const sidebarMenuButtonVariants = cva(
  `
    tw-peer/menu-button tw-flex tw-w-full tw-items-center tw-gap-2
    tw-overflow-hidden tw-rounded-md tw-p-2 tw-text-left tw-text-sm
    tw-outline-none tw-ring-sidebar-ring tw-transition-[width,height,padding]

    [&>span:last-child]:tw-truncate

    [&>svg]:tw-size-4 [&>svg]:tw-shrink-0

    active:tw-bg-sidebar-accent active:tw-text-sidebar-accent-foreground

    aria-disabled:tw-pointer-events-none aria-disabled:tw-opacity-50

    data-[active=true]:tw-bg-sidebar-accent data-[active=true]:tw-font-medium
    data-[active=true]:tw-text-sidebar-accent-foreground

    data-[state=open]:hover:tw-bg-sidebar-accent
    data-[state=open]:hover:tw-text-sidebar-accent-foreground

    disabled:tw-pointer-events-none disabled:tw-opacity-50

    focus-visible:tw-ring-2

    group-data-[collapsible=icon]:tw-!size-8
    group-data-[collapsible=icon]:tw-!p-2

    hover:tw-bg-sidebar-accent hover:tw-text-sidebar-accent-foreground

    tw-group-has-[[data-sidebar=menu-action]]/menu-item:pr-8
  `,
  {
    variants: {
      variant: {
        default:
          "hover:tw-bg-sidebar-accent hover:tw-text-sidebar-accent-foreground",
        outline: `
          tw-bg-background tw-shadow-[0_0_0_1px_hsl(var(--sidebar-border))]

          hover:tw-bg-sidebar-accent hover:tw-text-sidebar-accent-foreground
          hover:tw-shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]
        `,
      },
      size: {
        default: "tw-h-8 tw-text-sm",
        sm: "tw-h-7 tw-text-xs",
        lg: `
          tw-h-12 tw-text-sm

          group-data-[collapsible=icon]:tw-!p-0
        `,
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const SidebarMenuButton = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & {
    asChild?: boolean;
    isActive?: boolean;
    tooltip?: string | React.ComponentProps<typeof TooltipContent>;
  } & VariantProps<typeof sidebarMenuButtonVariants>
>(
  (
    {
      asChild = false,
      isActive = false,
      variant = "default",
      size = "default",
      tooltip,
      className,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    const { isMobile, state } = useSidebar();

    const button = (
      <Comp
        ref={ref}
        data-sidebar="menu-button"
        data-size={size}
        data-active={isActive}
        className={cn(sidebarMenuButtonVariants({ variant, size }), className)}
        {...props}
      />
    );

    if (!tooltip) {
      return button;
    }

    if (typeof tooltip === "string") {
      tooltip = {
        children: tooltip,
      };
    }

    return (
      <Tooltip>
        <TooltipTrigger asChild>{button}</TooltipTrigger>
        <TooltipContent
          side="right"
          align="center"
          hidden={state !== "collapsed" || isMobile}
          {...tooltip}
        />
      </Tooltip>
    );
  }
);
SidebarMenuButton.displayName = "SidebarMenuButton";

const SidebarMenuAction = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & {
    asChild?: boolean;
    showOnHover?: boolean;
  }
>(({ className, asChild = false, showOnHover = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      ref={ref}
      data-sidebar="menu-action"
      className={cn(
        `
          tw-absolute tw-right-1 tw-top-1.5 tw-flex tw-aspect-square tw-w-5
          tw-items-center tw-justify-center tw-rounded-md tw-p-0
          tw-text-sidebar-foreground tw-outline-none tw-ring-sidebar-ring
          tw-transition-transform

          [&>svg]:tw-size-4 [&>svg]:tw-shrink-0

          focus-visible:tw-ring-2

          hover:tw-bg-sidebar-accent hover:tw-text-sidebar-accent-foreground

          tw-peer-hover/menu-button:text-sidebar-accent-foreground
        `,
        // Increases the hit area of the button on mobile.
        "after:tw-absolute after:tw--inset-2 after:md:tw-hidden",
        "tw-peer-data-[size=sm]/menu-button:top-1",
        "tw-peer-data-[size=default]/menu-button:top-1.5",
        "tw-peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:tw-hidden",
        showOnHover &&
          `
            data-[state=open]:tw-opacity-100

            md:tw-opacity-0

            tw-group-focus-within/menu-item:opacity-100

            tw-group-hover/menu-item:opacity-100

            tw-peer-data-[active=true]/menu-button:text-sidebar-accent-foreground
          `,
        className
      )}
      {...props}
    />
  );
});
SidebarMenuAction.displayName = "SidebarMenuAction";

const SidebarMenuBadge = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div">
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-sidebar="menu-badge"
    className={cn(
      `
        tw-pointer-events-none tw-absolute tw-right-1 tw-flex tw-h-5 tw-min-w-5
        tw-select-none tw-items-center tw-justify-center tw-rounded-md tw-px-1
        tw-text-xs tw-font-medium tw-tabular-nums tw-text-sidebar-foreground
      `,
      `
        tw-peer-data-[active=true]/menu-button:text-sidebar-accent-foreground

        tw-peer-hover/menu-button:text-sidebar-accent-foreground
      `,
      "tw-peer-data-[size=sm]/menu-button:top-1",
      "tw-peer-data-[size=default]/menu-button:top-1.5",
      "tw-peer-data-[size=lg]/menu-button:top-2.5",
      "group-data-[collapsible=icon]:tw-hidden",
      className
    )}
    {...props}
  />
));
SidebarMenuBadge.displayName = "SidebarMenuBadge";

const SidebarMenuSkeleton = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    showIcon?: boolean;
  }
>(({ className, showIcon = false, ...props }, ref) => {
  // Random width between 50 to 90%.
  const width = React.useMemo(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`;
  }, []);

  return (
    <div
      ref={ref}
      data-sidebar="menu-skeleton"
      className={cn(
        "tw-flex tw-h-8 tw-items-center tw-gap-2 tw-rounded-md tw-px-2",
        className
      )}
      {...props}
    >
      {showIcon && (
        <Skeleton
          className="tw-size-4 tw-rounded-md"
          data-sidebar="menu-skeleton-icon"
        />
      )}
      <Skeleton
        className="tw-h-4 tw-max-w-[--skeleton-width] tw-flex-1"
        data-sidebar="menu-skeleton-text"
        style={
          {
            "--skeleton-width": width,
          } as React.CSSProperties
        }
      />
    </div>
  );
});
SidebarMenuSkeleton.displayName = "SidebarMenuSkeleton";

const SidebarMenuSub = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    data-sidebar="menu-sub"
    className={cn(
      `
        tw-mx-3.5 tw-flex tw-min-w-0 tw-translate-x-px tw-flex-col tw-gap-1
        tw-border-l tw-border-sidebar-border tw-px-2.5 tw-py-0.5
      `,
      "group-data-[collapsible=icon]:tw-hidden",
      className
    )}
    {...props}
  />
));
SidebarMenuSub.displayName = "SidebarMenuSub";

const SidebarMenuSubItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ ...props }, ref) => <li ref={ref} {...props} />);
SidebarMenuSubItem.displayName = "SidebarMenuSubItem";

const SidebarMenuSubButton = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentProps<"a"> & {
    asChild?: boolean;
    size?: "sm" | "md";
    isActive?: boolean;
  }
>(({ asChild = false, size = "md", isActive, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a";

  return (
    <Comp
      ref={ref}
      data-sidebar="menu-sub-button"
      data-size={size}
      data-active={isActive}
      className={cn(
        `
          tw-flex tw-h-7 tw-min-w-0 tw--translate-x-px tw-items-center tw-gap-2
          tw-overflow-hidden tw-rounded-md tw-px-2 tw-text-sidebar-foreground
          tw-outline-none tw-ring-sidebar-ring

          [&>span:last-child]:tw-truncate

          [&>svg]:tw-size-4 [&>svg]:tw-shrink-0
          [&>svg]:tw-text-sidebar-accent-foreground

          active:tw-bg-sidebar-accent active:tw-text-sidebar-accent-foreground

          aria-disabled:tw-pointer-events-none aria-disabled:tw-opacity-50

          disabled:tw-pointer-events-none disabled:tw-opacity-50

          focus-visible:tw-ring-2

          hover:tw-bg-sidebar-accent hover:tw-text-sidebar-accent-foreground
        `,
        `
          data-[active=true]:tw-bg-sidebar-accent
          data-[active=true]:tw-text-sidebar-accent-foreground
        `,
        size === "sm" && "tw-text-xs",
        size === "md" && "tw-text-sm",
        "group-data-[collapsible=icon]:tw-hidden",
        className
      )}
      {...props}
    />
  );
});
SidebarMenuSubButton.displayName = "SidebarMenuSubButton";

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
};
