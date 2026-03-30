import {test} from '@playwright/test'
test('login to Salesforce', async({page})=>{

    await page.goto('https://login.salesforce.com')
    await page.waitForTimeout(5000);
    await page.locator('//input[@id="username"]').fill('dilipkumar.rajendran@testleaf.com')
    await page.locator('//input[@id="password"]').fill('TestLeaf@2025')
    await page.click('//input[@id="Login"]')
    await page.click('//span[contains(text(),"Launcher")]')
    await page.waitForTimeout(2000);
    await page.click('//button[contains(text(),"View All")]')
    await page.waitForTimeout(2000);
    await page.locator("(//a[@class='slds-text-heading_small'])[7]").click()
    await page.locator("(//span[text()='Leads'])[1]").click()
    await page.click('//div[@title="New"]')
    await page.locator('//button[@name="salutation"]').click();
     await page.locator('[data-value="Mrs."]').click();
     await page.locator('//input[@name="lastName"]').fill("Choudhary")
     await page.locator('//input[@name="Company"]').fill("Samsung")
     await page.locator("(//button[text()='Save'])[2]").click()

})