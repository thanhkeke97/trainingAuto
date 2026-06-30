/**
 * ============================================================
 * BUỔI 2 – DATA 03: Mảng & Vòng lặp – Data-driven testing
 * ============================================================
 * Mục tiêu: Hiểu cách dùng Array để chạy 1 test với nhiều data
 *
 * Chạy: npx tsx data/03-array-loop.ts
 */

import { test, expect } from '@playwright/test';

// ═══════════════════════════════════════════════════════════
// 1. Mảng cơ bản
// ═══════════════════════════════════════════════════════════
const merchants: string[] = [
  'TEST ONEPAY',
  'TEST ONEPAY (Toàn Bộ Tài Khoản)',
  'TESTONEPAYTHB',
];

console.log('📋 DANH SÁCH ĐƠN VỊ:');
merchants.forEach((name, index) => {
  console.log(`   ${index + 1}. ${name}`);
});

// ═══════════════════════════════════════════════════════════
// 2. Mảng Object – Data test cho nhiều case
// ═══════════════════════════════════════════════════════════
const paymentList = [
  { refNo: 'PAY-001', amount: 100000, bankCode: 'VCB', expectedResult: 'success' },
  { refNo: 'PAY-002', amount: 200000, bankCode: 'TCB', expectedResult: 'success' },
  { refNo: 'PAY-003', amount: 500000, bankCode: 'VCB', expectedResult: 'success' },
  { refNo: 'PAY-004', amount: 0,      bankCode: 'VCB', expectedResult: 'error' },
  { refNo: 'PAY-005', amount: -10000, bankCode: 'VCB', expectedResult: 'error' },
];

// ═══════════════════════════════════════════════════════════
// 3. Vòng lặp for...of – In danh sách
// ═══════════════════════════════════════════════════════════
console.log('\n💳 DANH SÁCH GIAO DỊCH TEST:');
for (const payment of paymentList) {
  const status = payment.expectedResult === 'success' ? '✅' : '❌';
  console.log(`   ${status} ${payment.refNo} | ${payment.amount.toLocaleString('vi-VN')}đ | ${payment.bankCode}`);
}

// ═══════════════════════════════════════════════════════════
// 4. Data-driven test – Chạy 1 test case với nhiều bộ data
// ═══════════════════════════════════════════════════════════
// ĐÂY LÀ MẪU QUAN TRỌNG NHẤT – Manual Tester sẽ dùng hàng ngày!

const searchKeywords = [
  'TEST ONEPAY',
  'Toàn Bộ Tài Khoản',
  'TESTONEPAY',
];

test.describe('🔄 Data-driven: Tìm kiếm đơn vị', () => {

  // Vòng lặp for...of để tạo test case tự động từ mảng data
  for (const keyword of searchKeywords) {
    test(`Tìm kiếm với từ khóa: "${keyword}"`, async ({ page }) => {
      console.log(`🔍 Đang test từ khóa: ${keyword}`);

      // Giả lập quy trình tìm kiếm
      // await page.fill('[placeholder="Nhập từ khóa"]', keyword);
      // await page.click('button:has-text("Tìm kiếm")');
      // await expect(page.locator('.result')).toContainText(keyword);
    });
  }

  // Hoặc nếu không muốn auto-skip test, dùng test thường:
  test('In ra tất cả keywords sẽ test', async () => {
    console.log('\n📝 Các keywords sẽ test:');
    searchKeywords.forEach((kw, i) => console.log(`   ${i + 1}. "${kw}"`));
  });
});

// ═══════════════════════════════════════════════════════════
// 5. Bonus: Hàm filter, map (cho ai muốn nâng cao)
// ═══════════════════════════════════════════════════════════
const successPayments = paymentList.filter(p => p.expectedResult === 'success');
const errorPayments = paymentList.filter(p => p.expectedResult === 'error');

console.log(`\n📊 THỐNG KÊ: ${successPayments.length} case thành công, ${errorPayments.length} case lỗi`);
