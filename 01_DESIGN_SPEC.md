# DESIGN SPEC — THƯ NGỎ ĐIỆN TỬ QUỸ KHUYẾN HỌC XÃ MINH THÁI

**Phiên bản:** 1.0 — 11/11/2026  
**Loại sản phẩm:** Web app một trang, trải nghiệm mở và đọc thư ngỏ điện tử  
**Ngôn ngữ:** Tiếng Việt (vi-VN)  
**Nguồn nội dung bắt buộc:** `03_NOI_DUNG_THU_NGO.md` và `source/thu-ngo-goc.docx`  
**Tư liệu thị giác:** `assets/reference-bia-ngoai.png`, `assets/reference-mat-trong.png`  
**Mục tiêu:** Tạo trải nghiệm trang trọng, ấm áp, ấn tượng, dễ đọc và dễ chia sẻ cho các tổ chức, doanh nghiệp, nhà hảo tâm và những người con quê hương Minh Thái.

> **Định nghĩa sản phẩm:** Đây là một **bức thư ngỏ điện tử có tương tác**, KHÔNG phải cổng thông tin, trang bán hàng, trang quản lý gây quỹ hay dashboard. Người dùng **mở thư → đọc nội dung → xem thông tin ủng hộ → gửi lời chia sẻ/lưu đường dẫn**. Mọi nội dung chính phải bám sát văn bản Word. Không đặt biểu đồ, bộ đếm tiền, tổng giao dịch, danh sách chuyển khoản, số dư ngân hàng, thông báo chuyển khoản thành công hoặc các chức năng làm sai bản chất thư ngỏ.

---

## 1. Tư tưởng mỹ thuật và định hướng cảm xúc

### 1.1. Tên concept

**“TRÍ THỨC THẮP SÁNG TƯƠNG LAI” — Lá thư gửi từ quê hương Minh Thái**.

- Tinh thần: **trang trọng – tin cậy – nhân văn – lan tỏa – hiện đại**.
- Biểu tượng chính: **cuốn sách mở**, nét vàng phát sáng, những đường hoa văn lấy cảm hứng từ thiệp, nền giấy kem, ánh bình minh tượng trưng tri thức.
- Màu chủ đạo: **đỏ truyền thống + vàng đồng + nền giấy ngà**; màu xanh mực dùng hạn chế cho nội dung như mẫu thư.
- Kết nối hình ảnh nguồn: giữ **ngôn ngữ thị giác** của hai thiệp đã cung cấp, nhưng **không chụp nguyên thiệp đặt làm website** vì chữ nhỏ, không responsive, không chọn/copy được và không đáp ứng khả năng tiếp cận.
- Cảm giác khi truy cập: một tấm thiệp mời cao cấp đang chờ người nhận mở ra; khi đọc, hiệu ứng giảm dần để chữ trở thành trọng tâm.

### 1.2. Những điều cần tránh

1. Không biến thành landing page dài gồm “giới thiệu/nhà tài trợ/tin tức/dự án/báo cáo tài chính”.
2. Không quá nhiều lửa, pháo hoa, hạt sáng hoặc animation loop gây mỏi mắt.
3. Không dùng ảnh chụp thư gốc làm **nội dung đọc chính**; toàn bộ chữ là HTML text.
4. Không chữ chạy, nhấp nháy liên tục; không tự phát nhạc, âm thanh hay video.
5. Không dùng chữ viết tay cầu kỳ cho đoạn dài hoặc font thiếu dấu tiếng Việt.
6. Không dùng nội dung minh họa giả làm sự kiện/số liệu/danh sách tài trợ có thật.
7. Không tạo ảnh giả chữ ký, con dấu, biểu trưng cơ quan nhà nước.
8. Không tự động chuyển sang trang ngân hàng hoặc thu thập thông tin thanh toán.

---

## 2. Kiến trúc trải nghiệm (one-page interactive letter)

Website có **1 URL chính**. Không điều hướng nhiều trang; có 3 trạng thái giao diện:

```text
[STATE 1] COVER / BÌA THƯ
   └─ nút “Mở thư ngỏ” / nhấn Enter khi nút được focus
        ↓ animation 650–900 ms (có skip nếu reduced motion)
[STATE 2] OPENING / MỞ THƯ
   └─ bìa nhẹ nhàng tách/mở, giấy thư hiện ra
        ↓
[STATE 3] READING / ĐỌC THƯ
   ├─ cơ quan ban hành / tiêu đề
   ├─ kính gửi và 4 đoạn nội dung Word
   ├─ thẻ thông tin ủng hộ tĩnh + mã VietQR đã xác minh
   ├─ địa điểm tiếp nhận trực tiếp
   ├─ lời cảm ơn + khối ký xác nhận
   └─ Sao chép link / Chia sẻ / Đọc lại từ đầu
```

