import {test, expect} from '@playwright/test'
test ('validate webtable', async({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/')
    
    // ROW

    const rowdata = await page.locator('//table[@name="BookTable"]//tbody//tr[2]//td').allTextContents()
    console.log(rowdata) 
    await expect(rowdata).toContain('Amit')
    await expect(rowdata).toEqual([ 'Learn Selenium', 'Amit', 'Selenium', '300' ])

    // COLUMN 

    const columndata = await page.locator('//table[@name="BookTable"]//tbody//tr//td[1]').allTextContents()
    console.log(columndata) 
    await expect(columndata).toContain('Learn Java')
    await expect(columndata).toEqual([
  'Learn Selenium',
  'Learn Java',
  'Learn JS',
  'Master In Selenium',
  'Master In Java',
  'Master In JS'
])
})
