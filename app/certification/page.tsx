"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Footer from "../components/Footer";

const certifications = [
    {
      title: "벤처기업인증",
      category: "VENTURE CERTIFICATION",
      description: "기술성과 성장성을 인정받아 정부 지원 혜택을 받을 수 있는 벤처기업 인증",
      detailedInfo: "벤처기업 인증을 통해 세제 혜택, 정책자금 지원, 인력 채용 우대 등 다양한 혜택을 받을 수 있습니다. 기술평가보증, 연구개발비 세액공제, 스톡옵션 부여 등의 특별한 지원이 제공됩니다.",
      image: "/certificationpage-venture.jpg",
      gradient: "from-emerald-400 via-teal-500 to-cyan-600",
      href: "/certification/venture",
    },
    {
      title: "이노비즈인증",
      category: "INNOBIZ CERTIFICATION",
      description: "기술혁신형 중소기업 인증으로 경쟁력 있는 기업임을 증명",
      detailedInfo: "기술혁신형 중소기업(INNO-BIZ)은 기술 우위를 바탕으로 경쟁력을 확보한 기업을 인증합니다. R&D 투자 지원, 기술개발 자금 융자, 해외 마케팅 지원 등의 혜택이 제공됩니다.",
      image: "/certificationpage-inobiz.jpg",
      gradient: "from-blue-400 via-indigo-500 to-purple-600",
      href: "/certification/innobiz",
    },
    {
      title: "메인비즈인증",
      category: "MAINBIZ CERTIFICATION",
      description: "경영혁신형 중소기업 인증으로 우수한 경영 시스템 보유 증명",
      detailedInfo: "경영혁신형 중소기업(MAIN-BIZ)은 우수한 경영시스템을 갖춘 기업을 인증합니다. 정책자금 지원, 경영 컨설팅, 해외 진출 지원, 신용보증 우대 등의 혜택을 받을 수 있습니다.",
      image: "/certificationpage-mainbiz.jpg",
      gradient: "from-orange-400 via-amber-500 to-yellow-600",
      href: "/certification/mainbiz",
    },
    {
      title: "ISO 인증",
      category: "ISO CERTIFICATION",
      description: "국제 표준 품질경영시스템 인증으로 글로벌 신뢰도 확보",
      detailedInfo: "ISO 인증은 국제표준화기구가 정한 품질경영시스템 인증입니다. ISO 9001(품질경영), ISO 14001(환경경영), ISO 45001(안전보건경영) 등을 통해 글로벌 경쟁력을 확보할 수 있습니다.",
      image: "/certificationpage-iso.jpg",
      gradient: "from-cyan-400 via-sky-500 to-blue-600",
      href: "/certification/iso",
    },
    {
      title: "기업부설연구소",
      category: "RESEARCH CENTER",
      description: "연구개발 전담 조직 설립으로 기술 개발 및 세제 혜택 확보",
      detailedInfo: "기업부설연구소 인정을 받으면 연구개발비 세액공제, 연구전담요원 병역특례, 국가연구개발사업 참여 자격, 우수인력 채용 지원 등 다양한 혜택이 제공됩니다.",
      image: "/certificationpage-research.jpg",
      gradient: "from-violet-400 via-purple-500 to-fuchsia-600",
      href: "/certification/research-center",
    },
    {
      title: "소부장전문기업",
      category: "MATERIALS & PARTS",
      description: "소재·부품·장비 분야 전문기업 지정으로 특별 지원 수혜",
      detailedInfo: "소재·부품·장비 전문기업으로 지정되면 R&D 자금 지원 확대, 세액 감면 혜택, 수출 지원, 공공구매 우선 구매 대상 지정 등의 특별한 혜택을 받을 수 있습니다.",
      image: "/certificationpage-professional.jpg",
      gradient: "from-green-400 via-emerald-500 to-teal-600",
      href: "/certification/materials-parts",
    },
];

const clientReviews = [
    {
      type: "VIDEO",
      category: "CLIENT TESTIMONIAL",
      title: "벤처기업인증으로 세제 혜택 극대화",
      company: "테크스타트업",
      date: "2025년 11월 15일",
      image: "/review-1.jpg",
      videoIcon: true,
    },
    {
      type: "ARTICLE",
      category: "SUCCESS STORY",
      title: "이노비즈 인증 성공 사례: R&D 지원금 확보",
      company: "이노베이션랩",
      date: "2025년 10월 28일",
      image: "/review-2.jpg",
      videoIcon: false,
    },
    {
      type: "INTERVIEW",
      category: "CEO INTERVIEW",
      title: "ISO 인증으로 글로벌 시장 진출 성공",
      company: "글로벌테크",
      date: "2025년 10월 12일",
      image: "/review-3.jpg",
      videoIcon: false,
    },
    {
      type: "ARTICLE",
      category: "CASE STUDY",
      title: "기업부설연구소 설립으로 인재 유치 성공",
      company: "리서치프로",
      date: "2025년 9월 20일",
      image: "/review-4.jpg",
      videoIcon: false,
    },
];

