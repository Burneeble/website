/* eslint-disable @typescript-eslint/no-require-imports */
const { fontFamily } = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: ["class"],
  content: ["./src/components/**/*.{js,ts,jsx,tsx,mdx,stories.tsx}"],
  theme: {
    container: {
      center: "true",
      padding: "2rem",
      screens: {
        "2xl": "1536px",
      },
    },

    screens: {
      sm: "425px",
      md: "768px",
      lg: "992px",
      xl: "1300px",
      "2xl": "1536px",
    },

    colors: {
      white: "rgba(255, 255, 255, 1)",
      black: "rgba(0, 0, 0, 1)",
      blue: {
        50: "rgba(225, 237, 247, 1)",
        100: "rgba(196, 219, 241, 1)",
        200: "rgba(141, 183, 227, 1)",
        300: "rgba(88, 149, 212, 1)",
        400: "rgba(43, 119, 201, 1)",
        500: "rgba(26, 90, 157, 1)",
        600: "rgba(23, 72, 124, 1)",
        700: "rgba(18, 52, 87, 1)",
        800: "rgba(15, 35, 57, 1)",
        900: "rgba(10, 20, 30, 1)",
      },
      green: {
        50: "rgba(241, 247, 239, 1)",
        100: "rgba(227, 239, 221, 1)",
        200: "rgba(197, 220, 185, 1)",
        300: "rgba(169, 204, 152, 1)",
        400: "rgba(143, 187, 120, 1)",
        500: "rgba(116, 168, 89, 1)",
        600: "rgba(93, 135, 72, 1)",
        700: "rgba(69, 100, 53, 1)",
        800: "rgba(45, 65, 34, 1)",
        900: "rgba(23, 35, 18, 1)",
      },
      yellow: {
        50: "rgba(253, 245, 236, 1)",
        100: "rgba(251, 237, 217, 1)",
        200: "rgba(247, 215, 176, 1)",
        300: "rgba(243, 197, 139, 1)",
        400: "rgba(240, 177, 102, 1)",
        500: "rgba(250, 155, 46, 1)",
        600: "rgba(215, 130, 48, 1)",
        700: "rgba(163, 99, 35, 1)",
        800: "rgba(108, 65, 20, 1)",
        900: "rgba(56, 34, 7, 1)",
      },
      orange: {
        200: "rgba(242, 192, 7, 1)",
        300: "rgba(242, 163, 7, 1)",
        400: "rgba(242, 131, 7, 1)",
        500: "rgba(255, 92, 1, 1)",
        600: "rgba(242, 48, 7, 1)",
      },
      red: {
        50: "rgba(247, 231, 229, 1)",
        100: "rgba(240, 208, 202, 1)",
        200: "rgba(229, 165, 155, 1)",
        300: "rgba(218, 119, 103, 1)",
        400: "rgba(209, 77, 57, 1)",
        500: "rgba(205, 34, 8,1)",
        600: "rgba(136, 43, 30, 1)",
        700: "rgba(103, 32, 22, 1)",
        800: "rgba(70, 22, 15, 1)",
        900: "rgba(15, 0, 0, 1)",
      },
      brown: {
        200: "rgba(157, 92, 57, 1)",
        300: "rgba(115, 80, 61, 1)",
        500: "rgba(72, 58, 50, 1)",
        600: "rgba(51, 46, 44, 1)",
        700: "rgba(43, 43, 43, 1)",
      },
      gray: {
        400: "rgba(172, 172, 172, 1)",
        500: "rgba(91, 91, 91, 1)",
        600: "rgba(59, 59, 59, 1)",
      },
    },
    extend: {
      screens: {
        "2lg": "1100px",
      },
      colors: {
        border: "rgba(var(--border))",
        input: "var(--primary-base)",
        ring: "rgba(var(--ring))",
        background: "var(--secondary-base)",
        foreground: "var(--primary-base)",
        primary: {
          DEFAULT: "var(--primary-default)",
          foreground: "var(--secondary-base)",
        },
        secondary: {
          DEFAULT: "var(--secondary-default)",
          foreground: "var(--primary-base)",
        },
        destructive: {
          DEFAULT: "var(--error-default)",
          foreground: "var(--error-dark)",
        },
        muted: {
          DEFAULT: "rgba(var(--muted))",
          foreground: "var(--neutral-default)",
        },
        accent: {
          DEFAULT: "rgba(var(--accent))",
          foreground: "rgba(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "rgba(var(--popover))",
          foreground: "rgba(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "rgba(var(--card))",
          foreground: "rgba(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "rgba(var(--sidebar-background))",
          foreground: "rgba(var(--sidebar-foreground))",
          primary: "rgba(var(--sidebar-primary))",
          "primary-foreground": "rgba(var(--sidebar-primary-foreground))",
          accent: "rgba(var(--sidebar-accent))",
          "accent-foreground": "rgba(var(--sidebar-accent-foreground))",
          border: "rgba(var(--sidebar-border))",
          ring: "rgba(var(--sidebar-ring))",
        },
      },
      textColor: {
        headings: "var(--primary-base)",
        body: "var(--neutral-light)",
        "body-active": "var(--primary-base)",
        action: "var(--primary-default)",
        "action-hover": "var(--primary-lighter)",
        error: "var(--error-default)",
        success: "var(--success-default)",
        information: "var(--info-default)",
        warning: "var(--warning-default)",
        neutral: "var(--neutral-default)",
        highlight: "var(--primary-light)",
        button: "var(--primary-base)",
      },
      borderColor: {
        primary: "var(--primary-light)",
        secondary: "var(--secondary-darker)",
        tertiary: "var(--primary-base)",
        active: "var(--primary-default)",
        error: "var(--error-default)",
        success: "var(--success-default)",
        information: "var(--info-default)",
        warning: "var(--warning-default)",
        neutral: "var(--neutral-default)",
      },
      backgroundColor: {
        primary: "var(--primary-base)",
        secondary: "var(--secondary-base)",
        tertiary: "var(--secondary-darker)",
        action: "var(--primary-default)",
        "action-hover": "var(--primary-light)",
        error: "var(--error-dark)",
        success: "var(--success-default)",
        information: "var(--info-dark)",
        warning: "var(--warning-dark)",
        neutral: "var(--neutral-dark)",
        button: {
          primary: "var(--primary-default)",
          secondary: "var(--secondary-darker)",
          error: "var(--error-default)",
          success: "var(--success-default)",
          information: "var(--info-default)",
          warning: "var(--warning-default)",
          disabled: "var(--neutral-light)",
        },
      },

      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        "bowlby-one": ["Bowlby One", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
            opacity: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
            opacity: "1",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
            opacity: "1",
          },
          to: {
            height: "0",
            opacity: "0",
          },
        },
        "cs-fade-in": {
          from: {
            opacity: "0",
            scale: "0",
          },
          to: {
            opacity: "1",
            scale: "1",
          },
        },
        "cs-fade-out": {
          from: {
            opacity: "1",
            scale: "1",
          },
          to: {
            opacity: "0",
            scale: "0",
          },
        },
        "cs-pulse": {
          "0%": {
            transform: "scale(1)",
          },
          "50%": {
            transform: "scale(1.2)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
        "cs-wrong": {
          "0%": {
            transform: "translateX(0)",
          },
          "25%": {
            transform: "translateX(10px)",
          },
          "50%": {
            transform: "translateX(-10px)",
          },
          "75%": {
            transform: "translateX(10px)",
          },
          "100%": {
            transform: "translateX(0)",
          },
        },
        "cs-zoom-in": {
          "0%": {
            transform: "scale(0)",
          },
          "95%": {
            transform: "scale(1.2)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
        float: {
          "0%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
        "fill-gradient": {
          "0%": {
            backgroundPosition: "0% 50%",
            backgroundColor: "var(--primary-default)",
            borderColor: "var(--primary-default)",
          },

          "100%": {
            backgroundPosition: "100% 50%",
            backgroundColor: "var(--success-default)",
            borderColor: "var(--success-default)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "cs-fade-in": "cs-fade-in 0.2s ease-in-out",
        "cs-fade-out": "cs-fade-out 0.2s ease-in-out",
        "cs-pulse": "cs-pulse 0.5s ease-in-out",
        "cs-wrong": "cs-wrong 0.5s ease-in-out",
        "cs-zoom-in": "cs-zoom-in 0.15s ease-in-out forwards",
        "cs-float": "float 2s ease-in-out infinite",
        "fill-gradient": "fill-gradient 2s linear forwards",
      },
    },
  },
  variants: {
    extend: {
      fontWeight: ["responsive", "hover", "focus"],
      opacity: ["hover"],
      borderColor: ["hover", "focus"],
      margin: ["first", "last"],
      backgroundColor: ["odd", "even"],
      scale: ["hover", "active", "group-hover"],
      padding: ["first", "last"],
    },
  },
  prefix: "tw-",
  plugins: [
    require("tailwindcss-animate"),
    // @ts-ignore
    plugin(function ({ addBase, theme }) {
      addBase({
        ":root": {
          "--primary-base": theme("colors.white"),
          "--secondary-base": theme("colors.black"),
          "--primary-lighest": theme("colors.orange.200"),
          "--primary-lighter": theme("colors.orange.300"),
          "--primary-light": theme("colors.orange.400"),
          "--primary-default": theme("colors.orange.500"),
          "--primary-dark": theme("colors.orange.600"),
          "--secondary-lighter": theme("colors.brown.200"),
          "--secondary-light": theme("colors.brown.300"),
          "--secondary-default": theme("colors.brown.500"),
          "--secondary-dark": theme("colors.brown.600"),
          "--secondary-darker": theme("colors.brown.700"),
          "--neutral-light": theme("colors.gray.400"),
          "--neutral-default": theme("colors.gray.500"),
          "--neutral-dark": theme("colors.gray.600"),
          "--success-light": theme("colors.green.50"),
          "--success-default": theme("colors.green.500"),
          "--success-dark": theme("colors.green.900"),
          "--error-light": theme("colors.red.50"),
          "--error-default": theme("colors.red.500"),
          "--error-dark": theme("colors.red.900"),
          "--warning-light": theme("colors.yellow.50"),
          "--warning-default": theme("colors.yellow.500"),
          "--warning-dark": theme("colors.yellow.900"),
          "--info-light": theme("colors.blue.50"),
          "--info-default": theme("colors.blue.500"),
          "--info-dark": theme("colors.blue.900"),
        },
      });
    }),
  ],
};

export default config;