**Không bắt buộc phải mở thư để truy cập nội dung:** nút `Bỏ qua hiệu ứng / Đọc thư ngay` hỗ trợ người muốn đọc nhanh. Khi JS chưa tải hoặc animation lỗi, thư vẫn xuất hiện sau fallback, không được có màn hình chờ vô hạn.

### 2.1. Hành trình chi tiết

- **Bước 1:** Mở link từ Zalo/Facebook; ảnh xem trước (Open Graph) thể hiện bìa thư, tên Quỹ và thông điệp.
- **Bước 2:** Màn hình bìa đỏ; tại chính giữa là một “tấm thư” đóng với hoa văn vàng, tên Quỹ, biểu tượng sách mở, nút mở thư. Không yêu cầu đăng nhập.
- **Bước 3:** Nhấn mở thư; animation tối đa khoảng 900 ms; tiết chế chuyển động; focus chuyển hợp lý tới heading của thư (không gây nhảy trang đột ngột).
- **Bước 4:** Đọc nội dung trên nền giấy kem, cỡ chữ đủ lớn; các đoạn văn bố trí không quá rộng.
- **Bước 5:** Đến đoạn “Mọi sự ủng hộ…” hiện khối thông tin ngân hàng/QR **tĩnh** và địa điểm ủng hộ trực tiếp.
- **Bước 6:** Kết bằng lời cảm ơn, người ký, nút sao chép hoặc chia sẻ đường link; có nút xem lại bìa.

### 2.2. Thứ tự nội dung trên web

Giữ nguyên thứ tự văn bản nguồn:

1. Dải khẩu hiệu “TRÍ THỨC THẮP SÁNG TƯƠNG LAI”.
2. Cơ quan ban hành: Đảng ủy – HĐND – UBND – Ủy ban MTTQ Việt Nam xã Minh Thái; Tỉnh Ninh Bình.
3. Nhãn **THƯ NGỎ**.
4. Dòng “Chung tay xây dựng”.
5. Tên **QUỸ KHUYẾN HỌC XÃ MINH THÁI**.
6. Dòng **Kính gửi** và 4 đoạn nội dung từ Word.
7. Lời dẫn về thông tin ủng hộ.
8. Thông tin tài khoản, VietQR (nếu có QR nguồn đã xác minh), địa điểm tiếp nhận trực tiếp.
9. “Trân trọng cảm ơn!”, ngày tháng, tư cách ký và tên người ký.
10. Các thao tác kỹ thuật ở rìa/cuối trang: chia sẻ, sao chép link, xem lại bìa.

**Nội dung tuyệt đối chính xác** nằm trong `03_NOI_DUNG_THU_NGO.md`, không copy text từ ảnh thiệp để tránh lỗi nhận dạng chữ.

---

## 3. Design tokens

### 3.1. Màu sắc

| Token | Giá trị | Sử dụng |
|---|---|---|
| `--red-950` | `#4C0810` | Nền bìa lớp sâu nhất |
| `--red-900` | `#710C18` | Nền bìa chính |
| `--red-800` | `#931625` | Điểm nhấn đỏ, trạng thái hover |
| `--red-700` | `#B12332` | Chi tiết đỏ nổi bật (ít dùng) |
| `--gold-700` | `#9B6B22` | Chữ vàng trên nền sáng khi cần đủ tương phản |
| `--gold-500` | `#C99D4B` | Hoa văn, đường viền |
| `--gold-300` | `#F1D58C` | Chữ vàng sáng trên nền đỏ |
| `--gold-glow` | `#FFD979` | Quầng sáng lượng nhỏ, không dùng cho body text |
| `--paper-50` | `#FFFCF4` | Nền thư |
| `--paper-100` | `#F8F0DF` | Nền giấy phụ |
| `--ink-900` | `#263343` | Chữ nội dung chính |
| `--ink-700` | `#34547A` | Thông tin cơ quan/các nhãn phụ |
| `--line-gold` | `#D8BD81` | Đường kẻ, divider |
| `--white` | `#FFFFFF` | Chữ tương phản trên bìa |
| `--focus` | `#1976D2` | Viền focus dễ nhận thấy |

Tất cả đoạn chữ, nút và các nhãn dữ liệu phải đạt **WCAG AA** (ít nhất 4.5:1 với text bình thường; 3:1 với text lớn); không sử dụng vàng nhạt để viết đoạn dài trên nền giấy kem. CSS gradient tạo cảm giác nhung đỏ nhưng không được giảm tương phản của chữ.

### 3.2. Font chữ – tiêu chuẩn tiếng Việt

