import { Locator, Page } from '@playwright/test';

export class PageCart {
  readonly page: Page;
  readonly backpackItemLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.backpackItemLink = page.locator('[data-test="item-4-title-link"]');
}}