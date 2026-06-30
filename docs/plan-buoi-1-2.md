# 🎓 Plan Chi Tiết Đào Tạo Automation – Buổi 1 & 2

> **Đối tượng:** Manual Tester chuyển sang dùng Automation Framework  
> **Thời lượng mỗi buổi:** ~2h (1h lý thuyết + 1h thực hành)  
> **Tools:** NodeJS, VS Code, Playwright Test for VSCode, Git Bash

---

## 📘 BUỔI 1: TỔNG QUAN MÔ HÌNH PHỐI HỢP AUTO – MANUAL

| Mục tiêu | Nội dung | Thời gian |
|-----------|----------|-----------|
| ✅ Hiểu được vai trò của Manual Tester trong dự án Automation | Phần 1: Lý thuyết | 60 phút |
| ✅ Cài đặt được môi trường chạy test | Phần 2: Cài đặt môi trường | 30 phút |
| ✅ Chạy được 1 test case mẫu | Phần 3: Thực hành | 30 phút |

---

### PHẦN 1: LÝ THUYẾT (60 phút)

#### 1.1. Đặt vấn đề: Tại sao Manual Tester cần biết Automation? (10 phút)

```
CÂU CHUYỆN THỰC TẾ:
- Mỗi lần regression, Manual Tester phải test lại 50-100 case giống nhau
- Có những case chỉ cần thay đổi dữ liệu đầu vào (số tiền, mã thanh toán...)
- Auto Tester viết framework → Manual Tester dùng framework để viết data test
```

**Slide/Whiteboard cần chuẩn bị:**
- Sơ đồ: Manual chỉ việc copy-paste file data test, đổi tham số → chạy ra kết quả
- Demo video: 1 file `.spec.ts` chỉ có data, chạy ra 10 test case khác nhau

---

#### 1.2. Kiến trúc tổng quan Framework (20 phút)

**Cấu trúc thư mục dự án (vẽ lên bảng):**

```
project/
├── lib/                          ← Auto Tester viết
│   ├── pages/                    ← Page Object Model (POM)
│   │   ├── 03.iportal/
│   │   │   ├── common.iportal.ts
│   │   │   ├── iportal.search.page.ts
│   │   │   └── transactionDetail.pom.ts
│   │   └── base.page.ts
│   ├── fixtures/                 ← Hàm login, setup test
│   │   └── login.fixture.ts
│   └── utils/
│       ├── common.ts             ← Hàm tiện ích chung
│       └── navigate.ts           ← Hàm điều hướng menu
│
├── tests/                        ← Manual Tester THAO TÁC CHÍNH
│   └── 03.iportal/
│       └── 03.Payment_Reconciliation/
│           └── transaction.spec.ts
│
├── data/                         ← Data test (Manual Tester quản lý)
│   └── payment-data.ts
│
├── .env                          ← Cấu hình môi trường (dev42, stg...)
├── playwright.config.ts          ← Cấu hình Playwright
└── package.json                  ← Dependencies
```

**🟢 Manual Tester quan tâm vùng nào?**
| Thư mục | Mục đích | Thao tác |
|---------|----------|----------|
| `tests/` | Viết test case | Tạo file `.spec.ts`, copy cấu trúc `test()` |
| `data/` | Dữ liệu test | Khai báo object, mảng dữ liệu |
| `.env` | Đổi môi trường | Sửa `ENV=dev42` thành `ENV=stg` |

**🔴 Manual Tester KHÔNG cần đụng vào:**
| Thư mục | Lý do |
|---------|-------|
| `lib/pages/` | Auto Tester viết POM |
| `lib/fixtures/` | Hàm login phức tạp |
| `playwright.config.ts` | Cấu hình sâu |

---

#### 1.3. Phân định vai trò rõ ràng (15 phút)

| Nhiệm vụ | Auto Tester | Manual Tester |
|----------|:-----------:|:-------------:|
| Viết Page Object (click, fill, wait...) | ✅ | ❌ |
| Viết hàm login, setup | ✅ | ❌ |
| Cấu hình Playwright | ✅ | ❌ |
| Viết test case (`test()`) | ✅ (mẫu) | ✅ (chính) |
| Chuẩn bị data test (`data/`) | ✅ (mẫu) | ✅ (chính) |
| Chạy test và xem report | ✅ | ✅ |
| Debug test failed (Trace Viewer) | ✅ | ✅ |
| Báo lỗi POM nếu thiếu hàm | ❌ | ✅ (báo Auto) |

