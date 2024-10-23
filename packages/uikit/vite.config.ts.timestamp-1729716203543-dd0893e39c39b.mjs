// vite.config.ts
import { defineConfig } from "file:///C:/Users/aldi/Documents/GitHub/IceCreamSwap/node_modules/.pnpm/vite@4.3.1_@types+node@18.16.2/node_modules/vite/dist/node/index.js";
import { vanillaExtractPlugin } from "file:///C:/Users/aldi/Documents/GitHub/IceCreamSwap/node_modules/.pnpm/@vanilla-extract+vite-plugin@3.8.0_@types+node@18.16.2_vite@4.3.1/node_modules/@vanilla-extract/vite-plugin/dist/vanilla-extract-vite-plugin.cjs.js";
import dts from "file:///C:/Users/aldi/Documents/GitHub/IceCreamSwap/node_modules/.pnpm/vite-plugin-dts@3.5.3_@types+node@18.16.2_rollup@2.70.1_typescript@5.1.3_vite@4.3.1/node_modules/vite-plugin-dts/dist/index.mjs";

// package.json
var package_default = {
  name: "@pancakeswap/uikit",
  version: "0.63.4",
  description: "Set of UI components for pancake projects",
  type: "module",
  main: "dist/index.cjs",
  module: "dist/index.js",
  types: "dist/index.d.ts",
  sideEffects: [
    "*.css.ts",
    "src/css/**/*",
    "src/theme/**/*"
  ],
  exports: {
    "./package.json": "./package.json",
    ".": {
      import: "./dist/index.js",
      require: "./dist/index.cjs"
    },
    "./styles": {
      import: "./dist/style.css",
      require: "./dist/style.css"
    },
    "./css/atoms": {
      import: "./src/css/atoms.ts",
      types: "./dist/css/atoms.d.ts"
    },
    "./css/responsiveStyle": {
      import: "./src/css/responsiveStyle.ts",
      types: "./dist/css/responsiveStyle.d.ts"
    }
  },
  repository: "https://github.com/pancakeswap/pancake-toolkit/tree/master/packages/pancake-uikit",
  license: "MIT",
  private: true,
  scripts: {
    build: "vite build",
    dev: "vite build --watch --mode development",
    start: "pnpm storybook",
    lint: "eslint 'src/**/*.{js,jsx,ts,tsx}'",
    "format:check": "prettier --check --loglevel error 'src/**/*.{js,jsx,ts,tsx}'",
    "format:write": "prettier --write 'src/**/*.{js,jsx,ts,tsx}'",
    storybook: "storybook dev -p 6006",
    "build:storybook": "storybook build",
    test: "vitest --run",
    "update:snapshot": "vitest -u",
    prepublishOnly: "pnpm run pkg:build",
    clean: "rm -rf .turbo && rm -rf node_modules && rm -rf dist"
  },
  devDependencies: {
    "@babel/core": "^7.20.12",
    "@babel/preset-env": "^7.20.2",
    "@babel/preset-react": "^7.18.6",
    "@pancakeswap/farms": "workspace:*",
    "@pancakeswap/hooks": "workspace:*",
    "@pancakeswap/pools": "workspace:*",
    "@pancakeswap/sdk": "workspace:*",
    "@pancakeswap/swap-sdk-core": "workspace:*",
    "@pancakeswap/token-lists": "workspace:*",
    "@pancakeswap/tokens": "workspace:*",
    "@pancakeswap/utils": "workspace:*",
    "@pancakeswap/v3-sdk": "workspace:*",
    "@rollup/plugin-json": "^4.1.0",
    "@rollup/plugin-typescript": "^8.2.1",
    "@rollup/plugin-url": "^6.0.0",
    "@sentry/nextjs": "^7.0.0",
    "@storybook/addon-a11y": "^7.0.7",
    "@storybook/addon-actions": "^7.0.7",
    "@storybook/addon-essentials": "^7.0.7",
    "@storybook/addon-links": "^7.0.7",
    "@storybook/builder-vite": "^7.0.7",
    "@storybook/react": "^7.0.7",
    "@storybook/react-vite": "^7.0.7",
    "@testing-library/jest-dom": "^5.11.6",
    "@testing-library/react": "^12.1.3",
    "@types/d3": "^7.4.0",
    "@types/js-cookie": "^3.0.2",
    "@types/lodash": "^4.14.168",
    "@types/react": "^18.2.21",
    "@types/react-dom": "^18.0.6",
    "@types/react-router-dom": "^5.1.7",
    "@types/react-transition-group": "^4.4.1",
    "@types/styled-system__should-forward-prop": "^5.1.2",
    "@vanilla-extract/vite-plugin": "^3.8.0",
    "@vitejs/plugin-react": "4.0.0",
    "babel-jest": "^29.3.1",
    "babel-loader": "^9.1.2",
    "babel-plugin-styled-components": "^1.12.0",
    d3: "^7.8.2",
    jest: "29.3.1",
    "jest-environment-jsdom": "^29.3.1",
    "jest-styled-components": "^7.0.8",
    "js-cookie": "*",
    next: "*",
    "next-seo": "*",
    "next-themes": "^0.2.1",
    polished: "^4.2.2",
    react: "^18.2.0",
    "react-countup": "^6.4.0",
    "react-device-detect": "*",
    "react-dom": "^18.2.0",
    "react-is": "^17.0.2",
    "react-markdown": "^6.0.2",
    "react-redux": "^8.0.5",
    "react-router-dom": "^5.2.0",
    "react-transition-group": "*",
    "remark-gfm": "*",
    rollup: "^2.70.1",
    "rollup-plugin-node-builtins": "^2.1.2",
    storybook: "^7.0.7",
    "styled-components": "^6.0.7",
    "themeprovider-storybook": "^1.7.2",
    "ts-jest": "^27.1.3",
    viem: "^1.2.9",
    vite: "^4.3.1",
    "vite-plugin-dts": "^3.5.3",
    "vite-tsconfig-paths": "^4.0.3",
    vitest: "^0.27.2",
    wagmi: "^1.3.10"
  },
  peerDependencies: {
    "@sentry/nextjs": "^7.0.0",
    "js-cookie": "*",
    next: "*",
    "next-seo": "*",
    "next-themes": "^0.2.1",
    react: "^18.2.0",
    "react-device-detect": "*",
    "react-dom": "^18.2.0",
    "react-redux": "^8.0.5",
    "react-transition-group": "*",
    "remark-gfm": "*",
    "styled-components": "^6.0.7",
    viem: "^1.2.9"
  },
  dependencies: {
    "@pancakeswap/farms": "workspace:*",
    "@pancakeswap/hooks": "workspace:*",
    "@pancakeswap/localization": "workspace:*",
    "@pancakeswap/pools": "workspace:*",
    "@pancakeswap/sdk": "workspace:*",
    "@pancakeswap/swap-sdk-core": "workspace:*",
    "@pancakeswap/token-lists": "workspace:*",
    "@pancakeswap/tokens": "workspace:*",
    "@pancakeswap/v3-sdk": "workspace:*",
    "@popperjs/core": "^2.9.2",
    "@radix-ui/react-dismissable-layer": "^1.0.3",
    "@radix-ui/react-slot": "^1.0.0",
    "@styled-system/should-forward-prop": "^5.1.5",
    "@types/styled-system": "^5.1.17",
    "@vanilla-extract/css": "^1.13.0",
    "@vanilla-extract/css-utils": "^0.1.3",
    "@vanilla-extract/recipes": "^0.5.0",
    "@vanilla-extract/sprinkles": "^1.6.1",
    "bignumber.js": "^9.0.0",
    clsx: "^1.2.1",
    csstype: "^3.1.2",
    "date-fns": "^2.29.3",
    deepmerge: "^4.0.0",
    "framer-motion": "10.16.4",
    "lightweight-charts": "^4.0.1",
    lodash: "^4.17.20",
    "react-popper": "^2.3.0",
    "styled-system": "^5.1.5",
    tslib: "^2.2.0"
  },
  publishConfig: {
    access: "public"
  }
};

