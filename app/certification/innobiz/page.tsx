"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Footer from "../../components/Footer";

export default function InnobizPage() {
  const [activeBenefitTab, setActiveBenefitTab] = useState(0);

  const steps = [
    {
      title: "자가진단",
      desc: "자가진단 점수 650점 이상 필요",
      icon: "🖥️",
    },
    {
      title: "신청접수",
      desc: "이노비즈 신청\n신규평가 77만원 · 갱신평가 44만원",
      icon: "📄",
    },
    {
      title: "현장심사",
      desc: "방문평가\n총 점수 700점 이상 승인",
      icon: "👥",
    },
    {
      title: "이노비즈 발급",
      desc: "이노비즈 인증서 우편 송부",
      icon: "🏆",
    },
  ];

  return (
    <main className="bg-white text-gray-800">
      {/* ================= INTRO ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        {/* TITLE */}
        <div className="mb-16">
          <span className="block text-sm font-semibold tracking-widest text-blue-600 mb-3">
            INNOBIZ CERTIFICATION
          </span>

          <h1 className="text-6xl font-extrabold tracking-tight text-gray-900">
            이노비즈 인증
          </h1>

          <div className="mt-6 h-1 w-16 bg-blue-600 rounded-full" />
        </div>

        <div className="grid md:grid-cols-[360px_1fr] gap-16 items-stretch">
          {/* LEFT IMAGE (HORIZONTAL, FULL HEIGHT) */}
<div className="w-full h-full flex items-center justify-center bg-white rounded-2xl shadow-lg p-6">
  <img
    src="/innobiz-intro.png"
    alt="이노비즈 기술혁신형 중소기업"
    className="max-w-full max-h-full object-contain"
  />
</div>



          {/* RIGHT TEXT */}
          <div className="space-y-6 leading-relaxed text-gray-700 text-[17px]">
            <p>
              이노비즈 인증이란 업력 3년 이상인 기업 중에서 기술혁신 활동을 통하여
              기술경쟁력을 이미 확보하였거나 확보할 수 있으면서
              미래 성장가능성이 높은 기업을 이노비즈 기업으로 선정·발굴하여
              육성하기 위한 제도입니다.
            </p>

            <p>
              혁신조사를 위한 최초의 국제적 기준인 오슬로 매뉴얼을 기반으로 하여
              평가 및 심사를 통과한 기업은 기술혁신을 보유한 핵심 기업군으로
              인증됩니다.
            </p>

            <p>
              주요 혜택으로는 수도권 취득세 중과세 면제, 정기 세무조사 유예,
              정책자금 지원과 특허 우선심사 등이 있습니다.
            </p>

            <div className="border-l-4 border-blue-600 pl-6 py-5 bg-blue-50 rounded-md">
              <p className="font-semibold text-blue-700 mb-2">
                중소기업 기술혁신 촉진법 제15조
              </p>
              <p className="text-sm">
                중소벤처기업부장관은 기술혁신형 중소기업을 발굴·육성하기 위한
                사업을 추진할 수 있으며 비수도권 지역의 기술혁신형 중소기업을
                우선적으로 지원합니다.
              </p>
            </div>

            <p>
              이노비즈 인증 유효기간은{" "}
              <span className="text-blue-600 font-semibold">3년</span>이며,
              만료 3개월~1개월 전 재인증을 통해 연장할 수 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* ================= BENEFITS ================= */}
<section className="bg-white py-24">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-3xl font-bold mb-12">이노비즈 인증 혜택</h2>

    <div className="grid lg:grid-cols-[1.4fr_1fr] gap-16 items-start mb-16">
      {/* LEFT TEXT */}
      <div className="space-y-5 text-gray-700 leading-relaxed">
        <p>
          이노비즈 인증을 취득한 중소기업은 수도권 취득세 중과를 면제받고,
          수도권 소재 기업은 2년, 지방 소재 기업은 3년간
          정기세무조사를 유예받습니다.
        </p>

        <p>
          각종 국가 기술개발 사업 신청 시 가점을 부여받고,
          정책자금 보증 및 금융지원에서 우대를 받게 됩니다.
        </p>

        <p>
          특허 출원 시 우선심사 대상이 되며,
          코스닥 상장 요건 또한 완화됩니다.
        </p>

        <p>
          그 외 다양한 혜택은 아래 요약표를 참고해 주세요.
        </p>
      </div>

      {/* RIGHT IMAGE */}
      <div className="flex justify-center">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <img
            src="/innobiz-benefit.jpg"
            alt="이노비즈 기술혁신형 중소기업 확인서"
            className="w-[300px] max-w-full object-contain"
          />
        </div>
      </div>
    </div>

    {/* TABS */}
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

    {/* TABLE */}
    <div className="border border-gray-300 p-16 text-gray-700 text-lg leading-relaxed">
      {/* 금융 혜택 */}
      {activeBenefitTab === 0 && (
        <ol className="list-decimal pl-6 space-y-8">
          <li>기술보증기금 보증료율 차감 우대</li>
          <li>기술보증기금 기술보증 보증한도 확대 지원</li>
          <li>기술보증기금 기술보증 보증비율 최대 100% 전액 보증 지원</li>
          <li>은행 연계 금리 우대</li>
          <li>소부장 기업 성장지원, 스마트공장 혁신지원 등</li>
        </ol>
      )}

      {/* 세제 혜택 */}
      {activeBenefitTab === 1 && (
        <ol className="list-decimal pl-6 space-y-8">
          <li>이노비즈 기업 수도권 소재 기업 2년, 지방 소재 기업 3년간 정기 세무조사 유예</li>
          <li>이노비즈 기업 수도권 취득세 중과 면제</li>
          <li>납부기한 연장 및 납부유예</li>
          <li>부가가치세 환급 조기 지급 지원</li>
        </ol>
      )}

      {/* 수출 및 판매 */}
      {activeBenefitTab === 2 && (
        <ol className="list-decimal pl-6 space-y-8">
          <li>글로벌 강소기업 육성사업 지원 시 우대</li>
          <li>공공쇼핑몰 우수제품 입점 및 판매 홍보 우대</li>
          <li>물품구매적격심사 지원 시 신인도 평가 가점 부여</li>
          <li>일반용역적격심사 지원 시 신인도 평가 가점 부여</li>
          <li>이노비즈 기업 방송광고 비용 할인 지원</li>
        </ol>
      )}

      {/* 연구개발 관련 혜택 */}
      {activeBenefitTab === 3 && (
        <ol className="list-decimal pl-6 space-y-8">
          <li>각종 중소벤처기업부 사업 신청 시 가점 부여</li>
          <li>스마트 제조혁신, ICT 솔루션, 스케일업, 해외인증규격 등</li>
        </ol>
      )}

      {/* 인력 관련 혜택 */}
      {activeBenefitTab === 4 && (
        <ol className="list-decimal pl-6 space-y-8">
          <li>병역특례 전문연구요원제도 우대 가점</li>
          <li>병역특례 산업기능요원제도 우대 가점</li>
          <li>연구개발 기획역량제고사업 우대 가점</li>
          <li>공공연구기관 연구인력 중소기업 파견 지원</li>
        </ol>
      )}

      {/* 기타 혜택 */}
      {activeBenefitTab === 5 && (
        <ol className="list-decimal pl-6 space-y-8">
          <li>특허 출원 시 우선심사 지원 대상</li>
          <li>
            핵심 기술자료 및 영업비밀을 기술자료 임치센터에 보관 시
            수수료 1/3 감면
          </li>
        </ol>
      )}
    </div>
  </div>
</section>


      {/* ================= PROCESS ================= */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-16">이노비즈 인증 절차</h2>

          <div className="grid md:grid-cols-4 gap-10 relative">
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
          <h2 className="text-3xl font-bold mb-10">이노비즈 인증 컨설팅</h2>

          <div className="space-y-5 text-gray-700 leading-relaxed max-w-4xl text-lg">
            <p>
              이노비즈 인증은 메인비즈보다 난이도가 높으며,
              약 60개 내외의 평가항목을 통해 기술혁신능력과
              사업화 역량을 종합적으로 평가합니다.
            </p>

            <p>
              현장 평가에서 탈락하더라도 패널티는 없지만
              평가비용은 환불되지 않기 때문에
              사전 준비와 전략 수립이 매우 중요합니다.
            </p>

            <p>
              중장기 기술 계획, 경영 시스템,
              기술 증빙 자료에 대한 체계적인 준비가 필요합니다.
            </p>

            <p className="font-semibold text-gray-900">
              이노비즈 인증을 빠르고 효율적으로 받고 싶다면
              언제든지 상담을 신청해 주세요.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
