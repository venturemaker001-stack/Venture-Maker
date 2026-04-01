"use client";

  import Link from "next/link";
  import { useState, useEffect } from "react";
  import Footer from "./components/Footer";
  import { marked } from "marked";

  interface FormData {
    industry: string;
    year: string;
    revenue: string;
    concerns: string;
    strategyPhone: string;
    rndItem: string;
    rndTech: string;
    rndPhone: string;
    swotItem: string;
    swotStrength: string;
    swotPhone: string;
  }

  const items = [
    {
      title: "AI Tech Transformation",
      category: "AI & R&D",
      description:
        "AI 챗봇 기업의 연구소 설립 전략.\n법인세 50% 감면과 벤처인증 동시 획득 노하우",
      image: "/aitechtransformation-mainpage.jpg",
      link: "https://blog.naver.com/eum63/223598143019",
    },
    {
      title: "Fund Optimization",
      category: "FINANCE & TAX",
      description:
        "정책자금 100% 승인을 위한 로드맵.\n재무제표 개선을 통한 신용등급 상향 전략",
      image: "/fundoptimization-mainpage.jpg",
      link: "https://m.blog.naver.com/eum63/224182326880",
    },
    {
      title: "Franchise Expansion",
      category: "FRANCHISE",
      description:
        "외식업 프랜차이즈 '고기명작' 성공 사례.\n메뉴 개발 전담부서 설립으로 가맹점 확장",
      image: "/franchise-mainpage.jpg",
      link: "https://blog.naver.com/eum63/223573977275",
    },
    {
      title: "Smart Factory",
      category: "MANUFACTURING",
      description:
        "제조업 혁신성장형 벤처인증.\n스마트공장 구축 자금 5억 확보 및 기술평가 우수 사례",
      image: "/smartfactory-mainpage.jpg",
      link: "https://blog.naver.com/eum63/223905700120",
    },
    {
      title: "MAIN-BIZ Certification",
      category: "MANAGEMENT",
      description:
        "기술이 없어도 경영 혁신으로 인증 획득.\n메인비즈를 통한 세무조사 유예 및 금리 우대",
      image: "/mainbiz-mainpage.jpg",
      link: "https://blog.naver.com/eum63/223812866952",
    },
    {
      title: "AR & Big Data",
      category: "TECH CONTENT",
      description:
        "빅데이터와 증강현실(AR) 기술을 결합한 콘텐츠 창작.\n벤처와 연구소인증 성공 사례",
      image: "/arbigdata-mainpage.jpg",
      link: "https://blog.naver.com/PostView.naver?blogId=eum63&logNo=223597096021&redirect=Dlog",
    },
  ];

  const certificationCategories = [
    {
      title: "벤처기업인증",
      description: "기술성과 성장성을 인정받아 정부 지원 혜택을 받을 수 있는 벤처기업 인증",
      href: "/certification/venture",
      image: "/certificationpage-venture.jpg",
    },
    {
      title: "이노비즈인증",
      description: "기술혁신형 중소기업 인증으로 경쟁력 있는 기업임을 증명",
      href: "/certification/innobiz",
      image: "/certificationpage-inobiz.jpg",
    },
    {
      title: "메인비즈인증",
      description: "경영혁신형 중소기업 인증으로 우수한 경영 시스템 보유 증명",
      href: "/certification/mainbiz",
      image: "/certificationpage-mainbiz.jpg",
    },
    {
      title: "ISO 인증",
      description: "국제 표준 품질경영시스템 인증으로 글로벌 신뢰도 확보",
      href: "/certification/iso",
      image: "/certificationpage-iso.jpg",
    },
    {
      title: "기업부설연구소",
      description: "연구개발 전담 조직 설립으로 기술 개발 및 세제 혜택 확보",
      href: "/certification/research-center",
      image: "/certificationpage-research.jpg",
    },
    {
      title: "소부장전문기업",
      description: "소재·부품·장비 분야 전문기업 지정으로 특별 지원 수혜",
      href: "/certification/materials-parts",
      image: "/certificationpage-professional.jpg",
    },
  ];

  export default function Home() {
    const [activeTab, setActiveTab] = useState<"strategy" | "rnd" | "swot">("swot");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    
    // AI 폼 상태 관리
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    
    // 폼 데이터 상태
    const [formData, setFormData] = useState<FormData>({
      // Strategy
      industry: "",
      year: "",
      revenue: "",
      concerns: "",
      strategyPhone: "",
      // R&D
      rndItem: "",
      rndTech: "",
      rndPhone: "",
      // SWOT
      swotItem: "",
      swotStrength: "",
      swotPhone: "",
    });

    // Auto-slide functionality
    useEffect(() => {
      if (!isAutoPlaying) return;
      
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % items.length);
      }, 3000); // Slides every 3 seconds

      return () => clearInterval(interval);
    }, [isAutoPlaying]);

    // Navigation functions
    const nextSlide = () => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    };

    const prevSlide = () => {
      setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    };

    // AI API 호출 함수
    const callChatGPT = async (type: "strategy" | "rnd" | "swot") => {
      setLoading(true);
      setResult(null);
      setError(null);

      try {
        let requestData: Record<string, string> = {};

        if (type === "strategy") {
          if (!formData.industry) {
            setError("업종을 입력해주세요.");
            setLoading(false);
            return;
          }
          // 원본 규칙: industry만 전송
          requestData = {
            industry: formData.industry,
          };
        } else if (type === "rnd") {
          if (!formData.rndItem) {
            setError("주력 제품/서비스를 입력해주세요.");
            setLoading(false);
            return;
          }
          if (!formData.rndPhone) {
            setError("연락처를 입력해주세요.");
            setLoading(false);
            return;
          }
          // 원본 규칙: item만 전송
          requestData = {
            item: formData.rndItem,
          };
        } else if (type === "swot") {
          if (!formData.swotItem) {
            setError("업종/아이템을 입력해주세요.");
            setLoading(false);
            return;
          }
          if (!formData.swotPhone) {
            setError("연락처를 입력해주세요.");
            setLoading(false);
            return;
          }
          // 원본 규칙: item만 전송
          requestData = {
            item: formData.swotItem,
          };
        }

        const response = await fetch("/api/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            type,
            data: requestData,
          }),
        });

        const data = await response.json();

        if (!response.ok) {
          // 더 자세한 에러 메시지 표시
          const errorMsg = data.error || "API 호출에 실패했습니다.";
          const details = data.details ? `\n\n상세 정보: ${JSON.stringify(data.details, null, 2)}` : "";
          throw new Error(errorMsg + details);
        }

        // 원본 규칙: marked.parse() 사용
        let finalText: string = marked.parse(data.content) as string;
        
        // 모의 응답인 경우 표시
        if (data.mock) {
          finalText = marked.parse(`🧪 **테스트 모드**: 모의 응답입니다.\n\n---\n\n${data.content}`) as string;
        }

        // R&D와 SWOT의 경우 접수 완료 박스 추가 (원본 HTML과 동일)
        if (type === "rnd" || type === "swot") {
          const phone = type === "rnd" ? formData.rndPhone : formData.swotPhone;
          // 원본 HTML 코드와 동일한 접수 완료 박스
          finalText += `<br><div class="mt-4 p-3 bg-blue-50 rounded border border-blue-100 text-sm">
            <p class="font-bold text-blue-600 mb-1"><i class="fa-solid fa-check-circle mr-1"></i> 접수 완료</p>
            <p class="text-slate-600 mb-1">* 요청하신 연락처(<span class="font-bold">${phone}</span>)로 상세한 리포트가 발송될 예정입니다.</p>
            <p class="text-xs text-slate-400 mt-2">
              [System Log]<br>
              - 분석 요청 사항 구글 시트 등록 완료<br>
              - 카카오톡 알림 발송 요청 완료
            </p>
          </div>`;
        }

        setResult(finalText);

        // 이메일 발송: 종합 진단 / R&D / SWOT 모두 관리자(koreanting1104@gmail.com)에게 발송
        try {
          console.log(`[Email] Sending ${type} form data to admin`);
          const userEmailForApi =
            type === "strategy"
              ? formData.strategyPhone + "@kakao.talk"
              : type === "rnd"
                ? formData.rndPhone + "@kakao.talk"
                : formData.swotPhone + "@kakao.talk";

          const emailResponse = await fetch("/api/send-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              type,
              formData: {
                industry: formData.industry || formData.swotItem || formData.rndItem,
                year: formData.year,
                revenue: formData.revenue,
                concerns: formData.concerns,
                strategyPhone: formData.strategyPhone,
                rndItem: formData.rndItem,
                rndTech: formData.rndTech,
                rndPhone: formData.rndPhone,
                swotItem: formData.swotItem,
                swotStrength: formData.swotStrength,
                swotPhone: formData.swotPhone,
              },
              userEmail: userEmailForApi,
            }),
          });

          if (emailResponse.ok) {
            const result = await emailResponse.json();
            console.log(`[Email] Successfully sent ${type} email to admin:`, result);
          } else {
            const errorText = await emailResponse.text();
            let errorData;
            try {
              errorData = JSON.parse(errorText);
            } catch {
              errorData = { rawError: errorText, status: emailResponse.status, statusText: emailResponse.statusText };
            }
            console.error(`[Email] Failed to send email:`, {
              status: emailResponse.status,
              statusText: emailResponse.statusText,
              error: errorData,
            });
          }
        } catch (emailError) {
          console.error("[Email] Email sending error:", emailError);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "오류가 발생했습니다.");
      } finally {
        setLoading(false);
      }
    };

    // 탭 변경 시 결과 초기화
    const handleTabChange = (tab: "strategy" | "rnd" | "swot") => {
      setActiveTab(tab);
      setResult(null);
      setError(null);
    };

    return (
      <main>
        {/* ================= SECTION 1 : HERO ================= */}
        <section className="w-full bg-white pt-24 pb-12">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <p className="text-sm font-semibold tracking-widest text-orange-500 mb-6">
              TOTAL BUSINESS GROWTH STRATEGY
            </p>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-blue-900 mb-8">
              가능성을 <span className="text-orange-500">확신</span>으로,
              <br />
              스타트업을 <span className="text-orange-500">유니콘</span>으로.
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed">
              벤처인증부터 정책자금 100% 확보 전략까지.
              <br />
              당신의 비즈니스가 멈추지 않도록, 벤처메이커가 가장 확실한 길을 설계합니다.
            </p>
          </div>
        </section>

      {/* ================= SECTION 2 : 3D CAROUSEL ================= */}
  <section className="relative pt-6 pb-16 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">

      {/* Carousel Stage */}
      <div className="relative h-[700px] flex items-center justify-center">
        <div className="relative w-full flex items-center justify-center">

          {[...items, ...items, ...items].map((item, index) => {
            const position = index - currentIndex - items.length;

            let translateX = 0;
            const zIndex = 0;
            let opacity = 1;
            let width = 240;
            let height = 360;

            // ===== POSITIONING (2D, fixed sizes) =====
            if (position === 0) {
              translateX = 0;
              width = 400;
              height = 600;
            } else if (position === -1) {
              translateX = -340;
              width = 240;
              height = 360;
            } else if (position === 1) {
              translateX = 340;
              width = 240;
              height = 360;
            } else if (position === -2) {
              translateX = -680;
              width = 320;
              height = 480;
            } else if (position === 2) {
              translateX = 680;
              width = 320;
              height = 480;
            } else {
              translateX = position > 0 ? 1200 : -1200;
              width = 240;
              height = 360;
              opacity = 0;
            }

            return (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute cursor-pointer flex-shrink-0"
                style={{
                  transform: `translateX(${translateX}px)`,
                  width: `${width}px`,
                  height: `${height}px`,
                  zIndex,
                  opacity,
                  transition: "all 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
                  pointerEvents: opacity === 0 ? "none" : "auto",
                }}
                onClick={(e) => {
                  if (position !== 0) {
                    e.preventDefault();
                    setCurrentIndex(index - items.length);
                  }
                }}
              >
                <div className="relative h-full rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">

                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                  {/* Content */}
                  <div className={`absolute bottom-0 left-0 right-0 text-white ${position === 0 ? 'p-8' : 'p-5'}`}>
                    <h3 className={`font-extrabold ${position === 0 ? 'text-2xl mb-4' : 'text-base'}`}>
                      {item.title}
                    </h3>

                    {position === 0 && (
                      <>
                        <p className="text-sm leading-relaxed whitespace-pre-line opacity-90 mb-6">
                          {item.description}
                        </p>

                        <span className="inline-flex items-center text-sm font-semibold">
                          Read More
                          <svg
                            className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* ================= CONTROLS ================= */}
        <div className="absolute left-8 -bottom-20 z-30 flex items-center gap-4">

          {/* Pause / Play */}
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="
              w-14 h-14 rounded-xl
              bg-white/90 backdrop-blur
              border border-gray-300
              text-gray-800
              flex items-center justify-center
              shadow-xl
              hover:bg-blue-900 hover:text-white hover:border-blue-900
              transition-all
            "
            aria-label={isAutoPlaying ? "Pause" : "Play"}
          >
            {isAutoPlaying ? (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>

          {/* Prev */}
          <button
            onClick={prevSlide}
            className="
              w-14 h-14 rounded-xl
              bg-white/90 backdrop-blur
              border border-gray-300
              text-gray-800
              flex items-center justify-center
              shadow-xl
              hover:bg-blue-900 hover:text-white hover:border-blue-900
              transition-all
            "
            aria-label="Previous slide"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next */}
          <button
            onClick={nextSlide}
            className="
              w-14 h-14 rounded-xl
              bg-white/90 backdrop-blur
              border border-gray-300
              text-gray-800
              flex items-center justify-center
              shadow-xl
              hover:bg-blue-900 hover:text-white hover:border-blue-900
              transition-all
            "
            aria-label="Next slide"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* ================= DOT INDICATOR ================= */}
      <div className="flex justify-center gap-2 mt-14">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all ${
              currentIndex === index
                ? "bg-blue-900 w-8"
                : "bg-gray-300 hover:bg-gray-400 w-2"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  </section>

  {/* ================= SECTION 3 : CERTIFICATION CATEGORIES ================= */}
  <section className="py-20 bg-white border-t border-gray-100">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-12">
        <p className="text-sm font-semibold tracking-widest text-orange-500 mb-2">
          CERTIFICATION CENTER
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-3">
          기업인증센터
        </h2>
        <p className="text-gray-600">
          우리 기업에 맞는 인증 유형을 빠르게 확인해보세요.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {certificationCategories.map((category) => (
          <Link
            key={category.title}
            href={category.href}
            className="group h-[340px] rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md hover:border-blue-200 transition-all overflow-hidden flex flex-col"
          >
            <div className="relative h-44">
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/35 to-black/15" />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-blue-900 mb-3 break-keep">
                {category.title}
              </h3>
              <p className="text-gray-600 leading-relaxed break-keep text-sm">
                {category.description}
              </p>
              <span className="mt-auto pt-5 inline-flex items-center text-sm font-semibold text-blue-700 group-hover:text-blue-900">
                자세히 보기
                <svg
                  className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>

  {/* ================= SECTION 3 : KNOWLEDGE HUB ================= */}
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">

      {/* Header */}
      <div className="mb-12 text-center">
        <p className="text-sm font-semibold tracking-widest text-orange-500 mb-2">
          KNOWLEDGE HUB
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900">
          Management Insights
        </h2>
      </div>

      {/* ================= ROW 1 : 4 SAME CARDS ================= */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {[
          {
            tag: "BEST",
            color: "bg-yellow-400",
            date: "2025. 06. 23",
            title: "MainBiz Innovation",
            subtitle: "기술이 없어도 경영 혁신으로 인증 획득.\n메인비즈를 통한 세무조사 유예 및 금리 우대.",
            url: "https://blog.naver.com/eum63/223812866952",
            image: "/mainbiz-mainpage.jpg"
          },
          {
            tag: "R&D",
            color: "bg-blue-500 text-white",
            date: "2024. 12. 01",
            title: "한의원기반 건강기능식품 제조",
            subtitle: "벤처 재신청 사례",
            url: "https://blog.naver.com/PostView.naver?blogId=eum63&logNo=223591654433&redirect=Dlog",
            image: "/koreanmedicine-new.jpg"
          },
          {
            tag: "MAINBIZ",
            color: "bg-purple-500 text-white",
            date: "2025. 04. 07",
            title: "AI챗봇 기업의 연구소 설립 전략",
            subtitle: "법인세 50%감면과 벤처인증\n동시획득 노하우",
            url: "https://blog.naver.com/eum63/223598143019",
            image: "/aitechtransformation-mainpage.jpg"
          },
          {
            tag: "INSIGHT",
            color: "bg-gray-800 text-white",
            date: "2025. 03. 11",
            title: "향기 화장품 제조 ISO와 벤처인증",
            subtitle: "",
            url: "https://blog.naver.com/PostView.naver?blogId=eum63&logNo=223908474692&redirect=Dlog",
            image: "/insights-perfume.jpg"
          },
        ].map((item, i) => (
          <a
            key={i}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative h-[320px] rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={item.image}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
              <h3 className="text-base md:text-lg leading-snug">
                <span className="font-extrabold">{item.title}</span>
                {item.subtitle && (
                  <span className="font-normal block mt-1 text-xs whitespace-pre-line">{item.subtitle}</span>
                )}
              </h3>
              <span className="inline-flex items-center text-sm font-semibold mt-4 text-white/60">
                Read More
              </span>
            </div>
          </a>
        ))}
      </div>

      {/* ================= ROW 2 : 2 SAME + BIG ================= */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12 items-stretch">

        {/* Small card 1 */}
        <a
          href="https://blog.naver.com/eum63/223821907774"
          target="_blank"
          rel="noopener noreferrer"
          className="relative h-[320px] rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <img
            src="/insights-mainbiz.jpg"
            alt="메인비즈 인증 평가지표 알고 세무조사 유예 받자"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
            <h3 className="text-base md:text-lg leading-snug">
              <span className="font-extrabold">메인비즈 인증 평가지표 알고 세무조사 유예 받자</span>
            </h3>
            <span className="inline-flex items-center text-sm font-semibold mt-4 text-white/60">
              Read More
            </span>
          </div>
        </a>

        {/* Small card 2 */}
        <a
          href="https://blog.naver.com/PostView.naver?blogId=eum63&logNo=223564772199&redirect=Dlog"
          target="_blank"
          rel="noopener noreferrer"
          className="relative h-[320px] rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <img
            src="/insights-food.jpg"
            alt="요식업계 셀럽과 콜라보"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
            <h3 className="text-base md:text-lg leading-snug">
              <span className="font-extrabold">요식업계 셀럽과 콜라보</span>
              <span className="font-normal block mt-1 text-xs">혁신 벤처인증으로 브랜드 강화</span>
            </h3>
            <span className="inline-flex items-center text-sm font-semibold mt-4 text-white/60">
              Read More
            </span>
          </div>
        </a>

        {/* BIG CARD */}
        <a
          href="https://blog.naver.com/PostView.naver?blogId=eum63&logNo=223630048870&redirect=Dlog"
          target="_blank"
          rel="noopener noreferrer"
          className="md:col-span-2 relative h-[320px] rounded-2xl overflow-hidden text-white p-8 md:p-12 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300"
          style={{ background: "linear-gradient(135deg, #1E2A8A 0%, #1B1E6D 100%)" }}
        >
          <div className="absolute top-10 right-10 text-white/20 text-[80px] font-extrabold leading-none select-none pointer-events-none">&quot;</div>

          <div className="pr-20">
            <p className="text-sm font-semibold tracking-widest text-blue-200 mb-6">
              EXPERT COLUMN
            </p>
            <h3 className="text-2xl md:text-3xl font-extrabold mb-6 whitespace-pre-line">
              {`벤처기업 인증심사 평가지표,\n`}
              <span className="text-blue-300 underline underline-offset-4">100% 승인</span>
              {" 받는 법"}
            </h3>
            <p className="text-sm leading-relaxed text-blue-100">
              심사위원이 보는 핵심 포인트는 따로 있습니다. 수석 컨설턴트가 직접 공개합니다.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold">
              엄
            </div>
            <div>
              <p className="text-sm font-semibold">엄현철 수석</p>
              <p className="text-xs text-blue-200">벤처메이커 전략기획팀</p>
            </div>
          </div>

        </a>
      </div>

      {/* ================= ROW 3 : 4 SAME CARDS ================= */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
        {[
          {
            date: "2024. 10. 10",
            title: "AR + BIG DATA 콘텐츠 미디어",
            subtitle: "기술적 혁신 벤처인증으로 인한\n기업가치 창출",
            url: "https://blog.naver.com/PostView.naver?blogId=eum63&logNo=223597096021&redirect=Dlog",
            image: "/insights-arbigdata.jpg"
          },
          {
            date: "2024. 10. 11",
            title: "인재를 부르는 비상장 벤처기업 스톡옵션의 마법",
            subtitle: "",
            url: "https://blog.naver.com/PostView.naver?blogId=eum63&logNo=223557926232&redirect=Dlog",
            image: "/stockoption-new.jpg"
          },
          {
            date: "2024. 10. 12",
            title: "소프트웨어개발 및 컴퓨터 정보기기 도소매",
            subtitle: "보안 솔루션 기술개발 혁신 벤처인증",
            url: "https://blog.naver.com/PostView.naver?blogId=eum63&logNo=223541792008&categoryNo=91&parentCategoryNo=&from=thumbnailList",
            image: "/insights-software.jpg"
          },
          {
            date: "2024. 10. 13",
            title: "외식업체 자동화 기술 도입과 특허확보와 혁신 벤처인증",
            subtitle: "",
            url: "https://blog.naver.com/eum63/223573977275",
            image: "/insights-eatingout.jpg"
          },
        ].map((item, i) => (
          <a
            key={i}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative h-[320px] rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={item.image}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
              <h3 className="text-base md:text-lg leading-snug">
                <span className="font-extrabold">{item.title}</span>
                {item.subtitle && (
                  <span className="font-normal block mt-1 text-xs whitespace-pre-line">{item.subtitle}</span>
                )}
              </h3>
              <span className="inline-flex items-center text-sm font-semibold mt-4 text-white/60">
                Read More
              </span>
            </div>
          </a>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-16 text-center">
        <a
          href="/insights"
          className="inline-block px-10 py-4 border rounded-md text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors duration-300"
        >
          View All Insights
        </a>
      </div>
    </div>
  </section>

      {/* ================= SECTION 4 : AI CONSULTING (OLD GEMINI DESIGN) ================= */}
        <section id="ai-consulting" className="py-24 bg-[#180D8A] border-t border-white/5 relative overflow-hidden">
          {/* Background effects */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/20 to-transparent pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row gap-16 items-start">
              
              {/* LEFT: Text Area */}
              <div className="lg:w-[45%] pt-10">
                <span className="text-blue-400 font-bold text-xs tracking-widest uppercase mb-4 block">
                  <i className="fa-solid fa-robot mr-2"></i>POWERED BY VENTUREMAKER AI
                </span>
                <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                  AI-Driven
                  <br />
                  <span className="text-blue-400">Growth Strategy</span>
                </h2>
                <p className="text-slate-300 text-xl leading-relaxed mb-8">
                  내 기업은 어떤 인증이 유리할까?
                  <br />
                  사업계획서 SWOT 분석은 어떻게 써야 할까?
                  <br />
                  <strong className="text-white">벤처메이커 AI</strong>가 즉시 해결합니다.
                </p>
                <ul className="space-y-3 text-slate-300 text-lg">
                  <li className="flex items-start">
                    <i className="fa-solid fa-check text-blue-400 mr-3 mt-1"></i>
                    <span>기업 맞춤형 자금·인증 전략</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fa-solid fa-check text-blue-400 mr-3 mt-1"></i>
                    <span>R&D 연구 과제명 자동 생성</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fa-solid fa-check text-blue-400 mr-3 mt-1"></i>
                    <span>전문 컨설턴트급 SWOT 분석</span>
                  </li>
                </ul>
              </div>

              {/* RIGHT: Interface Card */}
              <div className="lg:w-[55%] w-full">
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-white/10 relative">
                  
                  {/* Tabs */}
                  <div className="grid grid-cols-3 border-b border-slate-200 text-xs md:text-base">
                    <button
                      onClick={() => handleTabChange("strategy")}
                      className={`py-4 px-2 text-center cursor-pointer font-semibold transition-all ${
                        activeTab === "strategy"
                          ? "bg-orange-50 text-orange-600 border-b-2 border-orange-500"
                          : "text-gray-400 hover:text-orange-600 hover:bg-orange-50"
                      }`}
                    >
                      <i className="fa-solid fa-chart-pie block md:inline mb-1 md:mb-0 mr-0 md:mr-2"></i>
                      종합 진단
                    </button>
                    <button
                      onClick={() => handleTabChange("rnd")}
                      className={`py-4 px-2 text-center cursor-pointer font-semibold transition-all ${
                        activeTab === "rnd"
                          ? "bg-orange-50 text-orange-600 border-b-2 border-orange-500"
                          : "text-gray-400 hover:text-orange-600 hover:bg-orange-50"
                      }`}
                    >
                      <i className="fa-solid fa-microscope block md:inline mb-1 md:mb-0 mr-0 md:mr-2"></i>
                      R&D 테마
                    </button>
                    <button
                      onClick={() => handleTabChange("swot")}
                      className={`py-4 px-2 text-center cursor-pointer font-semibold transition-all ${
                        activeTab === "swot"
                          ? "bg-orange-50 text-orange-600 border-b-2 border-orange-500"
                          : "text-gray-400 hover:text-orange-600 hover:bg-orange-50"
                      }`}
                    >
                      <i className="fa-solid fa-table-cells-large block md:inline mb-1 md:mb-0 mr-0 md:mr-2"></i>
                      SWOT 분석
                    </button>
                  </div>

                  {/* Form Content */}
                  <div className="p-8">
                    
                    {/* Strategy Form */}
                    {activeTab === "strategy" && (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between pt-2">
                          <h3 className="font-bold text-base md:text-lg text-blue-900">
                            기업 성장 종합 진단
                          </h3>
                          <span className="bg-white border border-orange-500 text-orange-500 text-xs px-2 py-1 rounded font-bold">
                            POPULAR
                          </span>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-500 uppercase mb-1">
                            업종 / 아이템
                          </label>
                          <input
                            type="text"
                            value={formData.industry}
                            onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                            className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-blue-600 text-sm"
                            placeholder="예: 화장품 제조, AI 소프트웨어"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase mb-1">
                              설립 연차
                            </label>
                            <select
                              value={formData.year}
                              onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                              className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 text-gray-900 focus:outline-none focus:border-blue-600 text-sm"
                            >
                              <option value="">기업 단계 선택</option>
                              <option value="예비창업">예비창업</option>
                              <option value="1년 미만">1년 미만</option>
                              <option value="1~3년">1~3년</option>
                              <option value="3~7년">3~7년</option>
                              <option value="7년 이상">7년 이상</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase mb-1">
                              매출 규모
                            </label>
                            <select
                              value={formData.revenue}
                              onChange={(e) => setFormData({ ...formData, revenue: e.target.value })}
                              className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 text-gray-900 focus:outline-none focus:border-blue-600 text-sm"
                            >
                              <option value="">연 매출 규모</option>
                              <option value="1억 미만">1억 미만</option>
                              <option value="1억~10억">1억 ~ 10억</option>
                              <option value="10억~50억">10억 ~ 50억</option>
                              <option value="50억 이상">50억 이상</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-500 uppercase mb-1">
                            주요 고민
                          </label>
                          <input
                            type="text"
                            value={formData.concerns}
                            onChange={(e) => setFormData({ ...formData, concerns: e.target.value })}
                            className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-blue-600 text-sm"
                            placeholder="예: 운전자금 확보, 연구소 설립"
                          />
                        </div>

                        <button
                          onClick={() => callChatGPT("strategy")}
                          disabled={loading}
                          className="w-full bg-[#180D8A] text-white font-bold py-4 rounded hover:bg-slate-800 transition-all shadow-lg flex justify-center items-center gap-2 mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <i className="fa-solid fa-bolt text-blue-400"></i>
                          {loading ? "분석 중..." : "무료 전략 리포트 생성"}
                        </button>
                      </div>
                    )}

                    {/* R&D Form */}
                    {activeTab === "rnd" && (
                      <div className="space-y-4 text-[0.8rem]">
                        <div className="flex items-center justify-between pt-2">
                          <h3 className="font-bold text-base md:text-lg text-blue-900">
                            AI R&D 연구 과제 생성기
                          </h3>
                          <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded font-bold">
                            R&D
                          </span>
                        </div>

                        <div>
                          <label className="block font-bold text-slate-500 uppercase mb-1">
                            주력 제품/서비스
                          </label>
                          <input
                            type="text"
                            value={formData.rndItem}
                            onChange={(e) => setFormData({ ...formData, rndItem: e.target.value })}
                            className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-blue-600 text-[0.8rem]"
                            placeholder="예: 맛있는 김치, 가벼운 등산화"
                          />
                        </div>

                        <div>
                          <label className="block font-bold text-slate-500 uppercase mb-1">
                            기술적 특징 (선택사항)
                          </label>
                          <input
                            type="text"
                            value={formData.rndTech}
                            onChange={(e) => setFormData({ ...formData, rndTech: e.target.value })}
                            className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-blue-600 text-[0.8rem]"
                            placeholder="예: 저온 숙성, 탄소 섬유 사용"
                          />
                        </div>

                        <div>
                          <label className="block font-bold text-slate-500 uppercase mb-1">
                            결과 리포트를 받을 수 있는 상담을 위한 연락처
                          </label>
                          <input
                            type="tel"
                            value={formData.rndPhone}
                            onChange={(e) => setFormData({ ...formData, rndPhone: e.target.value })}
                            className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-blue-600 text-[0.8rem]"
                            placeholder="010-0000-0000"
                          />
                        </div>

                        <button
                          onClick={() => callChatGPT("rnd")}
                          disabled={loading}
                          className="w-full bg-blue-600 text-white font-bold py-4 rounded hover:bg-blue-700 transition-all shadow-lg flex justify-center items-center gap-2 mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <i className="fa-solid fa-microchip"></i>
                          {loading ? "생성 중..." : "연구 과제명 생성하기"}
                        </button>
                      </div>
                    )}

                    {/* SWOT Form */}
                    {activeTab === "swot" && (
                      <div className="space-y-4 text-[0.8rem]">
                        <div className="flex items-center justify-between pt-2">
                          <h3 className="font-bold text-base md:text-lg text-blue-900">
                            AI SWOT 분석 생성기
                          </h3>
                          <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded font-bold">
                            NEW
                          </span>
                        </div>

                        <div>
                          <label className="block font-bold text-slate-500 uppercase mb-1">
                            업종 / 아이템
                          </label>
                          <input
                            type="text"
                            value={formData.swotItem}
                            onChange={(e) => setFormData({ ...formData, swotItem: e.target.value })}
                            className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-purple-600 text-[0.8rem]"
                            placeholder="예: 비건 베이커리, 반려동물 매칭 플랫폼"
                          />
                        </div>

                        <div>
                          <label className="block font-bold text-slate-500 uppercase mb-1">
                            우리만의 강점 (핵심 경쟁력)
                          </label>
                          <input
                            type="text"
                            value={formData.swotStrength}
                            onChange={(e) => setFormData({ ...formData, swotStrength: e.target.value })}
                            className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-purple-600 text-[0.8rem]"
                            placeholder="예: 특허 보유, 10만 팔로워, 저렴한 원가"
                          />
                        </div>

                        <div>
                          <label className="block font-bold text-slate-500 uppercase mb-1">
                            결과 리포트를 받을 수 있는 상담을 위한 연락처
                          </label>
                          <input
                            type="tel"
                            value={formData.swotPhone}
                            onChange={(e) => setFormData({ ...formData, swotPhone: e.target.value })}
                            className="w-full bg-slate-50 border border-slate-200 rounded px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-purple-600 text-[0.8rem]"
                            placeholder="010-0000-0000"
                          />
                        </div>

                        <button
                          onClick={() => callChatGPT("swot")}
                          disabled={loading}
                          className="w-full bg-purple-600 text-white font-bold py-4 rounded hover:bg-purple-700 transition-all shadow-lg flex justify-center items-center gap-2 mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <i className="fa-solid fa-table-cells"></i>
                          {loading ? "분석 중..." : "SWOT 분석표 생성하기"}
                        </button>
                      </div>
                    )}

                    {/* Result Area */}
                    {(loading || result || error) && (
                      <div className="mt-6 border-t border-slate-200 pt-6 animate-[fadeIn_0.5s_ease-out]">
                        {loading && (
                          <div className="flex flex-col items-center py-4">
                            <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-3"></div>
                            <p className="text-xs font-bold text-slate-400 animate-pulse">
                              VentureMaker AI가 분석 중입니다...
                            </p>
                          </div>
                        )}

                        {error && (
                          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                            <p className="text-red-600 text-sm font-semibold mb-2">
                              {error.split('\n')[0]}
                            </p>
                            {error.includes('상세 정보') && (
                              <details className="mt-2">
                                <summary className="text-red-500 text-xs cursor-pointer hover:underline">
                                  상세 에러 정보 보기
                                </summary>
                                <pre className="mt-2 text-xs text-red-700 bg-red-100 p-2 rounded overflow-auto max-h-40">
                                  {error}
                                </pre>
                              </details>
                            )}
                          </div>
                        )}

                        {result && !loading && (
                          <div className="prose prose-sm max-w-none bg-slate-50 p-4 rounded border-l-4 border-blue-600 text-sm overflow-y-auto max-h-60 text-black [&_*]:!text-black">
                            <div
                              dangerouslySetInnerHTML={{
                                __html: result,
                              }}
                            />
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />

      </main>
    );
  }