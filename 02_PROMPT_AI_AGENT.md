# PROMPT CHO AI AGENT — TRIỂN KHAI WEB APP THƯ NGỎ QUỸ KHUYẾN HỌC XÃ MINH THÁI

> **Hướng dẫn sử dụng:** Copy toàn bộ phần bắt đầu từ **“VAI TRÒ CỦA BẠN”** đến hết file này vào AI Agent (Antigravity, Cursor, Codex, Claude Code hoặc Agent tương đương). Đặt cùng thư mục dự án hoặc attach cho Agent tất cả các tệp: `01_DESIGN_SPEC.md`, `03_NOI_DUNG_THU_NGO.md`, `source/thu-ngo-goc.docx`, `assets/reference-bia-ngoai.png`, `assets/reference-mat-trong.png`.

---

## VAI TRÒ CỦA BẠN

Bạn là **Senior Frontend Engineer + Creative UI/UX Designer + Motion Designer + QA Engineer**. Nhiệm vụ của bạn là **THỰC SỰ TẠO MÃ NGUỒN, CHẠY ĐƯỢC VÀ HOÀN THIỆN MỘT WEB APP** có tên:

**“THƯ NGỎ — CHUNG TAY XÂY DỰNG QUỸ KHUYẾN HỌC XÃ MINH THÁI”**.

Web app phục vụ công chúng tại xã Minh Thái, tỉnh Ninh Bình và những người con quê hương ở xa. Đây là **thư ngỏ điện tử tương tác** lấy cảm hứng từ mẫu thiệp đã thiết kế, KHÔNG phải landing page thông thường hoặc dashboard quỹ. Giao diện phải thực sự tinh tế, dễ dùng, chuẩn tiếng Việt, đáp ứng điện thoại và máy tính.

**Không chỉ tạo mockup, không chỉ trả về code snippet, không dừng ở việc đưa ra kế hoạch. Hãy triển khai project hoàn chỉnh, tự chạy build, khắc phục lỗi và bàn giao source cùng hướng dẫn.**

Sử dụng frontend-design để định hướng thẩm mỹ, ui-ux-pro-max để xây dựng design system, và impeccable để đánh giá, tinh chỉnh giao diện.
Sau khi triển khai, kiểm tra giao diện ở desktop và mobile, sửa các vấn đề về bố cục, tương phản, khoảng cách và trải nghiệm sử dụng.

---

## 1. ĐẦU VÀO BẮT BUỘC (ĐỌC TRƯỚC KHI VIẾT CODE)

Hãy mở, đọc đầy đủ và hiểu các tệp được cung cấp theo thứ tự:

1. **`01_DESIGN_SPEC.md`** — là đặc tả thiết kế **ưu tiên cao nhất** đối với bố cục, style, màu sắc, hiệu ứng, responsive, accessibility và tiêu chí nghiệm thu.
2. **`03_NOI_DUNG_THU_NGO.md`** — là nội dung thư ngỏ đã trích từ bản Word mới nhất, dùng để hiển thị trên web.
3. **`source/thu-ngo-goc.docx`** — văn bản Word nguồn để đối chiếu khi có nghi vấn về dấu, tên, địa chỉ hoặc ngày tháng. Không tự ý viết lại nội dung.
4. **`assets/reference-bia-ngoai.png`** — tham khảo bìa đỏ vàng, cuốn sách phát sáng, hoa văn.
5. **`assets/reference-mat-trong.png`** — tham khảo giấy kem, viền chỉ vàng, typography hành chính và cách hiển thị thông tin ủng hộ.

Nếu agent không đọc được `.docx`, vẫn phải đọc **toàn bộ** `03_NOI_DUNG_THU_NGO.md`. Nếu thiếu một trong các tệp `design` hoặc `content`, phải báo rõ tệp thiếu; không tự tạo nội dung thư bằng suy đoán. Ảnh tham khảo là tư liệu thị giác, **không phải** tài liệu để OCR nội dung thư.

### Thứ tự ưu tiên khi có xung đột

- **Nội dung chữ, dữ liệu ngân hàng, tên cơ quan, người ký:** ưu tiên `source/thu-ngo-goc.docx` / `03_NOI_DUNG_THU_NGO.md`.
- **Design, tương tác và kỹ thuật:** ưu tiên `01_DESIGN_SPEC.md`.
- **Họa tiết / cảm giác màu sắc:** tham khảo 2 PNG, không copy pixel-to-pixel.
- **Tính an toàn, khả năng tiếp cận, tính chính xác:** luôn ưu tiên hơn hiệu ứng/đồ họa.

