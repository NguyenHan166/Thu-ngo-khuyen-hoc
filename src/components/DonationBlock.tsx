import React from 'react';
import { MapPin, QrCode, AlertCircle, Download } from 'lucide-react';
import { letterContent } from '../content/letter';
import { CopyAccountButton } from './CopyAccountButton';
import { AgribankLogo } from './AgribankLogo';

interface DonationBlockProps {
  onNotify?: (message: string) => void;
  className?: string;
}

export const DonationBlock: React.FC<DonationBlockProps> = ({
  onNotify,
  className = '',
}) => {
  const { bank, directSupport, supportHeading } = letterContent;

  const handleCopySuccess = () => {
    if (onNotify) {
      onNotify(`Đã sao chép số tài khoản: ${bank.accountNumber}`);
    }
  };

  const hasApprovedQr = Boolean(bank.approvedQrAssetPath);

  return (
    <section
      id="ung-ho"
      aria-labelledby="donation-heading"
      className={`my-4 sm:my-5 scroll-mt-6 ${className}`}
    >
      {/* Lead In Heading */}
      <div className="text-center mb-2.5 sm:mb-3">
        <h3
          id="donation-heading"
          className="font-serif font-bold text-base sm:text-lg text-red-950 leading-snug"
        >
          {supportHeading}
        </h3>
      </div>

      {/* Main Container - Compact Bank Slip Design */}
      <div className="bg-white/95 border border-gold-500/35 rounded-2xl p-3.5 sm:p-5 shadow-sm">
        <div
          className={`grid gap-3.5 sm:gap-4 items-center ${
            hasApprovedQr ? 'grid-cols-1 md:grid-cols-12' : 'grid-cols-1'
          }`}
        >
          {/* Bank Account Info Column */}
          <div className={hasApprovedQr ? 'md:col-span-7' : 'max-w-xl mx-auto w-full'}>
            {/* Header: Agribank Logo + Badge */}
            <div className="flex items-center justify-between gap-2 pb-2 border-b border-gold-500/20">
              <AgribankLogo className="h-7 sm:h-8" />
              <span className="text-[10.5px] font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200/80 px-2 py-0.5 rounded-full">
                Tài khoản chính thức
              </span>
            </div>

            <div className="mt-2.5 space-y-2 text-left">
              {/* Account Number Box with inline or direct copy button */}
              <div className="bg-paper-100/70 border border-line-gold/50 rounded-xl p-2.5 sm:p-3 flex flex-wrap items-center justify-between gap-2">
                <div>
                  <span className="block text-[10.5px] font-semibold uppercase tracking-wider text-ink-700">
                    Số tài khoản
                  </span>
                  <span className="font-mono font-bold text-xl sm:text-2xl text-red-900 tracking-wider">
                    {bank.accountNumber}
                  </span>
                </div>
                <CopyAccountButton
                  onCopySuccess={handleCopySuccess}
                  className="px-3.5 py-1.5 text-xs min-h-[38px] rounded-lg"
                />
              </div>

              {/* Account Name & Branch in compact format */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                <div className="bg-paper-50/60 p-2 rounded-lg border border-line-gold/30">
                  <span className="block text-[10.5px] font-semibold uppercase tracking-wider text-ink-700 mb-0.5">
                    Tên chủ tài khoản
                  </span>
                  <p className="font-sans font-bold text-xs sm:text-sm text-ink-900 uppercase leading-snug">
                    {bank.accountName}
                  </p>
                </div>
                <div className="bg-paper-50/60 p-2 rounded-lg border border-line-gold/30">
                  <span className="block text-[10.5px] font-semibold uppercase tracking-wider text-ink-700 mb-0.5">
                    Ngân hàng & Chi nhánh
                  </span>
                  <p className="text-[11.5px] text-ink-900 font-medium leading-snug">
                    Agribank Chi nhánh Trực Ninh Nam Định
                  </p>
                </div>
              </div>

              {/* Verification Advisory Note */}
              <div className="flex items-center gap-1.5 text-[11px] text-amber-900/90 bg-amber-50/80 border border-amber-200/60 rounded-md px-2.5 py-1.5">
                <AlertCircle className="w-3.5 h-3.5 text-amber-700 shrink-0" aria-hidden="true" />
                <p className="leading-snug">
                  {bank.note}
                </p>
              </div>
            </div>
          </div>

          {/* QR Code Column (Compact preview) */}
          {hasApprovedQr && (
            <div className="md:col-span-5 flex flex-col items-center justify-center p-2.5 bg-paper-50/80 rounded-xl border border-line-gold/40 text-center">
              <div className="flex items-center gap-1 text-[10.5px] font-semibold uppercase tracking-wider text-gold-700 mb-1.5">
                <QrCode className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Quét mã VietQR chuyển khoản</span>
              </div>

              {/* QR Image Box */}
              <div className="bg-white p-2 rounded-lg border border-gold-500/30 shadow-sm max-w-[170px] sm:max-w-[180px] mx-auto">
                <img
                  src={bank.approvedQrAssetPath}
                  alt="Mã QR chuyển khoản ủng hộ Quỹ Khuyến học xã Minh Thái"
                  className="w-full h-auto aspect-square object-contain rounded"
                  loading="eager"
                />
              </div>

              {/* Download QR Button */}
              <a
                href={bank.approvedQrAssetPath}
                download="VietQR-Quy-Khuyen-Hoc-Minh-Thai.png"
                className="inline-flex items-center gap-1 mt-1.5 text-[11px] font-semibold text-red-900 hover:text-red-700 py-0.5 px-2 rounded hover:bg-red-50 transition-colors"
              >
                <Download className="w-3 h-3" aria-hidden="true" />
                <span>Tải ảnh mã QR</span>
              </a>
            </div>
          )}
        </div>

        {/* Direct Support Section - Compact Strip */}
        <div className="mt-3 pt-2.5 border-t border-gold-500/20 flex items-center gap-2.5 text-left text-xs">
          <div className="p-1 rounded bg-red-900/10 text-red-900 shrink-0">
            <MapPin className="w-3.5 h-3.5 text-red-900" aria-hidden="true" />
          </div>
          <p className="text-[11.5px] text-ink-700 leading-snug">
            <strong className="text-red-950 font-semibold">{directSupport.title}</strong>{' '}
            <span className="font-medium text-ink-900">{directSupport.office}</span> — {directSupport.address}
          </p>
        </div>
      </div>
    </section>
  );
};
