"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Footer from "../../components/Footer";

export default function MainbizPage() {
  const [activeBenefitTab, setActiveBenefitTab] = useState(0);

  const steps = [
    {
      title: "자가진단",
      desc: "온라인 작성\n자가진단 점수 600점 이상 필요",
      icon: "🖥️",
    },
    {
      title: "신청접수",
      desc: "메인비즈 신청\n신규평가 55만원 · 갱신평가 44만원",
      icon: "📄",
    },
    {
      title: "현장심사",
      desc: "방문평가\n총 점수 700점 이상 승인",
      icon: "👥",
    },
    {
      title: "메인비즈 발급",
      desc: "지방중소벤처기업청\n인증서 승인",
      icon: "🏆",
    },
  ];

  return (
    <main className="bg-white text-gray-800">
      {/* ================= INTRO ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="mb-16">
          <span className="block text-sm font-semibold tracking-widest text-blue-600 mb-3">
            MAINBIZ CERTIFICATION
          </span>

          <h1 className="text-6xl font-extrabold tracking-tight text-gray-900">
            메인비즈 인증
          </h1>

          <div className="mt-6 h-1 w-16 bg-blue-600 rounded-full" />
        </div>

        <div className="grid md:grid-cols-[360px_1fr] gap-16 items-stretch">
          {/* LEFT IMAGE */}
          <div className="w-full h-full flex items-center justify-center bg-white rounded-2xl shadow-lg p-6">
            <img
              src="/mainbiz-intro.png"
              alt="메인비즈 경영혁신형 중소기업"
              className="max-w-full max-h-full object-contain"
            />
          </div>

          {/* RIGHT TEXT */}
          <div className="space-y-6 leading-relaxed text-gray-700 text-[17px]">
            <p>
              메인비즈 인증이란 업력 3년 이상인 기업 중에서
              기술혁신이 아닌 경영혁신을 통하여
              성장성이 우수한 기업들을 발굴하고 육성하기 위하여
              도입된 제도입니다.
            </p>

            <p>
              주된 혜택으로는 메인비즈 인증을 취득한 중소기업에게
              기술이나 정책자금, 세제혜택을 부여하여
              경영혁신을 촉진시키고 성장시킬 수 있도록 합니다.
            </p>

            <div className="border-l-4 border-blue-600 pl-6 py-5 bg-blue-50 rounded-md">
              <p className="font-semibold text-blue-700 mb-2">
                중소기업 기술혁신 촉진법 제15조의3
                <br />(중소기업 경영혁신 촉진 지원사업)
              </p>
              <p className="text-sm">
                중소벤처기업부장관은 중소기업의 경영혁신을 촉진하기 위하여
                다음 각 호의 지원사업을 추진할 수 있다.
              </p>
            </div>

            <p>
              평가기관은 신용보증기금, 기술보증기금,
              한국생산성본부이며
              경영혁신형 중소기업(메인비즈) 평가지표에 따라
              <span className="font-semibold text-blue-600">
                {" "}
                1,000점 만점 중 700점 이상
              </span>
              을 받아야 합니다.
            </p>

            <p>
              메인비즈 인증 유효기간은{" "}
              <span className="font-semibold text-blue-600">3년</span>이며,
              유효기간 만료 3개월 전부터 만료 후 1개월 이내에
              재인증을 받아 기간을 연장할 수 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* ================= BENEFITS ================= */}
<section className="bg-white py-24">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-3xl font-bold mb-12">메인비즈 인증 혜택</h2>

    <div className="grid lg:grid-cols-[1.3fr_1fr] gap-20 items-start mb-16">
      {/* LEFT TEXT */}
      <div className="space-y-6 text-gray-700 leading-relaxed text-[17px]">
        <p>
          메인비즈 인증을 취득한 중소기업은 수도권 소재기업은 2년,
          <br />
          지방 소재기업은 3년간 정기세무조사를 유예합니다.
        </p>

        <p>
          또한 수입실적 1억 달러 이하의 기업은
          <br />
          관세조사를 1년 유예합니다.
        </p>

        <p>
          신용보증기금과 기술보증기금의 보증료율 차감,
          <br />
          각종 금리우대, 한도 상승,
          <br />
          자금지원 및 평가 시 가점 부여 등의 혜택을 받을 수 있습니다.
        </p>

        <p className="pt-2">
          그 외 다양한 혜택은 요약표를 참고해 주시기 바랍니다.
        </p>
      </div>

      {/* RIGHT IMAGE – BIG, NO FRAME */}
      <div className="flex justify-center">
        <img
          src="/mainbiz-benefit.jpg"
          alt="메인비즈 인증 혜택"
          className="w-full max-w-[560px] object-cover rounded-xl"
        />
      </div>
    </div>

    {/* ================= TABS ================= */}
    <div className="flex border-b border-gray-300">
      {[
        "금융 혜택",
        "세제 혜택",
        "수출 및 판매",
        "연구개발 관련 혜택",
        "인력 관련 혜택",
        "기타 혜택",
      ].map((tab, idx) => (
        <button
          key={tab}
          onClick={() => setActiveBenefitTab(idx)}
          className={`px-8 py-4 text-sm font-semibold border border-b-0 transition
            ${
              activeBenefitTab === idx
                ? "bg-white text-gray-900 border-gray-300"
                : "bg-gray-50 text-gray-400 border-gray-200 hover:text-gray-600"
            }`}
        >
          {tab}
        </button>
      ))}
    </div>

    {/* ================= TABLE ================= */}
    <div className="border border-gray-300 p-16 text-gray-700 text-lg leading-relaxed">
      {/* 금융 혜택 */}
      {activeBenefitTab === 0 && (
        <ol className="list-decimal pl-6 space-y-8">
          <li>신용보증기금 보증료율 차감 우대</li>
          <li>신용보증기금 매출채권 보험료 15% 할인</li>
          <li>SGI서울보증 보증한도 확대 및 보증보험료 10% 할인</li>
          <li>한국은행, 농협, 신한금융투자 연계 금리 우대</li>
          <li>무역 보증료 20% 할인, 한도 우대 및 이용절차의 간소화 지원</li>
          <li>혁신창업사업화 자금지원</li>
        </ol>
      )}

      {/* 세제 혜택 */}
      {activeBenefitTab === 1 && (
        <ol className="list-decimal pl-6 space-y-8">
          <li>수도권 소재 기업 2년, 지방 소재 기업 3년간 정기 세무조사 유예</li>
          <li>세금포인트 적립제도 우대 점수 부여</li>
          <li>관세 조사 유예</li>
        </ol>
      )}

      {/* 수출 및 판매 */}
      {activeBenefitTab === 2 && (
        <ol className="list-decimal pl-6 space-y-8">
          <li>글로벌 강소기업 육성사업 지원 시 우대</li>
          <li>방송 광고비의 일부 감면</li>
          <li>물품구매적격심사 지원 시 우대 가점 부여</li>
          <li>수출바우처 신청 시 우대 가점 부여</li>
        </ol>
      )}

      {/* 연구개발 관련 혜택 */}
      {activeBenefitTab === 3 && (
        <ol className="list-decimal pl-6 space-y-8">
          <li>각종 중소벤처기업부 사업 신청 시 가점 부여</li>
          <li>방위사업청의 글로벌 방산 육성사업 신청 시 우대 가점 부여</li>
        </ol>
      )}

      {/* 인력 관련 혜택 */}
      {activeBenefitTab === 4 && (
        <ol className="list-decimal pl-6 space-y-8">
          <li>공공연구기관의 연구인력을 중소기업에 파견하여 역량 제고를 지원</li>
          <li>일학습병행제 참여 시 심사 우대 및 상시 근로자수 5명 이상으로 조건 완화</li>
        </ol>
      )}

      {/* 기타 혜택 */}
      {activeBenefitTab === 5 && (
        <ol className="list-decimal pl-6 space-y-8">
          <li>취업 포털사이트 사람인과 인크루트에 구인 공고 시 메인비즈 인증기업으로 배치</li>
          <li>중소기업 임직원을 위한 모바일 교육플랫폼 구축 및 임직원 교육 무상 지원</li>
          <li>기업 핵심 기술자료 및 영업비밀을 기술자료 임치센터 보관 시 수수료 1/3 감면</li>
        </ol>
      )}
    </div>
  </div>
</section>


      {/* ================= PROCESS ================= */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-16">메인비즈 인증 절차</h2>

          <p className="text-gray-600 max-w-4xl mb-16 leading-relaxed">
            메인비즈 인증은 창업 초기 기업은 신청할 수 없으며
            3년이 지난 기업만 신청이 가능합니다.
            <br />
            자가진단 점수 600점 이상인 경우 신청이 가능하며
            현장평가를 통해 총 점수가 700점 이상일 경우에만
            승인됩니다.
            <br />
            탈락에 대한 패널티는 없으나
            평가비용은 환불되지 않으므로
            신중한 접근과 철저한 준비가 필요합니다.
          </p>

          <div className="grid md:grid-cols-4 gap-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-md p-8 text-center"
              >
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                <p className="text-sm text-gray-600 whitespace-pre-line">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONSULTING ================= */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-10">메인비즈 인증 컨설팅</h2>

          <div className="space-y-5 text-gray-700 leading-relaxed max-w-4xl text-lg">
            <p>
              현장 평가는 자가진단을 통해 취득한 점수에 대한
              검증 시간으로 질의응답과 증빙자료를 확인합니다.
            </p>

            <p>
              경영혁신 관련 경영계획과 마케팅,
              시장분석 자료를 구비해야 하며
              기술 및 서비스, 제품 표준화가 필요합니다.
            </p>

            <p>
              조직관리, 업무분장, 고객관리,
              내부 임직원 채용과 복지,
              포상까지 전반적으로 심사합니다.
            </p>

            <p className="font-semibold text-gray-900">
              메인비즈 인증 취득을 위해
              언제든지 상담 신청해 주시기 바랍니다.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
