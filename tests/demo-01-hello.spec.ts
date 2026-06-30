/**
 * ============================================================
 * BUỔI 1 – DEMO 01: Test case đơn giản nhất
 * ============================================================
 * Mục tiêu: Làm quen với test() cơ bản
 * Chạy: npx playwright test tests/demo-01-hello.spec.ts
 */

import { test, expect } from '@playwright/test';

// Test đơn giản: Mở Google và kiểm tra title
test('Mở Google và kiểm tra tiêu đề trang', async ({ page }) => {
  // ACT: Mở trang Google
  await page.goto('https://www.google.com');

  // ASSERT: Kiểm tra title chứa chữ "Google"
  await expect(page).toHaveTitle(/Google/);
});

// Test: Kiểm tra trang iPortal (thay bằng URL thật)
test('Mở iPortal và kiểm tra trang đăng nhập', async ({ page }) => {
  // ACT: Mở trang iPortal
  await page.goto('https://dev42-iportal.opdev.vn/iportal/');

  // ASSERT: Kiểm tra URL chứa "iportal"
  await expect(page).toHaveURL(/iportal/);
});
