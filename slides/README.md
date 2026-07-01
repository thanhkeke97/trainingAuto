# 🎓 Slide bài giảng – Đào tạo Automation Testing

Thư mục này chứa các file slide dạng **Marp** (Markdown Presentation).

## 📂 Danh sách slide

| File | Nội dung |
|------|----------|
| `buoi-01.md` | Buổi 1: Tổng quan mô hình Auto – Manual |
| `buoi-02.md` | Buổi 2: Đọc hiểu Test Case & Xem Báo cáo |

## 🖥️ Cách xem slide

### Cách 1: Dùng VS Code Extension (khuyên dùng)

1. Cài Extension **"Marp for VS Code"**:
   - `Ctrl+Shift+X` → tìm `Marp` → Install

2. Mở file `.md` → Click icon 📺 **Preview** ở góc phải trên

3. Trình bày: `F11` (fullscreen) hoặc `Ctrl+Shift+P` → `Marp: Toggle Marp Preview`

### Cách 2: Export ra HTML / PDF / PPTX

```bash
# Cài Marp CLI
npm install -g @marp-team/marp-cli

# Export ra HTML (có thể mở browser trình chiếu)
marp buoi-01.md -o buoi-01.html
marp buoi-02.md -o buoi-02.html

# Export ra PDF
marp buoi-01.md --pdf -o buoi-01.pdf
marp buoi-02.md --pdf -o buoi-02.pdf

# Export ra PowerPoint
marp buoi-01.md --pptx -o buoi-01.pptx
marp buoi-02.md --pptx -o buoi-02.pptx
```

### Cách 3: Xem trực tiếp markdown

File `.md` vẫn đọc được bình thường như tài liệu, kể cả khi không có Marp.

## 🎨 Theme

Slide dùng theme **Uncover** (Marp built-in) – giao diện tối, hiện đại, phù hợp trình chiếu.

## ✏️ Chỉnh sửa

Chỉnh trực tiếp file `.md` – nội dung và slide luôn đồng bộ. Mỗi dòng `---` là 1 slide mới.