**Nguyên tắc vàng:**
> "Manual Tester không cần biết code sâu – chỉ cần biết **gọi đúng hàm với đúng kiểu dữ liệu**."

---

#### 1.4. Demo thực tế (15 phút)

1. **Mở project iPortal Automation** trên VS Code
2. **Mở file** `tests/03.iportal/03.Payment_Reconciliation/transaction.spec.ts`
3. **Chỉ ra:** Đâu là `test.describe()`, đâu là `test()`, đâu là data truyền vào
4. **Chạy thử 1 test** từ Extension Playwright
5. **Mở HTML Report** cho học viên thấy kết quả

---

### PHẦN 2: CÀI ĐẶT MÔI TRƯỜNG (30 phút)

#### Checklist cài đặt (từng bước một):

```bash
# Bước 1: Kiểm tra NodeJS đã cài chưa
node --version        # Phải >= 18.x
npm --version         # Phải >= 9.x

# Bước 2: Cài Git (nếu chưa có)
git --version

# Bước 3: Clone project
git clone <repo-url> trainingAuto
cd trainingAuto

# Bước 4: Cài dependencies
npm install

# Bước 5: Cài Playwright browsers
npx playwright install chromium

# Bước 6: Cài VS Code Extension "Playwright Test for VSCode"
# Vào Extensions (Ctrl+Shift+X) → tìm "Playwright Test for VSCode" → Install
```

**Troubleshooting thường gặp:**
| Lỗi | Nguyên nhân | Cách fix |
|-----|------------|----------|
| `npm: command not found` | Chưa cài NodeJS | Cài từ https://nodejs.org |
| `EACCES` khi npm install | Quyền admin | Chạy terminal với quyền Administrator |
| Extension không thấy test | Chưa mở đúng workspace | Mở folder gốc của repo |
| Test không chạy | Chưa có .env | Copy `.env.example` → `.env` |

---

### PHẦN 3: THỰC HÀNH (30 phút)

#### Bài tập 1.1: Mở project & chạy test mẫu (15 phút)
> **Mục tiêu:** Mở được project, chạy được 1 test có sẵn

1. Mở VS Code → File → Open Folder → chọn `trainingAuto`
2. Vào Testing sidebar (biểu tượng ống nghiệm)
3. Tìm 1 test case trong danh sách
4. Click nút ▶️ Play để chạy
5. Quan sát test chạy trên browser
6. Xem kết quả xanh/đỏ trong Terminal

#### Bài tập 1.2: Tự tạo project test cá nhân (15 phút)
> **Mục tiêu:** Biết cách tạo project Playwright cơ bản

```bash
# Tạo thư mục riêng ngoài project chính
mkdir ~/playwright-practice
cd ~/playwright-practice
npm init -y
npm install @playwright/test
npx playwright install chromium
```

```typescript
// Tạo file tests/demo.spec.ts
import { test, expect } from '@playwright/test';

test('Google có title đúng', async ({ page }) => {
  await page.goto('https://google.com');
  await expect(page).toHaveTitle(/Google/);
});
```

```bash
npx playwright test
```

---

### 📋 Đầu ra buổi 1 – Học viên làm được gì?

- [ ] Mở được project automation trong VS Code
- [ ] Chạy được 1 test case có sẵn qua Extension
- [ ] Nhìn vào cây thư mục biết đâu là `lib/` (không đụng), đâu là `tests/` (được đụng)
- [ ] Biết cách tạo 1 project Playwright trống từ đầu

---

---

## 📘 BUỔI 2: ĐỌC HIỂU CẤU TRÚC TEST CASE & XEM BÁO CÁO

| Mục tiêu | Nội dung | Thời gian |
|-----------|----------|-----------|
| ✅ Hiểu cấu trúc `test()` và `test.describe()` | Phần 1: Lý thuyết | 45 phút |
| ✅ Đọc & phân tích HTML Report | Phần 2: Report | 30 phút |
| ✅ Debug với Trace Viewer | Phần 3: Thực hành | 45 phút |

