import test from '@playwright/test'
test('Window Handelling', async ({browser})=>{
    const context=await browser.newContext()
    const page= await context.newPage()
    await page.goto('https://www.flipkart.com/')
    await page.locator('//input[@name="q" and not(@readonly)]').fill("samsung 5g mobille")
    await page.keyboard.press('Enter')
    const [newPage]=await Promise.all([context.waitForEvent('page'),
        page.click('//div[text()="Relevance"]//ancestor::div[@class="QSCKDh eRsYMo col-12-12"]//following-sibling::div[@class="lvJbLV col-12-12"]//descendant::div[text()="Samsung M36 5G (Velvet Black / Black, 128 GB)"]')
    ])
    await page.waitForLoadState()
    const title=await newPage.title()
    console.log(title)
}) 
