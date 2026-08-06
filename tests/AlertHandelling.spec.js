//simple alert
// confirmation alert ---> ok and cancell
//  prompt alert ---> needs input to handle an alert

import test from '@playwright/test'

test('Alert Handelling', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Alerts.html')

// Simple Alert

// Precondition
    await page.once('dialog', async (dialog) => {
        await dialog.accept()
        console.log("Simple Alert:", dialog.message())
        
    })

// Action to perform Simple Alert
    await page.locator('//button[@onclick="alertbox()"]').click()

// Confirmation Alert
// Naviagtion to Confirmation alert
await page.locator('(//a[@class="analystic"])[2]').click()

//Precondition for confirmation Alert
await page.once('dialog', async(dialog)=>{
    await dialog.dismiss()
    console.log('Confirmation Alert: ', dialog.message())
    })

// Acton to perform confirmation Alert
    await page.locator('//button[@onclick="confirmbox()"]').click()

// Prompt Alert
// Navagition to Prompt Alert
await page.locator('(//a[@class="analystic"])[3]').click()

// Precondition to perform Prompt Alert
await page.once('dialog', async(dialog)=>{
    await dialog.accept("Hi Bdddy")
    console.log('Prompt Alert: ', dialog.message())
})

// Action to perform the Prompt Alert
await page.locator('//button[@onclick="promptbox()"]').click()
})

