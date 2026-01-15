"use client";

import Footer from "../components/Footer";

export default function InsightsPage() {
  return (
    <main className="bg-white">
      {/* ================= SECTION : KNOWLEDGE HUB ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-sm font-semibold tracking-widest text-orange-500 mb-2">
                KNOWLEDGE HUB
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900">
                Management Insights
              </h2>
            </div>

            <div className="flex gap-6 text-sm font-semibold text-gray-500">
              <button className="text-blue-900 border-b-2 border-blue-900 pb-1">
                All
              </button>
              <button>벤처/이노비즈</button>
              <button>기업부설연구소</button>
              <button>정책자금</button>
              <button>성공사례</button>
            </div>
          </div>

          {/* ================= ROW 1 ================= */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                tag: "BEST",
                color: "bg-yellow-400",
                date: "2025. 06. 23",
                title: "디지털 전환 컨설팅으로 AI 벤처 인증까지 이끈 실전 사례",
                desc: "인증 통과로 이어진 디지털 전략",
                url: "https://blog.naver.com/eum63/223598143019",
                image: "/blog-card-1.jpg",
              },
              {
                tag: "R&D",
                color: "bg-blue-500 text-white",
                date: "2024. 12. 01",
                title: "혁신성장 벤처인증 기술 스타트업 성공 사례",
                desc: "인증을 통과한 핵심 전략과 실행 포인트",
                url: "https://blog.naver.com/eum63/223905700120",
                image: "/blog-card-2.jpg",
              },
              {
                tag: "MAINBIZ",
                color: "bg-purple-500 text-white",
                date: "2025. 04. 07",
                title: "외식 프랜차이즈, 혁신성장 벤처인증에 성공하다",
                desc: "사업성과 시스템으로 인증을 통과한 전략",
                url: "https://blog.naver.com/eum63/223573977275",
                image: "/blog-card-3.jpg",
              },
              {
                tag: "INSIGHT",
                color: "bg-gray-800 text-white",
                date: "2025. 03. 11",
                title: "벤처기업이 반드시 준비해야 할 핵심 서류",
                desc: "심사 기준에서 가장 많이 보는 항목",
                url: "https://blog.naver.com/eum63/223812866952",
                image: "/blog-card-4.jpg",
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
                  <span
                    className={`absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded ${item.color}`}
                  >
                    {item.tag}
                  </span>
                </div>

                <div className="p-6 flex flex-col min-h-[170px]">
                  <p className="text-sm text-gray-400 mb-2">{item.date}</p>
                  <h3 className="font-bold text-blue-900 mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-auto">{item.desc}</p>
                </div>
              </a>
            ))}
          </div>

          {/* ================= ROW 2 ================= */}
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
                  src="/blog-card-5.jpg"
                  alt="[혁신성장형] 의류 쇼핑몰 벤처 인증 성공 사례"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 left-4 text-xs font-bold bg-red-500 text-white px-3 py-1 rounded">
                  SUCCESS
                </span>
              </div>

              <div className="p-6 flex flex-col min-h-[170px]">
                <p className="text-sm text-gray-400 mb-2">2024. 08. 19</p>
                <h3 className="font-bold text-blue-900 mb-3 leading-snug">
                  [혁신성장형] 의류 쇼핑몰 벤처 인증 성공 사례
                </h3>
                <p className="text-sm text-gray-500 mt-auto">
                  강남 의류 브랜드의 실제 인증 스토리
                </p>
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
                  src="/blog-card-6.jpg"
                  alt="벤처 인증 후 실제 혜택 정리"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col min-h-[170px]">
                <p className="text-sm text-gray-400 mb-2">2024. 09. 02</p>
                <h3 className="font-bold text-blue-900 mb-3 leading-snug">
                  벤처 인증 후 실제 혜택 정리
                </h3>
                <p className="text-sm text-gray-500 mt-auto">
                  기업 운영에 바로 적용되는 혜택
                </p>
              </div>
            </a>

            {/* BIG CARD */}
            <a
              href="https://blog.naver.com/eum63/223821907774"
              target="_blank"
              rel="noopener noreferrer"
              className="md:col-span-2 relative rounded-2xl overflow-hidden text-white p-12 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300"
              style={{
                background:
                  "linear-gradient(135deg, #1E2A8A 0%, #1B1E6D 100%)",
              }}
            >
              <div className="absolute top-10 right-10 text-white/20 text-[120px] font-extrabold">
                "
              </div>

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
                  <p className="text-xs text-blue-200">
                    벤처메이커 전략기획팀
                  </p>
                </div>
              </div>

              <div className="text-sm font-semibold mt-6">
                Read Column →
              </div>
            </a>
          </div>

          {/* ================= ROW 3 ================= */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
            {[
              {
                date: "2024. 10. 10",
                title: "기업부설연구소 설립 요건 한 번에 정리",
                desc: "실무 기준으로 정리한 핵심 포인트",
                url: "https://blog.naver.com/eum63/223547687068",
                image: "/blog-card-7.jpg",
              },
              {
                date: "2024. 10. 11",
                title: "정책자금 심사에서 탈락하는 5가지 이유",
                desc: "실무 기준으로 정리한 핵심 포인트",
                url: "https://blog.naver.com/eum63/223618110844",
                image: "/blog-card-8.jpg",
              },
              {
                date: "2024. 10. 12",
                title: "스타트업 재무제표, 이것만은 꼭 보세요",
                desc: "실무 기준으로 정리한 핵심 포인트",
                url: "https://blog.naver.com/eum63/223571498802",
                image: "/blog-card-9.jpg",
              },
              {
                date: "2024. 10. 13",
                title: "벤처 인증 후 유지 관리 체크리스트",
                desc: "실무 기준으로 정리한 핵심 포인트",
                url: "https://blog.naver.com/eum63/223630048870",
                image: "/blog-card-10.jpg",
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
                  <p className="text-sm text-gray-500 mt-auto">{item.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
