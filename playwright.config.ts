import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
    testDir: "./tests",
    reporter: process.env.CI
        ? [["list"], ["html", { open: "never" }]]
        : [["list"]],
    use: {
        baseURL: "http://127.0.0.1:4321",
        trace: "retain-on-failure",
    },
    webServer: {
        command: "npm run preview -- --host 127.0.0.1",
        url: "http://127.0.0.1:4321",
        reuseExistingServer: !process.env.CI,
        stdout: "pipe",
        stderr: "pipe",
    },
    projects: [
        {
            name: "chromium",
            use: { ...devices["Desktop Chrome"] },
        },
    ],
});
