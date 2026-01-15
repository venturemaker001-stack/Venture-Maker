"use client";

import Footer from "../../components/Footer";

export default function IsoPage() {
  return (
    <main className="bg-white text-gray-800">
      {/* ================= ISO INTRO (NEW DESIGN) ================= */}
<section className="bg-white py-28">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-20 items-center">

      {/* LEFT CONTENT */}
      <div>
        <h1 className="text-6xl font-extrabold tracking-tight text-gray-900 mb-8">
          ISO 인증
        </h1>

        <div className="space-y-6 text-gray-700 text-[17px] leading-relaxed max-w-2xl">
          <p>
            <span className="font-semibold text-blue-600">ISO</span>는
            국제표준화기구로 비정부 국제 기구입니다.
          </p>

          <p>
            국제산업통상 표준의 문제점을 해결하기 위한
            국제적 표준을 개발하고 제시합니다.
          </p>

          <p>
            <span className="font-semibold text-blue-600">
              ISO가 규정한 경영시스템 인증을 취득하는 경우
            </span>
            <br />
            규격에 따라 해당 시스템이 ISO 요구사항을 충족하며
            유효하게 운영되고 있음을
            객관적으로 인증받는 것입니다.
          </p>

          <p>
            대표적으로{" "}
            <span className="font-semibold text-blue-600">
              ISO 9001(품질경영시스템),
              ISO 14001(환경경영시스템),
              ISO 45001(안전보건경영시스템)
            </span>
            이 있으며,
            인증을 취득한 기업은
            대외 신뢰도와 국제 거래 경쟁력을
            확보할 수 있습니다.
          </p>
        </div>
      </div>

      {/* RIGHT VISUAL */}
      <div className="flex justify-center">
        <div className="bg-gray-50 rounded-3xl p-12 flex items-center justify-center">
          <img
            src="/iso-logo.png"
            alt="ISO 인증 로고"
            className="w-full max-w-[260px] object-contain"
          />
        </div>
      </div>

    </div>
  </div>
</section>


      {/* ================= ISO 9001 ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t">
        <h2 className="text-3xl font-bold mb-12">ISO 시스템 인증</h2>

        <div className="grid md:grid-cols-[360px_1fr] gap-16 items-start">
          <img
            src="/iso-9001.jpg"
            alt="ISO 9001 인증"
            className="rounded-xl w-full object-cover"
          />

          <div className="space-y-6 text-gray-700 leading-relaxed text-[17px]">
            <p>
              <span className="text-blue-600 font-semibold">
                ISO 9001
              </span>
              은 품질경영시스템으로
              모든 제품과 서비스에 적용되는
              국제표준 규격입니다.
            </p>

            <p>
              이 인증을 통하여 기업이 제공하는
              제품 또는 서비스에 대하여
              지속적인 품질 향상을 위한 노력을
              증명할 수 있습니다.
            </p>

            <p>
              ISO 9001은 1987년에 국제 표준화 기구에 의하여
              처음 발표되었으며
              현재 최신 버전은
              2015년 09월에 발표되었습니다.
            </p>

            <p>
              <span className="text-blue-600 font-semibold">
                ISO 9001:2015
              </span>
              는 규모나 산업의 업종에 관계없이
              모두 적용되며,
              ISO 9001:2008 인증을 취득한 기업은
              전환 심사를 통하여
              2015년 버전으로 전환하여야 합니다.
            </p>
          </div>
        </div>
      </section>

      {/* ================= ISO 14001 ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t">
        <h2 className="text-3xl font-bold mb-12">
          ISO 14001(환경경영시스템) 인증
        </h2>

        <div className="grid md:grid-cols-[360px_1fr] gap-16 items-start">
          <img
            src="/iso-14001.jpg"
            alt="ISO 14001 인증"
            className="rounded-xl w-full object-cover"
          />

          <div className="space-y-6 text-gray-700 leading-relaxed text-[17px]">
            <p>
              <span className="text-blue-600 font-semibold">
                ISO 14001
              </span>
              은 환경경영시스템으로
              모든 제품과 서비스에 적용되는
              국제표준 규격입니다.
            </p>

            <p>
              이 인증은 기업의 생산 활동에 활용되는
              자원의 효율성을 높이고
              낭비를 줄이며
              비용을 절감하려는
              모든 조직을 증명합니다.
            </p>

            <p>
              ISO 14001은 ISO 9001의 경영 시스템과
              통합될 수 있으며,
              이러한 경우 기업이
              환경과 경제적인 목표를
              달성하는 데 도움을 줍니다.
            </p>

            <p>
              <span className="text-blue-600 font-semibold">
                ISO 14001:2015
              </span>
              는 규모나 산업의 업종에 관계없이
              모두 적용되며,
              ISO 14001:2008 인증을 취득한 기업은
              전환 심사를 통하여
              2015년 버전으로 전환하여야 합니다.
            </p>
          </div>
        </div>
      </section>

      {/* ================= ISO 45001 ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t">
        <h2 className="text-3xl font-bold mb-12">
          ISO 45001(안전보건경영시스템) 인증
        </h2>

        <div className="grid md:grid-cols-[360px_1fr] gap-16 items-start">
          <img
            src="/iso-45001.jpg"
            alt="ISO 45001 인증"
            className="rounded-xl w-full object-cover"
          />

          <div className="space-y-6 text-gray-700 leading-relaxed text-[17px]">
            <p>
              <span className="text-blue-600 font-semibold">
                ISO 45001
              </span>
              은 안전보건경영시스템으로
              산업안전과 보건,
              안전 관리 시스템에 대하여
              적용되는 국제표준 규격입니다.
            </p>

            <p>
              임직원이나 방문객,
              더 나아가 기업의 활동에 영향을 받는
              모든 관계자들에 대한
              건강과 안전을 보호하는
              능력을 증명합니다.
            </p>

            <p>
              ISO 45001은 관련한 법규를
              준수하기 위한 첫 걸음이 될 수 있으며,
              전 세계적으로 인정되는 국제 표준으로
              OHSAS 18001:2007을
              대체하기 위하여 발표되었습니다.
            </p>
          </div>
        </div>
      </section>

      {/* ================= COMMON REQUIREMENTS ================= */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10">
            연구소 설립 가능 활동
          </h2>

          <p className="text-gray-700 mb-8">
            모든 ISO 인증은 규격별(9001, 14001, 45001 등)로
            심사 기준이 상이하나
            공통된 부분은 아래와 같습니다.
          </p>

          <ul className="list-disc pl-6 space-y-4 text-gray-700 text-[17px]">
            <li>ISO 시스템 관리의 책임과 권한</li>
            <li>
              문서화 된 정보와 프로세스의
              작용과 계획, 결정을 포함한 요구 사항
            </li>
            <li>인적, 물적 자원과 작업을 포함한 자원 관리</li>
            <li>리더십에 대한 요구사항</li>
            <li>
              내부감사와 시정조치 및 예방 조치,
              성과 개선 등
            </li>
          </ul>
        </div>
      </section>

      <Footer />
    </main>
  );
}
