import Image from "next/image";
import { SlowVideo } from "@/components/SlowVideo";

const heroDetails = [
  { label: "日程", value: "2026年8月17日（月）～8月19日（水） 3日間" },
  { label: "時間", value: "9:00〜16:00（通い講習）" },
  { label: "対象", value: "中高生" },
  { label: "会場", value: "国立オリンピック記念青少年総合センター（渋谷）" },
  { label: "募集人数", value: "35名（先着順）" },
  { label: "受講料金", value: "38,500円（税込）" },
  { label: "特典", value: "2027年アユサ高校交換留学の登録者は割引あり" },
];

const strengths = [
  "ELTiSの形式と戦略を徹底理解",
  "Listening・Readingスキルを実践的に強化",
  "本番に強くなる模擬トレーニング",
  "外国人講師によるオールイングリッシュ授業",
];

const scheduleDays = [
  {
    day: "Day 1",
    title: "Listening Comprehension",
    bullets: ["テストの構成と出題形式を理解", "聴解スキル強化（要点・詳細・推測）", "模擬リスニングテスト"],
  },
  {
    day: "Day 2",
    title: "Reading Comprehension",
    bullets: ["スキミング・スキャニング・語彙力強化", "推論問題への対応", "模擬リーディングテストとレビュー"],
  },
  {
    day: "Day 3",
    title: "Test Simulation & Strategy",
    bullets: ["総合的なテスト戦略の確認", "本番同様の模擬試験（Listening + Reading）", "振り返りと弱点克服のための分析"],
  },
];

