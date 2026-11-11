/**
 * DỮ LIỆU NỘI DUNG THƯ NGỎ — QUỸ KHUYẾN HỌC XÃ MINH THÁI
 * 
 * Nguồn chính thức: source/thu-ngo-goc.docx & 03_NOI_DUNG_THU_NGO.md
 * NGUYÊN TẮC: Nguyên văn 100%, bảo tồn dấu tiếng Việt, không tự ý sửa đổi,
 * không chèn thông tin ngoài tài liệu nguồn.
 */

export interface LetterContent {
  motto: string;
  mottoSub: string;
  authorityLines: string[];
  province: string;
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
    /**
     * Đường dẫn ảnh QR đã được phê duyệt và kiểm tra khớp thông tin.
     * Ảnh QR chuẩn đã được trích từ assets và đặt tại '/images/vietqr-approved.png'.
     */
    approvedQrAssetPath?: string;
    note: string;
  };
  directSupport: {
    title: string;
    office: string;
    address: string;
  };
  closing: string;
  dateLine: string;
  signatoryAuthorityLines: string[];
  signatoryPosition: string;
  signatoryName: string;
}

export const letterContent: LetterContent = {
  motto: "TRÍ THỨC THẮP SÁNG TƯƠNG LAI",
  mottoSub: "Vì tri thức  •  Vì tương lai quê hương",
  authorityLines: [
    "ĐẢNG ỦY - HĐND - UBND",
    "ỦY BAN MTTQ VIỆT NAM XÃ MINH THÁI"
  ],
  province: "TỈNH NINH BÌNH",
  mainTitle: "THƯ NGỎ",
  subTitle: "Chung tay xây dựng",
  fundName: "QUỸ KHUYẾN HỌC XÃ MINH THÁI",
  salutation: "Kính gửi: Các cơ quan, đơn vị, doanh nghiệp, doanh nhân, các tổ chức, cá nhân, các nhà hảo tâm, cán bộ, chiến sĩ lực lượng vũ trang và Nhân dân.",
  paragraphs: [
    "Hiếu học là truyền thống quý báu của dân tộc Việt Nam, là nền tảng quan trọng góp phần nâng cao dân trí, bồi dưỡng nhân tài và xây dựng quê hương ngày càng phát triển. Trong những năm qua, công tác Khuyến học, Khuyến tài, xây dựng xã hội học tập luôn nhận được sự quan tâm của cấp ủy, chính quyền, các cơ quan, đơn vị và đông đảo Nhân dân.",
    "Với mong muốn tiếp tục phát huy truyền thống hiếu học, chăm lo cho sự nghiệp Giáo dục, động viên, khích lệ các em học sinh nỗ lực vươn lên trong học tập, QUỸ KHUYẾN HỌC XÃ MINH THÁI được xây dựng nhằm huy động các nguồn lực xã hội để khen thưởng học sinh có thành tích xuất sắc; hỗ trợ học sinh có hoàn cảnh khó khăn vươn lên trong học tập; động viên các tập thể, cá nhân tiêu biểu trong công tác Khuyến học, Khuyến tài; qua đó góp phần phát triển nguồn nhân lực, xây dựng quê hương Minh Thái ngày càng văn minh, giàu đẹp.",
    "Đảng ủy, HĐND, UBND, Ủy ban MTTQ Việt Nam xã Minh Thái trân trọng kêu gọi các cơ quan, đơn vị, doanh nghiệp, doanh nhân, cán bộ, công chức, viên chức, các tổ chức, cá nhân, các nhà hảo tâm; những người con quê hương Minh Thái đang sinh sống, học tập, công tác trên mọi miền Tổ quốc và ở nước ngoài, bằng tình cảm, trách nhiệm và sự sẻ chia, cùng chung tay ủng hộ QUỸ KHUYẾN HỌC XÃ MINH THÁI.",
    "Mỗi sự chung tay, dù lớn hay nhỏ, đều là nguồn động viên quý báu đối với phong trào Khuyến học, Khuyến tài của địa phương; góp phần gieo thêm những hạt giống của tri thức, chắp cánh cho những ước mơ và mở ra những cơ hội tốt đẹp hơn cho thế hệ trẻ hôm nay và mai sau."
  ],
  supportHeading: "Mọi sự ủng hộ xin gửi về QUỸ KHUYẾN HỌC XÃ MINH THÁI:",
  bank: {
    accountNumber: "3215201017727",
    accountName: "QUỸ KHUYẾN HỌC XÃ MINH THÁI",
    bankFullName: "Ngân hàng Nông nghiệp và Phát triển Nông thôn Việt Nam (Agribank) Chi nhánh Trực Ninh Nam Định",
    approvedQrAssetPath: "/images/vietqr-approved.png",
    note: "Vui lòng kiểm tra tên người thụ hưởng trên ứng dụng ngân hàng trước khi xác nhận chuyển khoản."
  },
  directSupport: {
    title: "Hoặc ủng hộ trực tiếp tại:",
    office: "Phòng Văn hóa - Xã hội xã Minh Thái",
    address: "(Trụ sở UBND xã Minh Thái, thôn Quần Cát, xã Minh Thái, tỉnh Ninh Bình)"
  },
  closing: "Trân trọng cảm ơn!",
  dateLine: "Minh Thái, ngày 10 tháng 10 năm 2026",
  signatoryAuthorityLines: [
    "TM. ĐẢNG ỦY - HĐND - UBND -",
    "ỦY BAN MTTQ VIỆT NAM XÃ MINH THÁI"
  ],
  signatoryPosition: "BÍ THƯ",
  signatoryName: "Mai Văn Chiến"
};
