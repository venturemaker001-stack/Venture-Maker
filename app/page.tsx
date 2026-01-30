"use client";

import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import { marked } from "marked";

interface FormData {
  name: string;
  company: string;
  industry: string;
  year: string;
  revenue: string;
  concerns: string;
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
    link: "https://blog.naver.com/YOUR_LINK_1",
  },
  {
    title: "Fund Optimization",
    category: "FINANCE & TAX",
    description:
      "정책자금 100% 승인을 위한 로드맵.\n재무제표 개선을 통한 신용등급 상향 전략",
    image: "/fundoptimization-mainpage.jpg",
    link: "https://blog.naver.com/YOUR_LINK_2",
  },
  {
    title: "Franchise Expansion",
    category: "FRANCHISE",
    description:
      "외식업 프랜차이즈 '고기명작' 성공 사례.\n메뉴 개발 전담부서 설립으로 가맹점 확장",
    image: "/franchise-mainpage.jpg",
    link: "https://blog.naver.com/YOUR_LINK_3",
  },
  {
    title: "Smart Factory",
    category: "MANUFACTURING",
    description:
      "제조업 혁신성장형 벤처인증.\n스마트공장 구축 자금 5억 확보 및 기술평가 우수 사례",
    image: "/smartfactory-mainpage.jpg",
    link: "https://blog.naver.com/YOUR_LINK_4",
  },
  {
    title: "MAIN-BIZ Certification",
    category: "MANAGEMENT",
    description:
      "기술이 없어도 경영 혁신으로 인증 획득.\n메인비즈를 통한 세무조사 유예 및 금리 우대",
    image: "/mainbiz-mainpage.jpg",
    link: "https://blog.naver.com/YOUR_LINK_5",
  },
  {
    title: "AR & Big Data",
    category: "TECH CONTENT",
    description:
      "빅데이터와 증강현실(AR) 기술을 결합한 콘텐츠 창작.\n벤처와 연구소인증 성공 사례",
    image: "/arbigdata-mainpage.jpg",
    link: "https://blog.naver.com/YOUR_LINK_6",
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
    // 공통
    name: "",
    company: "",
    // Strategy
    industry: "",
    year: "",
    revenue: "",
    concerns: "",
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
            ? "no-email@temp.com"
            : type === "rnd"
              ? formData.rndPhone + "@kakao.talk"
              : formData.swotPhone + "@kakao.talk";

        const emailResponse = await fetch("/api/send-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            type,
            formData: {
              name: formData.name,
              company: formData.company,
              industry: formData.industry || formData.swotItem || formData.rndItem,
              year: formData.year,
              revenue: formData.revenue,
              concerns: formData.concerns,
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
            당신의 비즈니스가 멈추지 않도록,
            벤처메이커가 가장 확실한 길을 설계합니다.
          </p>
        </div>
      </section>

     {/* ================= SECTION 2 : 3D CAROUSEL ================= */}
<section className="relative py-16 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
  <div className="max-w-7xl mx-auto px-6">

    {/* Carousel Stage */}
    <div className="relative h-[620px] flex items-center justify-center">
      <div className="relative w-full flex items-center justify-center">

        {[...items, ...items, ...items].map((item, index) => {
          const position = index - currentIndex - items.length;

          let translateX = 0;
          let scale = 0.6;
          let zIndex = 0;
          let opacity = 0.35;

          // ===== POSITIONING (NO OVERLAP) =====
          if (position === 0) {
            translateX = 0;
            scale = 1;
            zIndex = 30;
            opacity = 1;
          } else if (position === -1) {
            translateX = -520;
            scale = 0.78;
            zIndex = 20;
            opacity = 0.75;
          } else if (position === 1) {
            translateX = 520;
            scale = 0.78;
            zIndex = 20;
            opacity = 0.75;
          } else if (position === -2) {
            translateX = -860;
            scale = 0.65;
            zIndex = 10;
            opacity = 0.55;
          } else if (position === 2) {
            translateX = 860;
            scale = 0.65;
            zIndex = 10;
            opacity = 0.55;
          } else {
            translateX = position > 0 ? 1200 : -1200;
            scale = 0.5;
            zIndex = 1;
            opacity = 0;
          }

          return (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute cursor-pointer"
              style={{
                transform: `translateX(${translateX}px) scale(${scale})`,
                width: "460px",
                height: "560px",
                zIndex,
                opacity,
                transition: "all 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
                pointerEvents: opacity < 0.5 ? "none" : "auto",
              }}
              onClick={(e) => {
                if (position !== 0) {
                  e.preventDefault();
                  setCurrentIndex(index - items.length);
                }
              }}
            >
              <div className="relative h-full rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">

                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <p className="text-xs font-bold tracking-wider text-orange-400 mb-3">
                    {item.category}
                  </p>

                  <h3 className="text-2xl font-extrabold mb-4">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-relaxed whitespace-pre-line opacity-90 mb-6">
                    {item.description}
                  </p>

                  <span className="inline-flex items-center text-sm font-semibold">
                    Read Case Study
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

 {/* ================= SECTION 3 : KNOWLEDGE HUB ================= */}
<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    {/* Header */}
    <div className="mb-12">
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
          title: "기술이 없어도 경영 혁신으로 인증 획득, 메인비즈를 통한 세무조사 유예 및 금리 우대", 
          desc: "",
          url: "https://blog.naver.com/eum63/223598143019",
          image: "/mainbiz-mainpage.jpg"
        },
        { 
          tag: "R&D", 
          color: "bg-blue-500 text-white", 
          date: "2024. 12. 01", 
          title: "한의원기반 건강기능식품제조 벤처 재신청 사례", 
          desc: "",
          url: "https://blog.naver.com/eum63/223905700120",
          image: "/certification-venture(2).jpg"
        },
        { 
          tag: "MAINBIZ", 
          color: "bg-purple-500 text-white", 
          date: "2025. 04. 07", 
          title: "AI 챗봇 기업의 연구소 설립 전략. 법인세 50% 감면과 벤처인증 동시 획득 노하우", 
          desc: "",
          url: "https://blog.naver.com/eum63/223573977275",
          image: "/aitechtransformation-mainpage.jpg"
        },
        { 
          tag: "INSIGHT", 
          color: "bg-gray-800 text-white", 
          date: "2025. 03. 11", 
          title: "향기 화장품제조 ISO와 벤처인증", 
          desc: "",
          url: "https://blog.naver.com/eum63/223812866952",
          image: "/insights-perfume.jpg"
        },
      ].map((item, i) => (
        <a
          key={i}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl border bg-white overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300"
        >
          <div className="relative h-56 bg-gray-100 overflow-hidden">
            <img 
              src={item.image} 
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <span className={`absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded ${item.color}`}>
              {item.tag}
            </span>
          </div>

          <div className="p-6 flex flex-col min-h-[170px]">
            <p className="text-sm text-gray-400 mb-2">{item.date}</p>
            <h3 className="font-bold text-blue-900 mb-3 leading-snug">
              {item.title}
            </h3>
            {item.desc && (
              <p className="text-sm text-gray-500 mt-auto">
                {item.desc}
              </p>
            )}
          </div>
        </a>
      ))}
    </div>

    {/* ================= ROW 2 : 2 SAME + BIG ================= */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">

      {/* Small card 1 */}
      <a
        href="https://blog.naver.com/eum63/223908474692"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-2xl border bg-white overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300"
      >
        <div className="relative h-56 bg-gray-100 overflow-hidden">
          <img 
            src="/insights-mainbiz.jpg" 
            alt="메인비즈 인증 평가지표 알고 세무조사 유예 받자"
            className="w-full h-full object-cover"
          />
          <span className="absolute top-4 left-4 text-xs font-bold bg-red-500 text-white px-3 py-1 rounded">
            SUCCESS
          </span>
        </div>

        <div className="p-6 flex flex-col min-h-[170px]">
          <p className="text-sm text-gray-400 mb-2">2024. 08. 19</p>
          <h3 className="font-bold text-blue-900 mb-3 leading-snug">
            메인비즈 인증 평가지표 알고 세무조사 유예 받자
          </h3>
        </div>
      </a>

      {/* Small card 2 */}
      <a
        href="https://blog.naver.com/eum63/223678577702"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-2xl border bg-white overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300"
      >
        <div className="h-56 bg-gray-100 overflow-hidden">
          <img 
            src="/insights-food.jpg" 
            alt="요식업계 설렙과 콜라보: 혁신 벤처인증으로 브랜드 강화"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6 flex flex-col min-h-[170px]">
          <p className="text-sm text-gray-400 mb-2">2024. 09. 02</p>
          <h3 className="font-bold text-blue-900 mb-3 leading-snug">
            요식업계 설렙과 콜라보: 혁신 벤처인증으로 브랜드 강화
          </h3>
        </div>
      </a>

      {/* BIG CARD */}
      <a
        href="https://blog.naver.com/eum63/223821907774"
        target="_blank"
        rel="noopener noreferrer"
        className="md:col-span-2 relative rounded-2xl overflow-hidden text-white p-12 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300"
        style={{ background: "linear-gradient(135deg, #1E2A8A 0%, #1B1E6D 100%)" }}
      >
        <div className="absolute top-10 right-10 text-white/20 text-[120px] font-extrabold">&quot;</div>

        <div>
          <p className="text-sm font-semibold tracking-widest text-blue-200 mb-6">
            EXPERT COLUMN
          </p>
          <h3 className="text-2xl md:text-3xl font-extrabold mb-6">
            벤처기업 인증심사 평가지표,
            <br />
            <span className="text-blue-300 underline underline-offset-4">
              100% 승인
            </span>{" "}
            받는 법
          </h3>
          <p className="text-sm leading-relaxed text-blue-100">
            심사위원이 보는 핵심 포인트는 따로 있습니다.
            <br />
            수석 컨설턴트가 직접 공개합니다.
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

        <div className="text-sm font-semibold mt-6">Read Column →</div>
      </a>
    </div>

    {/* ================= ROW 3 : 4 SAME CARDS ================= */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
      {[
        {
          date: "2024. 10. 10",
          title: "AR + BIG DATA 콘텐츠 미디어 제작: 기술적 혁신벤처 인증으로 인한 기업가치 창출",
          desc: "",
          url: "https://blog.naver.com/eum63/223547687068",
          image: "/insights-arbigdata.jpg"
        },
        {
          date: "2024. 10. 11",
          title: "인재를 부르는 비상장 벤처기업 스톡옵션의 마법",
          desc: "",
          url: "https://blog.naver.com/eum63/223618110844",
          image: "/certification-venture(3).jpg"
        },
        {
          date: "2024. 10. 12",
          title: "소프트웨어 개발 및 컴퓨터 정보기기 도소매: 보완 솔루션 기술 개발 혁신 벤처 인증",
          desc: "",
          url: "https://blog.naver.com/eum63/223571498802",
          image: "/insights-software.jpg"
        },
        {
          date: "2024. 10. 13",
          title: "외식업체 자동화 기술 도입과 특허 확보와 혁신벤처 인증",
          desc: "",
          url: "https://blog.naver.com/eum63/223630048870",
          image: "/insights-eatingout.jpg"
        },
      ].map((item, i) => (
        <a
          key={i}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl border bg-white overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300"
        >
          <div className="h-56 bg-gray-100 overflow-hidden">
            <img 
              src={item.image} 
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6 flex flex-col min-h-[170px]">
            <p className="text-sm text-gray-400 mb-2">{item.date}</p>
            <h3 className="font-bold text-blue-900 mb-3 leading-snug">
              {item.title}
            </h3>
            {item.desc && (
              <p className="text-sm text-gray-500 mt-auto">
                {item.desc}
              </p>
            )}
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

      {/* ================= SECTION 4 : AI CONSULTING ================= */}
<section
  id="ai-consulting"
  className="py-24 bg-[#180D8A] relative overflow-hidden"
>
  <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start relative z-10">
    {/* LEFT COPY */}
    <div className="pt-10">
      <p className="text-blue-300 text-xs font-bold tracking-widest mb-4">
        POWERED BY VENTUREMAKER AI
      </p>
      <h2 className="text-4xl font-extrabold text-white mb-6">
        AI-Driven <br />
        <span className="text-blue-400">Growth Strategy</span>
      </h2>
      <p className="text-slate-300 mb-8 leading-relaxed">
        내 기업은 어떤 인증이 유리할까?
        <br />
        사업계획서 SWOT 분석은 어떻게 써야 할까?
        <br />
        <strong className="text-white">벤처메이커 AI</strong>가 즉시 해결합니다.
      </p>
      <ul className="space-y-3 text-slate-300">
        <li>• 기업 맞춤형 자금·인증 전략</li>
        <li>• R&D 연구 과제명 자동 생성</li>
        <li>• 전문 컨설턴트급 SWOT 분석</li>
      </ul>
    </div>

    {/* RIGHT CARD */}
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
      {/* Tabs */}
      <div className="grid grid-cols-3 text-sm font-bold border-b">
        <button
          onClick={() => handleTabChange("strategy")}
          className={`py-4 ${
            activeTab === "strategy"
              ? "bg-orange-50 text-orange-600 border-b-2 border-orange-500"
              : "text-gray-400"
          }`}
        >
          종합 진단
        </button>
        <button
          onClick={() => handleTabChange("rnd")}
          className={`py-4 ${
            activeTab === "rnd"
              ? "bg-orange-50 text-orange-600 border-b-2 border-orange-500"
              : "text-gray-400"
          }`}
        >
          R&D 테마
        </button>
        <button
          onClick={() => handleTabChange("swot")}
          className={`py-4 ${
            activeTab === "swot"
              ? "bg-orange-50 text-orange-600 border-b-2 border-orange-500"
              : "text-gray-400"
          }`}
        >
          SWOT 분석
        </button>
      </div>

      {/* Content */}
      <div className="p-8 space-y-4">
        {/* 공통 기본 정보 */}
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full border rounded px-4 py-3 text-gray-900 placeholder:text-gray-400"
            placeholder="신청자 성명"
          />
          <input
            type="text"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className="w-full border rounded px-4 py-3 text-gray-900 placeholder:text-gray-400"
            placeholder="회사명"
          />
        </div>

        {activeTab === "swot" && (
          <>
            <div className="flex justify-between items-center pt-2">
              <h3 className="font-bold text-lg text-blue-900">
                AI SWOT 분석 생성기
              </h3>
              <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded font-bold">
                NEW
              </span>
            </div>

            <input
              type="text"
              value={formData.swotItem}
              onChange={(e) => setFormData({ ...formData, swotItem: e.target.value })}
              className="w-full border rounded px-4 py-3 text-gray-900 placeholder:text-gray-400"
              placeholder="업종 / 아이템"
            />
            <input
              type="text"
              value={formData.swotStrength}
              onChange={(e) => setFormData({ ...formData, swotStrength: e.target.value })}
              className="w-full border rounded px-4 py-3 text-gray-900 placeholder:text-gray-400"
              placeholder="우리만의 강점 (핵심 경쟁력)"
            />
            <input
              type="tel"
              value={formData.swotPhone}
              onChange={(e) => setFormData({ ...formData, swotPhone: e.target.value })}
              className="w-full border rounded px-4 py-3 text-gray-900 placeholder:text-gray-400"
              placeholder="전화번호 (예: 010-0000-0000)"
            />

            <button
              onClick={() => callChatGPT("swot")}
              disabled={loading}
              className="w-full bg-purple-600 text-white py-4 rounded font-bold mt-2 hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {loading ? "분석 중..." : "SWOT 분석표 생성하기"}
            </button>
          </>
        )}

        {activeTab === "rnd" && (
          <>
            <div className="flex justify-between items-center pt-2">
              <h3 className="font-bold text-lg text-blue-900">
                AI R&D 연구 과제 생성기
              </h3>
              <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded font-bold">
                R&D
              </span>
            </div>

            <input
              type="text"
              value={formData.rndItem}
              onChange={(e) => setFormData({ ...formData, rndItem: e.target.value })}
              className="w-full border rounded px-4 py-3 text-gray-900 placeholder:text-gray-400"
              placeholder="주력 제품 / 서비스"
            />
            <input
              type="text"
              value={formData.rndTech}
              onChange={(e) => setFormData({ ...formData, rndTech: e.target.value })}
              className="w-full border rounded px-4 py-3 text-gray-900 placeholder:text-gray-400"
              placeholder="기술적 특징 (선택)"
            />
            <input
              type="tel"
              value={formData.rndPhone}
              onChange={(e) => setFormData({ ...formData, rndPhone: e.target.value })}
              className="w-full border rounded px-4 py-3 text-gray-900 placeholder:text-gray-400"
              placeholder="전화번호"
            />

            <button
              onClick={() => callChatGPT("rnd")}
              disabled={loading}
              className="w-full bg-blue-600 text-white py-4 rounded font-bold mt-2 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {loading ? "생성 중..." : "연구 과제명 생성하기"}
            </button>
          </>
        )}

        {activeTab === "strategy" && (
          <>
            <div className="flex justify-between items-center pt-2">
              <h3 className="font-bold text-lg text-blue-900">
                기업 성장 종합 진단
              </h3>
              <span className="border border-orange-500 text-orange-500 text-xs px-2 py-1 rounded font-bold">
                POPULAR
              </span>
            </div>

            <input
              type="text"
              value={formData.industry}
              onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
              className="w-full border rounded px-4 py-3 text-gray-900 placeholder:text-gray-400"
              placeholder="업종 / 아이템"
            />

            <div className="grid grid-cols-2 gap-4">
              <select
                value={formData.year}
                onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                className="border rounded px-4 py-3 text-gray-900"
              >
                <option value="">기업 단계 선택</option>
                <option value="예비창업">예비창업</option>
                <option value="1년 미만">1년 미만</option>
                <option value="1~3년">1~3년</option>
                <option value="3~7년">3~7년</option>
                <option value="7년 이상">7년 이상</option>
              </select>
              <select
                value={formData.revenue}
                onChange={(e) => setFormData({ ...formData, revenue: e.target.value })}
                className="border rounded px-4 py-3 text-gray-900"
              >
                <option value="">연 매출 규모</option>
                <option value="1억 미만">1억 미만</option>
                <option value="1억~10억">1억 ~ 10억</option>
                <option value="10억~50억">10억 ~ 50억</option>
                <option value="50억 이상">50억 이상</option>
              </select>
            </div>

            <input
              type="text"
              value={formData.concerns}
              onChange={(e) => setFormData({ ...formData, concerns: e.target.value })}
              className="w-full border rounded px-4 py-3 text-gray-900 placeholder:text-gray-400"
              placeholder="현재 가장 큰 고민"
            />

            <button
              onClick={() => callChatGPT("strategy")}
              disabled={loading}
              className="w-full bg-blue-900 text-white py-4 rounded font-bold mt-2 hover:bg-blue-950 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {loading ? "분석 중..." : "무료 전략 리포트 생성"}
            </button>
          </>
        )}

        {/* 결과 표시 영역 */}
        {(loading || result || error) && (
          <div className="mt-6 border-t border-gray-200 pt-6">
            {loading && (
              <div className="flex flex-col items-center py-8">
                <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-3"></div>
                <p className="text-sm font-bold text-gray-400 animate-pulse">
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
              <div className="bg-slate-50 border-l-4 border-blue-600 rounded p-4 max-h-96 overflow-y-auto">
                <div
                  className="prose prose-sm prose-slate max-w-none text-sm text-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: result, // 이미 marked.parse()로 변환된 HTML
                  }}
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  </div>
</section>

      {/* ================= SECTION 5 : TRUSTED BY ================= */}
<section className="py-24 bg-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-6">
    
    {/* Header */}
    <div className="text-center mb-14">
      <p className="text-sm font-semibold tracking-widest text-orange-500 mb-3">
        TRUSTED PARTNERS
      </p>
      <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-4">
        벤처메이커와 함께한 기업
      </h2>
      <p className="text-gray-500 text-sm">
        다양한 산업의 중소·벤처 기업이 벤처메이커와 함께 성장하고 있습니다.
      </p>
    </div>

    {/* Logo Slider */}
    <div className="relative">
      {/* Left / Right Fade */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10" />

      {/* Sliding Track */}
      <div className="flex gap-16 animate-logo-slide whitespace-nowrap">
        {[...Array(2)].map((_, loopIndex) => (
          <div key={loopIndex} className="flex gap-16">
            {[...Array(10)].map((_, i) => (
              <div
                key={`${loopIndex}-${i}`}
                className="flex items-center justify-center min-w-[160px] h-20 grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition"
              >
                <img
                  src={`/client-${i + 1}.png`}
                  alt={`Partner ${i + 1}`}
                  className="max-h-12 object-contain"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>

    {/* CTA */}
    <div className="mt-16 text-center">
      <a
        href="/partners"
        className="inline-flex items-center gap-2 px-10 py-4 border rounded-md text-sm font-semibold text-gray-700 hover:bg-gray-50 transition"
      >
        전체 파트너 보기 →
      </a>
    </div>
  </div>

  {/* Animation */}
  <style jsx>{`
    @keyframes logo-slide {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-50%);
      }
    }

    .animate-logo-slide {
      animation: logo-slide 30s linear infinite;
    }
  `}</style>
</section>

{/* Footer */}
      <Footer />

    </main>
  );
}