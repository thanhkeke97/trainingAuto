/**
 * ============================================================
 * BUỔI 2 – DEMO 05: Cố tình làm test FAILED để học Debug
 * ============================================================
 * Mục tiêu:
 *   1. Xem test failed trông như thế nào
 *   2. Đọc error message để hiểu nguyên nhân
 *   3. Mở Trace Viewer để xem timeline từng bước
 *   4. Phân biệt lỗi do DATA vs lỗi do POM
 *
 * QUAN TRỌNG: File này CÓ LỖI CỐ Ý để học viên debug!
 *
 * Chạy: npx playwright test tests/demo-05-failure-debug.spec.ts
 * Sau khi chạy: npx playwright show-report
 * Xem trace: npx playwright show-trace test-results/.../trace.zip
 */

import { test, expect } from '@playwright/test';

test.describe('🪲 DEMO DEBUG: Cố tình để test failed', () => {

  // ─── Test 1: SAI DATA (lỗi do Manual Tester tự sửa được) ────
  test('FAIL-DATA: Kiểm tra sai text mong đợi', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc');

    // Thêm 1 todo
    await page.fill('input.new-todo', 'Học Automation Testing');
    await page.keyboard.press('Enter');

    // ❌ ASSERT SAI: mong đợi text "Học Manual Testing"
    //    Nhưng thực tế text là "Học Automation Testing"
    //    → Lỗi do DATA SAI → Manual Tester tự sửa được
    await expect(page.locator('.todo-list li label'))
      .toContainText('Học Manual Testing');  // ← SAI Ở ĐÂY!
  });

  // ─── Test 2: SAI SELECTOR (lỗi do Auto Tester sửa POM) ─────
  test('FAIL-POM: Dùng sai CSS selector', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc');

    await page.fill('input.new-todo', 'Test task');
    await page.keyboard.press('Enter');

    // ❌ ASSERT SAI: dùng selector không tồn tại
    //    → Lỗi do POM (selector sai) → Báo Auto Tester sửa
    await expect(page.locator('.khong-ton-tai-element-nay'))
      .toBeVisible();
  });

  // ─── Test 3: TIMEOUT (element không xuất hiện kịp) ──────────
  test('FAIL-TIMEOUT: Chờ element quá lâu', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc');

    // ❌ Chờ 1 element không tồn tại → timeout sau 5 giây
    await expect(page.locator('#element-khong-co'))
      .toBeVisible({ timeout: 5000 });
  });

  // ─── Test 4: PASS (để so sánh với các test fail) ───────────
  test('PASS: Test này sẽ pass để so sánh', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc');

    await page.fill('input.new-todo', '✅ Test pass OK');
    await page.keyboard.press('Enter');

    await expect(page.locator('.todo-list li label'))
      .toContainText('Test pass OK');
  });
});
