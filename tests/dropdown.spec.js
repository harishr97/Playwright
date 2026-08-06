import { test } from '@playwright/test'
test('Dropdown Handelling', async ({ page }) => {
    await page.goto("https://demoqa.com/select-menu")

    // single option

    const menu = await page.locator('//select[@id="oldSelectMenu"]')
    await menu.selectOption({ value: "7" })
    const menuselectd = await menu.locator('option:checked').textContent()
    console.log("selected option", menuselectd)

    // Multiple Option

    const multipleoption = await page.locator('//select[@name="cars"]')
    await multipleoption.selectOption([{ index:3 },{ label: "Opel" }, { value:"saab" } ])
    const optionselected = await multipleoption.locator('option:checked').allTextContents()
    console.log('Multiple value', optionselected)
})


