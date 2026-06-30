/**
 * ============================================================
 * BUỔI 2 – DEMO 03: test.describe() – Nhóm test case
 * ============================================================
 * Mục tiêu: Hiểu cách gom nhóm test liên quan
 *
 * Mỗi test.describe() = 1 màn hình / 1 chức năng
 * Mỗi test()         = 1 test case
 *
 * Chạy: npx playwright test tests/demo-03-describe.spec.ts
 */

import { test, expect } from '@playwright/test';

// ═══════════════════════════════════════════════════════════
// MODULE: Quản lý đơn vị (Merchant Management)
// ═══════════════════════════════════════════════════════════
test.describe('Quản lý đơn vị - Tìm kiếm', () => {

  test('TC01: Tìm kiếm đơn vị theo tên chính xác', async ({ page }) => {
    // ARRANGE: Mở trang quản lý đơn vị
    // await login('iportal');
    // await navigateIPortalMenu(page, 'Merchant Management');
    console.log('📋 TC01: Tìm kiếm đơn vị theo tên chính xác');

    // ACT: Nhập tên đơn vị và tìm kiếm
    // await page.fill('[placeholder="Nhập từ khóa"]', 'TEST ONEPAY');
    // await page.click('button:has-text("Tìm kiếm")');

    // ASSERT: Kiểm tra kết quả
    // await expect(page.locator('.merchant-name')).toContainText('TEST ONEPAY');
  });

  test('TC02: Tìm kiếm đơn vị theo từ khóa không tồn tại', async ({ page }) => {
    console.log('📋 TC02: Tìm kiếm đơn vị với từ khóa không tồn tại');

    // ACT: Nhập từ khóa không tồn tại
    // await page.fill('[placeholder="Nhập từ khóa"]', 'XYZ_NOT_EXIST_999');

    // ASSERT: Kiểm tra hiển thị "Không có dữ liệu"
    // await expect(page.locator('.no-data')).toBeVisible();
  });

  test('TC03: Tìm kiếm không nhập từ khóa (bỏ trống)', async ({ page }) => {
    console.log('📋 TC03: Tìm kiếm với ô tìm kiếm bỏ trống');

    // ACT: Để trống ô tìm kiếm, click Tìm kiếm
    // await page.fill('[placeholder="Nhập từ khóa"]', '');
    // await page.click('button:has-text("Tìm kiếm")');

    // ASSERT: Kiểm tra hiển thị toàn bộ danh sách
    // await expect(page.locator('.merchant-list')).toBeVisible();
  });
});

// ═══════════════════════════════════════════════════════════
// MODULE: Quản lý giao dịch (Transaction Management)
// ═══════════════════════════════════════════════════════════
test.describe('Quản lý giao dịch - Tra cứu', () => {

  test('TC04: Tra cứu giao dịch theo mã tham chiếu', async ({ page }) => {
    console.log('📋 TC04: Tra cứu giao dịch theo mã tham chiếu');

    // ARRANGE
    // await login('iportal');
    // await navigateIPortalMenu(page, 'Payment & Reconciliation', 'Transaction Management');

    // ACT
    // await page.fill('#refNo', 'PAY123456');
    // await page.click('button:has-text("Tìm kiếm")');

    // ASSERT
    // await expect(page.locator('.result-row')).toBeVisible();
  });

  test('TC05: Tra cứu giao dịch theo khoảng thời gian', async ({ page }) => {
    console.log('📋 TC05: Tra cứu giao dịch theo khoảng thời gian');

    // ACT
    // await page.fill('#fromDate', '01/06/2026');
    // await page.fill('#toDate', '30/06/2026');
    // await page.click('button:has-text("Tìm kiếm")');

    // ASSERT
    // await expect(page.locator('.result-table')).toBeVisible();
  });
});
