import { test ,expect} from '@playwright/test';
import { PageLogin } from '../POM/PageLogin';
import {PageHome} from '../POM/PageHome';
import {PageCart} from '../POM/PageCart';

test('Verification of cart', async ({ page }) => {
  const loginPageObj = new PageLogin(page);

  await loginPageObj.openApplication();
  await loginPageObj.login('standard_user', 'secret_sauce');
  const PageHomeObj = new PageHome(page);
  await expect(PageHomeObj.homePageHeading).toHaveText('Swag Labs');

  await PageHomeObj.backPackAddToCart();

  await expect(PageHomeObj.cartIcon).toHaveText('1');
  await expect(PageHomeObj.backpackRemoveButton).toBeVisible();

  await PageHomeObj.gotoCart();

  const PageCartObj = new PageCart(page);
  await expect(PageCartObj.backpackItemLink).toHaveText('Sauce Labs Backpack');





});