export default function RequirementsPage() {
  return (
    <main className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-24 space-y-28">

        {/* ================= SECTION 1 ================= */}
        <section>
          <div className="flex items-center justify-between mb-12">
            <h1 className="text-4xl font-bold text-gray-900">
              연구소 설립 조건
            </h1>
            <div className="flex-1 ml-8 h-px bg-gray-200" />
          </div>

          <div className="text-gray-700 text-lg leading-relaxed space-y-6">
            <p>
              기업부설연구소와 연구개발전담부서를 설립하기 위해서는
              크게 두 가지의 조건을 갖추어야 합니다.
            </p>

            <p>
              먼저 연구개발활동을 수행할 수 있는 연구전담요원이
              있어야하고 연구개발활동을 수행 할 공간이 필요합니다.
            </p>

            <p>
              이 페이지에서는 이를 인적요건과 물적요건으로 나누어서
              설명해드리고 있습니다.
            </p>

            <p>
              물적요건 대해서의 제약은 거의 없으며 출입문이 있는
              공간이 없더라도 파티션 등으로 구분하여 운영이 가능합니다.
            </p>

            <p>
              연구소 설립 조건에서는 인적요건이 가장 중요한 요소이며
              이를 꼭 충족하여야 합니다.
            </p>
          </div>
        </section>

        {/* ================= SECTION 2 ================= */}
        <section>
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              기업부설연구소 설립의 인적 요건
            </h2>
            <div className="flex-1 ml-8 h-px bg-gray-200" />
          </div>

          <div className="text-gray-700 text-lg leading-relaxed space-y-6">
            <p>
              기본 조건은 기업부설연구소는 3명 이상의 연구전담요원이
              필요하며 연구개발전담부서는 1명 이상이 필요합니다.
            </p>

            <p>
              그 외 창업 3년이내의 기업과 벤처기업 인증을 보유한
              벤처기업은 2명 이상의 연구전담요원이 필요합니다.
            </p>

            <p>
              기업부설연구소 인적요건을 충족하더라도 연구개발활동 외에
              기업에게 필요한 영업, 생산, 경영지원 등의 부서에
              근무하는 임직원이 필히 있어야 합니다.
            </p>

            <p>
              전체 임직원이 연구원으로만 구성된 기업에서는
              설립이 불가합니다.
            </p>

            <p>
              아래의 표는 기업부설연구소를 기준으로 기업 규모에 따른
              필요 연구전담요원의 수입니다.
            </p>
          </div>

          {/* TABLE */}
          <div className="overflow-x-auto mt-10">
            <table className="w-full border border-gray-200 text-base">
              <thead className="bg-sky-600 text-white">
                <tr>
                  <th className="px-4 py-3 text-center">구분</th>
                  <th className="px-4 py-3 text-center">세부</th>
                  <th className="px-4 py-3 text-center">신청요건</th>
                </tr>
              </thead>
              <tbody className="text-gray-800">
                <tr>
                  <td rowSpan={6} className="border px-4 py-3 text-center font-medium">
                    연구소
                  </td>
                  <td className="border px-4 py-3 text-center">벤처기업</td>
                  <td className="border px-4 py-3 text-center">연구전담요원 2명 이상</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 text-center">연구소 창업중소기업</td>
                  <td className="border px-4 py-3 text-center">연구전담요원 2명 이상</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 text-center">소기업</td>
                  <td className="border px-4 py-3 text-center">연구전담요원 3명 이상</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 text-center">중소기업</td>
                  <td className="border px-4 py-3 text-center">연구전담요원 5명 이상</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 text-center">
                    국외에 있는 기업연구소<br />(해외연구소)
                  </td>
                  <td className="border px-4 py-3 text-center">연구전담요원 5명 이상</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 text-center">대기업</td>
                  <td className="border px-4 py-3 text-center">연구전담요원 10명 이상</td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 text-center font-medium">
                    연구개발전담부서
                  </td>
                  <td className="border px-4 py-3 text-center">
                    기업규모에 관계 무등록 적용
                  </td>
                  <td className="border px-4 py-3 text-center">
                    연구전담요원 1명 이상
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-3 text-center font-medium">
                    연구시설 및 공간요건
                  </td>
                  <td colSpan={2} className="border px-4 py-3 text-center">
                    연구개발활동을 수행할 수 있는 필수적인
                    독립 연구공간과 연구시설을 보유하고 있을 것
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* QUALIFICATIONS */}
          <div className="mt-12 space-y-4 text-gray-700 text-lg leading-relaxed">
            <p>
              연구전담요원은 일정 자격 요건을 갖추어야 합니다.
            </p>

            <p>
              관련한 분야의 학사(4년제 졸) 이상이거나
              국가기술자격법에 따른 기사 이상의 자격을
              보유하고 있어야 등록이 가능합니다.
            </p>

            <p>중소기업에 한하여 아래와 같이 조건을 완화하고 있습니다.</p>

            <ol className="list-decimal pl-6 space-y-2">
              <li>
                전문학사(2년제 졸)이면서 2년 이상의 연구 경력 보유자
                (3년제는 1년)
              </li>
              <li>
                국가기술자격법에 따른 산업기사이면서
                2년 이상의 연구 경력 보유자
              </li>
              <li>
                특성화고, 마이스터고 졸업(고졸)이면서
                4년 이상의 연구 경력 보유자
              </li>
              <li>
                국가기술자격법에 따른 기능사이면서
                4년 이상의 연구 경력 보유자
              </li>
            </ol>

            <p>
              최종학력을 기준으로하며 졸업예정자는 해당되지 않습니다.
            </p>

            <p>
              그 외 조건(외국인, 산업기능요원, 대표이사)은
              상담 문의를 통하여 답변을 얻으실 수 있습니다.
            </p>
          </div>
        </section>

        {/* ================= SECTION 3 ================= */}
        <section>
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              기업부설연구소 설립의 물적 요건
            </h2>
            <div className="flex-1 ml-8 h-px bg-gray-200" />
          </div>

          <div className="text-gray-700 text-lg leading-relaxed space-y-6">
            <p>
              기업부설연구소 설립을 위한 물적요건에는
              연구공간 및 연구기자재를 포함합니다.
            </p>

            <p>
              기본적인 물적 요건은 기업부설연구소와
              연구개발전담부서 모두 벽으로 둘러쌓여야 하며
              출입문을 설치하여 타 부서와 구분되도록 하여
              독립적인 공간을 확보해야 합니다.
            </p>

            <p>
              하지만 중소기업, 벤처기업의 기업부설연구소와
              연구개발전담부서는 출입문 없이 파티션 등으로
              구분하여 운영이 가능합니다.
            </p>

            <p>
              대기업과 중견기업은 정보서비스, 소프트웨어 개발
              및 공급업의 경우에만 출입문 없이 파티션 등으로
              구분하여 운영이 가능합니다.
            </p>
          </div>
        </section>

        {/* ================= SECTION 4 ================= */}
        <section>
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              기업부설연구소 설립 이후 사후관리
            </h2>
            <div className="flex-1 ml-8 h-px bg-gray-200" />
          </div>

          <div className="text-gray-700 text-lg leading-relaxed space-y-6">
            <p>
              기업부설연구소 설립 이후에도 실적보고 등의
              의무사항이 있으며 변동사항이 발생한 경우에는
              30일 이내에 변경신고를 해야합니다.
            </p>

            <p>
              또한 세제혜택을 받기 위해서는 연구개발활동에 대한
              증빙자료를 구비하여야 합니다.
            </p>

            <div className="border-l-4 border-sky-500 pl-6 py-4 bg-gray-50">
              <p className="font-semibold text-gray-900 mb-2">
                조세특례제한법 시행규칙 제7조(연구 및 인력개발비의 범위)
              </p>
              <p>
                법 제10조제1항을 적용받으려는 내국인은 해당 과세연도에
                수행한 연구개발 과제별로 별지 제3호의2서식에 따른
                연구개발계획서, 연구개발보고서 및 연구노트를
                작성(법 제10조제1항제3호를 적용받는 경우에는
                연구개발계획서 및 연구개발보고서만 작성한다)하고
                해당 과세연도의 종료일로부터 5년 동안 보관해야 한다.
                {" <신설 2019. 3. 20.>"}
              </p>
            </div>

            <p>
              중기인증연구소에서는 사후관리 및 유지보수,
              연구보고서에 대한 컨설팅도 수행하고 있습니다.
            </p>
          </div>
        </section>

      </div>
    </main>
  );
}