---

## 2. KẾT QUẢ TÔI MUỐN BẠN XÂY DỰNG

Một URL duy nhất, có 3 trạng thái:

**A. BÌA THƯ (COVER):** nền đỏ đô sang trọng, viền vàng tinh tế, sách mở tỏa ánh sáng nhẹ, khẩu hiệu “TRÍ THỨC THẮP SÁNG TƯƠNG LAI”, tiêu đề “THƯ NGỎ”, tên Quỹ, nút **“Mở thư ngỏ”** và nút **“Đọc thư ngay”** (bỏ qua hiệu ứng).

**B. HIỆU ỨNG MỞ THƯ (OPENING):** khi nhấn mở, bìa có cảm giác mở ra thành tấm giấy ngà, thời gian khoảng 650–900 ms, chuyển động trang trọng, không giật, hỗ trợ reduced-motion. Có thể làm 3D nhẹ hoặc dùng scale/fade và lớp SVG; **không** làm mô hình nặng khiến giảm FPS.

**C. THƯ ĐÃ MỞ (LETTER):** một tờ giấy kem trải dài để người dùng cuộn và đọc. Hiển thị **đủ từng dòng nội dung Word**, tên cơ quan, lời kính gửi, các đoạn thư, thông tin tài khoản, địa điểm tiếp nhận trực tiếp, lời cảm ơn và phần người ký. Cuối thư có nút chia sẻ và xem lại bìa.

### Điều KHÔNG ĐƯỢC làm

- Không tạo các section “Thành tựu, tin tức, nhà tài trợ, con số gây quỹ, dashboard” như website thông thường.
- Không tích hợp API biến động số dư, không số dư, tổng số tiền, số giao dịch, danh sách giao dịch hoặc xác nhận đóng góp thành công.
- Không tạo API/backend/database, không thanh toán tự động, không form nhập biên lai hay giấy tờ cá nhân.
- Không tự tạo lời ngỏ khác, không thay đổi đoạn văn theo ý AI, không thay thông tin tài khoản.
- Không sử dụng nguyên ảnh thiệp làm văn bản trên web; toàn bộ nội dung phải là text HTML thật.
- Không tự vẽ hoặc giả mạo chữ ký, con dấu, logo cơ quan; nếu chưa có asset được duyệt thì chỉ hiển thị người ký dưới dạng text.
- Không phát nhạc/âm thanh tự động, không gắn tracking ngoài yêu cầu.

---

## 3. CHỈ DẪN DESIGN CỤ THỂ

### 3.1. Tính thẩm mỹ

- Mood: **premium civic invitation / elegant commemorative letter / warm local education appeal**.
- Palette chính: đỏ `#710C18`, đỏ sâu `#4C0810`, vàng `#C99D4B`, vàng sáng `#F1D58C`, giấy kem `#FFFCF4`, mực chữ `#263343`.
- Sử dụng background CSS gradient nhiều lớp rất nhẹ, họa tiết vector, sách mở SVG do bạn vẽ/thiết kế lại dựa vào ảnh mẫu. Hoa văn chỉ ở viền/góc, không đè chữ.
- Phần bìa cần “WOW” theo nghĩa sang trọng, không phải nhiều hiệu ứng rối.
- Phần thư đọc như tờ thư thực: nền sáng, viền vàng mảnh, góc trang trí, bố cục cân đối, typography sạch.
- Dùng shadow thực tế và các đường nét mảnh; tránh glassmorphism hiện đại quá mức, card dashboard, neon cyberpunk.

### 3.2. Font bắt buộc

- **Be Vietnam Pro** dùng cho toàn bộ đoạn văn, thông tin tài khoản, button, thông tin địa chỉ.
- **Noto Serif** cho tiêu đề trang trọng (“THƯ NGỎ”, tên Quỹ), phụ đề văn bản và dòng chữ nghiêng.
- Fallback hợp lý, hỗ trợ dấu tiếng Việt; nếu tự host font thì dùng đúng bản hỗ trợ Vietnamese subset và font-display swap.
- Body điện thoại **16–17 px**, line-height **1.7–1.85**; body desktop **17–18 px**.
- Không lạm dụng chữ thư pháp khó đọc. Chữ hiển thị tuyệt đối không mất dấu, vỡ glyph, tràn khung hoặc bị crop dấu.

### 3.3. Desktop và mobile