**Bộ font bắt buộc:**

- **Thân bài và nút:** `Be Vietnam Pro` (fallback `Arial, sans-serif`). Hỗ trợ tiếng Việt, đường nét sạch, dễ đọc trên điện thoại.
- **Tiêu đề trang trọng:** `Noto Serif` (fallback `Georgia, serif`). Dùng cho “THƯ NGỎ”, tên Quỹ, phần chữ ký/tư cách ký nếu phù hợp.
- **Điểm nhấn lãng mạn:** ưu tiên `Noto Serif Italic` cho “Chung tay xây dựng” và câu khẩu hiệu. **Không dùng font script ngoại lai** nếu chưa kiểm tra đủ dấu tiếng Việt.
- Chỉ tải những weight thực sự dùng. Nếu tự host font: cung cấp `woff2` có hỗ trợ subset tiếng Việt; có `font-display: swap`; không đính kèm font thương mại hoặc file font chưa được phép phân phối.

| Element | Desktop | Mobile | Weight | Line-height |
|---|---:|---:|---:|---:|
| Dòng cơ quan | 13–15 px | 11.5–13 px | 600 | 1.4 |
| Tiêu đề “THƯ NGỎ” trên bìa | 56–72 px | 36–44 px | 700 | 1.08 |
| Tên Quỹ trên bìa | 30–42 px | 24–30 px | 700 | 1.2 |
| “THƯ NGỎ” trong giấy thư | 48–56 px | 32–38 px | 700 | 1.15 |
| Tên Quỹ trong giấy thư | 28–34 px | 22–28 px | 700 | 1.25 |
| Dòng “Chung tay xây dựng” | 26–32 px | 20–24 px | 500 italic | 1.3 |
| Nội dung đoạn văn | 17–18 px | 16–17 px | 400 | 1.7–1.85 |
| “Kính gửi” / thông tin quan trọng | 17–18 px | 16–17 px | 600 | 1.65 |
| Nhãn tài khoản/địa chỉ | 14–16 px | 14–15 px | 500 | 1.5 |
| Số tài khoản | 22–26 px | 20–24 px | 700 | 1.3 |
| Button/CTA | 16 px | 16 px | 600 | 1.4 |

Quy tắc chữ:

- Không dùng `text-transform: uppercase` cho toàn bộ thân bài; chỉ các nhãn vốn viết hoa theo bản Word.
- Không dùng chữ nhỏ dưới 12 px trên màn hình di động.
- `max-width` cho nội dung văn bản khoảng **66–72ch**; không để đoạn kéo hết chiều rộng 1440 px.
- Căn **trái** đoạn văn, không justify trên mobile vì sẽ tạo khoảng trắng khó đọc; giữ nguyên ngắt đoạn theo Word.
- Dấu tiếng Việt phải hiển thị đủ, không fallback font khiến chữ nhảy; test ít nhất: “ỦY BAN MTTQ”, “QUỸ KHUYẾN HỌC”, “Minh Thái”, “Nông thôn”, “Trân trọng cảm ơn”.

### 3.3. Khoảng cách & hình khối

- Spacing scale: `4 / 8 / 12 / 16 / 24 / 32 / 40 / 48 / 64 / 80 px`.
- Bán kính nút: 12–16 px; nút pill lớn có thể dùng radius 999px, không lạm dụng.
- Thẻ QR và ngân hàng: 18–22 px; khối giấy chính: 14–22 px (giống tờ giấy hơn một card dashboard).
- Shadow giấy: `0 24px 80px rgba(40, 15, 10, .18)` kết hợp inner border mỏng màu vàng.
- Gold border: tối đa 1–2 px, không 4–6 lớp viền đậm như poster in.
- Motion được thiết kế để **tôn nội dung**, không phải là nội dung.

---

## 4. Mô tả màn hình chi tiết

### 4.1. Màn bìa / Cover

**Layout desktop:**

- Phủ toàn viewport; background gradient đỏ sâu và một cụm halo vàng phía sau cuốn sách.
- Thêm họa tiết cong/đường viền góc bằng SVG, gợi đúng mẫu bìa thiệp; các chi tiết giữ trong vùng safe margin 24–48 px.
- Một “bìa thư/card sách” đặt giữa màn, chiều rộng khoảng 540–700 px, chiều cao nội dung co giãn; không cắt ở màn laptop 1366×768.
- Trên cùng: dòng cơ quan nhỏ nhưng rõ; tiếp đến biểu tượng sách mở vàng (SVG/vector); tiêu đề “THƯ NGỎ”; thông điệp; nút hành động.
- Footer nhỏ: “QUỸ KHUYẾN HỌC XÃ MINH THÁI”; có thể hiển thị lời nhắc “Nhấn để mở thư”.
- Có điểm sáng nhẹ tĩnh gần cuốn sách; hạt vàng di chuyển rất chậm nếu không reduced-motion.

