"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const [showCertDropdown, setShowCertDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileCertOpen, setMobileCertOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const certificationCategories = [
    { name: "벤처기업인증", href: "/certification/venture" },
    { name: "이노비즈인증", href: "/certification/innobiz" },
    { name: "메인비즈인증", href: "/certification/mainbiz" },
    { name: "ISO", href: "/certification/iso" },
    { name: "기업부설연구소", href: "/certification/research-center" },
    { name: "소부장전문기업", href: "/certification/materials-parts" },
  ];

  return (
    <header className="w-full bg-white border-b border-gray-200 relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src="/venture-maker-logo.png"
            alt="Venture Maker Logo"
            className="h-5 sm:h-6 object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center gap-10">
          <nav className="flex items-center gap-8 text-sm font-semibold text-gray-700">
            <Link href="/about" className="hover:text-gray-900 whitespace-nowrap">
              회사소개
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setShowCertDropdown(true)}
              onMouseLeave={() => setShowCertDropdown(false)}
            >
              <Link href="/certification" className="hover:text-gray-900 whitespace-nowrap">
                기업인증센터
              </Link>

              {showCertDropdown && (
                <>
                  <span
                    className="absolute top-full left-0 right-0 h-3"
                    aria-hidden="true"
                  />
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
                    {certificationCategories.map((category, index) => (
                      <Link
                        key={index}
                        href={category.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>

            <Link href="/insights" className="hover:text-gray-900 whitespace-nowrap">
              경영 인사이트
            </Link>
            <Link
              href="/#ai-consulting"
              onClick={(e) => {
                if (pathname !== "/") return;
                e.preventDefault();
                const element = document.getElementById("ai-consulting");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth", block: "start" });
                } else {
                  router.push("/#ai-consulting");
                }
              }}
              className="font-semibold text-orange-500 hover:opacity-80 cursor-pointer whitespace-nowrap"
            >
              벤처메이커 AI
            </Link>
          </nav>

          <Link
            href="/consult"
            className="inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-semibold text-white transition bg-[#2563eb] hover:bg-[#1d4ed8]"
          >
            상담 신청
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="sm:hidden flex items-center justify-center w-10 h-10"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="메뉴 열기"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg z-50">
          <nav className="flex flex-col px-6 py-4">
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-4 text-base font-medium text-gray-800 border-b border-gray-100"
            >
              회사소개
            </Link>

            {/* 기업인증센터 with sub-items */}
            <div className="border-b border-gray-100">
              <button
                onClick={() => setMobileCertOpen(!mobileCertOpen)}
                className="w-full flex items-center justify-between py-4 text-base font-medium text-gray-800"
              >
                기업인증센터
                <svg
                  className={`w-4 h-4 text-gray-500 transition-transform ${mobileCertOpen ? "rotate-180" : ""}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileCertOpen && (
                <div className="pb-3 pl-4 space-y-1">
                  <Link
                    href="/certification"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2 text-sm text-gray-600"
                  >
                    전체보기
                  </Link>
                  {certificationCategories.map((category, index) => (
                    <Link
                      key={index}
                      href={category.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 text-sm text-gray-600"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/insights"
              onClick={() => setMobileMenuOpen(false)}
              className="py-4 text-base font-medium text-gray-800 border-b border-gray-100"
            >
              경영 인사이트
            </Link>

            <Link
              href="/#ai-consulting"
              onClick={(e) => {
                setMobileMenuOpen(false);
                if (pathname === "/") {
                  e.preventDefault();
                  const element = document.getElementById("ai-consulting");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }
              }}
              className="py-4 text-base font-medium text-orange-500 border-b border-gray-100"
            >
              벤처메이커 AI
            </Link>

            <Link
              href="/consult"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 mb-2 inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] transition"
            >
              상담 신청
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
