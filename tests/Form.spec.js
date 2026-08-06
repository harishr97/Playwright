import { test, expect } from '@playwright/test'
import { table } from 'node:console'
test('Data Entry Form', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')

    // Name Text Box
    await page.locator('//input[@id="name"]').fill('Harish')
    
    // Email Text Box
    await page.locator('//input[@placeholder="Enter EMail"]').fill('harish@gmail.com')
    
    // phone Text box
    await page.locator('(//input[@class="form-control"])[3]').fill('0987654321')
    
    // Address Text Box
    await page.locator('//textarea[@class="form-control"]').fill('Sample Street, Chennai, TN')
    
    // Gender Radio Button
    await page.locator('//input[@id="male"]').click()
    
    // Days CheckBox
    await page.locator('//input[@id="sunday"]').check()
    
    // Country Dropdown
    const selcon = await page.locator('//select[@id="country"]')
    await selcon.selectOption({ value: "canada" })
    
    // Colors Multiple Dropdown
    const color = await page.locator('//select[@id="colors"]')
    await color.selectOption([{ value: "green" }, { label: "White" }, { index: 5 }])
    
    // Animals Multiple dropdown
    const list = await page.locator('//select[@id="animals"]')
    await list.selectOption([{ value: "deer" }, { label: "Elephant" }, { index: 3 }])
    const listsel = await list.locator('Option:checked').allTextContents()
    console.log("selected list options: ", listsel)
    
    // Static Table
    const tabledata = await page.locator('//table[@name="BookTable"]//tbody//tr//td[1]').allTextContents()
    console.log(tabledata)
    await expect(tabledata).toContain('Master In Selenium')
    const tablevalue = await page.locator('//table[@name="BookTable"]//tbody//tr[3]//td[4]').textContent()
    console.log(tablevalue)
    await expect(tablevalue).toEqual('500')
    
    // Simple Alert

})