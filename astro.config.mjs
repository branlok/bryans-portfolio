import { defineConfig } from "astro/config";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
    site: "https://bryans-portfolio.pages.dev/",
    integrations: [
        robotsTxt({
            policy: [{ allow: "/", userAgent: "*" }],
        }),
    ],
});