**Layout mobile:**

- Bìa chiếm gần full screen; cho phép cuộn nếu cao máy nhỏ; không dùng fixed-height gây che CTA.
- Padding trái/phải 20–24 px, nhãn cơ quan wrap tự nhiên; tên Quỹ tối đa 3–4 dòng có kiểm soát.
- Button “Mở thư ngỏ” tối thiểu 48 px chiều cao, rộng 100% nếu cần.
- Không hiển thị đường viền quá sát tai thỏ hoặc khu vực thanh điều hướng trình duyệt.

**Thành phần:** `CoverScene`, `OfficialHeader`, `BookSymbol`, `OpenLetterButton`, `SkipAnimationButton`.

### 4.2. Chuyển cảnh mở thư / Opening

- Hiệu ứng 0–900 ms; chuyển bằng transform/opacity, tránh animating width/height gây reflow.
- Đề xuất: cover `scale(1) → scale(.985)` + mờ lớp nền, hai cánh tượng trưng mở `rotateY(±10°)` trong không gian 3D nhẹ; tấm giấy trắng ngà xuất hiện và tăng opacity.
- Không dựng mô phỏng cuốn sách 3D quá phức tạp để rồi chữ nhỏ, khó đọc.
- `prefers-reduced-motion: reduce`: bỏ toàn bộ parallax/chuyển cánh, hiện thư tức thời.
- Không khóa cuộn quá 1 giây; không chặn bàn phím hoặc thao tác back/refresh.
- Khi mở thành công, đặt route/hash `#thu-ngo` (không cần router thực); có thể vào trực tiếp `#thu-ngo` để bỏ qua bìa.
- Cho phép quay lại bìa bằng nút “Xem lại bìa thư”.

### 4.3. Không gian đọc thư / Letter Canvas

- Background xung quanh: đỏ sâu giảm bão hòa hoặc kem ấm tùy thiết kế; **giấy là vùng sáng nhất**.
- Trên desktop hiển thị **một tờ thư dài dạng cuộn trang** (max-width tổng 920–1020 px; phần chữ max 68ch), không ép nội dung Word vào hai cột cố định. Có thể tạo đường gập giữa/viền gấp như một cuốn thư đang mở ở phần hero, rồi chuyển thành dải giấy dọc để dễ đọc.
- Lề giấy desktop: 56–88 px; tablet: 32–48 px; mobile: 20–24 px. Nội dung “thở” nhờ khoảng cách paragraph 16–22 px.
- Hoa văn góc màu vàng opacity thấp; hình sách mở kiểu vẽ SVG ở phần đầu/cuối; khu vực body dùng nền phẳng, không phủ họa tiết quá dày.
- Viền vàng mảnh; không dùng kiểu giấy quá cũ/rách/ố khiến mất vẻ trang trọng.
- Dải cơ quan, đường chỉ vàng, headline nằm trên cùng như ảnh thiệp; ưu tiên thứ bậc chữ rõ.
- Phân đoạn bằng spacing và một divider hoa văn đơn giản, **không cắt nhỏ/sửa lời văn**.
- Khi cuộn, chỉ animating `opacity`/`translateY(6–12px)` một lần cho từng block. Với giảm chuyển động, tất cả phần xuất hiện ngay.

### 4.4. Nội dung văn bản

- Render nội dung từ một nguồn dữ liệu duy nhất (khuyến nghị `src/content/letter.ts` hoặc `src/content/letter.json`).
- Trích nguyên văn `03_NOI_DUNG_THU_NGO.md`; **không viết lại thư bằng AI**.
- Phân đoạn logic: kính gửi / đoạn 1 / đoạn 2 / đoạn 3 / đoạn 4 / thông tin ủng hộ / cảm ơn / người ký.
- Highlight nhẹ cụm `QUỸ KHUYẾN HỌC XÃ MINH THÁI` như Word bằng đậm/đỏ; không thay đổi dấu, từ ngữ, hoa/thường.
- Nội dung dài: ưu tiên sự dễ đọc thay vì ép “vừa một màn hình”.
- Không thêm lời giới thiệu, con số, phát ngôn, chứng nhận chưa có nguồn.

### 4.5. Khối ủng hộ / Donation Information (tĩnh)

Khối này phải **trang trọng và rõ ràng**, không giống checkout thương mại:

**Dữ liệu trong Word:**