// vite.config.ts
var vite_config_default = defineConfig({
  build: {
    lib: {
      entry: "src/index.ts",
      fileName: "index",
      formats: ["cjs", "es"]
    },
    rollupOptions: {
      external: [...Object.keys(package_default.peerDependencies), ...Object.keys(package_default.dependencies), "crypto"]
    }
  },
  plugins: [
    vanillaExtractPlugin({
      identifiers: "short"
    }),
    dts()
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiLCAicGFja2FnZS5qc29uIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcYWxkaVxcXFxEb2N1bWVudHNcXFxcR2l0SHViXFxcXEljZUNyZWFtU3dhcFxcXFxwYWNrYWdlc1xcXFx1aWtpdFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcYWxkaVxcXFxEb2N1bWVudHNcXFxcR2l0SHViXFxcXEljZUNyZWFtU3dhcFxcXFxwYWNrYWdlc1xcXFx1aWtpdFxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvYWxkaS9Eb2N1bWVudHMvR2l0SHViL0ljZUNyZWFtU3dhcC9wYWNrYWdlcy91aWtpdC92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgeyB2YW5pbGxhRXh0cmFjdFBsdWdpbiB9IGZyb20gXCJAdmFuaWxsYS1leHRyYWN0L3ZpdGUtcGx1Z2luXCI7XG5pbXBvcnQgZHRzIGZyb20gXCJ2aXRlLXBsdWdpbi1kdHNcIjtcblxuaW1wb3J0IHBrZyBmcm9tIFwiLi9wYWNrYWdlLmpzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgYnVpbGQ6IHtcbiAgICBsaWI6IHtcbiAgICAgIGVudHJ5OiBcInNyYy9pbmRleC50c1wiLFxuICAgICAgZmlsZU5hbWU6IFwiaW5kZXhcIixcbiAgICAgIGZvcm1hdHM6IFtcImNqc1wiLCBcImVzXCJdLFxuICAgIH0sXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgZXh0ZXJuYWw6IFsuLi5PYmplY3Qua2V5cyhwa2cucGVlckRlcGVuZGVuY2llcyksIC4uLk9iamVjdC5rZXlzKHBrZy5kZXBlbmRlbmNpZXMpLCBcImNyeXB0b1wiXSxcbiAgICB9LFxuICB9LFxuICBwbHVnaW5zOiBbXG4gICAgdmFuaWxsYUV4dHJhY3RQbHVnaW4oe1xuICAgICAgaWRlbnRpZmllcnM6IFwic2hvcnRcIixcbiAgICB9KSxcbiAgICBkdHMoKSxcbiAgXSxcbn0pO1xuIiwgIntcbiAgXCJuYW1lXCI6IFwiQHBhbmNha2Vzd2FwL3Vpa2l0XCIsXG4gIFwidmVyc2lvblwiOiBcIjAuNjMuNFwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiU2V0IG9mIFVJIGNvbXBvbmVudHMgZm9yIHBhbmNha2UgcHJvamVjdHNcIixcbiAgXCJ0eXBlXCI6IFwibW9kdWxlXCIsXG4gIFwibWFpblwiOiBcImRpc3QvaW5kZXguY2pzXCIsXG4gIFwibW9kdWxlXCI6IFwiZGlzdC9pbmRleC5qc1wiLFxuICBcInR5cGVzXCI6IFwiZGlzdC9pbmRleC5kLnRzXCIsXG4gIFwic2lkZUVmZmVjdHNcIjogW1xuICAgIFwiKi5jc3MudHNcIixcbiAgICBcInNyYy9jc3MvKiovKlwiLFxuICAgIFwic3JjL3RoZW1lLyoqLypcIlxuICBdLFxuICBcImV4cG9ydHNcIjoge1xuICAgIFwiLi9wYWNrYWdlLmpzb25cIjogXCIuL3BhY2thZ2UuanNvblwiLFxuICAgIFwiLlwiOiB7XG4gICAgICBcImltcG9ydFwiOiBcIi4vZGlzdC9pbmRleC5qc1wiLFxuICAgICAgXCJyZXF1aXJlXCI6IFwiLi9kaXN0L2luZGV4LmNqc1wiXG4gICAgfSxcbiAgICBcIi4vc3R5bGVzXCI6IHtcbiAgICAgIFwiaW1wb3J0XCI6IFwiLi9kaXN0L3N0eWxlLmNzc1wiLFxuICAgICAgXCJyZXF1aXJlXCI6IFwiLi9kaXN0L3N0eWxlLmNzc1wiXG4gICAgfSxcbiAgICBcIi4vY3NzL2F0b21zXCI6IHtcbiAgICAgIFwiaW1wb3J0XCI6IFwiLi9zcmMvY3NzL2F0b21zLnRzXCIsXG4gICAgICBcInR5cGVzXCI6IFwiLi9kaXN0L2Nzcy9hdG9tcy5kLnRzXCJcbiAgICB9LFxuICAgIFwiLi9jc3MvcmVzcG9uc2l2ZVN0eWxlXCI6IHtcbiAgICAgIFwiaW1wb3J0XCI6IFwiLi9zcmMvY3NzL3Jlc3BvbnNpdmVTdHlsZS50c1wiLFxuICAgICAgXCJ0eXBlc1wiOiBcIi4vZGlzdC9jc3MvcmVzcG9uc2l2ZVN0eWxlLmQudHNcIlxuICAgIH1cbiAgfSxcbiAgXCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3BhbmNha2Vzd2FwL3BhbmNha2UtdG9vbGtpdC90cmVlL21hc3Rlci9wYWNrYWdlcy9wYW5jYWtlLXVpa2l0XCIsXG4gIFwibGljZW5zZVwiOiBcIk1JVFwiLFxuICBcInByaXZhdGVcIjogdHJ1ZSxcbiAgXCJzY3JpcHRzXCI6IHtcbiAgICBcImJ1aWxkXCI6IFwidml0ZSBidWlsZFwiLFxuICAgIFwiZGV2XCI6IFwidml0ZSBidWlsZCAtLXdhdGNoIC0tbW9kZSBkZXZlbG9wbWVudFwiLFxuICAgIFwic3RhcnRcIjogXCJwbnBtIHN0b3J5Ym9va1wiLFxuICAgIFwibGludFwiOiBcImVzbGludCAnc3JjLyoqLyoue2pzLGpzeCx0cyx0c3h9J1wiLFxuICAgIFwiZm9ybWF0OmNoZWNrXCI6IFwicHJldHRpZXIgLS1jaGVjayAtLWxvZ2xldmVsIGVycm9yICdzcmMvKiovKi57anMsanN4LHRzLHRzeH0nXCIsXG4gICAgXCJmb3JtYXQ6d3JpdGVcIjogXCJwcmV0dGllciAtLXdyaXRlICdzcmMvKiovKi57anMsanN4LHRzLHRzeH0nXCIsXG4gICAgXCJzdG9yeWJvb2tcIjogXCJzdG9yeWJvb2sgZGV2IC1wIDYwMDZcIixcbiAgICBcImJ1aWxkOnN0b3J5Ym9va1wiOiBcInN0b3J5Ym9vayBidWlsZFwiLFxuICAgIFwidGVzdFwiOiBcInZpdGVzdCAtLXJ1blwiLFxuICAgIFwidXBkYXRlOnNuYXBzaG90XCI6IFwidml0ZXN0IC11XCIsXG4gICAgXCJwcmVwdWJsaXNoT25seVwiOiBcInBucG0gcnVuIHBrZzpidWlsZFwiLFxuICAgIFwiY2xlYW5cIjogXCJybSAtcmYgLnR1cmJvICYmIHJtIC1yZiBub2RlX21vZHVsZXMgJiYgcm0gLXJmIGRpc3RcIlxuICB9LFxuICBcImRldkRlcGVuZGVuY2llc1wiOiB7XG4gICAgXCJAYmFiZWwvY29yZVwiOiBcIl43LjIwLjEyXCIsXG4gICAgXCJAYmFiZWwvcHJlc2V0LWVudlwiOiBcIl43LjIwLjJcIixcbiAgICBcIkBiYWJlbC9wcmVzZXQtcmVhY3RcIjogXCJeNy4xOC42XCIsXG4gICAgXCJAcGFuY2FrZXN3YXAvZmFybXNcIjogXCJ3b3Jrc3BhY2U6KlwiLFxuICAgIFwiQHBhbmNha2Vzd2FwL2hvb2tzXCI6IFwid29ya3NwYWNlOipcIixcbiAgICBcIkBwYW5jYWtlc3dhcC9wb29sc1wiOiBcIndvcmtzcGFjZToqXCIsXG4gICAgXCJAcGFuY2FrZXN3YXAvc2RrXCI6IFwid29ya3NwYWNlOipcIixcbiAgICBcIkBwYW5jYWtlc3dhcC9zd2FwLXNkay1jb3JlXCI6IFwid29ya3NwYWNlOipcIixcbiAgICBcIkBwYW5jYWtlc3dhcC90b2tlbi1saXN0c1wiOiBcIndvcmtzcGFjZToqXCIsXG4gICAgXCJAcGFuY2FrZXN3YXAvdG9rZW5zXCI6IFwid29ya3NwYWNlOipcIixcbiAgICBcIkBwYW5jYWtlc3dhcC91dGlsc1wiOiBcIndvcmtzcGFjZToqXCIsXG4gICAgXCJAcGFuY2FrZXN3YXAvdjMtc2RrXCI6IFwid29ya3NwYWNlOipcIixcbiAgICBcIkByb2xsdXAvcGx1Z2luLWpzb25cIjogXCJeNC4xLjBcIixcbiAgICBcIkByb2xsdXAvcGx1Z2luLXR5cGVzY3JpcHRcIjogXCJeOC4yLjFcIixcbiAgICBcIkByb2xsdXAvcGx1Z2luLXVybFwiOiBcIl42LjAuMFwiLFxuICAgIFwiQHNlbnRyeS9uZXh0anNcIjogXCJeNy4wLjBcIixcbiAgICBcIkBzdG9yeWJvb2svYWRkb24tYTExeVwiOiBcIl43LjAuN1wiLFxuICAgIFwiQHN0b3J5Ym9vay9hZGRvbi1hY3Rpb25zXCI6IFwiXjcuMC43XCIsXG4gICAgXCJAc3Rvcnlib29rL2FkZG9uLWVzc2VudGlhbHNcIjogXCJeNy4wLjdcIixcbiAgICBcIkBzdG9yeWJvb2svYWRkb24tbGlua3NcIjogXCJeNy4wLjdcIixcbiAgICBcIkBzdG9yeWJvb2svYnVpbGRlci12aXRlXCI6IFwiXjcuMC43XCIsXG4gICAgXCJAc3Rvcnlib29rL3JlYWN0XCI6IFwiXjcuMC43XCIsXG4gICAgXCJAc3Rvcnlib29rL3JlYWN0LXZpdGVcIjogXCJeNy4wLjdcIixcbiAgICBcIkB0ZXN0aW5nLWxpYnJhcnkvamVzdC1kb21cIjogXCJeNS4xMS42XCIsXG4gICAgXCJAdGVzdGluZy1saWJyYXJ5L3JlYWN0XCI6IFwiXjEyLjEuM1wiLFxuICAgIFwiQHR5cGVzL2QzXCI6IFwiXjcuNC4wXCIsXG4gICAgXCJAdHlwZXMvanMtY29va2llXCI6IFwiXjMuMC4yXCIsXG4gICAgXCJAdHlwZXMvbG9kYXNoXCI6IFwiXjQuMTQuMTY4XCIsXG4gICAgXCJAdHlwZXMvcmVhY3RcIjogXCJeMTguMi4yMVwiLFxuICAgIFwiQHR5cGVzL3JlYWN0LWRvbVwiOiBcIl4xOC4wLjZcIixcbiAgICBcIkB0eXBlcy9yZWFjdC1yb3V0ZXItZG9tXCI6IFwiXjUuMS43XCIsXG4gICAgXCJAdHlwZXMvcmVhY3QtdHJhbnNpdGlvbi1ncm91cFwiOiBcIl40LjQuMVwiLFxuICAgIFwiQHR5cGVzL3N0eWxlZC1zeXN0ZW1fX3Nob3VsZC1mb3J3YXJkLXByb3BcIjogXCJeNS4xLjJcIixcbiAgICBcIkB2YW5pbGxhLWV4dHJhY3Qvdml0ZS1wbHVnaW5cIjogXCJeMy44LjBcIixcbiAgICBcIkB2aXRlanMvcGx1Z2luLXJlYWN0XCI6IFwiNC4wLjBcIixcbiAgICBcImJhYmVsLWplc3RcIjogXCJeMjkuMy4xXCIsXG4gICAgXCJiYWJlbC1sb2FkZXJcIjogXCJeOS4xLjJcIixcbiAgICBcImJhYmVsLXBsdWdpbi1zdHlsZWQtY29tcG9uZW50c1wiOiBcIl4xLjEyLjBcIixcbiAgICBcImQzXCI6IFwiXjcuOC4yXCIsXG4gICAgXCJqZXN0XCI6IFwiMjkuMy4xXCIsXG4gICAgXCJqZXN0LWVudmlyb25tZW50LWpzZG9tXCI6IFwiXjI5LjMuMVwiLFxuICAgIFwiamVzdC1zdHlsZWQtY29tcG9uZW50c1wiOiBcIl43LjAuOFwiLFxuICAgIFwianMtY29va2llXCI6IFwiKlwiLFxuICAgIFwibmV4dFwiOiBcIipcIixcbiAgICBcIm5leHQtc2VvXCI6IFwiKlwiLFxuICAgIFwibmV4dC10aGVtZXNcIjogXCJeMC4yLjFcIixcbiAgICBcInBvbGlzaGVkXCI6IFwiXjQuMi4yXCIsXG4gICAgXCJyZWFjdFwiOiBcIl4xOC4yLjBcIixcbiAgICBcInJlYWN0LWNvdW50dXBcIjogXCJeNi40LjBcIixcbiAgICBcInJlYWN0LWRldmljZS1kZXRlY3RcIjogXCIqXCIsXG4gICAgXCJyZWFjdC1kb21cIjogXCJeMTguMi4wXCIsXG4gICAgXCJyZWFjdC1pc1wiOiBcIl4xNy4wLjJcIixcbiAgICBcInJlYWN0LW1hcmtkb3duXCI6IFwiXjYuMC4yXCIsXG4gICAgXCJyZWFjdC1yZWR1eFwiOiBcIl44LjAuNVwiLFxuICAgIFwicmVhY3Qtcm91dGVyLWRvbVwiOiBcIl41LjIuMFwiLFxuICAgIFwicmVhY3QtdHJhbnNpdGlvbi1ncm91cFwiOiBcIipcIixcbiAgICBcInJlbWFyay1nZm1cIjogXCIqXCIsXG4gICAgXCJyb2xsdXBcIjogXCJeMi43MC4xXCIsXG4gICAgXCJyb2xsdXAtcGx1Z2luLW5vZGUtYnVpbHRpbnNcIjogXCJeMi4xLjJcIixcbiAgICBcInN0b3J5Ym9va1wiOiBcIl43LjAuN1wiLFxuICAgIFwic3R5bGVkLWNvbXBvbmVudHNcIjogXCJeNi4wLjdcIixcbiAgICBcInRoZW1lcHJvdmlkZXItc3Rvcnlib29rXCI6IFwiXjEuNy4yXCIsXG4gICAgXCJ0cy1qZXN0XCI6IFwiXjI3LjEuM1wiLFxuICAgIFwidmllbVwiOiBcIl4xLjIuOVwiLFxuICAgIFwidml0ZVwiOiBcIl40LjMuMVwiLFxuICAgIFwidml0ZS1wbHVnaW4tZHRzXCI6IFwiXjMuNS4zXCIsXG4gICAgXCJ2aXRlLXRzY29uZmlnLXBhdGhzXCI6IFwiXjQuMC4zXCIsXG4gICAgXCJ2aXRlc3RcIjogXCJeMC4yNy4yXCIsXG4gICAgXCJ3YWdtaVwiOiBcIl4xLjMuMTBcIlxuICB9LFxuICBcInBlZXJEZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiQHNlbnRyeS9uZXh0anNcIjogXCJeNy4wLjBcIixcbiAgICBcImpzLWNvb2tpZVwiOiBcIipcIixcbiAgICBcIm5leHRcIjogXCIqXCIsXG4gICAgXCJuZXh0LXNlb1wiOiBcIipcIixcbiAgICBcIm5leHQtdGhlbWVzXCI6IFwiXjAuMi4xXCIsXG4gICAgXCJyZWFjdFwiOiBcIl4xOC4yLjBcIixcbiAgICBcInJlYWN0LWRldmljZS1kZXRlY3RcIjogXCIqXCIsXG4gICAgXCJyZWFjdC1kb21cIjogXCJeMTguMi4wXCIsXG4gICAgXCJyZWFjdC1yZWR1eFwiOiBcIl44LjAuNVwiLFxuICAgIFwicmVhY3QtdHJhbnNpdGlvbi1ncm91cFwiOiBcIipcIixcbiAgICBcInJlbWFyay1nZm1cIjogXCIqXCIsXG4gICAgXCJzdHlsZWQtY29tcG9uZW50c1wiOiBcIl42LjAuN1wiLFxuICAgIFwidmllbVwiOiBcIl4xLjIuOVwiXG4gIH0sXG4gIFwiZGVwZW5kZW5jaWVzXCI6IHtcbiAgICBcIkBwYW5jYWtlc3dhcC9mYXJtc1wiOiBcIndvcmtzcGFjZToqXCIsXG4gICAgXCJAcGFuY2FrZXN3YXAvaG9va3NcIjogXCJ3b3Jrc3BhY2U6KlwiLFxuICAgIFwiQHBhbmNha2Vzd2FwL2xvY2FsaXphdGlvblwiOiBcIndvcmtzcGFjZToqXCIsXG4gICAgXCJAcGFuY2FrZXN3YXAvcG9vbHNcIjogXCJ3b3Jrc3BhY2U6KlwiLFxuICAgIFwiQHBhbmNha2Vzd2FwL3Nka1wiOiBcIndvcmtzcGFjZToqXCIsXG4gICAgXCJAcGFuY2FrZXN3YXAvc3dhcC1zZGstY29yZVwiOiBcIndvcmtzcGFjZToqXCIsXG4gICAgXCJAcGFuY2FrZXN3YXAvdG9rZW4tbGlzdHNcIjogXCJ3b3Jrc3BhY2U6KlwiLFxuICAgIFwiQHBhbmNha2Vzd2FwL3Rva2Vuc1wiOiBcIndvcmtzcGFjZToqXCIsXG4gICAgXCJAcGFuY2FrZXN3YXAvdjMtc2RrXCI6IFwid29ya3NwYWNlOipcIixcbiAgICBcIkBwb3BwZXJqcy9jb3JlXCI6IFwiXjIuOS4yXCIsXG4gICAgXCJAcmFkaXgtdWkvcmVhY3QtZGlzbWlzc2FibGUtbGF5ZXJcIjogXCJeMS4wLjNcIixcbiAgICBcIkByYWRpeC11aS9yZWFjdC1zbG90XCI6IFwiXjEuMC4wXCIsXG4gICAgXCJAc3R5bGVkLXN5c3RlbS9zaG91bGQtZm9yd2FyZC1wcm9wXCI6IFwiXjUuMS41XCIsXG4gICAgXCJAdHlwZXMvc3R5bGVkLXN5c3RlbVwiOiBcIl41LjEuMTdcIixcbiAgICBcIkB2YW5pbGxhLWV4dHJhY3QvY3NzXCI6IFwiXjEuMTMuMFwiLFxuICAgIFwiQHZhbmlsbGEtZXh0cmFjdC9jc3MtdXRpbHNcIjogXCJeMC4xLjNcIixcbiAgICBcIkB2YW5pbGxhLWV4dHJhY3QvcmVjaXBlc1wiOiBcIl4wLjUuMFwiLFxuICAgIFwiQHZhbmlsbGEtZXh0cmFjdC9zcHJpbmtsZXNcIjogXCJeMS42LjFcIixcbiAgICBcImJpZ251bWJlci5qc1wiOiBcIl45LjAuMFwiLFxuICAgIFwiY2xzeFwiOiBcIl4xLjIuMVwiLFxuICAgIFwiY3NzdHlwZVwiOiBcIl4zLjEuMlwiLFxuICAgIFwiZGF0ZS1mbnNcIjogXCJeMi4yOS4zXCIsXG4gICAgXCJkZWVwbWVyZ2VcIjogXCJeNC4wLjBcIixcbiAgICBcImZyYW1lci1tb3Rpb25cIjogXCIxMC4xNi40XCIsXG4gICAgXCJsaWdodHdlaWdodC1jaGFydHNcIjogXCJeNC4wLjFcIixcbiAgICBcImxvZGFzaFwiOiBcIl40LjE3LjIwXCIsXG4gICAgXCJyZWFjdC1wb3BwZXJcIjogXCJeMi4zLjBcIixcbiAgICBcInN0eWxlZC1zeXN0ZW1cIjogXCJeNS4xLjVcIixcbiAgICBcInRzbGliXCI6IFwiXjIuMi4wXCJcbiAgfSxcbiAgXCJwdWJsaXNoQ29uZmlnXCI6IHtcbiAgICBcImFjY2Vzc1wiOiBcInB1YmxpY1wiXG4gIH1cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBZ1gsU0FBUyxvQkFBb0I7QUFDN1ksU0FBUyw0QkFBNEI7QUFDckMsT0FBTyxTQUFTOzs7QUNGaEI7QUFBQSxFQUNFLE1BQVE7QUFBQSxFQUNSLFNBQVc7QUFBQSxFQUNYLGFBQWU7QUFBQSxFQUNmLE1BQVE7QUFBQSxFQUNSLE1BQVE7QUFBQSxFQUNSLFFBQVU7QUFBQSxFQUNWLE9BQVM7QUFBQSxFQUNULGFBQWU7QUFBQSxJQUNiO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFXO0FBQUEsSUFDVCxrQkFBa0I7QUFBQSxJQUNsQixLQUFLO0FBQUEsTUFDSCxRQUFVO0FBQUEsTUFDVixTQUFXO0FBQUEsSUFDYjtBQUFBLElBQ0EsWUFBWTtBQUFBLE1BQ1YsUUFBVTtBQUFBLE1BQ1YsU0FBVztBQUFBLElBQ2I7QUFBQSxJQUNBLGVBQWU7QUFBQSxNQUNiLFFBQVU7QUFBQSxNQUNWLE9BQVM7QUFBQSxJQUNYO0FBQUEsSUFDQSx5QkFBeUI7QUFBQSxNQUN2QixRQUFVO0FBQUEsTUFDVixPQUFTO0FBQUEsSUFDWDtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFlBQWM7QUFBQSxFQUNkLFNBQVc7QUFBQSxFQUNYLFNBQVc7QUFBQSxFQUNYLFNBQVc7QUFBQSxJQUNULE9BQVM7QUFBQSxJQUNULEtBQU87QUFBQSxJQUNQLE9BQVM7QUFBQSxJQUNULE1BQVE7QUFBQSxJQUNSLGdCQUFnQjtBQUFBLElBQ2hCLGdCQUFnQjtBQUFBLElBQ2hCLFdBQWE7QUFBQSxJQUNiLG1CQUFtQjtBQUFBLElBQ25CLE1BQVE7QUFBQSxJQUNSLG1CQUFtQjtBQUFBLElBQ25CLGdCQUFrQjtBQUFBLElBQ2xCLE9BQVM7QUFBQSxF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
