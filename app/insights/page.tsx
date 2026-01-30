"use client";

import Footer from "../components/Footer";

export default function InsightsPage() {
  return (
    <main className="bg-white">
      {/* ================= SECTION : KNOWLEDGE HUB ================= */}
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

          {/* ================= ROW 1 ================= */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                tag: "BEST",
                color: "bg-yellow-400",
                date: "2025. 06. 23",
                title: "기술이 없어도 경영 혁신으로 인증 획득, 메인비즈를 통한 세무조사 유예 및 금리 우대",
                desc: "",
                url: "https://blog.naver.com/eum63/223598143019",
                image: "/mainbiz-mainpage.jpg",
              },
              {
                tag: "R&D",
                color: "bg-blue-500 text-white",
                date: "2024. 12. 01",
                title: "한의원기반 건강기능식품제조 벤처 재신청 사례",
                desc: "",
                url: "https://blog.naver.com/eum63/223905700120",
                image: "/certification-venture(2).jpg",
              },
              {
                tag: "MAINBIZ",
                color: "bg-purple-500 text-white",
                date: "2025. 04. 07",
                title: "AI 챗봇 기업의 연구소 설립 전략. 법인세 50% 감면과 벤처인증 동시 획득 노하우",
                desc: "",
                url: "https://blog.naver.com/eum63/223573977275",
                image: "/aitechtransformation-mainpage.jpg",
              },
              {
                tag: "INSIGHT",
                color: "bg-gray-800 text-white",
                date: "2025. 03. 11",
                title: "향기 화장품제조 ISO와 벤처인증",
                desc: "",
                url: "https://blog.naver.com/eum63/223812866952",
                image: "/insights-perfume.jpg",
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
                  {item.desc && (
                    <p className="text-sm text-gray-500 mt-auto">{item.desc}</p>
                  )}
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
                title: "AR + BIG DATA 콘텐츠 미디어 제작: 기술적 혁신벤처 인증으로 인한 기업가치 창출",
                desc: "",
                url: "https://blog.naver.com/eum63/223547687068",
                image: "/insights-arbigdata.jpg",
              },
              {
                date: "2024. 10. 11",
                title: "인재를 부르는 비상장 벤처기업 스톡옵션의 마법",
                desc: "",
                url: "https://blog.naver.com/eum63/223618110844",
                image: "/certification-venture(3).jpg",
              },
              {
                date: "2024. 10. 12",
                title: "소프트웨어 개발 및 컴퓨터 정보기기 도소매: 보완 솔루션 기술 개발 혁신 벤처 인증",
                desc: "",
                url: "https://blog.naver.com/eum63/223571498802",
                image: "/insights-software.jpg",
              },
              {
                date: "2024. 10. 13",
                title: "외식업체 자동화 기술 도입과 특허 확보와 혁신벤처 인증",
                desc: "",
                url: "https://blog.naver.com/eum63/223630048870",
                image: "/insights-eatingout.jpg",
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
                  <p className="text-sm text-gray-500 mt-auto">{item.desc}</p>
                )}
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
