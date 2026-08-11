import {test} from '@playwright/test'
test ('Window Handelling', async ({browser})=>{
    const context=await browser.newContext()
    const page= await context.newPage()
    await page.goto('https://www.amazon.in/')
    await page.locator('//input[@id="twotabsearchtextbox"]').fill("intel Laptops")
    await page.keyboard.press('Enter')
    const [newPage]=await Promise.all([context.waitForEvent('page'),
        page.click('//h2[contains(@aria-label, "Sponsored Ad - 15 Smartchoice, Intel Core Ultra 5 125H")][1]')
    ])
    await page.waitForLoadState()
    const title=await newPage.title()
    console.log(title)
}) 

