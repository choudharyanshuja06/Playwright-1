import {test} from '@playwright/test'
import { text } from 'node:stream/consumers';
test('login to Salesforce', async({page})=>{

    await page.goto('http://leaftaps.com/opentaps/control/main')
    await page.waitForTimeout(5000);
    await page.locator('#username').fill('Demosalesmanager')
    await page.locator('input[id="password"]').fill('crmsfa')
    await page.locator('.decorativeSubmit').click()
    await page.locator('text=CRM/SFA').click() 
    await page.locator('a[href="/crmsfa/control/leadsMain"]').click()
    await page.waitForTimeout(1000);
    await page.locator('a[href="/crmsfa/control/createLeadForm"]').click()
    
    await page.locator('#createLeadForm_companyName').fill('Playwright Classes')
    await page.locator('#createLeadForm_firstName').fill('Anjusha')
    await page.locator('#createLeadForm_lastName').fill('Choudhary')
    await page.locator('#createLeadForm_personalTitle').fill('Mrs')
    await page.locator('#createLeadForm_generalProfTitle').fill('ABC')
    await page.locator('#createLeadForm_annualRevenue').fill('100000')
    await page.locator('#createLeadForm_departmentName').fill('IT')
    await page.locator('#createLeadForm_primaryPhoneNumber').fill('9890877709')
    await page.locator('.smallSubmit').click()
   
    
    

})