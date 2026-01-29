"use client";

export default function KakaoFloat() {
  // 카카오톡 오픈채팅방 링크 (실제 링크로 교체 필요)
  const kakaoLink = "https://open.kakao.com/o/your-link-id"; // 실제 오픈채팅방 링크로 변경하세요

  return (
    <div className="fixed bottom-10 right-8 z-50">
      <a
        href={kakaoLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-16 h-16 bg-[#FEE500] rounded-full shadow-lg hover:scale-110 transition-transform duration-300 relative group"
        aria-label="카카오톡 문의"
      >
        <i className="fa-solid fa-comments text-2xl text-[#3C1E1E]"></i>
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
          TALK
        </span>
        
        {/* 호버 시 툴팁 */}
        <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          카카오톡으로 문의하기
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
        </div>
      </a>
    </div>
  );
}
