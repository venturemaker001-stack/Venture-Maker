import PageShell from "../components/PageShell";

export default function AboutPage() {
  const strengths = [
    {
      title: "실전 중심 솔루션",
      desc:
        "다양한 산업군에서 검증된 전략을 바탕으로 기업인증 취득부터 전략적 자금 조달까지, 성장에 필요한 핵심 동력을 확보해 드립니다.",
    },
    {
      title: "압도적 전문성",
      desc:
        "우리는 관성적인 컨설팅을 거부합니다. 새로운 시각으로 문제의 본질을 꿰뚫고, 실행 가능한 혁신안을 제시합니다.",
    },
    {
      title: "지속 가능한 우위",
      desc:
        "반짝하는 성과가 아닌, 시장에서 오랫동안 살아남고 앞서 나갈 수 있는 독보적인 경쟁력을 설계합니다.",
    },
  ];

  return (
    <PageShell
      eyebrow="ABOUT"
      title="회사소개"
      subtitle="복잡한 경영 과제, 명쾌한 해답으로 증명합니다. 결과로 말하는 경영 전략가."
    >
      <section className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-start">
        <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
          <p className="text-blue-700 font-semibold">결과 중심</p>
          <p className="text-slate-900 font-semibold text-2xl">
            실질적인 성과를 보장하는 전문가 그룹
          </p>
          <p className="text-slate-700">
            역동적이고 불확실한 경영 환경 속에서 고객사가 최상의 결과를 얻을 수 있도록
            벤처메이커가 앞장섭니다. 우리는 데이터와 실전 경험을 바탕으로 숨겨진 진실을
            찾아내고, 고객사의 복잡성을 단순 명료한 성공 전략으로 전환합니다.
          </p>
        </div>

        <div className="rounded-3xl border border-blue-100 bg-blue-50 p-8">
          <p className="text-sm font-semibold text-blue-700 mb-4">핵심 메시지</p>
          <p className="text-lg font-semibold text-slate-900 leading-relaxed">
            “복잡한 경영 과제, 명쾌한 해답으로 증명합니다.
            결과로 말하는 경영 전략가”
          </p>
        </div>
      </section>

      <section className="mt-16">
        <h3 className="text-2xl font-bold text-blue-900 mb-8">핵심 경쟁력</h3>
        <div className="grid lg:grid-cols-3 gap-6">
          {strengths.map((item) => (
            <Card key={item.title} title={item.title} desc={item.desc} />
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-3xl border border-blue-100 bg-blue-600/10 p-8">
        <p className="text-lg font-semibold text-blue-900">
          비즈니스의 복잡함을 넘어 압도적인 성과를 경험하고 싶다면,
          지금 벤처메이커와 상담하십시오.
        </p>
      </section>
    </PageShell>
  );
}

function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="group rounded-3xl border border-blue-100 p-8 bg-white hover:shadow-xl hover:shadow-blue-100/60 transition">
      <div className="h-10 w-10 rounded-2xl bg-blue-600/10 group-hover:bg-blue-600/20 transition" />
      <p className="mt-6 text-lg font-bold text-slate-900">{title}</p>
      <p className="mt-3 text-sm text-slate-600 leading-relaxed">{desc}</p>
    </div>
  );
}
