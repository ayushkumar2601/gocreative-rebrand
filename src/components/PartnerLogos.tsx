import React from "react";

export default function PartnerLogos() {
  return (
    <div className="flex items-center gap-7 sm:gap-9 mt-6 pt-1">
      {/* TikTok Marketing Partners */}
      <div className="flex items-center gap-2.5 text-[#0A1F44] group cursor-pointer bg-white/80 hover:bg-white px-3.5 py-1.5 rounded-xl border border-gray-200/80 shadow-sm transition-all">
        <div className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center text-[#FF1493]">
          <svg
            viewBox="0 0 32 32"
            fill="currentColor"
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.1 9.8C20.1 9.1 19.5 7.9 19.5 6.6V6H16.1V20.1C16.1 21.8 14.7 23.2 13 23.2C11.3 23.2 9.9 21.8 9.9 20.1C9.9 18.4 11.3 17 13 17C13.4 17 13.8 17.1 14.2 17.3V13.8C13.8 13.7 13.4 13.6 13 13.6C9.4 13.6 6.5 16.5 6.5 20.1C6.5 23.7 9.4 26.6 13 26.6C16.6 26.6 19.5 23.7 19.5 20.1V12.7C20.9 13.8 22.7 14.4 24.6 14.4V11C23.3 11 22.1 10.6 21.1 9.8Z"
            />
          </svg>
        </div>
        <div className="flex flex-col leading-tight">
          <span className="font-black text-sm sm:text-[15px] tracking-tight text-[#0A1F44]">
            TikTok
          </span>
          <span className="text-[10px] sm:text-[11px] font-bold text-[#FF1493] tracking-normal">
            Marketing Partner
          </span>
        </div>
      </div>

      {/* Meta Business Partner */}
      <div className="flex items-center gap-2.5 text-[#0A1F44] group cursor-pointer bg-white/80 hover:bg-white px-3.5 py-1.5 rounded-xl border border-gray-200/80 shadow-sm transition-all">
        <div className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center text-[#00B4FF]">
          <svg
            viewBox="0 0 32 32"
            fill="none"
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26.2 11.7C24.4 11.7 22.8 12.6 21.4 14.3C19.7 16.4 18.4 18.9 16.8 18.9C15.2 18.9 13.9 16.4 12.2 14.3C10.8 12.6 9.2 11.7 7.4 11.7C4.4 11.7 2 14.1 2 17.2C2 20.3 4.4 22.7 7.4 22.7C9.2 22.7 10.8 21.8 12.2 20.1C13.9 18 15.2 15.5 16.8 15.5C18.4 15.5 19.7 18 21.4 20.1C22.8 21.8 24.4 22.7 26.2 22.7C29.2 22.7 31.6 20.3 31.6 17.2C31.6 14.1 29.2 11.7 26.2 11.7Z"
              stroke="#00B4FF"
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="flex flex-col leading-tight">
          <span className="font-black text-sm sm:text-[15px] tracking-tight text-[#0A1F44]">
            Meta
          </span>
          <span className="text-[10px] sm:text-[11px] font-bold text-[#00B4FF] tracking-normal">
            Business Partner
          </span>
        </div>
      </div>
    </div>
  );
}
