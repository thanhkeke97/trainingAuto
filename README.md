# 🎓 Training Samples – Automation Testing iPortal

Sample code cho khóa đào tạo Automation Testing (Playwright + TypeScript) dành cho Manual Tester.

## 📂 Cấu trúc thư mục

```
training-samples/
├── tests/                              ← TEST CASES
│   ├── demo-01-hello.spec.ts           ← Test đầu tiên (mở Google)
│   ├── demo-02-aaa-pattern.spec.ts     ← Pattern AAA (Arrange-Act-Assert)
│   ├── demo-03-describe.spec.ts        ← test.describe() gom nhóm test
│   ├── demo-04-assertions.spec.ts      ← Các hàm expect() thường dùng
│   ├── demo-05-failure-debug.spec.ts   ← Cố tình fail để học Debug
│   └── demo-06-page-actions.spec.ts    ← Các hàm thao tác trang
│
├── data/                               ← DATA TEST
│   ├── 01-typescript-basics.ts         ← Kiểu dữ liệu: string, number, boolean
│   ├── 02-object-data.ts               ← Object – gom nhóm dữ liệu
│   ├── 03-array-data-driven.ts         ← Mảng & Data-driven testing
│   └── 04-iportal-test-data.ts         ← Mẫu data test thực tế iPortal
│
├── playwright.config.ts                ← Cấu hình Playwright
├── package.json                        ← Dependencies
└── README.md                           ← File này
```

## 🚀 Cài đặt

```bash
# 1. Vào thư mục training-samples
cd training-samples

# 2. Cài dependencies
npm install

# 3. Cài Chromium browser cho Playwright
npx playwright install chromium
```

## ▶️ Chạy test

### Chạy từng file test
```bash
# Test cơ bản
npx playwright test tests/demo-01-hello.spec.ts

# Test AAA pattern
npx playwright test tests/demo-02-aaa-pattern.spec.ts

# Test describe
npx playwright test tests/demo-03-describe.spec.ts

# Test assertions
npx playwright test tests/demo-04-assertions.spec.ts

# Test cố tình fail (để học debug)
npx playwright test tests/demo-05-failure-debug.spec.ts

# Test page actions
npx playwright test tests/demo-06-page-actions.spec.ts
```

### Chạy hiện browser (headed mode)
```bash
npx playwright test --headed
```

### Chạy 1 file cụ thể với headed mode
```bash
npx playwright test tests/demo-01-hello.spec.ts --headed
```

### Xem HTML Report
```bash
npx playwright show-report
```

### Xem Trace (khi test failed)
```bash
npx playwright show-trace test-results/<tên-thư-mục>/trace.zip
```

## ▶️ Chạy file TypeScript data

```bash
# Chạy file TypeScript không cần Playwright
npx tsx data/01-typescript-basics.ts
npx tsx data/02-object-data.ts
npx tsx data/03-array-data-driven.ts
```

## 📚 Thứ tự học

| Buổi | File | Nội dung |
|------|------|----------|
| **1** | `demo-01-hello.spec.ts` | Làm quen test() đầu tiên |
| **1** | `01-typescript-basics.ts` | Biến & kiểu dữ liệu TypeScript |
| **2** | `demo-02-aaa-pattern.spec.ts` | Pattern AAA |
| **2** | `demo-03-describe.spec.ts` | Gom nhóm test case |
| **2** | `demo-04-assertions.spec.ts` | Các hàm kiểm tra |
| **2** | `demo-05-failure-debug.spec.ts` | Debug test failed |
| **2** | `demo-06-page-actions.spec.ts` | Thao tác trang |
| **2** | `02-object-data.ts` | Object gom nhóm data |
| **3+** | `03-array-data-driven.ts` | Data-driven testing |
| **3+** | `04-iportal-test-data.ts` | Mẫu data iPortal thực tế |

## 🎯 Ghi chú cho học viên

1. **Mở VS Code** → File → Open Folder → chọn `training-samples`
2. Vào **Testing sidebar** (biểu tượng ống nghiệm 🧪) để thấy tất cả test
3. Click nút ▶️ để chạy từng test, không cần gõ lệnh
4. File `.spec.ts` là test case → Manual Tester sẽ viết
5. File trong `data/` là data test → Manual Tester sẽ chuẩn bị
6. Khi test fail → mở `playwright-report/index.html` để xem report
7. Mở Trace để xem chi tiết từng bước test đã chạy
