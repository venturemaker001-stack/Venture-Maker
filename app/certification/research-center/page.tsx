"use client";

import Footer from "../../components/Footer";
import Link from "next/link";

export default function ResearchLabPage() {
  return (
    <main className="bg-white text-gray-800">
      {/* ================= INTRO ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="mb-16">
          <h1 className="text-6xl font-extrabold tracking-tight text-gray-900">
            기업부설연구소
          </h1>
          <div className="mt-6 h-1 w-16 bg-blue-600 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-[360px_1fr] gap-16 items-start">
          {/* LEFT IMAGE */}
          <img
            src="/research-lab-certificate.png"
            alt="기업부설연구소 인증서"
            className="rounded-xl w-full object-contain"
          />

          {/* RIGHT TEXT */}
          <div className="space-y-6 leading-relaxed text-[17px] text-gray-700">
            <p>
              <span className="font-semibold text-blue-600">
                기업부설연구소
              </span>
              란 영리를 목적으로 제품이나 서비스 등을
              생산·유통하는 기업들이
              연구개발활동을 위하여
              사내에 설치하는 조직입니다.
            </p>

            <p>
              기업부설연구소와 연구개발전담부서로
              대부분 설립되며,
              <span className="font-semibold text-blue-600">
                기업부설창작연구소
              </span>
              와
              <span className="font-semibold text-blue-600">
                기업창작전담부서
              </span>
              도 조건에 따라 설립이 가능합니다.
            </p>

            <p>
              연구소와 전담부서를 설립하고 이를 신고하여
              인정받은 기업은
              연구개발활동 수행에 대한
              <span className="font-semibold text-blue-600">
                각종 지원 혜택
              </span>
              을 부여받게 됩니다.
            </p>

            <p>
              이러한 제도는 기업의 연구활동을 촉진하여
              국가적 기술 발전에 기여하도록
              도입된 제도입니다.
            </p>

            <p>
              일정한 조건을 갖추고
              연구개발활동을 할 준비가 되었다면
              설립 후 신고하여
              각종 지원 혜택을 통해
              기업 성장을 도모하시길 바랍니다.
            </p>
          </div>
        </div>
      </section>

     {/* ================= CONDITIONS ================= */}
<section className="bg-gray-50 py-24">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-20 items-stretch">
    
    {/* LEFT CONTENT */}
    <div>
      <h2 className="text-3xl font-bold mb-12 text-gray-900">
        기업부설연구소 설립 조건 및 대상
      </h2>

      <div className="space-y-8 text-gray-700 text-[17px] leading-relaxed">
        <p>
          기업부설연구소와 연구개발전담부서 등 연구조직에 대한 설립은
          <span className="text-sky-500 font-semibold">
            {" "}지식기반과 창작, 과학기술분야의 연구개발활동
          </span>
          을 수행하는 기업이 설립하고 인정이 가능합니다.
        </p>

        <p>
          또한 영리를 목적으로 운영되지 않는 비영리기관 및 기업, 학교,
          사단법인, 재단법인, 의료법인 등은 기업부설연구소 설립 인정에서
          제외됩니다.
        </p>

        {/* TOP BUTTON */}
        <Link href="/certification/research-center/eligibility">
          <button className="inline-flex items-center gap-2 rounded-lg bg-sky-600 px-5 py-3 text-white font-medium hover:bg-sky-700 transition">
            📄 설립대상 상세보기
          </button>
        </Link>

        <p className="pt-10">
          기업부설연구소와 연구개발전담부서
          <span className="text-sky-500 font-semibold">
            {" "}설립조건
          </span>
          을 간단히 살펴보면 아래와 같습니다.
        </p>

        <ul className="space-y-5">
          <li className="flex items-start gap-3">
            <span className="text-sky-500 mt-1">»</span>
            <span>
              연구개발활동이 가능한
              <span className="text-sky-500 font-semibold">
                {" "}연구공간과 시설 보유
              </span>
            </span>
          </li>

          <li className="flex items-start gap-3">
            <span className="text-sky-500 mt-1">»</span>
            <span>
              기업부설연구소는 연구개발활동을 수행할
              <span className="text-sky-500 font-semibold">
                {" "}연구전담요원(연구원)
              </span>
              의 수가
              <span className="text-red-500 font-semibold">
                {" "}3명 이상
              </span>
              (일반중소기업기준*)
            </span>
          </li>

          <li className="flex items-start gap-3">
            <span className="text-sky-500 mt-1">»</span>
            <span>
              연구개발전담부서는 연구개발활동을 수행할
              <span className="text-sky-500 font-semibold">
                {" "}연구전담요원(연구원)
              </span>
              의 수가
              <span className="text-sky-500 font-semibold">
                {" "}1명 이상
              </span>
            </span>
          </li>
        </ul>

        <p className="pt-6">
          연구공간은 조건과 기업규모에 따라 독립된 연구공간이 아니어도
          가능하며, 연구원 또한 기업규모와 기업구분에 따라 요건이
          상이합니다.
        </p>

        <p>
          자세한 설립 조건은 기업경영연구소 홈페이지에서도 확인이
          가능합니다.
        </p>

        {/* BOTTOM BUTTON */}
        <Link href="/certification/research-center/requirements">
          <button className="mt-4 inline-flex items-center gap-2 rounded-lg bg-sky-600 px-5 py-3 text-white font-medium hover:bg-sky-700 transition">
            📄 설립요건 상세보기
          </button>
        </Link>
      </div>
    </div>

    {/* RIGHT IMAGE – 텍스트 높이와 위/아래 정렬 */}
    <div className="hidden lg:flex items-start">
      <div className="w-full h-full overflow-hidden rounded-[48px]">
        <img
          src="/research-lab.jpg"
          alt="연구소 이미지"
          className="w-full h-full object-cover"
        />
      </div>
    </div>

  </div>
</section>




      {/* ================= MAINTENANCE ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold mb-12">
          기업부설연구소 유지보수
        </h2>

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-start">
          <div className="space-y-6 text-gray-700 text-[17px] leading-relaxed">
            <p>
              기업부설연구소 또는 연구개발전담부서는
              세액공제 등 다양한 혜택이 있으나,
              설립 이후
              <span className="font-semibold text-blue-600">
                연구조직의 지속적인 관리
              </span>
              가 매우 중요합니다.
            </p>

            <p>
              매년 4월 중
              <span className="font-semibold text-blue-600">
                연구개발활동조사
              </span>
              를 제출해야 하며,
              연구현황, 연구개발인력,
              연구개발비 등의 내용이 포함됩니다.
            </p>

            <p>
              연구원 퇴사, 기업 내용 변경,
              이전에 따른 소재지 변경 등이
              발생한 경우에는
              반드시 변경 신고를 해야 합니다.
            </p>

            <p>
              현지확인(현장실사) 결과
              요건 미충족, 허위 또는 부정으로
              인정된 경우 
              <span className="font-semibold text-blue-600">
                취소 사유
              </span>
              가 발생할 수 있습니다.
            </p>

            <p>
              취소된 경우
              <span className="font-semibold text-blue-600">
                1년간 재신고 불가
              </span>
              라는 패널티가 부여됩니다.
            </p>
          </div>

          <img
            src="/research-lab-audit.jpg"
            alt="기업부설연구소 관리"
            className="rounded-xl w-full object-cover"
          />
        </div>
      </section>

      {/* ================= RESEARCH NOTE WARNING ================= */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-10 flex items-center gap-3">
            <span className="text-red-500">⚠️</span>
            연구노트 작성 주의사항 (해명자료)
          </h2>

          <div className="space-y-6 text-gray-700 text-[17px] leading-relaxed max-w-4xl">
            <p>
              A사는 중소기업으로서
              자체 기술개발을 위해
              연구소를 운영하고 있었습니다.
            </p>

            <p>
              연구소 소속 인력 5명에 대해
              연구개발 인력 세액감면을 적용받았고,
              연봉은 각 5,000만 원 수준이었습니다.
            </p>

            <p className="font-semibold">
              즉, 5명 × 5,000만 원 =
              연간 총 연구개발 인건비
              2억 5,000만 원
            </p>

            <p>
              연구개발 세액감면은
              인건비의 일정 비율(최대 25%)을
              세금에서 공제받을 수 있어
              약 6,000만 원 수준의
              세제 혜택을 받은 셈입니다.
            </p>

            <p>
              그러나 세무조사 과정에서
              연구소 활동에 대한
              증빙자료 제출을 요청받았고,
              연구노트가 체계적으로
              작성되어 있지 않았습니다.
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>연구개발 목표와 실험 과정 불명확</li>
              <li>결과물 및 성과 관리 부재</li>
              <li>단순 회의록 수준의 기록</li>
            </ul>

            <p>
              이 경우 과세당국은
              연구개발 인건비로 보기 어렵다고 판단하여
              기존 감면받은 세액을
              추징할 위험이 발생합니다.
            </p>
          </div>
        </div>
      </section>

      {/* ================= LAW ================= */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold mb-10">
          연구보고서 관련 법령
        </h2>

        <div className="space-y-6 text-gray-700 text-[17px] leading-relaxed max-w-4xl">
          <p className="font-semibold text-blue-600">
            조세특례제한법 시행규칙 제7조
            (연구 및 인력개발비의 범위)
          </p>

          <p>
            내국인은 해당 과세연도에 수행한
            연구개발 과제별로
            연구개발계획서,
            연구개발보고서 및 연구노트를 작성하여야 하며,
            해당 과세연도의 종료일로부터
            <span className="font-semibold text-blue-600">
              5년간 보관
            </span>
            하여야 합니다.
          </p>

          <p className="text-gray-500">
            &lt;신설 2019. 3. 20.&gt;
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