- Desktop: cover nằm giữa viewport; sau mở thư dùng một tấm giấy max-width khoảng **960 px**, thân văn bản tối đa **68–72ch**. Không ép toàn bộ nội dung dài vào hai trang sách với chữ nhỏ.
- Mobile: cover chiếm màn hình nhưng scroll được, dòng cơ quan tự xuống dòng; sau mở thư thành một dải giấy cuộn dọc, padding 20–24 px; nút tối thiểu 44–48 px.
- Các khối tài khoản/QR: desktop hai cột khi đủ rộng, mobile một cột.
- Test các viewport: **320×568, 375×667, 390×844, 430×932, 768×1024, 1366×768, 1440×900, 1920×1080**.
- Không có scroll ngang. Tôn trọng notch và safe-area trên di động nếu có nút fixed.

### 3.4. Animation

- Cover có ánh sáng breathing nhẹ 6–12s, không nhấp nháy.
- Nút mở hover/tap ngắn 160–220ms.
- Mở thư tổng dưới 1 giây, không khóa UI, không chớp màn trắng.
- Sections có thể fade-in/translateY **một lần** rất nhẹ trong lúc cuộn; không được ẩn nội dung mãi nếu IntersectionObserver không chạy.
- `prefers-reduced-motion: reduce` phải bỏ animation không thiết yếu, nội dung xuất hiện trực tiếp.
- Khi truy cập `/#thu-ngo`, vào thẳng trạng thái đọc thay vì bắt buộc xem bìa; có nút trở lại bìa.

---

## 4. XỬ LÝ NỘI DUNG THƯ — CỰC KỲ QUAN TRỌNG

Hãy đưa nội dung từ `03_NOI_DUNG_THU_NGO.md` vào **một module dữ liệu** duy nhất `src/content/letter.ts` (hoặc JSON/TS typed tương đương). Giữ nguyên:

- Cơ quan: Đảng ủy – HĐND – UBND – Ủy ban MTTQ Việt Nam xã Minh Thái; Tỉnh Ninh Bình.
- Tiêu đề **THƯ NGỎ**, dòng **Chung tay xây dựng**, tên **QUỸ KHUYẾN HỌC XÃ MINH THÁI**.
- Toàn bộ **lời kính gửi + 4 đoạn nội dung chính** trong Word (không tự thêm, không cắt, không diễn giải lại).
- Lời dẫn “Mọi sự ủng hộ xin gửi về…” theo văn bản.
- **Số tài khoản: `3215201017727`**.
- **Tên tài khoản: `QUỸ KHUYẾN HỌC XÃ MINH THÁI`**.
- **Ngân hàng Nông nghiệp và Phát triển Nông thôn Việt Nam (Agribank), Chi nhánh Trực Ninh Nam Định** (giữ đúng tên chi nhánh của Word).
- **Ủng hộ trực tiếp:** Phòng Văn hóa - Xã hội xã Minh Thái; Trụ sở UBND xã Minh Thái, thôn Quần Cát, xã Minh Thái, tỉnh Ninh Bình.
- **“Trân trọng cảm ơn!”**, **“Minh Thái, ngày 10 tháng 10 năm 2026”**, tư cách ký và **BÍ THƯ Mai Văn Chiến**.

**Chú ý:** Không được thay ngày trong văn bản thành ngày tạo website, dù trang được triển khai sau đó. Không tự chèn chương trình hội nghị ngày 29/11 vào thân thư.

### 4.1. Module dữ liệu

Định nghĩa kiểu `LetterContent` trong TypeScript và export `letterContent`. Đừng hardcode trùng số tài khoản ở nhiều nơi. `DonationBlock`, `CopyAccountButton`, meta và các phần khác phải cùng đọc từ một nguồn dữ liệu.

### 4.2. Khối ủng hộ

- Hiển thị text thông tin tài khoản thật rõ ràng.
- Button “Sao chép số tài khoản” phải copy đúng **3215201017727**, có feedback aria-live và xử lý lỗi clipboard.
- Hiển thị “Hoặc ủng hộ trực tiếp tại…” theo Word.
- QR: **mặc định chỉ dùng `public/images/vietqr-approved.png` khi người dùng cung cấp ảnh chuẩn đã xác minh**. Nếu không có, thiết kế phải tự ẩn QR một cách đẹp mắt, không hiển thị QR mẫu không quét được.
- Không crop QR từ ảnh tham khảo để coi là mã QR hợp lệ. Không tạo QR cho ngân hàng/người nhận khác. Có thể đặt cấu hình tĩnh `approvedQrAssetPath: undefined` trong nội dung khi chưa có file.
- Trên UI thêm lưu ý nhỏ: “Vui lòng kiểm tra tên người thụ hưởng trên ứng dụng ngân hàng trước khi xác nhận chuyển khoản.”
- **Không được nói “Chuyển khoản thành công” khi chỉ mới sao chép hoặc mở QR.**

