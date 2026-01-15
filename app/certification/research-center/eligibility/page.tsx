
export default function EligibilityPage() {
  return (
    <main className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-24 space-y-24">

        {/* ================= SECTION 1 ================= */}
<section>
  <div className="flex items-center justify-between mb-12">
    <h1 className="text-4xl font-bold text-gray-900">
      기업부설연구소 설립 대상
    </h1>
    <div className="flex-1 ml-8 h-px bg-gray-200" />
  </div>

  <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-16 items-start">

    {/* LEFT IMAGE (정부 로고 – 프레임 없음) */}
    <div className="flex justify-center lg:justify-start">
      <img
        src="/science-ministry.png"
        alt="과학기술정보통신부"
        className="w-64 h-auto object-contain"
      />
    </div>

    {/* TEXT */}
    <p className="text-gray-700 text-lg leading-relaxed">
      기업부설연구소, 연구개발전담부서, 기업부설창작연구소,
      기업창작전담부서를 설립하기 위한 설립 주체는 기본적으로
      개인기업과 법인기업으로 영리활동을 수행하는 기관이어야
      합니다. 연구개발 및 창작개발 이외의 활동 등에 필요한
      최소한의 인력과 조직, 시설 등을 보유하고 있어야 하며,
      연구개발 및 창작개발 활동만을 수행하는 기업은 인정 받을 수
      없습니다.
    </p>
  </div>
</section>


        {/* ================= SECTION 2 ================= */}
        <section>
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-bold text-gray-900">
              연구소 설립 가능 기업
            </h2>
            <div className="flex-1 ml-8 h-px bg-gray-200" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-16 items-start">
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                기업부설연구소와 연구개발전담부서 등은 영리를 목적으로
                운영되는 기업이 설립할 수 있으며 기업부설창작연구소,
                창작전담부서 또한 영리 목적으로 운영되는 기업이어야
                합니다.
              </p>

              <p>
                기업부설연구소의 경우 영리를 목적으로 설립된 단체로
                중소기업협동조합이나 영농조합법인도 설립이 가능합니다.
                연구소 설립이 불가한 기관으로는 비영리 기관인 학교,
                사단법인, 재단법인과 기능대학, 직업훈련기관,
                의료법인이 있습니다.
              </p>

              <p>
                지식기반서비스를 포함한 대부분의 업종을 영위하는 기업은
                연구소 설립이 가능합니다.
                <span className="text-gray-500">
                  {" "}(단, 유흥 등의 관련분야는 제외됩니다.)
                </span>
              </p>

              <div className="pt-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  자주 묻는 질문
                </h3>

                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-gray-900">
                      1. 병원, 치과는 연구소를 설립할 수 없나요?
                    </p>
                    <p className="text-gray-600">
                      → 가능합니다. 단, 의료법인은 설립이 불가합니다.
                    </p>
                  </div>

                  <div>
                    <p className="font-medium text-gray-900">
                      2. 고유번호증이 있는데 연구소 설립이 가능한가요?
                    </p>
                    <p className="text-gray-600">
                      → 불가능합니다. 영리 목적으로 운영되는 단체만
                      설립이 가능합니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="hidden lg:flex justify-end">
              <div className="relative w-[380px] h-[520px] overflow-hidden rounded-[48px]">
                <img
                  src="/research-building.png"
                  alt="연구소 설립 가능 기업 이미지"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 3 ================= */}
<section>
  <div className="flex items-center justify-between mb-10">
    <h2 className="text-3xl font-bold text-gray-900">
      연구소 설립 가능 활동
    </h2>
    <div className="flex-1 ml-8 h-px bg-gray-200" />
  </div>

  <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-16 items-stretch">
    
    {/* LEFT TEXT */}
    <div className="space-y-8 text-gray-700 text-lg leading-relaxed">
      <p>
        기업부설연구소 및 연구개발전담부서는 연구개발활동으로
        인정 받을 수 없는 활동을 제외한 활동들은 연구개발활동으로
        인정됩니다. 기업부설창작연구소와 창작전담부서는 기술개발
        활동만을 수행하여서는 안되며 창작적 요소가 필히 포함되어야
        합니다.
      </p>

      <div>
        <p className="font-semibold text-gray-900 mb-3">
          기업부설연구소의 미인정 활동
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>일상적이며 반복적으로 발생하는 개선 및 판촉 활동</li>
          <li>기업이 일반적으로 수행하는 통상적인 개선 및 혁신활동</li>
          <li>보편화된 지식이나 기술을 영업에 단순 활용하는 활동</li>
          <li>
            일상적인 연구활동으로 새로운 서비스나 제품과
            연계되지 않는 연구 활동
          </li>
        </ul>
      </div>

      <div>
        <p className="font-semibold text-gray-900 mb-3">
          창작연구소의 미인정 활동
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>창의성이 수반되지 않는 단순한 제작과 변환 활동</li>
          <li>
            일반적인 관리·지원활동, 시장조사, 판촉활동,
            반복적인 정보수집 활동
          </li>
          <li>경영 및 사업의 효율성을 조사·분석하는 활동</li>
        </ul>
      </div>
    </div>

    {/* RIGHT IMAGE – 텍스트 높이에 맞게 세로 정렬 */}
    <div className="hidden lg:flex items-start">
      <div className="w-full h-full overflow-hidden rounded-[32px]">
        <img
          src="/research-activity.png"
          alt="연구 활동 이미지"
          className="w-full h-full object-cover"
        />
      </div>
    </div>

  </div>
</section>


        {/* ================= SECTION 4 ================= */}
        <section>
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-bold text-gray-900">
              연구소 활동 관련 법령
            </h2>
            <div className="flex-1 ml-8 h-px bg-gray-200" />
          </div>

          <p className="text-sky-600 font-semibold mb-6">
            조세특례제한법 시행령 제 1조의 2 (정의)
          </p>

          <ol className="list-decimal pl-6 space-y-2 text-gray-700 text-lg">
            <li>일반적인 관리 및 지원활동</li>
            <li>시장조사, 판촉활동 및 일상적인 품질시험</li>
            <li>반복적인 정보수집 활동</li>
            <li>경영이나 사업의 효율성을 조사·분석하는 활동</li>
            <li>특허권의 신청·보호 등 법률 및 행정 업무</li>
            <li>광물 등 자원 매장량 확인, 위치 확인 등의 조사·탐사 활동</li>
            <li>위탁받아 수행하는 연구활동</li>
            <li>이미 기획된 콘텐츠를 단순 제작하는 활동</li>
            <li>
              기존에 상품화 또는 서비스화된 소프트웨어 등을 복제하여
              반복적으로 제작하는 활동
            </li>
          </ol>
        </section>

      </div>
    </main>
  );
}