export default function CertificationPage() {
  const [activeIndex, setActiveIndex] = useState(certifications.length);
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Create infinite loop by duplicating items
  const extendedCertifications = [...certifications, ...certifications, ...certifications];

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setActiveIndex((prev) => prev + 1);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  // Reset position when reaching ends
  useEffect(() => {
    if (activeIndex >= certifications.length * 2) {
      setTimeout(() => {
        setActiveIndex(certifications.length);
      }, 500);
      return;
    }

    if (activeIndex < 0) {
      setTimeout(() => {
        setActiveIndex(certifications.length * 2 - 1);
      }, 500);
    }
  }, [activeIndex, certifications.length]);

  const handlePrevious = () => {
    setIsPaused(true);
    setActiveIndex((prev) => prev - 1);
    setTimeout(() => setIsPaused(false), 5000);
  };

  const handleNext = () => {
    setIsPaused(true);
    setActiveIndex((prev) => prev + 1);
    setTimeout(() => setIsPaused(false), 5000);
  };

  const handleCardClick = (index: number) => {
    setIsPaused(true);
    setActiveIndex(index);
    setTimeout(() => setIsPaused(false), 5000);
  };

  const getCardStyle = (index: number) => {
    const position = index - activeIndex;
    
    let translateX = 0;
    let zIndex = 0;
    let opacity = 0.3;
    let width = 220;
    let height = 340;

    // 2D layout: show 5 cards, center is largest
    if (position === 0) {
      // Center card - Biggest
      translateX = 0;
      width = 520;
      height = 580;
      zIndex = 20;
      opacity = 1;
    } else if (position === -1) {
      // Left inner
      translateX = -432;
      width = 320;
      height = 420;
      zIndex = 15;
      opacity = 1;
    } else if (position === 1) {
      // Right inner
      translateX = 432;
      width = 320;
      height = 420;
      zIndex = 15;
      opacity = 1;
    } else if (position === -2) {
      // Left outer
      translateX = -734;
      width = 260;
      height = 360;
      zIndex = 10;
      opacity = 1;
    } else if (position === 2) {
      // Right outer
      translateX = 734;
      width = 260;
      height = 360;
      zIndex = 10;
      opacity = 1;
    } else {
      // Hidden
      translateX = position > 0 ? 1200 : -1200;
      width = 240;
      height = 320;
      zIndex = 1;
      opacity = 0;
    }

    return {
      transform: `translateX(${translateX}px)`,
      width: `${width}px`,
      height: `${height}px`,
      zIndex,
      opacity,
      transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
    };
  };

  return (
    <div className="min-h-screen bg-white">
      

      {/* Hero Section */}
      <section className="bg-white py-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-900">
              기업인증센터
            </h1>
            <p className="text-xl md:text-2xl text-gray-800 mb-4 font-semibold">
              기업의 가치를 높이는 확실한 방법
            </p>
            <p className="text-lg text-gray-600 mx-auto whitespace-nowrap">
              벤처메이커가 정책자금 100% 확보 전략까지, 당신의 비즈니스가 멈추지 않도록 가장 확실한 길을 설계합니다.
            </p>
          </div>
        </div>
      </section>

      {/* 3D Carousel Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6">
          {/* Carousel Container */}
          <div className="relative h-[600px] flex items-center justify-center">
            {/* Cards */}
            <div className="relative w-full flex items-center justify-center">
              {extendedCertifications.map((cert, index) => {
                const cardStyle = getCardStyle(index);
                const originalIndex = index % certifications.length;
                return (
                  <Link
                    key={index}
                    href={cert.href}
                    className="absolute cursor-pointer"
                    style={cardStyle}
                    onClick={(e) => {
                      if (index !== activeIndex) {
                        e.preventDefault();
                        handleCardClick(index);
                      }
                    }}
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className="relative w-full h-full rounded-2xl shadow-md hover:shadow-lg transition-shadow overflow-hidden">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-2xl font-extrabold mb-3 leading-tight">
                          {cert.title}
                        </h3>
                        <p className="text-sm leading-relaxed whitespace-pre-line opacity-90 mb-4">
                          {cert.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={handlePrevious}
              className="absolute left-4 z-30 bg-white hover:bg-gray-100 p-4 rounded-full shadow-lg transition-all hover:scale-110 border border-gray-200"
              aria-label="Previous"
            >
              <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 z-30 bg-white hover:bg-gray-100 p-4 rounded-full shadow-lg transition-all hover:scale-110 border border-gray-200"
              aria-label="Next"
            >
              <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {certifications.map((_, index) => (
              <button
                key={index}
                onClick={() => handleCardClick(index + certifications.length)}
                className={`w-3 h-3 rounded-full transition-all ${
                  (activeIndex % certifications.length) === index
                    ? "bg-blue-600 w-8" 
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Client Reviews Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-2">
              고객 성공 사례
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {clientReviews.map((review, index) => (
              <div
                key={index}
                className="group relative h-[500px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src={review.image} 
                    alt={review.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60"></div>
                </div>

                {/* Video Play Button (if applicable) */}
                {review.videoIcon && (
                  <div className="absolute top-6 left-6 z-10">
                    <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors">
                      <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                )}

                {/* Category Badge */}
                <div className="absolute top-6 right-6 z-10">
                  <div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full">
                    <span className="text-white text-xs font-semibold tracking-wider">
                      {review.category}
                    </span>
                  </div>
                </div>

                {/* Bottom Info Card */}
                <div className="absolute bottom-0 left-0 right-0 z-10">
                  <div className="bg-white/95 backdrop-blur-sm rounded-t-3xl p-6">
                    {/* Type and Date */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-semibold text-gray-500 tracking-wider">
                        {review.type}
                      </span>
                      <span className="text-xs text-gray-400">•</span>
                      <span className="text-xs text-gray-500">
                        {review.date}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight line-clamp-2">
                      {review.title}
                    </h3>

                    {/* Company */}
                    <p className="text-sm text-gray-600">
                      {review.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
<section className="py-20 bg-gradient-to-b from-orange-50 via-white to-blue-50">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-blue-900 mb-4">
        왜 기업인증이 필요한가요?
      </h2>
      <p className="text-lg text-blue-700 max-w-3xl mx-auto">
        기업인증은 단순한 인증서가 아닙니다. 세제 혜택, 정책자금 지원, 
        입찰 우대 등 실질적인 혜택을 제공하며, 기업의 신뢰도와 경쟁력을 높입니다.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      {/* Card 1 - 세제 혜택 */}
      <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100 hover:border-blue-200">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-t-2xl"></div>
        
        <div className="flex items-center justify-center w-16 h-16 bg-blue-50 rounded-xl mb-6 group-hover:bg-blue-100 transition-colors">
          <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>

        <h3 className="text-2xl font-bold text-blue-900 mb-3">세제 혜택</h3>
        <p className="text-blue-700 leading-relaxed">
          법인세 감면, 세액공제 등 다양한 세제 혜택 제공
        </p>

        <div className="mt-6 pt-6 border-t border-blue-100">
          <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:translate-x-2 transition-transform">
            <span>자세히 알아보기</span>
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Card 2 - 정책자금 지원 */}
      <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-orange-100 hover:border-orange-200">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-t-2xl"></div>
        
        <div className="flex items-center justify-center w-16 h-16 bg-orange-50 rounded-xl mb-6 group-hover:bg-orange-100 transition-colors">
          <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        </div>

        <h3 className="text-2xl font-bold text-blue-900 mb-3">정책자금 지원</h3>
        <p className="text-blue-700 leading-relaxed">
          저금리 융자, R&D 지원금 등 정부 지원 프로그램 접근
        </p>

        <div className="mt-6 pt-6 border-t border-orange-100">
          <div className="flex items-center text-orange-600 font-semibold text-sm group-hover:translate-x-2 transition-transform">
            <span>자세히 알아보기</span>
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Card 3 - 기업 신뢰도 */}
      <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100 hover:border-blue-200">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-700 rounded-t-2xl"></div>
        
        <div className="flex items-center justify-center w-16 h-16 bg-blue-50 rounded-xl mb-6 group-hover:bg-blue-100 transition-colors">
          <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
          </svg>
        </div>

        <h3 className="text-2xl font-bold text-blue-900 mb-3">기업 신뢰도</h3>
        <p className="text-blue-700 leading-relaxed">
          공공기관 입찰 우대, 거래처 신뢰도 향상
        </p>

        <div className="mt-6 pt-6 border-t border-blue-100">
          <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:translate-x-2 transition-transform">
            <span>자세히 알아보기</span>
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Footer */}
      <Footer />
    </div>
  );
}