### 4.3. Chữ ký

Hiển thị chức danh và người ký là text. Không giả lập dấu đỏ, không tạo chữ ký viết tay bằng AI. Chỉ thêm asset chữ ký khi bên chủ quản cung cấp và duyệt sử dụng.

---

## 5. CÁC THÀNH PHẦN CẦN CODE

Tối thiểu tạo các component đúng chức năng:

1. `CoverScene` – nền đỏ hoa văn, header, biểu tượng sách mở, tiêu đề, nút mở/đọc ngay.
2. `DecorativeBackdrop` – SVG/CSS pattern nền, không block pointer hoặc screen reader.
3. `OpenBookIllustration` – SVG sách mở có hiệu ứng ánh vàng tiết chế.
4. `LetterScene` – state đọc thư, quản lý vị trí cuộn và transition.
5. `LetterPaper` – container nền giấy, khung vàng, layout responsive.
6. `OfficialHeader` – tên cơ quan và tỉnh; variant cho bìa và giấy.
7. `LetterTitle` – “THƯ NGỎ” / “Chung tay xây dựng” / tên Quỹ.
8. `LetterBody` – kính gửi và đoạn văn Word; hỗ trợ nhấn mạnh đúng cụm.
9. `DonationBlock` – account + address + QR được duyệt (nếu có).
10. `CopyAccountButton` – copy, aria-live toast, lỗi fallback.
11. `LetterClosing` – cảm ơn, ngày tháng, tư cách ký, người ký.
12. `ShareActions` – Web Share API + fallback copy link.
13. `FloatingSupportAction` – CTA gọn cuộn tới `#ung-ho` sau khi mở thư, không che text.
14. `AccessibleToast` – trạng thái thao tác với screen reader.

Có thể gộp component nhỏ khi hợp lý nhưng **không** tạo một `App.tsx` 1000 dòng khó bảo trì.

### State và hành vi

- Dùng union state kiểu `cover | opening | reading` hoặc state machine đơn giản tương đương.
- Nút mở phải chống double click; `setTimeout` phải được cleanup khi unmount; reduced-motion chuyển ngay.
- `hash === '#thu-ngo'` cho deep link; `#ung-ho` để cuộn đến phần hỗ trợ mà không làm mất trạng thái đọc.
- Nếu browser Back, reload, mở trực tiếp trên Zalo/in-app browser, luôn có fallback dễ sử dụng.
- Giao diện khi chưa chạy JS nếu thực tế thiết lập cho phép: không để màn trắng; cung cấp placeholder/content fallback phù hợp.

---

## 6. CÔNG NGHỆ VÀ CẤU TRÚC DỰ ÁN

**Ưu tiên:** Vite + React + TypeScript + Tailwind CSS + Motion/Framer Motion + lucide-react (nếu cần). Có thể bổ sung các gói nhỏ thật sự cần thiết. Không dùng backend.

Nếu đã có repository: **kiểm tra cấu trúc, package manager, phiên bản dependency và các component hiện có trước khi sửa**; giữ các phần không liên quan, không xóa dữ liệu. Nếu repository trống, scaffold dự án Vite React TypeScript.

**Cấu trúc mục tiêu (có thể điều chỉnh hợp lý):**

```text
/
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.* (nếu phiên bản Tailwind cần)
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── content/letter.ts
│   ├── styles/globals.css
│   ├── components/
│   │   ├── CoverScene.tsx
│   │   ├── LetterScene.tsx
│   │   ├── LetterPaper.tsx
│   │   ├── LetterBody.tsx
│   │   ├── DonationBlock.tsx
│   │   ├── LetterClosing.tsx
│   │   ├── ShareActions.tsx
│   │   └── ...
│   ├── hooks/
│   │   └── useReducedMotion.ts (nếu cần)
│   └── assets/
│       └── decorated-book.svg (hoặc SVG inline)
├── public/
│   ├── favicon.svg
│   ├── og-image.png
│   ├── images/
│   │   └── vietqr-approved.png (CHỈ KHI ĐÃ ĐƯỢC XÁC MINH)
│   └── robots.txt
├── README.md
└── (tư liệu design/source chỉ dùng lúc phát triển, không publish nguyên văn tệp docx)
```

