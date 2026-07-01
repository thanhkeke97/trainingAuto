/**
 * ============================================================
 * BUỔI 2 – DEMO 04: Các hàm assertion thường dùng
 * ============================================================
 * Mục tiêu: Nắm các hàm kiểm tra (expect) phổ biến
 *
 * Cú pháp chung: await expect(locator).hàmKiểmTra();
 *
 * Chạy: npx playwright test tests/demo-04-assertions.spec.ts
 */

import { test, expect } from '@playwright/test';
// test suite
test.describe('Các assertion (hàm kiểm tra) thường dùng', () => {

    //test case
  test('Kiểm tra element hiển thị / bị ẩn', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc');

    // toBeVisible() – element có nhìn thấy không
    await expect(page.locator('input.new-todo')).toBeVisible();

    // toBeHidden() – element có bị ẩn không
    // await expect(page.locator('.loading-spinner')).toBeHidden();
    console.log('✅ Đã kiểm tra toBeVisible / toBeHidden');
  });

  test('Kiểm tra nội dung text', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc');

    // toContainText() – text CÓ CHỨA nội dung không (phổ biến nhất)
    await page.fill('input.new-todo', 'Học Automation');
    await page.keyboard.press('Enter');

    await expect(page.locator('.todo-list li'))
      .toContainText('Học Automation');

    // toHaveText() – text CHÍNH XÁC (phải giống 100%)
    await expect(page.locator('.todo-list li label'))
      .toHaveText('Học Automation');

    console.log('✅ Đã kiểm tra toContainText / toHaveText');
  });

  test('Kiểm tra số lượng element', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc');

    // toHaveCount() – đếm số lượng element
    await expect(page.locator('.todo-list li')).toHaveCount(0);

    // Thêm 2 todo
    await page.fill('input.new-todo', 'Task A');
    await page.keyboard.press('Enter');
    await page.fill('input.new-todo', 'Task B');
    await page.keyboard.press('Enter');

    await expect(page.locator('.todo-list li')).toHaveCount(2);

    console.log('✅ Đã kiểm tra toHaveCount');
  });

  test('Kiểm tra giá trị input', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc');

    // toHaveValue() – kiểm tra giá trị trong ô input
    await page.fill('input.new-todo', 'Test value');
    await expect(page.locator('input.new-todo')).toHaveValue('Test value');

    // toBeEmpty() – kiểm tra ô input trống
    await page.fill('input.new-todo', '');
    await expect(page.locator('input.new-todo')).toBeEmpty();

    console.log('✅ Đã kiểm tra toHaveValue / toBeEmpty');
  });

  test('Kiểm tra trạng thái element', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc');

    // toBeEnabled() – element có đang enable không
    await expect(page.locator('input.new-todo')).toBeEnabled();

    // toBeDisabled() – element có bị disable không
    // await expect(page.locator('button[disabled]')).toBeDisabled();

    console.log('✅ Đã kiểm tra toBeEnabled / toBeDisabled');
  });
});
