import Image from "next/image";
import Link from "next/link";

const currentYear = new Date().getFullYear();
const years = Array.from({ length: 30 }, (_, idx) => currentYear - idx);
const months = Array.from({ length: 12 }, (_, idx) => idx + 1);
const days = Array.from({ length: 31 }, (_, idx) => idx + 1);

const logistics = [
  {
    label: "日程",
    value: "2026年8月17日（月）〜8月19日（水）",
    detail: "3日間 集中講座",
  },
  {
    label: "対象",
    value: "中高生（募集35名：先着順）",
    detail: "2027年アユサ高校交換留学登録者は割引あり",
  },
  {
    label: "会場",
    value: "国立オリンピック記念青少年総合センター",
    detail: "東京都渋谷区・代々木公園エリア",
  },
  {
    label: "受講料金",
    value: "35,000円（税別）",
    detail: "授業・教材・模擬試験を含む",
  },
];

const skillHighlights = [
  "ELTiSの出題形式と戦略を徹底理解",
  "Listening・Readingスキルを実践的に強化",
  "本番さながらの模擬トレーニングで自信アップ",
  "外国人講師によるオールイングリッシュ授業",
];

const schedulePlan = [
  {
    day: "Day 1",
    title: "Listening Comprehension",
    description: "テスト構成の理解と聴解スキル向上にフォーカス",
    items: [
      "ELTiS Listeningの出題形式と攻略法を分析",
      "要点・詳細・推測問題の聞き取り方をトレーニング",
      "模擬リスニングテストと振り返り",
    ],
  },
  {
    day: "Day 2",
    title: "Reading Comprehension",
    description: "語彙力・速読力・推論力を磨き、文章理解を強化",
    items: [
      "スキミング／スキャニング・語彙力強化ワーク",
      "分野別テキスト（理科・社会・言語）で演習",
      "模擬リーディングテストとレビュー",
    ],
  },
  {
    day: "Day 3",
    title: "Test Simulation & Strategy",
    description: "総合模擬試験で仕上げ、弱点克服プランを作成",
    items: [
      "Listening＋Readingの総合模擬試験",
      "個別フィードバックと改善ポイントの明確化",
      "TOEFLなど次のステップにつながる学習ロードマップ",
    ],
  },
];

const heroBadges = [
  "経験豊富な外国人講師",
  "全授業英語・少人数制",
  "留学準備の第一歩",
];

const sampleImages = [
  {
    src: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=900&q=80",
    title: "リスニング指示のサンプル",
    caption: "教室での指示や数学的説明を英語で理解し、正しく行動する練習を行います。",
    tag: "Listening Drill",
  },
  {
    src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=900&q=80",
    title: "リーディング教材イメージ",
    caption: "理科・社会・言語など複数分野の英文を通じて読解力と語彙力を強化します。",
    tag: "Reading Lab",
  },
  {
    src: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=900&q=80",
    title: "オンライン受験のサポート",
    caption: "自宅受験に向けた接続テストや当日の手順をコーディネーターがサポートします。",
    tag: "Online Support",
  },
];

const journeySteps = [
  {
    step: "STEP 01",
    title: "カウンセリング＆目標設定",
    body: "現在の英語力と志望校を確認し、集中講座後の学習プランまで逆算して設計します。",
    icon: "/file.svg",
  },
  {
    step: "STEP 02",
    title: "ELTiS準備と模擬演習",
    body: "対策教材や模擬テストでListening・Readingを仕上げ、講座の成果を最大化します。",
    icon: "/window.svg",
  },
  {
    step: "STEP 03",
    title: "受験＆スコア提出",
    body: "希望日時で受験を手配し、スコア提出や留学手続きをアユサが伴走します。",
    icon: "/globe.svg",
  },
];

const listeningParts = [
  "Part 1: Teacher’s directions",
  "Part 2: Mathematical language",
  "Part 3: Short dialogues",
  "Part 4: Longer classroom dialogues",
  "Part 5: Lecture-type teacher talk",
];

const readingParts = [
  "Part 1: Vocabulary",
  "Part 2: Grammar",
  "Part 3: Texts from different content areas (language arts, science, social studies)",
];