---

### PHẦN 1: LÝ THUYẾT – CẤU TRÚC TEST CASE (45 phút)

#### 1.1. `test.describe()` – Nhóm các test case liên quan (10 phút)

```
TƯ DUY: 1 màn hình = 1 test.describe()
```

```typescript
// test.describe() giống như 1 folder chứa test
// Dùng để gom nhóm các test case liên quan đến CÙNG 1 chức năng

test.describe('Quản lý giao dịch', () => {
  // Tất cả test trong đây đều test màn hình "Quản lý giao dịch"
});
```

**Slide minh họa: Mapping giữa manual test case và code**

| Manual Test Case | Code tương ứng |
|-----------------|----------------|
| Module: Quản lý giao dịch | `test.describe('Quản lý giao dịch', () => {` |
| └ Case 1: Tìm kiếm giao dịch theo mã | `test('Tìm kiếm giao dịch theo mã', async () => {` |
| └ Case 2: Tìm kiếm giao dịch theo ngày | `test('Tìm kiếm giao dịch theo ngày', async () => {` |
| └ Case 3: Xem chi tiết giao dịch | `test('Xem chi tiết giao dịch', async () => {` |

---

#### 1.2. `test()` – Đơn vị test case cơ bản (15 phút)

**Giải phẫu 1 `test()` hoàn chỉnh:**

```typescript
// ①   ②                                          ③
test('Tên test case - mô tả tiếng Việt', async ({ page, login }) => {
  //   ④
  // 1. ARRANGE - Chuẩn bị: login, điều hướng đến màn hình
  await login('iportal');
  await navigateTo('Merchant Management');

  // 2. ACT - Hành động: thao tác trên giao diện
  await page.fill('[placeholder="Nhập từ khóa"]', 'TEST ONEPAY');
  await page.click('button:has-text("Tìm kiếm")');

  // 3. ASSERT - Kiểm tra: verify kết quả mong đợi
  await expect(page.locator('.merchant-name')).toContainText('TEST ONEPAY');
});
```

| Số | Thành phần | Giải thích | Manual Tester cần nhớ |
|----|-----------|------------|----------------------|
| ① | `test(...)` | Hàm định nghĩa 1 test case | Luôn bắt đầu bằng `test(` |
| ② | `'Tên test case'` | Mô tả test case | Viết tiếng Việt, rõ ràng |
| ③ | `async ({ page, login })` | Các "công cụ" test cần dùng | `page` = browser, `login` = đăng nhập |
| ④ | Code trong `{}` | Các bước test | Theo pattern **Arrange → Act → Assert** |

---

#### 1.3. Pattern AAA (Arrange-Act-Assert) (10 phút)

```
MỌI TEST CASE ĐỀU THEO CẤU TRÚC 3 BƯỚC:
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│  ARRANGE    │ ──▶ │    ACT      │ ──▶ │   ASSERT    │
│  Chuẩn bị   │     │  Thực hiện  │     │  Kiểm tra   │
└─────────────┘     └─────────────┘     └─────────────┘
  - Login             - Click            - expect(...)
  - Điều hướng        - Fill input       - toBeVisible()
  - Chuẩn bị data     - Select option    - toContainText()
```

**Bài tập nhỏ (không code):** Cho 1 quy trình "Tạo giao dịch thanh toán". Học viên phân tích thành 3 phần AAA.

| Bước Manual | Thuộc AAA nào? |
|------------|:--------------:|
| 1. Đăng nhập iPortal | Arrange |
| 2. Vào menu Tạo giao dịch | Arrange |
| 3. Điền số tiền: 100,000đ | Act |
| 4. Chọn phương thức: Ví điện tử | Act |
| 5. Click "Tạo giao dịch" | Act |
| 6. Kiểm tra thông báo "Thành công" | Assert |
| 7. Kiểm tra giao dịch xuất hiện trong danh sách | Assert |

---

#### 1.4. Các hàm thường dùng Manual Tester cần biết (10 phút)

