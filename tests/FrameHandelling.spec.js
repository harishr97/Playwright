import { test } from '@playwright/test'

test('Frame Alert Handelling', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Frames.html')
// Single Frame
const Single= await page.frameLocator('//iframe[@id="singleframe"]')
await Single.locator('//input[@type="text"]').fill('Hi Buddy')
await page.waitForTimeout(4000)

// Navigating to Multi Frame page
await page.locator('(//a[@class="analystic"])[2]').click()

// Multi Frame
const outerframe=await page.frameLocator('//iframe[@src="MultipleFrames.html"]')
const innerframe=await outerframe.frameLocator('//iframe[@src="SingleFrame.html"]')
await innerframe.locator('//input[@type="text"]').fill("Hello Buddy")
await page.waitForTimeout(5000)

})