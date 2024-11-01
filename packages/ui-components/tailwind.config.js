const { fontFamily } = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/components/**/*.{js,ts,jsx,tsx,mdx,stories.tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    //TODO dont delete
    // screens: {
    //   mobile: "425px",
    //   tablet: "768px",
    //   laptop: "992px",
    //   desktop: "1300px",
    // },

    colors: {
      //burneeble palette
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
        500: "rgba(170, 55, 38, 1)",
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
      colors: {
        //TODO review these  hsl shadcn values
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "var(--black)",
        foreground: "var(--white)",
        primary: {
          DEFAULT: "var(--primary-default)",
          foreground: "var(--black)",
        },
        secondary: {
          DEFAULT: "var(--secondary-default)",
          foreground: "var(--white)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        //--- end
      },

      //custom mapping
      textColor: {
        headings: "var(--white)",
        body: "var(--neutral-light)",
        action: "var(--primary-default)",
        "action-hover": "var(--primary-lighter)",
        error: "var(--error-default)",
        success: "var(--success-default)",
        information: "var(--info-default)",
        warning: "var(--warning-default)",
        neutral: "var(--neutral-light)",
        highlight: "var(--primary-light)",
      },
      borderColor: {
        primary: "var(--primary-light)",
        secondary: "var(--secondary-darker)",
        tertiary: "var(--white)",
        active: "var(--primary-default)",
        error: "var(--error-default)",
        success: "var(--success-default)",
        information: "var(--info-default)",
        warning: "var(--warning-default)",
        neutral: "var(--neutral-default)",
      },

      backgroundColor: {
        primary: "var(--white)",
        secondary: "var(--black)",
        tertiary: "var(--secondary-darker)",
        action: "var(--primary-default)",
        "action-hover": "var(--primary-light)",
        error: "var(--error-dark)",
        success: "var(--success-dark)",
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
          text: "var(--white)",
        },
      },

      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        "bowlby-one": ["Bowlby One", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  prefix: "tw-",
  plugins: [
    require("tailwindcss-animate"),
    plugin(function ({ addBase, theme, apply }) {
      addBase({
        ":root": {
          "--white": theme("colors.white"),
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
          "--error-light": theme("colors.red.50"),
          "--success-light": theme("colors.green.50"),
          "--success-default": theme("colors.green.500"),
          "--success-dark": theme("colors.green.900"),
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
