import Image from "next/image";
import Link from "next/link";

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

const currentYear = new Date().getFullYear();
const years = Array.from({ length: 30 }, (_, idx) => currentYear - idx);
const months = Array.from({ length: 12 }, (_, idx) => idx + 1);
const days = Array.from({ length: 31 }, (_, idx) => idx + 1);

const journeySteps = [
  {
    step: "STEP 01",
    title: "カウンセリング＆目標設定",
    body: "現在の英語力や志望プランをヒアリングし、目標スコアと学習計画を明確化します。",
    icon: "/file.svg",
  },
  {
    step: "STEP 02",
    title: "ELTiS準備と模擬演習",
    body: "単語帳・対策講座・マンツーマンレッスンを組み合わせて、出題形式に沿った演習を実施。",
    icon: "/window.svg",
  },
  {
    step: "STEP 03",
    title: "オンラインもしくは会場で受験",
    body: "希望日時に合わせて個別にスケジュールを調整し、アユサが受験をサポートします。",
    icon: "/globe.svg",
  },
];

const sampleImages = [
  {
    src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1000&q=80",
    title: "リスニング指示のサンプル",
    caption: "教室での指示や数学的な説明を聞き取り、指示どおりに行動できるかを確認します。",
    tag: "Listening Example",
  },
  {
    src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1000&q=80",
    title: "リーディング教材イメージ",
    caption: "科学・社会・言語芸術など複数教科の文章から要点を読み取る問題が出題されます。",
    tag: "Reading Passage",
  },
  {
    src: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1000&q=80",
    title: "オンライン受験の様子",
    caption: "自宅や学校の静かな環境で、アユサが接続テストから当日サポートまで行います。",
    tag: "Online Testing",
  },
];

export default function Home() {
  return (
    <div className="space-y-16 pb-16">
      <section className="bg-gradient-to-b from-emerald-50 via-white to-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 pb-16 pt-12 lg:grid-cols-[1.3fr,0.7fr]">
          <div className="space-y-6">
            <nav className="text-sm text-emerald-800">
              <Link href="/" className="underline-offset-4 hover:underline">
                TOP
              </Link>{" "}
              &gt; ELTiS
            </nav>
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-emerald-700">
                ELTiS
              </p>
              <h1 className="text-4xl font-semibold leading-tight text-zinc-900 md:text-5xl">
                アメリカ高校留学に必要な英語力を証明する ELTiS 受験ガイド
              </h1>
              <p className="text-lg leading-relaxed text-zinc-600">
                アユサ高校交換留学に参加するには、授業理解に必要なリスニング力と
                読解力を測る ELTiS（English Language Test for International
                Students）のスコアが必要です。試験概要、対策、受験申込までを
                1ページにまとめました。
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="#contact"
                className="rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
              >
                無料相談・お問合せ
              </Link>
              <Link
                href="#application"
                className="rounded-full border border-emerald-200 px-6 py-3 text-sm font-semibold text-emerald-700 transition hover:border-emerald-600 hover:text-emerald-900"
              >
                受験概要を見る
              </Link>
            </div>
          </div>
          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-3xl border border-white/40 bg-emerald-900/80 shadow-2xl shadow-emerald-200">
              <Image
                src="/hero-eltis.svg"
                alt="ELTiSを学ぶ生徒のイメージ"
                width={640}
                height={480}
                priority
                className="h-72 w-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900 via-emerald-800/60 to-sky-900/40" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <p className="text-xs uppercase tracking-[0.4em] text-white/70">
                  Essential Skills
                </p>
                <p className="text-2xl font-semibold">Listening & Reading</p>
                <p className="mt-2 text-sm text-white/80">
                  アメリカの授業を理解するための英語運用力を総合的に測定
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-white/60 bg-white/80 p-6 shadow-lg shadow-emerald-100 backdrop-blur">
              <dl className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-xl bg-emerald-50 p-4">
                  <dt className="text-xs text-emerald-700">試験時間</dt>
                  <dd className="text-2xl font-semibold text-emerald-900">
                    80分
                  </dd>
                </div>
                <div className="rounded-xl bg-emerald-50 p-4">
                  <dt className="text-xs text-emerald-700">リスニング</dt>
                  <dd className="text-xl font-semibold text-emerald-900">
                    約30問
                  </dd>
                </div>
                <div className="rounded-xl bg-emerald-50 p-4">
                  <dt className="text-xs text-emerald-700">リーディング</dt>
                  <dd className="text-xl font-semibold text-emerald-900">
                    約30問
                  </dd>
                </div>
              </dl>
              <p className="mt-4 text-sm text-zinc-600">
                対象：9〜12年生（日本の中学3年〜高校3年）で交換留学を希望する方
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="overview">
        <div className="mx-auto max-w-6xl space-y-6 px-6">
          <p className="text-sm font-semibold text-emerald-700">ELTiSとは</p>
          <div className="grid gap-8 rounded-3xl border border-zinc-100 bg-white/90 p-8 shadow-sm shadow-zinc-100 lg:grid-cols-[1.1fr,0.9fr]">
            <div>
              <p className="text-lg leading-relaxed text-zinc-700">
                ELTiS（English Language Test for International Students）は、
                アメリカの高校で授業を受けるための「リスニング力」と「読解力」を
                測る英語力試験です。CSIET（The Council on Standards for
                International Educational Travel）が交換留学参加条件として採用し、
                アメリカ国務省認可プログラムの英語力判定として利用されています。
              </p>
              <p className="mt-4 text-lg leading-relaxed text-zinc-700">
                テストでは、アメリカの教室で行われる授業理解度を評価するため、
                9年生〜12年生（日本の中学3年生〜高校3年生に相当）を対象に設計されています。
              </p>
              <ul className="mt-6 grid gap-3 text-sm text-zinc-700 sm:grid-cols-2">
                <li className="flex items-start gap-2 rounded-2xl bg-emerald-50/70 p-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  <span>授業中の指示や数学表現を聞き取れるかをチェック</span>
                </li>
                <li className="flex items-start gap-2 rounded-2xl bg-emerald-50/70 p-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  <span>教科横断のリーディング課題で読解スキルを測定</span>
                </li>
                <li className="flex items-start gap-2 rounded-2xl bg-emerald-50/70 p-3 sm:col-span-2">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  <span>CSIET認定プログラムの英語基準として正式採用</span>
                </li>
              </ul>
            </div>
            <div className="relative overflow-hidden rounded-3xl bg-amber-50">
              <Image
                src="/study-session.svg"
                alt="ELTiS対策のイラスト"
                width={600}
                height={480}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-6 bottom-6 rounded-2xl bg-white/90 p-4 shadow-lg shadow-amber-100">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-500">
                  INSIDE THE CLASSROOM
                </p>
                <p className="text-lg font-semibold text-zinc-900">
                  授業理解度を可視化するためのテスト
                </p>
                <p className="mt-1 text-sm text-zinc-600">
                  Listening + Reading の2技能で、実際の教科学習を想定した問題を出題
                </p>
              </div>
            </div>
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
