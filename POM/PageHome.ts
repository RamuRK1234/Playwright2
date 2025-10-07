import { Page, Locator } from '@playwright/test';

export class PageHome {
  readonly page: Page;
  readonly homePageHeading: Locator;
  readonly backPackAddToCartButton: Locator;
  readonly backpackRemoveButton: Locator;
  readonly cartIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.homePageHeading = page.getByText('Swag Labs');
    this.backPackAddToCartButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    this.backpackRemoveButton = page.locator('[data-test="remove-sauce-labs-backpack"]');
    this.cartIcon = page.locator('#shopping_cart_container');
  }

  async backPackAddToCart() {
    await this.backPackAddToCartButton.click();
  }
  async gotoCart(){
   await  this.cartIcon.click()
  }
}