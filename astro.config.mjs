// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeBlack from "starlight-theme-black";
import rehypeMermaid from "rehype-mermaid";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Malbox",
      logo: {
        dark: "./src/assets/malbox-logo-dark.svg",
        light: "./src/assets/malbox-logo-light.svg",
      },
      customCss: ["./src/styles/global.css"],
      sidebar: [
        {
          label: "Getting Started",
          autogenerate: { directory: "getting-started" },
        },
        {
          label: "Installation",
          autogenerate: { directory: "installation" },
        },
        {
          label: "Core Concepts",
          autogenerate: { directory: "core-concepts" },
        },
        {
          label: "CLI",
          autogenerate: { directory: "cli" },
        },
        {
          label: "Infrastructure",
          autogenerate: { directory: "infrastructure" },
        },
        {
          label: "Analysis",
          autogenerate: { directory: "analysis" },
        },
        {
          label: "Plugins",
          autogenerate: { directory: "plugins" },
        },
        {
          label: "Tutorials",
          autogenerate: { directory: "tutorials" },
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
        {
          label: "Contributing",
          autogenerate: { directory: "contributing" },
        },
        {
          label: "Development",
          autogenerate: { directory: "development" },
        },
      ],
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/DualHorizon/malbox' },
        { icon: 'twitter', label: 'Twitter', href: "https://x.com/malbox_sandbox/" },
      ],
      plugins: [
        starlightThemeBlack({
          navLinks: [
            {
              // optional
              label: "Docs",
              link: "getting-started/introduction",
            },
          ],
          //optional
          footerText: "",
        }),
      ],
      components: {
        Hero: "./src/overrides/Hero.astro",
      },
    }),
  ],
  markdown: {
    rehypePlugins: [[rehypeMermaid, { strategy: "img-svg", dark: true }]],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
