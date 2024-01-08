
// @ts-check
const { test, expect } = require('@playwright/test');

test('Verify the Search Functionality', async ({ page }) => {
  await page.goto('https://onlinelibrary.wiley.com/');
  await expect(page).toHaveTitle('Wiley Online Library | Scientific research articles, journals, books, and reference works')
  
  await page.locator('[id= "searchField1"]').first().click();
  await page.locator('[id="searchField1"]').fill('publications')
  await page.locator('[class="btn quick-search__button icon-search"]').first().click()
  await page.locator('#main-content > div > div > div.container > div > div > div.search-results-wrapper.gutterless--xs.gutterless--sm.gutterless--md.col-md-9 > div > div > div.search-result__top-section > ul > li:nth-child(2) > a').click()
  
});

test('Navigate to the 1,600+ Journals and back to navigate to the main page', async ({ page }) => {
    await page.goto('https://onlinelibrary.wiley.com/');
    await expect(page).toHaveTitle('Wiley Online Library | Scientific research articles, journals, books, and reference works')
  
    await page.locator('[id= "searchField1"]').click();
    await page.locator('#main-content > div > div > div > div > div.homepage-search-headings > div > div > div > div:nth-child(1) > a').click()
    await page.waitForTimeout(3000)
    await page.locator('[id= "mainLogo"]').click();
    await page.waitForTimeout(5000)
    
  });


test('Verify the Loging feauture by entering wrong user name and password', async ({ page }) => {
    await page.goto('https://onlinelibrary.wiley.com/');
    await expect(page).toHaveTitle('Wiley Online Library | Scientific research articles, journals, books, and reference works')
    
    await page.locator('#pb-page-content > div > div.pageHeader > header > div > div:nth-child(2) > div > div > div > div.pull-right > div > div.pull-right > div').click();
    await page.locator('[id="username"]').fill('aa')
    await page.locator('[id="password"]').fill('aa')
    await page.locator('#pb-page-content > div > div.popup.login-popup > div > div.modal__body > div.login-form > form > div.align-end > span > input').click()
    await page.waitForTimeout(5000)    
  });