/**
 * ============================================================
 * DATA 04: Mẫu data test thực tế cho iPortal
 * ============================================================
 * Mục tiêu: Thấy cách tổ chức data test trong project thật
 *
 * File này mô phỏng cách Manual Tester sẽ chuẩn bị data
 * cho các module khác nhau của iPortal
 */

// ═══════════════════════════════════════════════════════════
// 1. Type definitions – "Khuôn" dữ liệu
// ═══════════════════════════════════════════════════════════

/** Dữ liệu tìm kiếm đơn vị (Merchant Management) */
type MerchantSearchData = {
  keyword: string;
  expectedResult: 'found' | 'not_found';
  expectedMerchantName?: string;
};

/** Dữ liệu giao dịch thanh toán (Transaction) */
type TransactionData = {
  refNo: string;
  amount: number;
  currency: 'VND' | 'USD';
  bankCode: string;
  cardType: 'domestic' | 'international' | 'wallet';
  expectedStatus: 'success' | 'pending' | 'failed';
};

/** Dữ liệu đối soát (Reconciliation) */
type ReconciliationData = {
  date: string;
  merchantCode: string;
  expectedTotalAmount: number;
  expectedTotalCount: number;
};

// ═══════════════════════════════════════════════════════════
// 2. Data test cho Merchant Management
// ═══════════════════════════════════════════════════════════

export const MERCHANT_SEARCH_DATA: MerchantSearchData[] = [
  {
    keyword: 'TEST ONEPAY',
    expectedResult: 'found',
    expectedMerchantName: 'TEST ONEPAY',
  },
  {
    keyword: 'TEST ONEPAY (Toàn Bộ Tài Khoản)',
    expectedResult: 'found',
    expectedMerchantName: 'TEST ONEPAY (Toàn Bộ Tài Khoản)',
  },
  {
    keyword: 'KHONG_TON_TAI_999',
    expectedResult: 'not_found',
  },
];

// ═══════════════════════════════════════════════════════════
// 3. Data test cho Transaction Management
// ═══════════════════════════════════════════════════════════

export const TRANSACTION_DATA: TransactionData[] = [
  {
    refNo: 'PAY-SUCCESS-001',
    amount: 100000,
    currency: 'VND',
    bankCode: 'VCB',
    cardType: 'domestic',
    expectedStatus: 'success',
  },
  {
    refNo: 'PAY-SUCCESS-002',
    amount: 250000,
    currency: 'VND',
    bankCode: 'TCB',
    cardType: 'international',
    expectedStatus: 'success',
  },
  {
    refNo: 'PAY-FAILED-001',
    amount: 999999999,
    currency: 'VND',
    bankCode: 'VCB',
    cardType: 'domestic',
    expectedStatus: 'failed',
  },
];

// ═══════════════════════════════════════════════════════════
// 4. Data test cho Reconciliation (Đối soát)
// ═══════════════════════════════════════════════════════════

export const RECONCILIATION_DATA: ReconciliationData[] = [
  {
    date: '30/06/2026',
    merchantCode: 'TEST_ONEPAY',
    expectedTotalAmount: 5000000,
    expectedTotalCount: 15,
  },
  {
    date: '29/06/2026',
    merchantCode: 'TEST_ONEPAY',
    expectedTotalAmount: 3200000,
    expectedTotalCount: 10,
  },
];

// ═══════════════════════════════════════════════════════════
// 5. Hàm helper – In data ra console để kiểm tra
// ═══════════════════════════════════════════════════════════

export function printMerchantData(): void {
  console.log('📋 MERCHANT SEARCH DATA:');
  MERCHANT_SEARCH_DATA.forEach((item, i) => {
    console.log(`   ${i + 1}. "${item.keyword}" → ${item.expectedResult}`);
  });
}

export function printTransactionData(): void {
  console.log('\n💳 TRANSACTION DATA:');
  TRANSACTION_DATA.forEach((item, i) => {
    console.log(`   ${i + 1}. ${item.refNo} | ${item.amount.toLocaleString('vi-VN')} ${item.currency} | ${item.bankCode} | ${item.expectedStatus}`);
  });
}

// ─── Chạy thử ────────────────────────────────────────────
if (require.main === module) {
  printMerchantData();
  printTransactionData();
}
