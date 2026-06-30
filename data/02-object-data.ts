/**
 * ============================================================
 * BUỔI 2 – DATA 02: Object – Gom nhóm dữ liệu test
 * ============================================================
 * Mục tiêu: Hiểu cách dùng Object để gom dữ liệu test
 *
 * Object giúp tổ chức dữ liệu của 1 test case thành 1 cục gọn gàng
 *
 * Chạy: npx tsx data/02-object-data.ts
 */

// ═══════════════════════════════════════════════════════════
// 1. Object cơ bản – Gom dữ liệu 1 giao dịch
// ═══════════════════════════════════════════════════════════
const transaction = {
  refNo: 'PAY20260630001',
  amount: 150000,
  currency: 'VND',
  bankCode: 'VCB',
  merchantCode: 'TEST_ONEPAY',
  customerName: 'Nguyễn Văn A',
  isDomestic: true,
};

console.log('🏦 GIAO DỊCH:');
console.log('   Mã GD:', transaction.refNo);
console.log('   Số tiền:', transaction.amount.toLocaleString('vi-VN'), transaction.currency);
console.log('   Ngân hàng:', transaction.bankCode);
console.log('   Đơn vị:', transaction.merchantCode);
console.log('   Loại:', transaction.isDomestic ? 'Nội địa' : 'Quốc tế');

// ═══════════════════════════════════════════════════════════
// 2. Object lồng nhau – Dữ liệu phức tạp hơn
// ═══════════════════════════════════════════════════════════
const merchant = {
  code: 'TEST_ONEPAY',
  name: 'TEST ONEPAY',
  status: 'active',
  contact: {
    email: 'test@onepay.vn',
    phone: '0901234567',
    address: 'Hà Nội',
  },
  config: {
    domesticCard: true,
    internationalCard: false,
    wallet: true,
  },
};

console.log('\n🏢 ĐƠN VỊ:');
console.log('   Mã:', merchant.code);
console.log('   Tên:', merchant.name);
console.log('   Email:', merchant.contact.email);
console.log('   Thẻ nội địa:', merchant.config.domesticCard ? '✅' : '❌');
console.log('   Thẻ quốc tế:', merchant.config.internationalCard ? '✅' : '❌');
console.log('   Ví điện tử:', merchant.config.wallet ? '✅' : '❌');

// ═══════════════════════════════════════════════════════════
// 3. Object có type annotation (nên dùng trong project thật)
// ═══════════════════════════════════════════════════════════

// Định nghĩa "khuôn" cho dữ liệu
type PaymentData = {
  refNo: string;
  amount: number;
  bankCode: string;
  description: string;
};

// Tạo data theo khuôn
const payment1: PaymentData = {
  refNo: 'PAY-001',
  amount: 100000,
  bankCode: 'VCB',
  description: 'Thanh toán đơn hàng 001',
};

const payment2: PaymentData = {
  refNo: 'PAY-002',
  amount: 250000,
  bankCode: 'TCB',
  description: 'Thanh toán đơn hàng 002',
};

// Nếu viết sai kiểu → VS Code sẽ báo lỗi ngay khi gõ
// const paymentWrong: PaymentData = {
//   refNo: 'PAY-003',
//   amount: 'abc',        // ❌ TypeScript báo lỗi: string không gán cho number
//   bankCode: 'VCB',
//   description: 'Test',
// };

console.log('\n💳 DANH SÁCH THANH TOÁN:');
console.log(`   ${payment1.refNo} | ${payment1.amount.toLocaleString('vi-VN')}đ | ${payment1.bankCode} | ${payment1.description}`);
console.log(`   ${payment2.refNo} | ${payment2.amount.toLocaleString('vi-VN')}đ | ${payment2.bankCode} | ${payment2.description}`);
