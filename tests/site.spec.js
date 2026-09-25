import { test, expect } from "@playwright/test";
test("homepage presents a clear route to the products", async ({ page }) => {
  await page.goto("./");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Techniek die blijft draaien.",
  );
  await expect(
    page.getByRole("link", { name: "Ontdek producten", exact: true }),
  ).toBeVisible();
});