- Tên tài khoản: **QUỸ KHUYẾN HỌC XÃ MINH THÁI**.
- Số tài khoản: **3215201017727**.
- Ngân hàng: **Ngân hàng Nông nghiệp và Phát triển Nông thôn Việt Nam (Agribank), Chi nhánh Trực Ninh Nam Định**.
- Hoặc ủng hộ trực tiếp tại **Phòng Văn hóa - Xã hội xã Minh Thái** — Trụ sở UBND xã Minh Thái, thôn Quần Cát, xã Minh Thái, tỉnh Ninh Bình.

**Bố cục:**

- Desktop: bên trái thông tin tài khoản + hành động sao chép, bên phải khung QR (nếu đã có tệp QR chuẩn). Nếu QR chưa được duyệt, ẩn khung QR hoặc dùng vùng chờ có nhãn chính xác, không tự dựng QR giả.
- Mobile: thông tin tài khoản trên → nút copy → QR lớn phía dưới → địa chỉ tiếp nhận trực tiếp.
- Số tài khoản dùng font tabular numbers, đủ lớn; nút **“Sao chép số tài khoản”** có feedback “Đã sao chép”.
- Nút **“Lưu mã QR”** chỉ có khi thực sự có ảnh QR chuẩn trong dự án; phải tải đúng ảnh.
- Chú thích: “Vui lòng kiểm tra tên tài khoản trên ứng dụng ngân hàng trước khi xác nhận chuyển khoản.”
- **Không có** phần nhập số tiền, nút “Đã chuyển khoản”, bộ đếm đóng góp, kiểm tra số dư, kết nối ngân hàng, tự động xác nhận, form yêu cầu chụp biên lai.
- QR phải được thử quét trên ít nhất 2 ứng dụng ngân hàng, đối chiếu tên tài khoản và số tài khoản trước khi đưa lên môi trường thật.
- Có thể tạo QR tĩnh offline từ dữ liệu ngân hàng đã xác minh bằng thư viện đáng tin cậy, nhưng **không phụ thuộc API tạo QR ngoài** ở runtime và không coi việc sinh QR là xác nhận thông tin ngân hàng. Bản mặc định nên nhận một file `public/images/vietqr-approved.png` từ ban tổ chức.

### 4.6. Lời cảm ơn và người ký

- Dòng “**Trân trọng cảm ơn!**” có thể làm lớn, kiểu chữ Noto Serif Italic, màu đỏ đậm.
- Góc ký hiển thị chính xác ngày, tư cách ký và tên **Mai Văn Chiến** theo Word.
- Nếu có ảnh chữ ký thật được phép sử dụng mới hiển thị; nếu không, tên người ký là văn bản thuần, không tạo chữ ký giả.
- Không làm dấu tròn đỏ mô phỏng dấu cơ quan; không ghép dấu vào web.
- Cuối cùng là dòng khẩu hiệu trở lại, divider sách mở cách điệu và khu vực chia sẻ.

### 4.7. Thanh thao tác tối giản

- Trên desktop: có thể đặt icon chia sẻ ở cạnh trang hoặc góc phải trong khu vực nội dung, không dùng navbar lớn.
- Trên mobile: một sticky CTA nhỏ **“Thông tin ủng hộ”** chỉ xuất hiện sau khi người dùng đã đọc tới một độ sâu hợp lý; bấm thì cuộn tới `#ung-ho`. Không che chữ.
- Hành động hữu ích: `Sao chép liên kết`, `Chia sẻ` (Web Share API khi hỗ trợ; fallback copy link), `Xem lại bìa`.
- Không nên đặt nút “Ủng hộ ngay” dày đặc từ đầu đến cuối; thư mang tính kêu gọi chân thành, không ép buộc.

---

## 5. Responsive và breakpoint

| Kích thước | Bố cục | Nội dung / điều khiển |
|---|---|---|
| 320–359 px | Mobile nhỏ | Không tràn ngang; font body >=16px; QR vừa chiều rộng; tên Quỹ tự xuống dòng |
| 360–767 px | Mobile tiêu chuẩn | Một cột, cuộn dọc, padding 20–24 px, button min-height 48 px |
| 768–1023 px | Tablet | Giấy width ~92vw, padding 36–48px, thẻ QR có thể hai cột nếu đủ rộng |
| 1024–1439 px | Desktop/laptop | Khung giấy max 960 px, chữ max 68–72ch, không chia nội dung thành 2 cột |
| >=1440 px | Desktop rộng | Khung giấy không nở quá 1020 px; để nền đỏ và hoa văn thoáng hai bên |

**Đặc biệt test** 320×568, 375×667, 390×844, 430×932, 768×1024, 1366×768, 1440×900, 1920×1080; cả portrait/landscape nếu hợp lý. Không có scrollbar ngang. Kích thước tương tác tối thiểu **44×44 CSS px**, nên đặt 48 px cho nút chính.

