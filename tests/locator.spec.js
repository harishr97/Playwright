import { test } from '@playwright/test'
test('validate locators', async ({ page }) => {
    await page.goto("https://www.instagram.com/")
    await page.locator('//input[@name="email"]').fill('harishr')
    await page.locator('//input[@name="pass"]').fill('asddfghjkl')
    await page.locator('//span[text()="Log in"]').click()
    console.log("branch 2")
})
