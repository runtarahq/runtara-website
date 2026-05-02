import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const routes = [
    { path: "/", name: "Landing page" },
    { path: "/pricing", name: "Pricing page" },
    { path: "/docs", name: "Docs hub" },
    { path: "/docs/runtara-platform", name: "Platform user guide" },
    { path: "/docs/runtara-platform/workflows", name: "Workflows docs" },
    { path: "/legal/terms", name: "Terms" },
    { path: "/legal/privacy", name: "Privacy" },
    { path: "/legal/dpa", name: "DPA" },
];

test.describe("accessibility", () => {
    for (const route of routes) {
        test(`${route.name} has no detectable axe violations`, async ({
            page,
        }) => {
            const response = await page.goto(route.path, {
                waitUntil: "networkidle",
            });

            expect(response?.ok()).toBe(true);
            await expect(page.locator("body")).toBeVisible();

            const results = await new AxeBuilder({ page })
                .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
                .analyze();

            expect(
                results.violations.map((violation) => ({
                    id: violation.id,
                    impact: violation.impact,
                    description: violation.description,
                    nodes: violation.nodes.map((node) => node.target),
                })),
            ).toEqual([]);
        });
    }

    test("pricing currency switcher is keyboard operable", async ({ page }) => {
        await page.goto("/pricing", { waitUntil: "networkidle" });

        const eurButton = page.getByRole("button", { name: "EUR" });
        await eurButton.focus();
        await page.keyboard.press("Enter");

        await expect(eurButton).toHaveClass(/active/);
        await expect(
            page.locator(".pricing-card").first().locator(".pricing-amount"),
        ).toHaveText("50");
    });
});