### SEO và chia sẻ link

- `<html lang="vi">`, `<meta charset="UTF-8">`.
- Title gợi ý: `Thư ngỏ | Quỹ Khuyến học xã Minh Thái`.
- Meta description ngắn, bám nội dung văn bản: lời kêu gọi chung tay ủng hộ Quỹ Khuyến học xã Minh Thái, góp phần động viên học sinh và phát huy truyền thống hiếu học.
- Tạo ảnh OG **1200×630** với nền đỏ, sách mở, tên Quỹ. Dùng SVG render/raster hóa cục bộ hoặc công cụ ảnh phù hợp; không dùng ảnh thiệp 2 trang méo tỷ lệ.
- Gắn OG/Twitter card, favicon, thêm canonical **chỉ khi người dùng cung cấp URL triển khai thật**; không tự bịa domain.
- Nút chia sẻ gọi Web Share API khi có; nếu không thì copy URL. Không cần tích hợp Zalo SDK.

### Deploy

- Hosting mục tiêu: **Cloudflare Pages gói miễn phí**, build command `npm run build` (hoặc script theo package manager thực tế), output folder `dist`.
- Trang phải hoạt động tĩnh, không có biến môi trường chứa API keys.
- Đảm bảo asset paths, hash deep link, copy/share đều chạy khi deploy tĩnh.

---

## 7. YÊU CẦU QA NGHIÊM NGẶT

Sau khi code xong, **bạn PHẢI kiểm thử**, không dừng ở lời nói “đã hoàn thành”.

### 7.1. Build và lint

- Cài dependency bằng package manager phù hợp.
- Chạy `npm run build` / `pnpm build` tùy repo; sửa toàn bộ TypeScript/build errors.
- Nếu có lint script, chạy và sửa lỗi quan trọng; không tắt rules để che lỗi.
- Kiểm tra console, không warning list keys, không invalid DOM nesting, không lỗi asset 404.

### 7.2. Visual QA

Nếu có browser automation/Playwright, mở web và chụp ít nhất:

1. **Mobile 390×844:** bìa trước khi mở.
2. **Mobile 390×844:** đoạn đầu lá thư.
3. **Mobile 390×844:** khối tài khoản + địa điểm tiếp nhận.
4. **Desktop 1440×900:** bìa.
5. **Desktop 1440×900:** lá thư + khối thông tin.

Đối chiếu với `01_DESIGN_SPEC.md`; sửa lỗi padding, font, cắt chữ, tràn màn, chữ không có dấu. Nếu không có công cụ screenshot, phải báo rõ hạn chế, không nói đã kiểm tra bằng mắt.

### 7.3. Interaction QA

- Mở bằng chuột, touch, Enter, Space.
- Reload khi đang `/#thu-ngo` và `/#ung-ho`.
- Tab/Shift+Tab trên các nút; focus luôn nhìn thấy.
- Bật `prefers-reduced-motion`, bảo đảm bỏ transition không thiết yếu.
- Copy số tài khoản, dán ra để xác minh **đúng 13 ký tự**: `3215201017727`.
- Copy link, share fallback; xử lý khi browser chặn clipboard.
- Không có overlay chặn cuộn hay QR giả.

### 7.4. Text QA

Đọc soát text hiển thị với `03_NOI_DUNG_THU_NGO.md` theo từng đoạn, đặc biệt các tên, dấu và thông tin sau:

- `QUỸ KHUYẾN HỌC XÃ MINH THÁI`
- `3215201017727`
- `QUỸ KHUYẾN HỌC XÃ MINH THÁI` (tên tài khoản)
- `Agribank` và `Chi nhánh Trực Ninh Nam Định`
- `Phòng Văn hóa - Xã hội xã Minh Thái`
- `Minh Thái, ngày 10 tháng 10 năm 2026`
- `Mai Văn Chiến`

Ghi nhận rõ: QR chưa có ảnh được duyệt (nếu đúng như đầu vào) là hạng mục cần người quản trị bổ sung, **không được tự nói đã được duyệt/đã quét kiểm tra**.

---

## 8. WORKFLOW BẮT BUỘC CỦA AGENT

Thực hiện theo đúng thứ tự, không bỏ bước:

**Giai đoạn 1 — Kiểm tra nguồn:**