export default function Home() {
  return (
    <div className="space-y-16 bg-slate-50 pb-16 md:space-y-24 md:pb-24">
      <section className="relative overflow-hidden bg-slate-900 text-white">
        <Image
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80"
          alt="集中して勉強する高校生たち"
          fill
          className="object-cover object-center opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-16 pt-16 sm:px-6 lg:flex-row lg:items-start lg:pb-20 lg:pt-24">
          <div className="flex-1 space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-white/85">
              3DAYS ELTIS BOOTCAMP
            </span>
            <div className="space-y-4 text-lg leading-relaxed text-white/85">
              <div className="space-y-3">
                <h1 className="text-3xl font-semibold leading-tight tracking-wide text-white whitespace-normal sm:text-4xl md:text-5xl md:whitespace-nowrap">
                  3日間で攻略！ELTiS 集中講座
                </h1>
                <p className="text-lg text-white/85">～アメリカ留学を目指す中高生のために～</p>
              </div>
            <div className="space-y-4">
                <p>
                  ELTiS 集中講座は、アメリカ高校留学を目指す中高生のための特別プログラムです。授業はすべて英語で行われ、経験豊富な外国人講師が担当します。
                  この講座では、留学の第一関門である ELTiS（English Language Test for International Students）を徹底的に理解し、実践的に対策します。
                </p>
                <p>
                  ELTiSを通して「聞く」「読む」力を強化し、将来的に TOEFL などの英語試験にも応用できるスキルを身につけます。英語で学ぶ3日間が、留学への第一歩となります。
              </p>
            </div>
            </div>
          </div>
          <div className="flex-1" id="application">
            <div className="rounded-3xl bg-white/90 p-6 text-slate-900 shadow-xl backdrop-blur md:p-8">
              <ul className="space-y-4 text-sm">
                {heroDetails.map((detail) => (
                  <li key={detail.label} className="flex flex-col gap-0.5 leading-relaxed">
                    <span className="text-xs uppercase tracking-[0.3em] text-slate-500">{detail.label}</span>
                    <span className="text-base font-semibold text-slate-900">{detail.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="overview" className="px-4 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl border border-white bg-white/95 p-6 shadow-sm shadow-slate-100 md:p-8">
            <h2 className="text-2xl font-semibold text-slate-900">ELTiSとは？</h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-700">
              ELTiS（English Language Test for International Students）は、アメリカ高校留学で必要とされる英語力を測定するテストです。大学留学で TOEFL が求められるのと同じように、高校留学では ELTiS がその役割を担っています。
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-700">
              このテストでは、Listening（聞く力）と Reading（読む力）が試されます。スコアは、受け入れ先の学校が「英語で授業を理解し、学業を行う力があるか」を判断するための重要な基準となります。そのため、ELTiS対策はアメリカ高校留学準備の第一歩として欠かせません。
            </p>
          </div>
        </div>
      </section>

      <section id="preparation" className="px-4 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl border border-white bg-white/95 p-6 shadow-sm shadow-slate-100 md:p-8">
            <h2 className="text-2xl font-semibold text-slate-900">講座の目的（対策）</h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-700">
              本講座では、ELTiSの出題形式と攻略法をしっかりと理解し、Listening（聞く力）と Reading（読む力）のスキルを確実に向上させることを目的としています。さらに、本番さながらの実戦トレーニングを通して、自信と試験対応力を養い、公式テストに臨むための万全の準備を整えます。
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-700">
              授業はすべて英語で実施され、外国人講師による指導を受けながら、実際の留学生活に近い環境で学ぶことができます。
            </p>
          </div>
        </div>
      </section>

      <section id="course" className="px-4 sm:px-6">
        <div className="mx-auto max-w-6xl rounded-3xl border border-emerald-100 bg-emerald-50/80 p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-emerald-900">3日間で身につく力</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {strengths.map((item) => (
              <div key={item} className="rounded-2xl border border-white bg-white/80 p-4 text-emerald-900">
                {item}
          </div>
            ))}
          </div>
        </div>
      </section>

      <section id="exam-outline" className="px-4 sm:px-6">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[32px] border border-slate-100 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white shadow-xl">
          <div className="bg-white/5 px-6 py-8 md:px-8 md:py-10">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-300">COURSE CONTENTS</p>
            <h2 className="mt-2 text-3xl font-semibold">講座内容（スケジュール例 / 変更となることがあります）</h2>
            <p className="mt-3 text-sm text-slate-200">
              3日間の集中講座で、Listening と Reading の両方を段階的に鍛える実戦プログラム。各日ごとのテーマと演習項目はこちらです。
            </p>
          </div>
          <div className="space-y-0 px-4 pb-6 pt-4 sm:px-6 md:px-8 md:pb-8">
            {scheduleDays.map((day, index) => (
              <div key={day.day} className="relative flex flex-col gap-4 py-8 last:pb-0 sm:flex-row sm:gap-6">
                <div className="flex flex-col items-center sm:items-center">
                  <div className="grid h-14 w-20 place-items-center rounded-full border border-white/40 bg-white/10 text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-white whitespace-nowrap">
                    {day.day}
                  </div>
                  {index < scheduleDays.length - 1 && (
                    <span className="mt-2 hidden h-full w-px bg-white/30 sm:block" aria-hidden="true" />
                  )}
                </div>
                <div className="flex-1 rounded-3xl border border-white/15 bg-white/5 p-5 shadow-inner md:p-6">
                  <h3 className="text-xl font-semibold text-white">{day.title}</h3>
                  <ul className="mt-4 space-y-2 text-sm text-slate-100">
                    {day.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-300" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <SlowVideo
          className="absolute inset-0 h-full w-full object-cover"
          src="/intrax_movie.mp4"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
          speed={0.5}
        />
        <div className="absolute inset-0 bg-slate-900/70" aria-hidden="true" />
        <div className="relative mx-auto flex max-w-4xl flex-col gap-4 px-4 py-20 text-center text-white sm:px-6 md:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/70">INTRAX</p>
          <h2 className="text-3xl font-semibold">イントラックスについて</h2>
          <p className="text-lg leading-relaxed text-white/90">
            イントラックスは1980年に米国で設立された国際教育交流団体です。米国国務省認可のJ-1ビザ公式スポンサーとして、日本だけでなく世界中の高校生・大学生向けに
            留学・交流プログラムを提供。高校生向けプログラムはイントラックスの部門の一つであるアユサインターナショナルが運営しています。
          </p>
        </div>
      </section>

      <section id="contact" className="px-4 sm:px-6">
        <div className="mx-auto max-w-6xl rounded-3xl border border-white bg-white/95 p-6 shadow-sm shadow-slate-100 md:p-8">
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-slate-900">お問い合わせ</h2>
              <p className="text-slate-700">
                参加に関するご質問やお申し込みは、下記フォームよりお気軽にご連絡ください。
              </p>
            </div>
            <iframe
              src="https://forms.intraxjp.com/?service=ELTiS"
              width="100%"
              height="1400"
              style={{ minHeight: "1400px", border: "none" }}
              frameBorder="0"
              title="ELTiS お問い合わせフォーム"
              allow="clipboard-write"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
