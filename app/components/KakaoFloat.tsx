"use client";

export default function KakaoFloat() {
  const kakaoLink = "http://pf.kakao.com/_XxmEQn/chat";

  return (
    <div className="fixed bottom-10 right-8 z-50">
      <a
        href={kakaoLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-16 h-16 bg-yellow-400 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 relative group"
        aria-label="벤처메이커 카카오톡 문의"
      >
        <svg 
          className="w-8 h-8 text-gray-800" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M12 2C6.48 2 2 5.58 2 10c0 2.89 2.08 5.42 5.12 6.65-.22 1.06-.73 3.35-.83 3.87-.12.62.23.61.48.44.19-.13 3.08-2.14 4.24-2.95.33.05.66.08 1 .08 5.52 0 10-3.58 10-8S17.52 2 12 2z"/>
        </svg>
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
          TALK
        </span>
        
        <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          카카오톡으로 문의하기
        </div>
      </a>
    </div>
  );
}