- Đọc hết design/content/Word/image.
- Tóm tắt 5–8 dòng plan triển khai trong nội bộ dự án hoặc tin nhắn ngắn.
- Kiểm tra repo, stack, scripts, assets, yêu cầu môi trường.
- Xác định tệp QR chuẩn đã có hay chưa; nếu chưa, đánh dấu `QR_PENDING_APPROVAL` và chuẩn bị bố cục không có QR.

**Giai đoạn 2 — Thiết kế khung:**

- Xây tokens CSS (palette, type, spacing, shadow).
- Tạo layout cover/letter ngay; bảo đảm mobile-first.
- Tạo SVG sách mở, viền hoa văn và nền giấy; không dùng mockup tĩnh thay web.

**Giai đoạn 3 — Tích hợp chữ:**

- Tạo module typed `letter.ts`, nhập nguyên văn, tự soát kỹ dấu tiếng Việt.
- Tích hợp các đoạn thư, nội dung ủng hộ, cuối thư.
- Không nhập text placeholder vào phần chính.

**Giai đoạn 4 — Tương tác:**

- Cover/opening/reading state + deep link.
- Button mở/skip, scroll support, copy, share, toast, reduced motion.
- QR chỉ khi đủ điều kiện, không thêm tính năng thanh toán tự động.

**Giai đoạn 5 — Hoàn thiện:**

- Responsive, accessible semantics, performance, SEO, OG và favicon.
- README hướng dẫn chỉnh nội dung/QR/Cloudflare Pages.
- Build/lint và kiểm tra UI với browser nếu có.

**Giai đoạn 6 — Bàn giao:**

Trả lời ngắn gọn nhưng **có căn cứ**:

1. Đã tạo/chỉnh những tệp nào.
2. Những tính năng đã chạy.
3. Lệnh chạy local / build.
4. Kết quả test đã thật sự thực hiện.
5. Những việc **còn chờ xác minh trước công khai** (tài khoản nhận ủng hộ, QR và sự phê duyệt nội dung/tư cách ký).

Nếu có lỗi không giải quyết được, mô tả đúng lỗi, không tuyên bố hoàn tất khi chưa build thành công.

---

## 9. TIÊU CHÍ CHẤP NHẬN CUỐI CÙNG

Project **đạt** khi và chỉ khi:

- [ ] Đây thực sự là **web app thư ngỏ một trang**, không phải dashboard/website nhiều mục.
- [ ] Bìa đỏ-vàng đẹp, có hình sách mở/hoa văn đồng bộ với mẫu; có nút mở thư hoạt động.
- [ ] Thư dài cuộn dọc đọc tốt, nội dung **nguyên văn Word** và đủ dấu tiếng Việt.
- [ ] Be Vietnam Pro + Noto Serif, font chuẩn, dễ đọc.
- [ ] Mobile đẹp từ 320 px, desktop đẹp ở 1366/1440/1920 px; không ngang overflow.
- [ ] Chuyển cảnh mượt, có reduced-motion và keyboard support.
- [ ] Khối ủng hộ chỉ hiển thị thông tin tài khoản tĩnh và địa điểm, có copy số tài khoản; QR chỉ khi xác minh.
- [ ] Cuối thư có lời cảm ơn, ngày/tháng, tư cách ký, tên Mai Văn Chiến.
- [ ] Share link hoạt động có fallback, có OG image/title/description.
- [ ] Không kết nối API ngân hàng, không thống kê/giao dịch/số dư hay xác nhận thanh toán.
- [ ] `build` chạy thành công và có README deploy Cloudflare Pages.

---

## 10. MỆNH LỆNH THỰC HIỆN NGAY

**BẮT ĐẦU CODE NGAY TRONG PROJECT HIỆN TẠI.** Đọc đúng các file đã chỉ định, tự quyết các chi tiết kỹ thuật nhỏ phù hợp với đặc tả, tạo web app hoàn chỉnh, kiểm tra và sửa cho tới khi build thành công. Không hỏi lại những thông tin đã nằm trong file. Nếu thiếu QR chuẩn, không vì thế mà dừng toàn bộ dự án; để tính năng QR chờ người quản trị cung cấp, nhưng vẫn hoàn thiện mọi phần còn lại.

**Định nghĩa chất lượng:** Đây phải là trải nghiệm “mở một bức thư từ quê hương”, gợi cảm xúc, sang trọng và rất dễ đọc — **tuyệt đối không giống template landing page marketing đại trà**.