---

## 6. Motion & hiệu ứng

| Thành phần | Thời gian | Easing | Hành vi |
|---|---:|---|---|
| Ánh sáng nền bìa | 6–12s | ease-in-out | Thay đổi opacity cực nhẹ, không chớp |
| Hover nút mở thư | 160–220ms | ease-out | Nâng 2 px, thêm shadow nhẹ |
| Mở bìa thư | 650–900ms | ease-in-out | Chuyển cover → letter, 1 lần |
| Nội dung vào viewport | 250–450ms | ease-out | TranslateY 8px + fade, 1 lần |
| Toast “Đã sao chép” | 150–220ms | ease-out | Hiện/ngắt gọn, aria-live polite |

- Không hiệu ứng particle che chữ; giới hạn tổng số DOM particle nếu dùng, tốt nhất thuần CSS/SVG.
- Không áp dụng `backdrop-filter` hoặc blur nặng trên toàn màn hình.
- Tắt animation khi tab không hiển thị nếu có loop; tôn trọng `prefers-reduced-motion`.
- Hỗ trợ nhấn nút nhiều lần không gây chạy animation chồng, không bị stuck giữa trạng thái.

---

## 7. Nền, hình minh họa, asset

**Hai PNG người dùng cung cấp chỉ dùng làm _visual references_:**

1. `assets/reference-bia-ngoai.png`: bìa đỏ, điểm vàng, sách mở, bố cục cao cấp.
2. `assets/reference-mat-trong.png`: giấy ngà, khung đỏ vàng, chi tiết thư và thông tin ủng hộ.

**Quy tắc sử dụng:**

- Được vẽ lại họa tiết bằng CSS/SVG, tạo các lớp gradient mềm, góc trang trí và biểu tượng sách mới.
- Không chèn toàn bộ ảnh thiệp 2048 px làm background rồi phủ chữ trùng lên trên.
- Không tái sử dụng ảnh có QR quá nhỏ làm QR giao dịch thật; không cắt QR từ ảnh thiệp rồi mặc định đáng tin.
- Không lấy ảnh học sinh thực hoặc biểu trưng tổ chức từ internet để trang trí khi chưa có quyền; website vẫn đẹp chỉ với vector sách, hoa văn và typographic.
- Ưu tiên SVG/vector nội bộ cho hoa văn; hình raster nếu có được tối ưu `webp/avif`; `alt` phù hợp hoặc `aria-hidden` cho phần thuần trang trí.
- OG image riêng kích thước 1200×630, nền đỏ, sách mở, tiêu đề, đường nét vàng; đảm bảo text không cắt. Có thể xuất tĩnh từ thiết kế của Agent.

---

## 8. Component tree và mô hình dữ liệu

```text
App
├── SeoMeta / index.html metadata
├── CoverScene
│   ├── DecorativeBackdrop (aria-hidden)
│   ├── OfficialHeader
│   ├── OpenBookIllustration (svg, aria-hidden)
│   ├── CoverTitle
│   └── OpenLetterButton
├── LetterScene
│   ├── LetterPaper
│   │   ├── OrnamentalHeader
│   │   ├── OfficialHeader
│   │   ├── LetterTitle
│   │   ├── Addressee
│   │   ├── LetterParagraphs[]
│   │   ├── DonationBlock
│   │   │   ├── BankAccountCard
│   │   │   ├── CopyAccountButton
│   │   │   ├── ApprovedQrCard (conditional)
│   │   │   └── DirectSupportAddress
│   │   ├── LetterClosing
│   │   └── SignatureBlock
│   └── SharingFooter
├── FloatingSupportAction (conditional)
└── AccessibleToast
```

**Gợi ý dữ liệu nguồn:**

```ts
export type LetterContent = {
  motto: string;
  authorityLines: string[];
  mainTitle: string;
  subTitle: string;
  fundName: string;
  salutation: string;
  paragraphs: string[];
  supportHeading: string;
  bank: {
    accountNumber: string;
    accountName: string;
    bankFullName: string;
    approvedQrAssetPath?: string;
  };
  directSupport: { office: string; address: string };
  closing: string;
  dateLine: string;
  signatoryAuthorityLines: string[];
  signatoryPosition: string;
  signatoryName: string;
};
```

Không để nội dung/địa chỉ/số tài khoản rải rác dưới dạng hardcode trong nhiều component; dùng `src/content/letter.ts` làm nguồn sự thật duy nhất. Sao chép số tài khoản từ chính thuộc tính dữ liệu này.

---

## 9. Yêu cầu kỹ thuật

