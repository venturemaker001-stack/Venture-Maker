"use client";

import { useState } from "react";   // ✅ 이 줄 추가
import { motion } from "framer-motion";
import Footer from "../../components/Footer";


export default function VentureCertificationPage() {
  const steps = [
    {
      title: "벤처신청",
      desc: "유형별 벤처기업 신청",
      icon: "📝",
    },
    {
      title: "신청접수",
      desc: (
        <>
          • 벤처투자유형 15만원<br />
          • 연구개발유형 35만원<br />
          • 혁신성장유형 45만원
        </>
      ),
      icon: "📂",
    },
    {
      title: "현장심사",
      desc: (
        <>
          • 벤처투자유형 30일<br />
          • 연구개발유형 45일<br />
          • 혁신성장유형 45일
        </>
      ),
      icon: "🏢",
    },
    {
      title: "최종심의 및 발급",
      desc: (
        <>
          • 현장 평가 결과 기반 최종 심의<br />
          • 통과 후 벤처기업인증서 온라인 출력
        </>
      ),
      icon: "🏆",
    },
  ];
const [activeBenefitTab, setActiveBenefitTab] = useState(0);

  return (
    <main className="bg-white text-gray-800">
      {/* ================= INTRO ================= */}
<section className="max-w-7xl mx-auto px-6 py-24">
  {/* TITLE BLOCK */}
  <div className="mb-16">
    <span className="block text-sm font-semibold tracking-widest text-blue-600 mb-3">
      VENTURE CERTIFICATION
    </span>

    <h1 className="text-6xl font-extrabold tracking-tight text-gray-900">
      벤처기업 인증
    </h1>

    <div className="mt-6 h-1 w-16 bg-blue-600 rounded-full" />
  </div>

  <div className="grid md:grid-cols-[360px_1fr] gap-16 items-stretch">
    
    {/* LEFT IMAGE (FULL HEIGHT) */}
    <div className="w-full">
      <img
        src="/venture-intro.jpg"
        alt="벤처확인기업"
        className="w-full h-full object-cover rounded-2xl shadow-lg"
      />
    </div>

    {/* RIGHT TEXT */}
    <div className="space-y-6 leading-relaxed text-gray-700 text-[17px]">
      <p>
        벤처기업 인증이란 새로운 기술과 아이디어를 개발하여 신사업을
        성장시키는 기업에게 내수를 넘어 글로벌 확산과 경제성장 및
        일자리 창출의 역할을 수행할 수 있도록 발굴하여 성장시키기 위한
        인증제도입니다.
      </p>

      <p>
        벤처기업의 경쟁력을 확보하여 기업가치를 높이고 혁신 역량을
        강화시키는 등의 환경을 조성하고 이에 따른 정책적인 지원을
        제공하고 있습니다.
      </p>

      <p>
        법인세 및 소득세 50% 감면, 취득세 75% 감면, 재산세 면제 및 감면
        등의 다양한 세제혜택과 금융, M&A 등의 혜택을 받을 수 있습니다.
      </p>

      <div className="border-l-4 border-blue-600 pl-6 py-5 bg-blue-50 rounded-md">
        <p className="font-semibold text-blue-700 mb-2">
          벤처기업육성에 관한 특별조치법 제2조제1항
        </p>
        <p className="text-sm text-gray-700">
          창업 후 3년 이내에 벤처기업으로 확인받은 기업은 최초 소득 발생
          과세연도부터 4년간 소득세 또는 법인세의 50%를 감면받을 수 있습니다.
        </p>
      </div>

      <p className="text-base">
        벤처기업 인증 유효기간은{" "}
        <span className="text-blue-600 font-semibold">3년</span>이며,
        만료 전 재인증을 통해 연장할 수 있습니다.
      </p>
    </div>
  </div>
</section>



      {/* ================= BENEFITS SECTION ================= */}
<section className="bg-white py-24">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-3xl font-bold mb-12">벤처기업 인증 혜택</h2>

    {/* TOP ROW: TEXT + IMAGE */}
    <div className="grid lg:grid-cols-[1.4fr_1fr] gap-16 items-start mb-16">
      
      {/* LEFT TEXT */}
      <div className="space-y-5 text-gray-700 leading-relaxed">
        <p>
          <span className="text-blue-500 font-semibold">벤처기업</span> 인증을 받은
          중소기업은 일반 기업에서 벤처기업으로 전환되는 것과 같습니다.
        </p>

        <p>
          가장 <span className="text-blue-500 font-semibold">강력한 혜택인 세제혜택</span>을
          살펴보세요.
        </p>

        <p>
          창업벤처중소기업은
          <span className="text-blue-500 font-semibold">
            {" "}창업 이후 3년 이내에 벤처기업 인증을 취득한 기업
          </span>
          을 말합니다.
        </p>

        <p>
          창업벤처중소기업에게는
          <span className="text-blue-500 font-semibold">
            {" "}법인세 및 소득세 50% 감면, 취득세 75% 감면
          </span>
          , 재산세에 대하여 벤처확인 시점부터 3년간 면제되고
          이후 <span className="text-blue-500 font-semibold">2년간 50%</span>가
          감면됩니다.
        </p>

        <p>
          또한 기업부설연구소와 연구개발전담부서의
          <span className="text-blue-500 font-semibold">
            {" "}연구전담요원 조건이 2명으로 완화
          </span>
          됩니다.
        </p>

        <p>
          기업부설창작연구소는 기존 5명에서 3명으로 완화됩니다.
        </p>

        <p>
          그 외 <span className="text-blue-500 font-semibold">다양한 혜택</span>은
          요약표를 참고하여 주시기 바랍니다.
        </p>
      </div>

      {/* RIGHT IMAGE */}
      <div className="w-full">
        <img
          src="/venture-benefit.jpg"
          alt="Venture certification benefits"
          className="w-full rounded-2xl shadow-lg object-cover"
        />
      </div>
    </div>

    {/* TAB LABELS */}
    <div className="flex border-b border-gray-300">
      {["세제 혜택", "금융 혜택", "인력 관련 혜택", "기타 혜택"].map((tab, idx) => (
        <button
          key={tab}
          onClick={() => setActiveBenefitTab(idx)}
          className={`px-10 py-4 text-sm font-semibold border border-b-0 transition
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

    {/* FULL WIDTH TABLE */}
    <div className="border border-gray-300 p-16 text-gray-700 text-lg leading-relaxed">
      {activeBenefitTab === 0 && (
        <ol className="list-decimal pl-6 space-y-10">
          <li>법인세 및 소득세 50% 감면 (창업벤처중소기업에 한함)</li>
          <li>취득세 75% 감면 (창업벤처중소기업에 한함)</li>
          <li>재산세 3년간 면제 및 이후 2년간 50% 감면 (창업벤처중소기업에 한함)</li>
          <li>취득세 및 재산세 37.5% 경감 (촉진지구 내 벤처기업)</li>
          <li>취득세·등록면허세·재산세 중과 면제 (산업기술단지 입주)</li>
        </ol>
      )}

      {activeBenefitTab === 1 && (
        <ol className="list-decimal pl-6 space-y-10">
          <li>기술보증기금 보증한도 확대</li>
          <li>코스닥 상장 심사기준 완화 및 우대</li>
          <li>정책자금 및 정부 지원사업 가점 부여</li>
        </ol>
      )}

      {activeBenefitTab === 2 && (
        <ol className="list-decimal pl-6 space-y-10">
          <li>기업부설연구소 연구전담요원 최소 2인 완화</li>
          <li>기업부설창작연구소 연구전담요원 최소 3인 완화</li>
          <li>스톡옵션 부여 대상 확대</li>
          <li>스톡옵션 부여 한도 50% 확대</li>
        </ol>
      )}

      {activeBenefitTab === 3 && (
        <ol className="list-decimal pl-6 space-y-10">
          <li>대기업 인수합병 시 상호출자제한기업집단 편입 7년 유예</li>
          <li>TV·라디오 광고비 3년간 최대 70% 할인</li>
        </ol>
      )}
    </div>
  </div>
</section>


      {/* ================= PROCESS (ANIMATED) ================= */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-16">벤처기업 인증 절차</h2>

          <div className="grid md:grid-cols-4 gap-10 relative">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-md p-8 text-center relative"
              >
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.desc}
                </p>

                {/* Connector */}
                {i !== steps.length - 1 && (
                  <span className="hidden md:block absolute top-1/2 right-[-40px] w-8 h-px bg-gray-300" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONSULTING ================= */}
<section className="bg-gray-50 py-20">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-3xl font-bold mb-10">벤처기업 인증 컨설팅</h2>

    <div className="space-y-5 text-gray-700 leading-relaxed max-w-4xl text-lg">
      {/* ONE-LINE SENTENCE */}
      <p className="whitespace-nowrap">
        적격투자기관으로부터 5,000만원 이상 투자를 받아 벤처투자유형으로 인증을 받거나 연구개발비 5% 이상 투자 요건을 충족하는 것은 쉽지 않습니다.
      </p>

      <p>
        대부분의 중소기업은 <span className="font-semibold">혁신성장유형</span>으로 접근해야 하며,
        기술의 혁신성과 사업의 성장성이 요구됩니다.
      </p>

      <p>
        많은 고객사가 이 입증 과정에서 어려움을 겪고 있습니다.
      </p>

      <p className="font-semibold text-gray-900">
        벤처메이커와 함께라면 벤처기업 인증을 빠르고 확실하게
        취득할 수 있습니다.
      </p>

      <p>
        언제든지 상담을 신청해 주세요.
      </p>
    </div>
  </div>
</section>


      <Footer />
    </main>
  );
}
