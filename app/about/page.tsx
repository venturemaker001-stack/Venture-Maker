import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="relative bg-white text-gray-800">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:22px_22px] opacity-60" />
      <div className="relative">
        {/* INTRO */}
        <section className="max-w-7xl mx-auto px-6 pt-16 pb-6">
          <p className="text-xs font-semibold tracking-widest text-blue-600">
            ABOUT
          </p>
          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold text-gray-900">
            회사소개
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl">
            복잡한 경영 과제, 명확한 해답으로 증명합니다. 결과로 말하는 경영 전략가.
          </p>
          <div className="mt-8 h-px bg-gray-200" />
        </section>

        {/* PROFILE */}
        <section className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
            <div className="text-gray-700 leading-[1.9] text-lg md:text-xl break-keep">
              <p className="mb-8">
                인증 획득을 위해서는 인증별 심사기준과 항목을 기준으로 정확한 기업진단이 컨설팅의
                첫걸음입니다. 업종, 구체적 사업내용, 경영 역량, 인적 구성, 매출 현황, 고용 현황,
                사업 성장성, 기술 혁신성 등 항목별 면밀한 기업진단을 통해 강점과 약점을 파악하고
                약점을 보완하여 인증 심사를 준비하는 것이 중요합니다.
              </p>
              <p>
                10년 이상 500개사 이상의 다양한 업종과 기업 인증 컨설팅 경험과
                노하우를 통한 성공적인 결과로 보여 드리겠습니다.
              </p>
            </div>

            <div className="flex justify-end">
              <img
                src="/about-profile.jpg"
                alt="벤처메이커 프로필"
                className="w-full max-w-md rounded-2xl object-cover"
              />
            </div>
          </div>
        </section>

        {/* 핵심 경쟁력 */}
        <section className="max-w-7xl mx-auto px-6 pb-16">
          <h2 className="text-2xl font-bold text-gray-900">
            핵심 경쟁력
          </h2>
          <div className="mt-6 grid sm:grid-cols-3 gap-5">
            {[
              {
                title: "실전 중심 솔루션",
                desc: "다양한 산업군에서 검증된 전략을 바탕으로 기업인증 취득부터 전략적 자금 조달까지, 성장에 필요한 핵심 동력을 확보해 드립니다.",
              },
              {
                title: "압도적 전문성",
                desc: "우리는 관성적인 컨설팅을 거부합니다. 새로운 시각으로 문제의 본질을 꿰뚫고, 실행 가능한 혁신안을 제시합니다.",
              },
              {
                title: "지속 가능한 우위",
                desc: "반짝하는 성과가 아닌, 시장에서 오랫동안 살아남고 앞서 나갈 수 있는 독보적인 경쟁력을 설계합니다.",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-50 text-blue-600 font-bold text-sm">
                  {index + 1}
                </div>
                <h3 className="mt-4 text-lg font-bold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-base text-gray-600 leading-relaxed break-keep">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-7xl mx-auto px-6 pb-16">
          <div className="rounded-3xl bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <p className="text-sm uppercase tracking-widest text-slate-300">
                VentureMaker
              </p>
              <h3 className="mt-3 text-2xl font-bold">
                지금 벤처메이커와 상담하세요
              </h3>
              <p className="mt-3 text-sm text-slate-200 leading-relaxed break-keep">
                비즈니스의 복잡함을 넘어, 명확한 실행 전략으로 결과를 만들어드립니다.
              </p>
            </div>
            <Link
              href="/consult"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-100"
            >
              상담 신청
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}