### 9.1. Stack và lưu trữ

- **Vite + React + TypeScript + Tailwind CSS**; `Motion` hoặc `Framer Motion` chỉ dùng cho các scene cần animation, không cần thêm framework nặng.
- **Cloudflare Pages** triển khai tĩnh; `npm run build` xuất `dist/`; không dùng server/Cloudflare Workers/D1 nếu không có nhu cầu thực.
- **Không backend, không database, không API ngân hàng, không webhook thanh toán, không xác nhận tiền đến.**
- Phần cài đặt không phụ thuộc dịch vụ trả phí.
- Có thể sử dụng `lucide-react` nhưng dùng SVG tự vẽ cho biểu tượng sách chủ đạo để không mang cảm giác dashboard.
- Không đưa tệp `source/thu-ngo-goc.docx` hoặc ảnh reference chưa tối ưu vào `public/` khi deploy nếu không cần thiết; chúng chỉ là tư liệu làm việc.

### 9.2. Khả năng tiếp cận

- HTML semantic: `main`, `article`, `header`, `section`, `footer`, heading `h1` duy nhất cho tên thư/Quỹ, `h2` hợp lý.
- Cover CTA là `<button>` thật, tương tác bằng keyboard; có focus ring rõ; không click-only trên hình ảnh.
- Chuyển trạng thái không làm focus biến mất; toast thông báo qua `aria-live="polite"`.
- Nếu ảnh QR thật: `alt="Mã QR chuyển khoản ủng hộ Quỹ Khuyến học xã Minh Thái"`; luôn hiển thị số tài khoản dạng text cho người không quét được.
- Nội dung không bị mất khi phóng to 200%, zoom/chế độ chữ lớn, không chặn chọn/copy văn bản.
- `lang="vi"`, title và meta description tiếng Việt chuẩn Unicode NFC; kiểm tra dấu ở mọi font.
- Reduced motion và hỗ trợ tối thiểu cho trình duyệt phổ biến trên iOS/Android/Windows.

### 9.3. Hiệu năng và SEO

- Thiết kế mobile-first, CSS GPU-friendly; tránh lạm dụng 3D, canvas particle, thư viện animation quá lớn.
- Mục tiêu tham khảo: LCP <2.5s, CLS <0.1 trên điện thoại tầm trung khi mạng ổn định (không cam kết tuyệt đối cho mọi kết nối).
- Tự host font subset Việt nếu có thể; preload font cần thiết; tối ưu ảnh tĩnh.
- Open Graph: `og:title`, `og:description`, `og:image` 1200×630, `og:type=website`, Twitter Card; `canonical` phải là URL được người quản trị duyệt, không bịa domain.
- Web Share API khi có; fallback `navigator.clipboard.writeText` có xử lý lỗi và thông báo trạng thái.
- Thêm `robots.txt`, favicon phù hợp, sitemap một URL nếu có domain thật. Không phát tán thông tin riêng ngoài nội dung đã phê duyệt.
- Nếu metadata hiển thị trên Zalo/Facebook không tự làm mới, cung cấp hướng dẫn xử lý cache khi triển khai, không bắt người dùng đăng nhập.

### 9.4. Bảo mật/độ tin cậy

- Không thu thập tên, số điện thoại, CCCD, thông tin học sinh, ảnh chuyển khoản.
- Không có cookie banner nếu không sử dụng tracking/cookie không thiết yếu; tránh thêm analytics/SDK theo dõi không cần thiết.
- Không đưa khóa API vào frontend; thực tế dự án không cần khóa API.
- Định danh ngân hàng phải được **xác minh thủ công** trước khi đăng; nếu chưa xác minh, có cờ cấu hình `SHOW_DONATION_INFO=false` hoặc hiển thị thông tin liên hệ xác nhận thay vì phát hành sai.
- Không hiển thị nút “Đã chuyển khoản thành công”, không đưa ra xác nhận từ UI.

---

## 10. Quy tắc viết nội dung và quản trị

- `03_NOI_DUNG_THU_NGO.md` là source of truth. **Không tự ý thay tên địa phương, sửa ngày tháng 10/10/2026, đổi tên ngân hàng/chi nhánh, địa chỉ, người ký, lời kêu gọi.**
- Trước xuất bản, rà soát bản cuối với Đảng ủy/HĐND/UBND/Ủy ban MTTQ Việt Nam xã Minh Thái hoặc đầu mối được giao; đảm bảo được phép sử dụng nội dung, người ký và tài khoản.
- Bản web nên hiển thị ngày tháng **theo ngày ghi trong thư**, không thay bằng ngày website được tạo.
- Nếu văn bản thay đổi, cập nhật file content và thông báo người phụ trách kiểm duyệt lại; không tự động sửa bằng AI.
- Không tự chèn thông tin buổi lễ ra mắt ngày 29/11/2026 vào **thân thư** vì tài liệu nguồn hiện tại không có đoạn này. Nếu cần, chỉ đưa dưới dạng phụ chú/tính năng tùy chọn được người dùng phê duyệt riêng.

