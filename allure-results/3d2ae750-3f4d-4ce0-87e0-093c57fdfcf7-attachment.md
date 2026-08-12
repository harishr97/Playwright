# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: FrameHandelling.spec.js >> Frame Alert Handelling
- Location: tests\FrameHandelling.spec.js:3:5

# Error details

```
Error: page.goto: net::ERR_CONNECTION_TIMED_OUT at https://demo.automationtesting.in/Frames.html
Call log:
  - navigating to "https://demo.automationtesting.in/Frames.html", waiting until "load"

```

# Test source

```ts
  1  | import { test } from '@playwright/test'
  2  | 
  3  | test('Frame Alert Handelling', async ({ page }) => {
> 4  |     await page.goto('https://demo.automationtesting.in/Frames.html')
     |                ^ Error: page.goto: net::ERR_CONNECTION_TIMED_OUT at https://demo.automationtesting.in/Frames.html
  5  | // Single Frame
  6  | const Single= await page.frameLocator('//iframe[@id="singleframe"]')
  7  | await Single.locator('//input[@type="text"]').fill('Hi Buddy')
  8  | await page.waitForTimeout(4000)
  9  | 
  10 | // Navigating to Multi Frame page
  11 | await page.locator('(//a[@class="analystic"])[2]').click()
  12 | 
  13 | // Multi Frame
  14 | const outerframe=await page.frameLocator('//iframe[@src="MultipleFrames.html"]')
  15 | const innerframe=await outerframe.frameLocator('//iframe[@src="SingleFrame.html"]')
  16 | await innerframe.locator('//input[@type="text"]').fill("Hello Buddy")
  17 | await page.waitForTimeout(5000)
  18 | 
  19 | })
```