| Hàm | Mục đích | Ví dụ |
|-----|----------|-------|
| `page.goto(url)` | Mở URL | `await page.goto('https://...')` |
| `page.click('selector')` | Click vào element | `await page.click('button:has-text("Lưu")')` |
| `page.fill('selector', value)` | Nhập text vào input | `await page.fill('#amount', '100000')` |
| `page.selectOption('selector', value)` | Chọn dropdown | `await page.selectOption('#bank', 'VCB')` |
| `page.waitForSelector('selector')` | Chờ element xuất hiện | `await page.waitForSelector('.success-msg')` |
| `expect(locator).toBeVisible()` | Kiểm tra element hiển thị | `await expect(page.locator('.msg')).toBeVisible()` |
| `expect(locator).toContainText(text)` | Kiểm tra text chứa nội dung | `await expect(page.locator('.msg')).toContainText('Thành công')` |

---

### PHẦN 2: ĐỌC & PHÂN TÍCH HTML REPORT (30 phút)

#### 2.1. Cách tạo report (5 phút)

```bash
# Chạy test & tự động mở report
npx playwright test

# Nếu muốn xem lại report cũ
npx playwright show-report

# Report nằm ở đâu?
playwright-report/
└── index.html         ← Mở file này bằng browser
```

#### 2.2. Giao diện HTML Report (10 phút)

**Demo trực tiếp trên màn hình:**

```
┌─────────────────────────────────────────────────────────┐
│  PLAYWRIGHT HTML REPORT                                 │
│                                                         │
│  📊 15/18 passed  🔴 3 failed  ⏭ 0 skipped  ⏱ 2m 34s  │
│                                                         │
│  ☐ test('Tìm kiếm giao dịch')                    ✅ 12s │
│  ☐ test('Tạo giao dịch mới')                      ✅ 45s │
│  ☐ test('Xóa giao dịch')                          ❌ 8s  │
│  ☐ test('Lọc theo ngày')                          ✅ 15s │
│  ...                                                    │
└─────────────────────────────────────────────────────────┘
```

**Các thông tin QUAN TRỌNG trong report:**

| Thành phần | Ý nghĩa | Hành động |
|-----------|---------|-----------|
| Tổng quan | Pass/Fail/Skip | Đánh giá tình trạng chung |
| Thời gian mỗi test | Test nào chậm | Báo Auto Tester tối ưu |
| Error message | Lý do fail | Copy gửi cho Auto Tester |
| Screenshot (tự động) | Ảnh chụp lúc fail | Xem UI lúc lỗi |
| Video (nếu bật) | Quay lại toàn bộ test | Xem lại flow |
| **Trace** | Timeline chi tiết từng bước | **QUAN TRỌNG NHẤT** |

#### 2.3. Phân tích 1 test case failed (15 phút)

**Quy trình khi gặp test FAILED:**

```
① Nhìn dòng error message → hiểu lỗi gì
② Mở Screenshot → thấy UI lúc lỗi
③ Mở Trace → xem từng bước test đã làm gì
④ Kết luận: Lỗi do data? Do UI thay đổi? Do môi trường?
⑤ Hành động: Sửa data → báo Auto nếu lỗi POM
```

**Các lỗi thường gặp & cách xử lý:**

| Error Message | Nguyên nhân | Người xử lý |
|--------------|------------|:----------:|
| `Timeout 30000ms exceeded` | Element không xuất hiện (UI đổi) | Auto Tester |
| `locator.click: element not visible` | Button bị ẩn/che | Auto Tester |
| `expect(received).toContainText(expected)` | Data mong đợi khác thực tế | **Manual Tester** |
| `net::ERR_CONNECTION_REFUSED` | Server chết | Cả team |
| `toHaveTitle: expected 'A' to include 'B'` | Sai URL/trang | **Manual Tester** |

---

### PHẦN 3: THỰC HÀNH (45 phút)

#### Bài tập 2.1: "Đọc hiểu test case có sẵn" (15 phút)

> **Học viên mở file test có sẵn trong project và trả lời câu hỏi:**