---

## 11. Kịch bản kiểm thử / Acceptance checklist

### A. Đúng thông tin

- [ ] Đúng cơ quan, tiêu đề, lời kính gửi, từng đoạn văn và dấu tiếng Việt theo Word.
- [ ] Đúng số tài khoản `3215201017727` và tên `QUỸ KHUYẾN HỌC XÃ MINH THÁI`.
- [ ] Đúng ngân hàng Agribank Chi nhánh Trực Ninh Nam Định; đúng địa điểm Phòng Văn hóa - Xã hội.
- [ ] Đúng ngày `10 tháng 10 năm 2026`; đúng người ký `Mai Văn Chiến`.
- [ ] Không có giao dịch/số dư/tổng giao dịch/bảng thống kê/tự động xác nhận đã chuyển khoản.
- [ ] Nếu có QR: được chủ quản xác nhận, quét thử khớp 100% tên/số tài khoản.

### B. Thị giác

- [ ] Màu đỏ-vàng-ngà hài hòa, nền không chói; cảm giác trang trọng.
- [ ] Không dùng hình chụp thiệp làm nền chứa chữ trùng với HTML.
- [ ] Font Be Vietnam Pro + Noto Serif đủ dấu, không vỡ ký tự.
- [ ] Thiết kế cover nổi bật, thư dễ đọc; văn bản không ép hai cột chữ nhỏ.
- [ ] Hoa văn chỉ điểm xuyết, QR/thông tin ngân hàng rõ ràng.

### C. Tương tác

- [ ] Nút mở thư hoạt động cả chuột/touch/keyboard.
- [ ] Nút đọc ngay và deep link `#thu-ngo` hoạt động.
- [ ] Hiệu ứng hoàn tất, không mắc kẹt, reduced-motion đúng.
- [ ] Copy số tài khoản và copy link phản hồi chính xác.
- [ ] Share Web API có fallback.
- [ ] Cuộn tới khối ủng hộ hoạt động, không che nội dung.

### D. Responsive/quality

- [ ] Không tràn ngang ở 320/375/390/430 px.
- [ ] Nội dung đọc tốt ở laptop 1366×768, PC 1920×1080 và tablet.
- [ ] Không lỗi khi refresh/tải trực tiếp `/#thu-ngo`.
- [ ] Build sạch; không TS errors, lỗi console và cảnh báo React keys.
- [ ] Có favicon, title, description, og:image; liên kết chia sẻ không hỏng.
- [ ] Không có runtime call tới dịch vụ ngân hàng, tracking hoặc API trả phí.

---

## 12. Sản phẩm bàn giao kỳ vọng từ Agent

1. Repo/source code đầy đủ React + TypeScript + Tailwind.
2. 1 web app hoàn chỉnh theo storyboard ở phần 2.
3. Nội dung được chép **nguyên từ Word** vào file dữ liệu có cấu trúc, không tự sáng tác.
4. `public/images/vietqr-approved.png` **chỉ khi có QR đã xác minh**; nếu chưa, thiết kế placeholder/ẩn QR rõ ràng.
5. `public/og-image.png` (1200×630), favicon và các SVG decorative do Agent thiết kế.
6. `README.md`: lệnh chạy, lệnh build, cách đổi nội dung/QR, cách deploy Cloudflare Pages, checklist phê duyệt trước xuất bản.
7. Test thủ công/QA ở các kích thước mục 5, báo cáo các điểm đã kiểm tra và chưa thể xác minh.

### Ưu tiên triển khai

**P0 – không được thiếu:** bìa, mở thư, đủ nội dung Word, thông tin ủng hộ tĩnh, lời cảm ơn/người ký, responsive, font Việt chuẩn, copy số tài khoản, không có dữ liệu giao dịch.

**P1 – nâng trải nghiệm:** chia sẻ native/fallback, deep link, reduced motion, SEO/OG, SVG tinh tế, floating CTA không che nội dung.

**P2 – tùy chọn:** hoa văn động siêu nhẹ, in thư ra PDF qua trình duyệt `@media print` (không bắt buộc), nút tải ảnh bìa chia sẻ.

---

**Quy tắc chốt:** “Trông như một bức thư được trân trọng trao gửi, đọc được như một văn bản điện tử hiện đại, và hoạt động như một trang web cực kỳ nhẹ.”
