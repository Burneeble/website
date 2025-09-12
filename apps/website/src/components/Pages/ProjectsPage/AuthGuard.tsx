"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { FlameIcon } from "@burneeble/icons";
import {
  Button,
  NotificationHandler,
  useClientInfoService,
} from "@burneeble/ui-components";

interface AuthGuardProps {
  children: React.ReactNode;
}

const AuthGuard = ({ children }: AuthGuardProps) => {
  const { screen } = useClientInfoService();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // Get redirect URL from query params
  const redirectUrl = searchParams.get("redirect");

  useEffect(() => {
    // Check if already authenticated in this session
    const authStatus = sessionStorage.getItem("portfolio_auth");
    if (authStatus === "true") {
      setIsAuthenticated(true);

      // If authenticated and there's a redirect URL, redirect immediately
      if (redirectUrl) {
        router.push(redirectUrl);
        return;
      }
    }
    setIsLoading(false);
  }, [redirectUrl, router]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const validPassword =
      process.env.NEXT_PUBLIC_PORTFOLIO_PASSWORD || "burneeble2026";

    if (password === validPassword) {
      sessionStorage.setItem("portfolio_auth", "true");
      setIsAuthenticated(true);
      NotificationHandler.instance.success("Access granted!");

      // If there's a redirect URL, navigate there after authentication
      if (redirectUrl) {
        router.push(redirectUrl);
      }
    } else {
      NotificationHandler.instance.error("Invalid password");
      setPassword("");
    }
  };

  if (isLoading) {
    return null;
  }

  if (!isAuthenticated) {
    return (
      <div
        className={`
          portfolio-auth-page cs-page tw-min-h-screen tw-bg-gradient-to-t
          tw-from-[var(--secondary-darker)] tw-to-[var(--secondary-base)]
        `}
      >
        <div
          className={`
            tw-flex tw-min-h-screen tw-items-center tw-justify-center tw-px-4
          `}
        >
          <div className="tw-w-full tw-max-w-md">
            <div
              className={`
                tw-rounded-2xl tw-bg-black/30 tw-p-8 tw-backdrop-blur-sm
              `}
            >
              <div className="tw-mb-8 tw-text-center">
                <FlameIcon
                  className={`tw-mx-auto tw-mb-4 tw-h-[60px] tw-w-[60px]`}
                />
                <h1
                  className={`
                    tw-mb-2 tw-font-bowlby-one tw-text-3xl tw-text-white
                  `}
                >
                  Private Portfolio
                </h1>
                <p className="tw-font-inter tw-text-base tw-text-gray-400">
                  Enter your access code to continue
                </p>
              </div>

              <form onSubmit={handleLogin} className="tw-space-y-6">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className={`
                    tw-w-full tw-rounded-lg tw-border tw-border-gray-600
                    tw-bg-black/50 tw-px-4 tw-py-3 tw-font-inter tw-text-white
                    tw-placeholder-gray-400 tw-outline-none tw-transition-colors
                    tw-duration-200

                    focus:tw-border-[var(--primary-base)]
                  `}
                  autoFocus
                />
                <Button
                  type="submit"
                  size={screen === "sm" || screen === "md" ? "default" : "lg"}
                  fit="full"
                >
                  Access Portfolio
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default AuthGuard;