export default function Home() {
  return (
    <div className="space-y-20 pb-20">
      <section className="bg-gradient-to-br from-sky-50 via-white to-emerald-50">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-16 pt-16 lg:flex-row">
          <div className="flex-1 space-y-6">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-sky-500">
                3DAYS ELTIS BOOTCAMP
              </p>
              <h1 className="text-4xl font-semibold leading-tight text-zinc-900 md:text-5xl">
                3日間で攻略！ELTiS 集中講座
              </h1>
              <p className="text-lg text-zinc-600">
                ～アメリカ留学を目指す中高生のために～。授業はすべて英語で行われ、経験豊富な外国人講師が担当。
                Listening と Reading の徹底トレーニングで、ELTiSとその先の英語試験へ確かな自信をつけます。
              </p>
            </div>
            <div className="grid gap-4 text-sm text-zinc-600 md:grid-cols-3">
              {heroBadges.map((badge) => (
                <div
                  key={badge}
                  className="rounded-2xl border border-white/70 bg-white/80 px-4 py-3 text-center shadow-sm shadow-sky-100 backdrop-blur"
                >
                  {badge}
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#contact"
                className="rounded-full bg-emerald-600 px-8 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
              >
                エントリーする
              </Link>
              <Link
                href="#details"
                className="rounded-full border border-emerald-200 px-8 py-3 text-sm font-semibold text-emerald-700 transition hover:border-emerald-500 hover:text-emerald-900"
              >
                開催概要を見る
              </Link>
            </div>
          </div>
          <div className="flex-1">
            <div className="relative overflow-hidden rounded-3xl bg-zinc-900/80 shadow-2xl shadow-sky-200">
              <Image
                src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1400&q=80"
                alt="ELTiS集中講座の学習イメージ"
                width={900}
                height={620}
                className="h-full w-full object-cover opacity-80"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-zinc-900 via-emerald-900/60 to-sky-900/50" />
              <div className="absolute inset-x-0 bottom-0 space-y-2 px-6 py-6 text-white">
                <p className="text-xs uppercase tracking-[0.5em] text-white/70">
                  LISTENING + READING
                </p>
                <p className="text-2xl font-semibold">All English Intensive Training</p>
                <p className="text-sm text-white/80">
                  2026年8月17日〜19日 / 国立オリンピック記念青少年総合センター
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="mx-auto max-w-6xl space-y-6 px-6">
          <div className="grid gap-10 rounded-3xl border border-zinc-100 bg-white/90 p-8 shadow-sm shadow-sky-50 lg:grid-cols-[1.1fr,0.9fr]">
            <div className="space-y-4">
              <p className="text-sm font-semibold text-emerald-600">講座について</p>
              <h2 className="text-3xl font-semibold text-zinc-900">英語で学ぶ3日間が、留学への第一歩</h2>
              <p className="text-lg leading-relaxed text-zinc-700">
                ELTiS 集中講座は、アメリカ高校留学を目指す中高生向けの特別プログラムです。
                ELTiS（English Language Test for International Students）を徹底的に理解し、
                Listening・Reading 能力を実践的に鍛えることで、アメリカの教室で英語で授業を受けるための基礎力を築きます。
              </p>
              <p className="text-lg leading-relaxed text-zinc-700">
                将来的に TOEFL などの英語試験にも応用できるスキルが身につくよう、3日間を通じて「聞く力」「読む力」の両面からアプローチ。
                英語で学ぶ集中プログラムが、留学の第一関門突破を力強くサポートします。
              </p>
            </div>
            <div className="rounded-3xl bg-gradient-to-br from-white to-sky-50 p-6">
              <p className="text-sm font-semibold text-sky-600">特長ハイライト</p>
              <ul className="mt-4 space-y-3 text-sm text-zinc-700">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-500" />
                  経験豊富な外国人講師が少人数制で指導
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-500" />
                  ELTiSを通じてListening・Readingを徹底強化
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-500" />
                  本番さながらの模擬試験と個別フィードバック
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-sky-500" />
                  TOEFLなど次の英語試験にも応用できる学習設計
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="details">
        <div className="mx-auto max-w-6xl space-y-8 px-6">
          <div className="space-y-2">
            <p className="text-sm font-semibold text-emerald-600">開催概要</p>
            <h2 className="text-3xl font-semibold text-zinc-900">日程・会場・料金</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {logistics.map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-zinc-100 bg-white p-6 shadow-sm shadow-zinc-50"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">
                  {item.label}
                </p>
                <p className="mt-2 text-xl font-semibold text-zinc-900">{item.value}</p>
                <p className="mt-1 text-sm text-zinc-600">{item.detail}</p>
              </div>
            ))}
          </div>
          <div className="rounded-3xl border border-sky-100 bg-sky-50/80 p-6 text-sm text-sky-900">
            <p>
              募集人数は35名（先着順）。2027年アユサ高校交換留学の登録者には割引料金をご用意しています。
              詳細はエントリーフォームからお問い合わせください。
            </p>
          </div>
        </div>
      </section>

      <section id="eltis">
        <div className="mx-auto max-w-6xl space-y-6 px-6">
          <div className="grid gap-8 rounded-3xl border border-zinc-100 bg-white/90 p-8 shadow-sm shadow-sky-50 lg:grid-cols-[1.2fr,0.8fr]">
            <div className="space-y-4">
              <p className="text-sm font-semibold text-sky-600">ELTiSとは？</p>
              <h2 className="text-3xl font-semibold text-zinc-900">
                アメリカ高校留学の第一関門
              </h2>
              <p className="text-lg leading-relaxed text-zinc-700">
                ELTiS（English Language Test for International Students）は、アメリカの高校に留学する際に必要とされる英語力を測定する公式テストです。
                Listening（聞く力）と Reading（読む力）を通じて、英語で授業を理解し学業を進める力があるかを判定します。
                高校留学で ELTiS が求められるのは、大学留学で TOEFL が求められるのと同じ理由で、受け入れ先が安心して留学生を迎え入れるための基準となっています。
              </p>
              <p className="text-lg leading-relaxed text-zinc-700">
                スコアは受け入れ校が学習適応度を判断する重要な指標です。つまり ELTiS 対策は、アメリカ高校留学準備の第一歩。
                早期にテストの特性を理解し、Listening・Reading を強化することが合格への近道になります。
              </p>
            </div>
            <div className="rounded-3xl bg-gradient-to-br from-emerald-50 to-sky-50 p-6">
              <p className="text-sm font-semibold text-emerald-600">チェックポイント</p>
              <ul className="mt-4 space-y-3 text-sm text-zinc-700">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  Listening・Readingの2技能で構成され、授業理解度を測定
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  アメリカの教室での授業指示や学術用語をどれだけ理解できるかを評価
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  スコアは留学先の学校が受け入れ判断を行う際の重要な基準
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="mission">
        <div className="mx-auto max-w-6xl space-y-8 px-6">
          <div className="grid gap-10 rounded-3xl border border-zinc-100 bg-white p-8 shadow-lg shadow-emerald-50 lg:grid-cols-[1.2fr,0.8fr]">
            <div className="space-y-4">
              <p className="text-sm font-semibold text-emerald-600">講座の目的</p>
              <h2 className="text-3xl font-semibold text-zinc-900">
                Listening と Reading を集中的に鍛え、公式テストに備える
              </h2>
              <p className="text-lg leading-relaxed text-zinc-700">
                本講座では、ELTiSの出題形式と攻略法をしっかり理解し、Listening（聞く力）と Reading（読む力）の両方を実践的に強化します。
                本番さながらの模擬トレーニングを通じて自信と試験対応力を養い、公式テストに臨む万全の準備を整えます。
              </p>
              <p className="text-lg leading-relaxed text-zinc-700">
                授業はすべて英語で実施され、外国人講師による指導のもとで学ぶため、実際の留学生活に近い環境を体感できます。
                ELTiS攻略を軸に、将来 TOEFL などの試験にも応用できる学習姿勢を確立します。
              </p>
            </div>
            <div className="rounded-3xl border border-emerald-100 bg-emerald-50/80 p-6">
              <p className="text-sm font-semibold text-emerald-700">3日間で身につく力</p>
              <ul className="mt-4 space-y-3 text-sm text-emerald-900">
                {skillHighlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="schedule-plan">
        <div className="mx-auto max-w-6xl space-y-8 px-6">
          <div className="space-y-2">
            <p className="text-sm font-semibold text-sky-600">スケジュール例</p>
            <h2 className="text-3xl font-semibold text-zinc-900">
              Day 1〜3のカリキュラム（変更となることがあります）
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {schedulePlan.map((day) => (
              <article
                key={day.day}
                className="flex h-full flex-col rounded-3xl border border-sky-100 bg-white p-6 shadow-sm shadow-sky-50"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-sky-500">
                  {day.day}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-zinc-900">{day.title}</h3>
                <p className="mt-2 text-sm text-zinc-600">{day.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-zinc-700">
                  {day.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-sky-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="exam-outline">
        <div className="mx-auto max-w-6xl space-y-10 px-6">
          <div className="space-y-3">
            <p className="text-sm font-semibold text-emerald-700">
              試験内容（ELTiSオンライン）
            </p>
            <h2 className="text-3xl font-semibold text-zinc-900">出題構成</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-3xl border border-emerald-100 bg-emerald-50/60 p-8 shadow-inner shadow-emerald-100">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-700">
                Listening
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-emerald-900">
                リスニング（約30問）
              </h3>
              <ul className="mt-5 space-y-2 text-sm text-emerald-900">
                {listeningParts.map((part) => (
                  <li key={part} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-500" />
                    <span>{part}</span>
                  </li>
                ))}
              </ul>
            </article>
            <article className="rounded-3xl border border-sky-100 bg-sky-50/60 p-8 shadow-inner shadow-sky-100">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-700">
                Reading
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-sky-900">
                リーディング（約30問）
              </h3>
              <ul className="mt-5 space-y-2 text-sm text-sky-900">
                {readingParts.map((part) => (
                  <li key={part} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-sky-500" />
                    <span>{part}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-zinc-200 p-6">
              <h3 className="text-xl font-semibold text-zinc-900">試験時間</h3>
              <p className="mt-2 text-zinc-600">全体で約80分（オンライン）</p>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-6">
              <h3 className="text-xl font-semibold text-zinc-900">解答形式</h3>
              <p className="mt-2 text-zinc-600">
                リスニング：三者択一、リーディング：四者択一のマークシート方式
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="samples">
        <div className="mx-auto max-w-6xl space-y-8 px-6">
          <div className="space-y-2">
            <p className="text-sm font-semibold text-emerald-700">サンプル画像</p>
            <h2 className="text-3xl font-semibold text-zinc-900">
              試験・対策のイメージ
            </h2>
            <p className="text-zinc-600">
              リスニング・リーディング・オンライン受験の雰囲気を写真でご紹介します。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {sampleImages.map((sample) => (
              <article
                key={sample.title}
                className="overflow-hidden rounded-3xl border border-zinc-100 bg-white shadow-sm"
              >
                <div className="relative">
                  <Image
                    src={sample.src}
                    alt={sample.title}
                    width={640}
                    height={426}
                    className="h-56 w-full object-cover"
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600">
                    {sample.tag}
                  </span>
                </div>
                <div className="space-y-2 px-6 py-5">
                  <h3 className="text-lg font-semibold text-zinc-900">
                    {sample.title}
                  </h3>
                  <p className="text-sm text-zinc-600">{sample.caption}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="journey">
        <div className="mx-auto max-w-6xl space-y-8 px-6">
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-emerald-700">
              JOURNEY
            </p>
            <h2 className="text-3xl font-semibold text-zinc-900">
              受験までの3ステップ
            </h2>
            <p className="text-zinc-600">
              カウンセリングから試験当日まで、アユサが一貫してサポートします。
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {journeySteps.map((step) => (
              <article
                key={step.step}
                className="flex h-full flex-col rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm shadow-emerald-50"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-emerald-50 p-3">
                    <Image
                      src={step.icon}
                      alt={`${step.title} アイコン`}
                      width={32}
                      height={32}
                      className="h-8 w-8 object-contain"
                    />
                  </div>
                  <p className="text-xs font-semibold tracking-[0.3em] text-emerald-600">
                    {step.step}
                  </p>
                </div>
                <h3 className="mt-4 text-xl font-semibold text-zinc-900">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm text-zinc-600">{step.body}</p>
                <div className="mt-auto pt-6 text-xs uppercase tracking-[0.3em] text-emerald-500">
                  Ayusa Support
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="preparation">
        <div className="mx-auto max-w-6xl space-y-6 px-6">
          <div className="space-y-3">
            <p className="text-sm font-semibold text-emerald-700">ELTiS対策</p>
            <h2 className="text-3xl font-semibold text-zinc-900">
              アユサの無料サポート
            </h2>
          </div>
          <div className="grid gap-6 rounded-3xl border border-zinc-100 bg-white p-8 shadow-lg shadow-emerald-50 lg:grid-cols-[1.1fr,0.9fr]">
            <ul className="space-y-4 text-lg text-zinc-700">
              <li>
                アユサ高校交換留学登録者には「ELTiS単語帳」を無料配布
              </li>
              <li>
                苦手分野を補う「ELTiS対策講座」をオンラインで受講可能
              </li>
              <li>
                個別指導が必要な方には有料の「ELTiSコース」でマンツーマン対策
              </li>
            </ul>
            <div className="relative overflow-hidden rounded-2xl border border-emerald-100 bg-emerald-50">
              <Image
                src="/eltis-prep-illustration.svg"
                alt="ELTiS対策の学習イラスト"
                width={640}
                height={480}
                className="h-full w-full object-cover"
                priority
              />
              <div className="absolute inset-x-6 bottom-6 rounded-2xl bg-white/90 p-4 shadow-lg shadow-emerald-100">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-500">
                  PRACTICE SET
                </p>
                <p className="text-sm text-emerald-900">
                  Vocabulary / Listening / Pronunciation を横断的に強化
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="course">
        <div className="mx-auto max-w-6xl space-y-10 px-6">
          <div className="space-y-3">
            <p className="text-sm font-semibold text-emerald-700">
              ELTiSコースの概要
            </p>
            <h2 className="text-3xl font-semibold text-zinc-900">
              完全マンツーマンでスコアアップ
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
              <div className="flex items-center gap-3">
                <Image
                  src="/file.svg"
                  alt="カリキュラム"
                  width={48}
                  height={48}
                  className="h-12 w-12 object-contain"
                />
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-zinc-400">
                  CURRICULUM
                </p>
              </div>
              <h3 className="text-2xl font-semibold text-zinc-900">
                レッスン内容
              </h3>
              <p className="mt-4 text-zinc-700">
                文法の見直し、正しい発音、語彙力強化、リスニングの聞き取り方など、
                個人の課題に合わせて指導します。すべてオンラインの個別授業です。
              </p>
              <dl className="mt-6 grid gap-4 text-sm text-zinc-700 sm:grid-cols-2">
                <div className="rounded-2xl bg-zinc-50 p-4">
                  <dt className="text-xs text-zinc-500">授業時間・回数</dt>
                  <dd className="text-lg font-semibold text-zinc-900">
                    1回60分 × 全4回
                  </dd>
                </div>
                <div className="rounded-2xl bg-zinc-50 p-4">
                  <dt className="text-xs text-zinc-500">方法</dt>
                  <dd className="text-lg font-semibold text-zinc-900">
                    オンライン（マンツーマン）
                  </dd>
                </div>
              </dl>
            </div>
            <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-8 shadow-inner">
              <div className="flex items-center gap-3">
                <Image
                  src="/globe.svg"
                  alt="オンライン受講"
                  width={48}
                  height={48}
                  className="h-12 w-12 object-contain"
                />
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-500">
                  TUITION
                </p>
              </div>
              <h3 className="text-2xl font-semibold text-emerald-900">
                受講料金
              </h3>
              <div className="mt-6 space-y-4">
                <div className="rounded-2xl bg-white/80 p-5">
                  <p className="text-sm text-emerald-700">アユサ登録者</p>
                  <p className="text-3xl font-semibold text-emerald-900">
                    19,800円
                  </p>
                </div>
                <div className="rounded-2xl bg-white/80 p-5">
                  <p className="text-sm text-emerald-700">一般</p>
                  <p className="text-3xl font-semibold text-emerald-900">
                    27,500円
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm text-emerald-900">
                受講者と講師が相談のうえスケジュールを決定します。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="application">
        <div className="mx-auto max-w-6xl space-y-10 px-6">
          <div className="space-y-3">
            <p className="text-sm font-semibold text-emerald-700">
              ELTiSオンライン受験申込
            </p>
            <h2 className="text-3xl font-semibold text-zinc-900">
              受験はアユサ日本事務局またはオンラインで
            </h2>
          </div>
          <div className="grid gap-8 rounded-3xl border border-zinc-100 bg-white p-8 shadow-sm shadow-zinc-100 lg:grid-cols-[1.2fr,0.8fr]">
            <div>
              <p className="text-zinc-700">
                アユサは ELTiS オンライン実施団体として認可を受けています。
                東京のアユサ日本事務局またはオンライン環境のどちらでも受験可能で、
                希望日時に合わせて個別にスケジュールを調整します。アユサに未登録の一般の方も
                お申し込みいただけます。
              </p>
              <p className="mt-4 text-zinc-700">
                テスト予約は以下のフォームから受け付けています。オンライン受験の詳細は
                お問い合わせください。
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm text-zinc-500">
                <span className="rounded-full bg-zinc-100 px-4 py-1">個別スケジュール調整</span>
                <span className="rounded-full bg-zinc-100 px-4 py-1">会場・オンライン選択可</span>
                <span className="rounded-full bg-zinc-100 px-4 py-1">一般の方も受験可能</span>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl bg-sky-50">
              <Image
                src="/eltis-application-illustration.svg"
                alt="ELTiSオンライン受験のイメージ"
                width={640}
                height={420}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-6 bottom-6 rounded-2xl bg-white/90 p-4 shadow-lg shadow-sky-100">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-500">
                  APPLICATION SUPPORT
                </p>
                <p className="text-sm text-sky-900">
                  接続テストから当日の流れまで、コーディネーターが伴走します。
                </p>
              </div>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex flex-col gap-4 rounded-3xl border border-zinc-100 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <Image
                  src="/window.svg"
                  alt="東京会場"
                  width={56}
                  height={56}
                  className="h-14 w-14 object-contain"
                />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400">
                    TOKYO
                  </p>
                  <p className="text-lg font-semibold text-zinc-900">アユサ日本事務局</p>
                </div>
              </div>
              <p className="text-sm text-zinc-600">
                静かな個別ブースで受験。スタッフが試験環境と機材をサポートします。
              </p>
            </div>
            <div className="flex flex-col gap-4 rounded-3xl border border-emerald-100 bg-emerald-50/60 p-6 shadow-inner">
              <div className="flex items-center gap-3">
                <Image
                  src="/globe.svg"
                  alt="オンライン受験"
                  width={56}
                  height={56}
                  className="h-14 w-14 object-contain"
                />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-500">
                    ONLINE
                  </p>
                  <p className="text-lg font-semibold text-emerald-900">どこからでも受験</p>
                </div>
              </div>
              <p className="text-sm text-emerald-900">
                自宅など安定した通信環境があれば受験可能。接続テストや当日の手順も事前にご案内。
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-sm font-semibold text-emerald-700">受験料（1回）</p>
            <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-50">
              <table className="w-full border-collapse text-sm">
                <thead className="bg-zinc-100 text-zinc-500">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold">区分</th>
                    <th className="px-4 py-3 text-left font-semibold">
                      平日営業時間内
                    </th>
                    <th className="px-4 py-3 text-left font-semibold">
                      土日・祝日・営業時間外
                    </th>
                  </tr>
                </thead>
                <tbody className="text-zinc-700">
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-4 font-semibold text-zinc-900">
                      アユサ登録者
                    </td>
                    <td className="px-4 py-4">5,500円</td>
                    <td className="px-4 py-4">7,700円</td>
                  </tr>
                  <tr className="border-t border-zinc-200">
                    <td className="px-4 py-4 font-semibold text-zinc-900">一般</td>
                    <td className="px-4 py-4">7,700円</td>
                    <td className="px-4 py-4">9,900円</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 text-sm text-zinc-700">
            <p>
              受験会場：アユサ日本事務局（東京）または自宅ほかオンライン環境
            </p>
            <p className="mt-2">
              調整した日時で個別に試験をご案内します。詳細はお問い合わせください。
            </p>
          </div>
        </div>
      </section>

      <section id="intrax">
        <div className="mx-auto max-w-6xl space-y-6 px-6">
          <div className="grid gap-8 rounded-3xl border border-zinc-100 bg-white p-8 shadow-lg shadow-emerald-50 lg:grid-cols-[1.2fr,0.8fr]">
            <div className="space-y-4">
              <p className="text-sm font-semibold text-emerald-600">イントラックスについて</p>
              <h2 className="text-3xl font-semibold text-zinc-900">
                1980年設立の国際教育交流団体
              </h2>
              <p className="text-lg leading-relaxed text-zinc-700">
                イントラックスは1980年に米国で設立された国際教育交流団体です。米国国務省認可の
                J-1ビザ公式スポンサーとして、日本だけでなく世界中の高校生や大学生に向けて留学・交流プログラムを提供しています。
              </p>
              <p className="text-lg leading-relaxed text-zinc-700">
                高校生向けプログラムはイントラックスの部門のひとつであるアユサインターナショナルが運営。
                アメリカ高校交換留学を目指す生徒のサポートに長年の実績を持ち、ELTiS対策から渡航後のフォローまで伴走します。
              </p>
            </div>
            <div className="rounded-3xl border border-emerald-100 bg-emerald-50/70 p-6">
              <p className="text-sm font-semibold text-emerald-700">サポートの強み</p>
              <ul className="mt-4 space-y-3 text-sm text-emerald-900">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  米国国務省認可のJ-1ビザ公式スポンサー
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  世界中の学生を対象にした豊富な交流プログラム
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  アユサインターナショナルによる高校生サポート実績
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24">
        <div className="mx-auto max-w-5xl space-y-6 px-6">
          <div className="space-y-3 text-center">
            <p className="text-sm font-semibold text-emerald-700">
              ELTiSオンライン受験申込フォーム
            </p>
            <h2 className="text-3xl font-semibold text-zinc-900">
              *は入力必須項目です
            </h2>
          </div>
          <form className="space-y-8 rounded-3xl border border-emerald-100 bg-white p-8 shadow-lg shadow-emerald-50">
            <fieldset className="space-y-4">
              <legend className="text-lg font-semibold text-zinc-900">
                氏名※
              </legend>
              <div className="grid gap-4 md:grid-cols-2">
                <label className="text-sm text-zinc-600">
                  姓
                  <input
                    type="text"
                    name="lastName"
                    required
                    className="mt-1 w-full rounded-xl border border-zinc-200 px-4 py-3 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-100"
                  />
                </label>
                <label className="text-sm text-zinc-600">
                  名
                  <input
                    type="text"
                    name="firstName"
                    required
                    className="mt-1 w-full rounded-xl border border-zinc-200 px-4 py-3 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-100"
                  />
                </label>
              </div>
            </fieldset>

            <fieldset className="space-y-4">
              <legend className="text-lg font-semibold text-zinc-900">
                氏名（カタカナ）※
              </legend>
              <div className="grid gap-4 md:grid-cols-2">
                <label className="text-sm text-zinc-600">
                  セイ
                  <input
                    type="text"
                    name="lastNameKana"
                    required
                    className="mt-1 w-full rounded-xl border border-zinc-200 px-4 py-3 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-100"
                  />
                </label>
                <label className="text-sm text-zinc-600">
                  メイ
                  <input
                    type="text"
                    name="firstNameKana"
                    required
                    className="mt-1 w-full rounded-xl border border-zinc-200 px-4 py-3 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-100"
                  />
                </label>
              </div>
            </fieldset>

            <label className="block text-sm text-zinc-600">
              Email（半角英数）※
              <input
                type="email"
                name="email"
                required
                className="mt-1 w-full rounded-xl border border-zinc-200 px-4 py-3 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-100"
              />
            </label>

            <fieldset className="space-y-4">
              <legend className="text-lg font-semibold text-zinc-900">
                生年月日※
              </legend>
              <div className="grid gap-4 md:grid-cols-3">
                <label className="text-sm text-zinc-600">
                  年
                  <select
                    name="birthYear"
                    required
                    className="mt-1 w-full rounded-xl border border-zinc-200 px-4 py-3 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-100"
                  >
                    <option value="">選択してください</option>
                    {years.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="text-sm text-zinc-600">
                  月
                  <select
                    name="birthMonth"
                    required
                    className="mt-1 w-full rounded-xl border border-zinc-200 px-4 py-3 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-100"
                  >
                    <option value="">選択してください</option>
                    {months.map((month) => (
                      <option key={month} value={month}>
                        {month}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="text-sm text-zinc-600">
                  日
                  <select
                    name="birthDay"
                    required
                    className="mt-1 w-full rounded-xl border border-zinc-200 px-4 py-3 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-100"
                  >
                    <option value="">選択してください</option>
                    {days.map((day) => (
                      <option key={day} value={day}>
                        {day}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
            </fieldset>

            <label className="block text-sm text-zinc-600">
              お問い合わせ内容 ※
              <textarea
                name="message"
                required
                rows={5}
                className="mt-1 w-full rounded-2xl border border-zinc-200 px-4 py-3 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-100"
              />
            </label>

            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-8 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
              >
                入力内容を確認
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
