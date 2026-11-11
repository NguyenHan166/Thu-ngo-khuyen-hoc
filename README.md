# THƯ NGỎ ĐIỆN TỬ — QUỸ KHUYẾN HỌC XÃ MINH THÁI, TỈNH NINH BÌNH

Trải nghiệm thư ngỏ điện tử tương tác trang trọng, tinh tế và ấm áp nhằm kêu gọi các cơ quan, đơn vị, doanh nghiệp, nhà hảo tâm và những người con quê hương chung tay xây dựng **Quỹ Khuyến học xã Minh Thái**, thắp sáng tương lai cho thế hệ trẻ.

---

## 1. Tinh thần thiết kế & Trải nghiệm (Design Philosophy)

- **Không phải dashboard hay landing page thương mại:** Thiết kế mang cảm giác một tấm thư tay trang trọng được trân quý gửi từ quê hương, với 3 trạng thái giao diện:
  1. **Bìa thư (Cover Scene):** Nền đỏ đô sang trọng (`#4C0810`, `#710C18`), viền chỉ vàng (`#C99D4B`, `#F1D58C`), biểu tượng cuốn sách mở phát ra ánh sáng tri thức, tiêu đề trang trọng và nút *"Mở thư ngỏ"*.
  2. **Hiệu ứng mở thư (Opening Transition):** Chuyển cảnh nhẹ nhàng (~750ms), mô phỏng tấm thiệp mở ra trang giấy ngà mà không gây giật lag. Hỗ trợ tự động bỏ qua chuyển động với người dùng bật `prefers-reduced-motion`.
  3. **Đọc thư (Letter Scene):** Tờ giấy kem trải dọc (`#FFFCF4`), hoa văn viền góc, typography chuẩn văn bản hành chính Việt Nam với hai họ font **Be Vietnam Pro** (thân bài) và **Noto Serif** (tiêu đề trang trọng).
- **Nguyên văn 100%:** Trích xuất từ tệp Word chính thức `source/thu-ngo-goc.docx` và `03_NOI_DUNG_THU_NGO.md`, không tự ý thêm bớt hoặc diễn giải lại.
- **Tiếp nhận ủng hộ tĩnh minh bạch:** Hiển thị rõ ràng số tài khoản, tên tài khoản, ngân hàng, địa điểm tiếp nhận trực tiếp và mã VietQR chuẩn. Nút sao chép số tài khoản với một chạm có thông báo phản hồi tức thì.
- **Không backend/database:** Hoạt động hoàn toàn tĩnh (static site), bảo mật tuyệt đối, không thu thập thông tin cá nhân hay kết nối API giao dịch ngân hàng.

---

## 2. Công nghệ sử dụng

- **Core:** React 18 + TypeScript + Vite
- **Styling:** Tailwind CSS (bảng màu đỏ - vàng đồng - giấy kem tùy biến theo Design Spec)
- **Icons:** Lucide React
- **Typography:** Be Vietnam Pro + Noto Serif (Google Fonts hỗ trợ đầy đủ bộ ký tự tiếng Việt Unicode NFC)
- **Build tool:** Vite + TypeScript compiler (`tsc`)

---

## 3. Hướng dẫn chạy và triển khai

### Yêu cầu môi trường
- Node.js version 18 trở lên (khuyến nghị Node 20 hoặc 22)
- npm hoặc pnpm

### Cài đặt thư viện
```bash
npm install
# hoặc
pnpm install
```

### Chạy môi trường phát triển (Local Dev Server)
```bash
npm run dev
# hoặc
pnpm run dev
```
Trình duyệt sẽ mở tại `http://localhost:3000`.

### Biên dịch dự án (Production Build)
```bash
npm run build
# hoặc
pnpm run build
```
Toàn bộ mã nguồn tĩnh được tối ưu hóa sẽ xuất ra thư mục **`dist/`**.

### Xem trước bản build tĩnh
```bash
npm run preview
# hoặc
pnpm run preview
```

---

## 4. Cấu trúc thư mục dự án

