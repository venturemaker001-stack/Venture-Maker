"use client";

import Link from "next/link";

export default function MaterialsPartPage() {
  return (
    <main className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-24 space-y-32">

        {/* ================= SECTION 1 ================= */}
        <section>
          <div className="flex items-center justify-between mb-14">
            <h1 className="text-4xl font-bold text-gray-900">
              소부장 전문기업 인증
            </h1>
            <div className="flex-1 ml-8 h-px bg-gray-200" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-16 items-start">
            {/* LEFT IMAGE */}
            <div className="flex justify-center">
              <img
                src="/sobujang-korea.png"
                alt="소부장 강국 KOREA"
                className="w-64 object-contain"
              />
            </div>

            {/* TEXT */}
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                소부장 전문기업 인증이란 이전 소재부품 전문기업에서 더욱 발전되어
                소재와 부품, 장비를 포함하는 개념으로 소부장 전문기업 인증으로
                발전하였습니다.
              </p>

              <p>
                주로 제조업에 해당하는 인증으로 완제품을 구성하기 위한 부품을
                제조하거나 부품을 제조는 소재를 다루는 기업, 소재와 부품을
                생산하는 장비 및 설비를 제조하는 경우 소부장 전문기업 인증을
                취득할 수 있습니다.
              </p>

              <p>
                이는 소재, 부품, 장비산업의 국가적 경쟁력을 강화하고 발전시켜
                지속적인 산업의 성장을 목표로 합니다.
              </p>

              <div className="border-l-4 border-sky-600 pl-6 py-2 text-gray-800">
                <p className="font-semibold mb-2">
                  소재·부품·장비산업 경쟁력강화를 위한 특별조치법 제1조(목적)
                </p>
                <p>
                  이 법은 소재·부품·장비산업의 발전기반을 조성하고, 산업기술역량의
                  축적 등 소재·부품·장비산업의 경쟁력 강화 및 건전한 생태계 구축을
                  통하여 국가안보 및 국민경제의 지속적인 성장에 이바지함을
                  목적으로 한다.
                </p>
              </div>

              <p>
                소부장 전문기업은 제조업이 생산하는 품목이 소부장 대상 업종에
                해당하는 경우에만 신청이 가능합니다.
              </p>

              <p>
                소부장 전문기업 인증의 유효기간은 3년이며 갱신이 아닌 재신청으로
                신규발급됩니다.
              </p>
            </div>
          </div>
        </section>

        {/* ================= SECTION 2 ================= */}
<section>
  <div className="flex items-center justify-between mb-12">
    <h2 className="text-3xl font-bold text-gray-900">
      소부장 인증 혜택
    </h2>
    <div className="flex-1 ml-8 h-px bg-gray-200" />
  </div>

  <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-16 items-start">

    {/* TEXT */}
    <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
      <p>
        소부장 전문기업 인증을 취득한 기업은 한국은행의 금융중개지원
        대출제도를 활용할 수 있습니다.
      </p>

      <p>
        지방중소기업에 대하여 대출실적과 경제사정 등을 감안하여
        대출을 지원하고 있습니다.
      </p>

      <p>
        병역특례 산업기능요원제도를 신청하는 경우 소부장 전문기업에게
        4점의 가점을 부여합니다.
      </p>

      <p>
        그 외 소재부품기술개발사업, 신뢰성기반활용지원사업,
        해외규격인증획득 지원사업의 우대와
        공공조달상생협력 협력기업 참여자격이 주어집니다.
      </p>
    </div>

    {/* IMAGE — intentionally smaller */}
    <div className="hidden lg:flex justify-end self-start">
      <div className="w-[360px] max-h-[280px] overflow-hidden rounded-3xl">
        <img
          src="/sobujang-benefits.jpg"
          alt="소부장 인증 혜택"
          className="w-full h-full object-cover"
        />
      </div>
    </div>

  </div>
</section>


        {/* ================= SECTION 3 ================= */}
        <section>
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              소부장 인증 절차
            </h2>
            <div className="flex-1 ml-8 h-px bg-gray-200" />
          </div>

          <div className="space-y-6 text-gray-700 text-lg leading-relaxed mb-16">
            <p>
              소부장 전문기업 인증의 기본은 기업의 총 매출액에서 소부장
              매출액 비율이 50% 이상이어야 한다는 것이 중요합니다.
            </p>

            <p>
              기업이 생산하는 제품 중 소부장 매출에 해당 하는 부분을
              확실하게 파악하고 비율을 알아야 합니다.
            </p>

            <p>절차는 다른 인증에 비해 간단합니다.</p>
          </div>

          {/* PROCESS STEPS */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                title: "온라인 작성",
                desc: "모든 구비서류를 취합하여 온라인으로 신청",
                icon: "🖥️",
              },
              {
                title: "제출서류 심사",
                desc: "제출된 서류로 심사진행",
                icon: "📄",
              },
              {
                title: "필요시 진행",
                desc: "현장심사가 필요한 경우 진행",
                icon: "👤",
              },
              {
                title: "전문기업확인",
                desc: "소부장 전문기업 확인서 발급",
                icon: "🎉",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white border rounded-2xl p-8 text-center shadow-sm"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-semibold text-lg mb-2 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= SECTION 4 ================= */}
        <section>
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              소부장 인증 컨설팅
            </h2>
            <div className="flex-1 ml-8 h-px bg-gray-200" />
          </div>

          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            <p>
              소부장 전문기업 인증은 절차가 간단하여 쉽게 받을 수도 있는
              인증입니다.
            </p>

            <p>
              하지만 우리 기업이 생산하는 제품이 소부장 산업에 해당하는지를
              정확히 판단하고 매출액 기준이 부합하는지 등을 확실하게
              판단하여야 합니다.
            </p>

            <p>
              확인을 위한 부속자료를 정확하게 작성하고 준비해야 빠르게
              소부장 인증을 취득할 수 있습니다.
            </p>

            <p>
              제조업 성장의 첫 걸음을 떼는 인증으로 적합하며 각종 혜택이나
              소부장 전문기업만을 위한 지원 사업에 참여할 수 있는 자격을
              얻게 됩니다.
            </p>

            <p className="font-medium text-gray-900">
              기업경영연구소의 경영컨설팅으로 소부장 인증을 취득하세요.
            </p>
          </div>
        </section>

      </div>
    </main>
  );
}
