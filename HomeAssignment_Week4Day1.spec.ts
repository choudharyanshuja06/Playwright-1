import {test, expect} from "@playwright/test"


test('Handle frames and nested frames',async({page})=>{

await page.goto('https://leafground.com/frame.xhtml')

//Interact with the Click Me button inside frame
const frame1 = page.frameLocator('(//iframe)[1]')
const button1 = frame1.locator('#Click');
  await button1.click();

//Assert the text changed after clicking the button
await expect(button1).toHaveText('Hurray! You Clicked Me.');

//Get the total count of frames present in the page

const totalFrames = page.frames().length;
  console.log('Total number of frames:', totalFrames);

  //Handle nested frames
  const outerFrame = page.frameLocator('(//iframe)[3]');
  const innerFrame = outerFrame.frameLocator('iframe');

  const nestedButton = innerFrame.locator('#Click');
  await nestedButton.click();

  // Assert text change
  await expect(nestedButton).toHaveText('Hurray! You Clicked Me.');


})