```typescript
// File: tests/03.iportal/transaction.spec.ts
test.describe('Quản lý giao dịch', () => {

  test('Tìm kiếm giao dịch theo mã tham chiếu', async ({ page, login }) => {
    await login('iportal');
    await page.goto('/payment/search');

    await page.fill('#refNo', 'PAY123456');
    await page.click('button:has-text("Tìm kiếm")');

    await expect(page.locator('.result-row')).toBeVisible();
    await expect(page.locator('.ref-no')).toContainText('PAY123456');
  });

  test('Tìm kiếm với mã không tồn tại', async ({ page, login }) => {
    await login('iportal');
    await page.goto('/payment/search');

    await page.fill('#refNo', 'XYZ999999');
    await page.click('button:has-text("Tìm kiếm")');

    await expect(page.locator('.no-data')).toBeVisible();
  });
});
```

**Câu hỏi cho học viên:**
1. Module này test chức năng gì?
2. Có bao nhiêu test case? Mỗi case làm gì?
3. Đâu là phần Arrange? Act? Assert?
4. Nếu test case 1 failed với lỗi `toContainText`, nguyên nhân có thể là gì?

---

#### Bài tập 2.2: "Cố tình làm test failed & debug" (20 phút)

> **Mục tiêu:** Biết cách mở Trace Viewer và phân tích

**Bước 1: Chạy test để thấy pass**
```bash
npx playwright test transaction.spec.ts
```

**Bước 2: Sửa code để test failed**
```typescript
// SỬA dòng này:
await expect(page.locator('.ref-no')).toContainText('PAY123456');
//   THÀNH:
await expect(page.locator('.ref-no')).toContainText('SAI_DATA');
```

**Bước 3: Chạy lại**
```bash
npx playwright test transaction.spec.ts
# Test sẽ FAILED
```

**Bước 4: Mở Trace Viewer**
```bash
npx playwright show-trace test-results/.../trace.zip
```

**Bước 5: Phân tích trace**
- Xem từng step (click, fill, assert)
- Xem screenshot trước/sau mỗi step
- Tìm đúng step gây lỗi
- Xem giá trị thực tế vs mong đợi

#### Bài tập 2.3: "Khai báo biến với type annotation" (10 phút)

> **Mục tiêu:** Làm quen TypeScript cơ bản, chuẩn bị cho buổi 3

```typescript
// Tạo file: data/my-first-data.ts
// Khai báo các biến với KIỂU DỮ LIỆU tường minh (type annotation)

// String
const customerName: string = 'Nguyễn Văn A';
const merchantCode: string = 'TEST_ONEPAY';

// Number
const amount: number = 100000;
const fee: number = 0.05;

// Boolean
const isDomestic: boolean = true;
const isInternational: boolean = false;

// In ra để kiểm tra
console.log('Khách hàng:', customerName);
console.log('Số tiền:', amount.toLocaleString('vi-VN'), 'VNĐ');
console.log('Phí:', (amount * fee).toLocaleString('vi-VN'), 'VNĐ');
console.log('Loại:', isDomestic ? 'Nội địa' : 'Quốc tế');
```

```bash
# Chạy thử
npx tsx data/my-first-data.ts
```

---

### 📋 Đầu ra buổi 2 – Học viên làm được gì?

- [ ] Đọc hiểu được cấu trúc `test.describe()` và `test()`
- [ ] Nhận diện được 3 phần Arrange – Act – Assert trong 1 test case
- [ ] Tạo và mở được HTML Report sau khi chạy test
- [ ] Khi test failed, biết mở Trace Viewer để tìm nguyên nhân
- [ ] Phân biệt được lỗi nào sửa được (data), lỗi nào cần báo Auto Tester (POM)
- [ ] Khai báo được biến với type annotation (string, number, boolean)

---

## 🎯 TỔNG KẾT 2 BUỔI ĐẦU

```
Sau 2 buổi, Manual Tester sẽ:
┌─────────────────────────────────────────────────────┐
│                                                     │
│  ✅ Có project chạy được trên máy                    │
│  ✅ Chạy được test có sẵn bằng 1 click               │
│  ✅ Đọc hiểu code test (không cần hiểu POM)          │
│  ✅ Xem report, biết test nào pass/fail              │
│  ✅ Dùng Trace Viewer debug test failed              │
│  ✅ Biết TypeScript cơ bản (biến, kiểu dữ liệu)      │
│                                                     │
│  🔜 Buổi 3: TypeScript nâng cao → Object, Mảng       │
│  🔜 Buổi 4+: Bắt đầu VIẾT test case thực tế          │
│                                                     │
└─────────────────────────────────────────────────────┘
```
