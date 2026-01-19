import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "✦ Hearth",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "goatcounter",
      websiteId: "hearth"
    },
    locale: "en-US",
    baseUrl: "ashutosh-root0.github.io/hearth",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        // default: {
        //   lightMode: {
        //     light: "#faf8f8",
        //     lightgray: "#e5e5e5",
        //     gray: "#b8b8b8",
        //     darkgray: "#4e4e4e",
        //     dark: "#2b2b2b",
        //     secondary: "#284b63",
        //     tertiary: "#84a59d",
        //     highlight: "rgba(143, 159, 169, 0.15)",
        //     textHighlight: "#fff23688",
        //   },
        //   darkMode: {
        //     light: "#161618",
        //     lightgray: "#393639",
        //     gray: "#646464",
        //     darkgray: "#d4d4d4",
        //     dark: "#ebebec",
        //     secondary: "#7b97aa",
        //     tertiary: "#84a59d",
        //     highlight: "rgba(143, 159, 169, 0.15)",
        //     textHighlight: "#b3aa0288",
        //   },
        // }
        Totoro : {
          lightMode: {
              light: "#FAF9F6",       /* Base: Rice Paper / Soft Cloud White */
              lightgray: "#F0F4E8",   /* Background: Pale Tea Green (Totoro's Belly) */
              gray: "#7D8C86",        /* Muted Text: Stone Statue Gray */
              darkgray: "#3E4C52",    /* Main Text: Deep Slate (Not harsh black) */
              dark: "#3E4C52",        /* Headings: Deep Slate */
              secondary: "#6DA368",   /* Primary Accent: Ghibli Meadow Green */
              tertiary: "#D9806C",    /* Secondary Accent: Terracotta / Kiki's Bow */
              highlight: "#FFFFFF",   /* Card Background: Pure White */
              textHighlight: "#FFD96688", /* Marker: Sunbeam Yellow */
            },
            darkMode: {
              light: "#19222E",       /* Base: Deep Midnight Blue (Night Flight) */
              lightgray: "#232E3C",   /* Background: Shadowed Lake Water */
              gray: "#8D9CAB",        /* Muted Text: Moonlit Cloud */
              darkgray: "#E1E8ED",    /* Main Text: Starlight White */
              dark: "#E1E8ED",        /* Headings: Starlight White */
              secondary: "#E29E4D",   /* Primary Accent: Bathhouse Lantern Gold */
              tertiary: "#5FA8A3",    /* Secondary Accent: River Spirit Teal (Haku) */
              highlight: "rgba(95, 168, 163, 0.15)", /* Card Overlay: Dragon Scale Tint */
              textHighlight: "#D67C4B88", /* Marker: Glowing Ember */
            },
        },
        FantasticFox : {
          lightMode: {
            light: "#FFF8F0",       /* Base: Warm Floral White (Creamy) */
            lightgray: "#F2E6D8",   /* Background: Soft Oatmeal/Wheat */
            gray: "#8D7B68",        /* Muted Text: Warm Taupe */
            darkgray:  "#4A3B32",    /* Main Text: Deep Walnut Brown */
            dark: "#4A3B32",        /* Headings: Deep Walnut Brown */
            secondary: "#C05621",   /* Primary Accent: Burnt Orange/Rust */
            tertiary: "#7CB342",    /* Secondary Accent: Olive/Moss Green */
            highlight: "#FFFFFF",   /* Card Background: Pure White */
            textHighlight: "#F6AD5588", /* Marker: Golden Orange (Semi-transparent) */
          },
          darkMode: {
            light: "#1F1812",       /* Base: Very Dark Coffee/Black */
            lightgray: "#2C241B",   /* Background: Espresso */
            gray: "#8D8175",        /* Muted Text: Warm Stone Gray */
            darkgray: "#E3DCD2",    /* Main Text: Light Sand/Beige */
            dark: "#E3DCD2",        /* Headings: Light Sand/Beige */
            secondary: "#ED8936",   /* Primary Accent: Bright Pumpkin */
            tertiary: "#AED581",    /* Secondary Accent: Light Sage Green */
            highlight: "rgba(237, 137, 54, 0.15)", /* Card Overlay: Warm Amber Tint */
            textHighlight: "#9C422188", /* Marker: Deep Rust (Semi-transparent) */
          },
        },
        PickleRick : {
          lightMode: {
            light: "#eee",
            lightgray: "#fff",
            gray: "#8c99a6",
            darkgray: "#22465c",
            dark: "#22465c",
            secondary: "#11a983",
            tertiary: "#5F9EA0",
            highlight: "#fff",
            textHighlight: "#fff23688",
          },
          darkMode: {
            light: "#162020",
            lightgray: "#203030",
            gray: "#627373",
            darkgray: "#b8bfbd",
            dark: "#b8bfbd",
            secondary: "#9aae56",
            tertiary: "#84a59d",
            highlight: "rgba(143, 159, 169, 0.15)",
            textHighlight: "#b3aa0288",
          },
        },
        PinkPanther : {
          lightMode: {
            light: "#FFFAFC",       /* Base: Snow Pink / Clean Animation Background */
            lightgray: "#F9C9D7",   /* Background: Soft Rose Quartz (The Panther's Fur) */
            gray: "#757575",        /* Muted Text: Cool Cigarette Ash Gray */
            darkgray: "#212121",    /* Main Text: Ink Black (Cartoon Outlines) */
            dark: "#212121",        /* Headings: Ink Black */
            secondary: "#E39FC6",   /* Primary Accent: Iconic Hot Magenta/Pink */
            tertiary: "#D21044",    /* Secondary Accent: 60s Retro Teal (The Inspector's Vibe) */
            highlight: "#FFFFFF",   /* Card Background: Pure White */
            textHighlight: "#FFEB3B88", /* Marker: Pop Art Yellow */
          },
          darkMode: {
            light: "#121016",       /* Base: Deep Jazz Club Violet-Black */
            lightgray: "#1E1B26",   /* Background: Midnight Shadow */
            gray: "#9E9AA6",        /* Muted Text: Foggy Streetlight */
            darkgray: "#FFE4E1",    /* Main Text: Misty Rose / Pale White */
            dark: "#FFE4E1",        /* Headings: Misty Rose */
            secondary: "#E39FC6",   /* Primary Accent: Neon Pink Footprints */
            tertiary: "#D21044",    /* Secondary Accent: The "Pink Panther" Diamond Sparkle */
            highlight: "rgba(255, 64, 129, 0.1)", /* Card Overlay: Pink Neon Glow */
            textHighlight: "#E040FB88", /* Marker: Electric Purple */
          },
        }, 
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      // Plugin.CustomOgImages(),
    ],
  },
}

export default config
