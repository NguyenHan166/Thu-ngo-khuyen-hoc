# BỘ TÀI LIỆU WEB APP THƯ NGỎ QUỸ KHUYẾN HỌC XÃ MINH THÁI

## Gồm những tệp gì?

| Tệp | Mục đích |
|---|---|
| `01_DESIGN_SPEC.md` | Đặc tả thiết kế toàn diện: concept, màu, font, responsive, motion, UX, cấu trúc component, QA |
| `02_PROMPT_AI_AGENT.md` | Prompt triển khai source code hoàn chỉnh cho AI Agent |
| `03_NOI_DUNG_THU_NGO.md` | Nội dung thư ngỏ trích đúng từ Word mới nhất; số tài khoản, đơn vị nhận, người ký |
| `source/thu-ngo-goc.docx` | File Word nguồn để Agent đối chiếu |
| `assets/reference-bia-ngoai.png` | Ảnh tham khảo bìa đỏ vàng được người dùng cung cấp |
| `assets/reference-mat-trong.png` | Ảnh tham khảo mặt trong thiệp được người dùng cung cấp |

## Cách dùng với AI Agent (Antigravity, Cursor, Codex…)

1. Giải nén **toàn bộ** `BO_TAI_LIEU_THU_NGO_WEBAPP_MINH_THAI.zip` vào một thư mục mà Agent có thể truy cập (ví dụ thư mục dự án).
2. Đảm bảo Agent nhìn thấy cả 3 file `.md`, thư mục `assets/` và `source/`. Không chỉ gửi mỗi ảnh thiệp.
3. Mở `02_PROMPT_AI_AGENT.md`, copy phần từ **“VAI TRÒ CỦA BẠN”** đến hết, gửi cho Agent. Hoặc yêu cầu Agent đọc file prompt rồi thi hành trực tiếp.
4. Cho Agent triển khai và chạy build; yêu cầu kiểm thử mobile/desktop như checklist trong Design Spec.
5. Trước khi đăng công khai: xác minh tên và số tài khoản; bổ sung **mã VietQR độ phân giải cao đã duyệt**; xin duyệt nội dung và tư cách ký theo quy trình của đơn vị.

## Lưu ý quan trọng

- Dự án định hướng **thuần frontend**, không cần thuê API kiểm tra biến động ngân hàng.
- Hai ảnh thiệp chỉ dùng làm **reference**, không dùng nguyên ảnh làm nội dung web để tránh chữ nhỏ và lỗi responsive.
- Word nguồn hiện **không chứa ảnh QR tách riêng**. Ảnh QR nhỏ trong mẫu thiệp chỉ là tham khảo, không nên mặc định sử dụng cho giao dịch thật khi chưa xác minh.
- Không đăng file Word gốc vào public assets của web nếu không có chủ đích công khai bản Word; chỉ nhập nội dung cần hiển thị.
- Mỗi thay đổi vào câu chữ thư ngỏ, dữ liệu ngân hàng và người ký cần được duyệt trước khi xuất bản.

## Thông tin nguồn đã dùng

- **Word gần nhất được tìm thấy:** `Thu_ngo_Quy_Khuyen_hoc_xa_Minh_Thai(2)(10)(4)(2)(9).docx` (11/11/2026).
- Số tài khoản ghi trong Word: `3215201017727`.
- Người ký ghi trong Word: `Mai Văn Chiến` – `BÍ THƯ`.
- Ngày trên thư: `10/10/2026` (giữ nguyên, không sửa thành ngày làm web).
