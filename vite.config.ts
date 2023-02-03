import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    // create alias for @/ to src/
    resolve: {
        alias: {
            "@": "/src",
        },
    },
});