```text
/
├── dist/                      # Thư mục chứa bản build tĩnh sẵn sàng deploy
├── public/                    # Tài nguyên tĩnh công khai
│   ├── favicon.svg            # Biểu tượng sách vàng trên nền đỏ
│   ├── og-image.png           # Ảnh OpenGraph chia sẻ Zalo/Facebook (1200x630 px)
│   ├── robots.txt             # Cấu hình thân thiện SEO
│   └── images/
│       ├── vietqr-approved.png # Mã VietQR chuyển khoản đã xác minh
│       └── thu-ngo-qr.png
├── src/
│   ├── content/
│   │   └── letter.ts          # NGUỒN DỮ LIỆU DUY NHẤT: nội dung, STK, người ký
│   ├── styles/
│   │   └── globals.css        # Biến màu, font, keyframes, in ấn (@media print)
│   ├── hooks/
│   │   └── useReducedMotion.ts# Hook nhận diện cài đặt giảm chuyển động của thiết bị
│   ├── components/
│   │   ├── CoverScene.tsx     # Bìa thư đỏ vàng, sách mở, nút mở thư / đọc ngay
│   │   ├── DecorativeBackdrop.tsx # Nền đỏ nhung và họa tiết viền góc
│   │   ├── OpenBookIllustration.tsx # Biểu tượng vector cuốn sách mở phát sáng
│   │   ├── OfficialHeader.tsx # Dòng cơ quan ban hành Đảng ủy - HĐND - UBND...
│   │   ├── LetterTitle.tsx    # Tiêu đề "THƯ NGỎ", tên Quỹ trong trang giấy
│   │   ├── LetterBody.tsx     # Lời kính gửi và 4 đoạn văn nguyên văn Word
│   │   ├── DonationBlock.tsx  # Khối thông tin ngân hàng, VietQR, địa điểm ủng hộ
│   │   ├── CopyAccountButton.tsx # Nút sao chép STK (3215201017727) với phản hồi
│   │   ├── LetterClosing.tsx  # Lời cảm ơn, ngày tháng và khối ký BÍ THƯ
│   │   ├── ShareActions.tsx   # Chia sẻ Web Share API, sao chép liên kết, in thư
│   │   ├── FloatingSupportAction.tsx # Nút nổi cuộn nhanh tới khối ủng hộ
│   │   ├── OrnamentalFrame.tsx # Hoa văn viền góc và đường kẻ phân cách
│   │   ├── LetterPaper.tsx    # Khung giấy ngà cuộn dọc
│   │   ├── LetterScene.tsx    # Không gian đọc thư và xử lý deep links
│   │   └── AccessibleToast.tsx # Thông báo trạng thái hỗ trợ screen reader
│   ├── App.tsx                # Quản lý trạng thái bìa / mở / đọc thư và URL hash
│   └── main.tsx               # Entrypoint ứng dụng
├── index.html                 # Cấu trúc HTML, thẻ meta OG, Twitter Card, fonts
├── tailwind.config.js         # Token thiết kế màu sắc, font chữ và đổ bóng
└── package.json
```

---

## 5. Hướng dẫn cập nhật nội dung & Mã QR

Mọi thông tin hiển thị trên website đều được quản lý tập trung tại tệp duy nhất:
👉 **`src/content/letter.ts`**

### Thay đổi thông tin ngân hàng / QR:
Trong `src/content/letter.ts`:
```typescript
bank: {
  accountNumber: "3215201017727", // Số tài khoản (13 số)
  accountName: "QUỸ KHUYẾN HỌC XÃ MINH THÁI",
  bankFullName: "Ngân hàng Nông nghiệp và Phát triển Nông thôn Việt Nam (Agribank) Chi nhánh Trực Ninh Nam Định",
  approvedQrAssetPath: "/images/vietqr-approved.png", // Đặt undefined nếu muốn ẩn khung QR
  note: "Vui lòng kiểm tra tên người thụ hưởng trên ứng dụng ngân hàng trước khi xác nhận chuyển khoản."
}
```

- **Khi chưa có ảnh QR được duyệt:** Đặt `approvedQrAssetPath: undefined`, giao diện sẽ tự động chuyển sang bố cục một cột sang trọng, chỉ hiển thị thông tin tài khoản và nút sao chép mà không bị trống hay lỗi giao diện.
- **Khi đã có ảnh QR chính thức:** Đặt ảnh vào `public/images/vietqr-approved.png` và cấu hình đường dẫn tương ứng.

---

## 6. Hướng dẫn triển khai lên Cloudflare Pages (Miễn phí)

Web app được thiết kế thuần frontend tĩnh, hoàn toàn tương thích và tối ưu hóa cho **Cloudflare Pages**:

1. Đẩy mã nguồn lên kho chứa GitHub / GitLab.
2. Đăng nhập trang quản trị Cloudflare, chọn **Workers & Pages** -> **Create application** -> **Pages** -> **Connect to Git**.
3. Chọn kho lưu trữ dự án.
4. Cấu hình Build Settings:
   - **Framework preset:** `Vite`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
5. Nhấn **Save and Deploy**. Quá trình triển khai chỉ mất khoảng 30–60 giây.

---

## 7. Checklist kiểm duyệt bắt buộc trước khi công bố (Go-live)

Trước khi gửi đường dẫn công khai cho Nhân dân và các nhà hảo tâm, Ban biên tập/Người phụ trách đơn vị cần kiểm tra lại các mục sau:

- [ ] **Xác minh số tài khoản:** Dùng ứng dụng ngân hàng Agribank (hoặc ngân hàng bất kỳ) nhập số `3215201017727`, kiểm tra đúng tên thụ hưởng `QUY KHUYEN HOC XA MINH THAI`.
- [ ] **Quét thử mã QR:** Quét thử mã QR trên ít nhất 2 ứng dụng ngân hàng khác nhau để đảm bảo tự động điền đúng STK và tên đơn vị thụ hưởng.
- [ ] **Kiểm duyệt tư cách ký & Ngày tháng:** Xác nhận ngày `10 tháng 10 năm 2026`, chức danh `BÍ THƯ` và tên đồng chí `Mai Văn Chiến` đúng thẩm quyền phát hành.
- [ ] **Kiểm tra trên di động:** Mở liên kết trên điện thoại qua ứng dụng Zalo, Messenger, Safari và Chrome để kiểm tra hiển thị bìa, hiệu ứng mở thư và nút chia sẻ.
