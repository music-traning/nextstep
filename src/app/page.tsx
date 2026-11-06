import Image from "next/image";
import {
  ArrowRight,
  Award,
  Briefcase,
  Building2,
  CheckCircle2,
  Compass,
  FileCode2,
  GraduationCap,
  Handshake,
  Layers,
  LineChart,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  UserCheck,
  Users,
} from "lucide-react";
import { FadeInUp } from "@/components/FadeInUp";

const CTA_URL = "https://forms.gle/dummy_url_nextstep";

const PAIN_POINTS = [
  {
    category: "独学での限界",
    persona: "30代後半・営業職リーダー",
    title: "書籍や動画教材で独学を始めたが、実務にどう活かせばいいかわからず途中で手が止まってしまう",
    description:
      "断片的な知識は増えるものの、疑問点をすぐに質問できる相手がおらず、業務の忙しさも重なって学習習慣が定着しない状態に陥りがちです。",
  },
  {
    category: "AI時代への不安",
    persona: "40代前半・管理部門 / 企画職",
    title: "生成AIやDXの波が急速に進む中、これまでの経験だけで5年後・10年後も通用するのか危機感がある",
    description:
      "社内外でAI活用やデジタル化が求められる一方、自身のスキルセットがアップデートされておらず、キャリアの頭打ち感を強く感じています。",
  },
  {
    category: "実践的スキルの不足",
    persona: "30代前半・Webディレクター / 事務職",
    title: "転職や独立を視野に入れているが、企業やクライアントに提示できる『実績・ポートフォリオ』がない",
    description:
      "基礎的なツール操作だけでは市場価値の証明が難しく、実案件レベルの課題解決経験やアウトプットが不足していることに悩んでいます。",
  },
  {
    category: "ロードマップの不在",
    persona: "40代・事業部マネージャー / 法人研修担当",
    title: "リスキリングの必要性は痛感しているが、自分や自組織にとって何から着手すべきか判断できない",
    description:
      "選択肢が多すぎるあまり、現在のスキルレベルや目指すキャリアゴールから逆算した最適な学習ステップを描けずに足踏みしています。",
  },
];

const USP_LIST = [
  {
    number: "01",
    badge: "1on1 MENTORING",
    title: "挫折させないメンターとの1on1伴走型サポート体制",
    description:
      "実務経験豊富な現役プロフェッショナルが専属メンターとして担当。週次の1on1セッションと日々のチャット相談を通じて、業務と学習のスケジュール調整から技術的な疑問解消まで徹底的に伴走します。一人ひとりの理解度やライフスタイルに合わせた柔軟なカリキュラム進行により、忙しい社会人でも着実にやり切れる環境を提供します。",
    points: [
      "週1回の専属メンターとの1on1進捗・キャリア面談",
      "疑問をその日のうちに解消できる質問サポート体制",
      "個人の業務負荷や法人研修計画に応じた学習ペース設計",
    ],
    idealOutcome: "「独学で何度も挫折した状態」から、週単位で成長を実感できる自律的な学習習慣へ。",
    icon: UserCheck,
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "オンラインで1on1の伴走型メンタリングを受けるビジネスパーソン",
  },
  {
    number: "02",
    badge: "PRACTICAL WORKSHOP",
    title: "企業案件を想定した、ポートフォリオ直結の実践型ワークショップ",
    description:
      "インプット中心の座学ではなく、実際のビジネス現場で発生する課題解決を想定したケーススタディとプロジェクト演習を重視。AI活用による業務プロセス改善、データ分析、プロダクト企画・実装など、現場で即戦力として評価される成果物を構築します。完成したアウトプットは、そのまま選考や商談で提示できる実践ポートフォリオとして活用可能です。",
    points: [
      "実際の企業課題をモデルにしたPBL（課題解決型学習）カリキュラム",
      "現役リードエンジニア・コンサルタントによる成果物コード/企画レビュー",
      "社内DX推進やクライアント提案にそのまま使える高品質なポートフォリオ制作",
    ],
    idealOutcome: "「知識はあるが実務で使えない状態」から、具体的な成果物で実力を証明できる即戦力人材へ。",
    icon: FileCode2,
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "実践型ワークショップで課題解決とポートフォリオ制作に取り組む受講生チーム",
  },
  {
    number: "03",
    badge: "CAREER & INDEPENDENCE",
    title: "キャリアエージェントとの連携による強力な就業・独立支援",
    description:
      "スキル習得をゴールにせず、その先のキャリア実現までを一貫してサポート。提携する専門キャリアエージェントと学習データを連携し、あなたの強みと制作したポートフォリオを最大限に評価する企業とのマッチングや、独立・副業案件の獲得戦略を支援します。来秋には自信を持って独立・転職できている理想のキャリア像から逆算し、職務経歴書のブラッシュアップから模擬面接、商談対策まで伴走します。",
    points: [
      "デジタル・DX領域に特化した専任キャリアアドバイザーによる個別支援",
      "ポートフォリオと学習プロセスを評価する提携企業への推薦・選考対策",
      "独立・フリーランス志望者向けの案件獲得ノウハウと契約実務ガイダンス",
    ],
    idealOutcome: "来秋には自信を持って独立・転職できている、市場価値の高い次世代ビジネスパーソンへ。",
    icon: Handshake,
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "キャリアアップと独立・転職を実現し自信に満ちたビジネスパーソン",
  },
];

const TESTIMONIALS = [
  {
    name: "佐藤 健一 様（仮名）",
    ageAndRole: "38歳・メーカー営業職 → DX推進プロジェクトマネージャーへ転職",
    tag: "キャリアアップ転職",
    beforeAfter: "年収・キャリアの停滞感を打破し、IT・AI活用を牽引するPM職へキャリアチェンジ",
    comment:
      "営業職として15年働き、今後のキャリアに頭打ち感を感じて受講を決意しました。最初は専門用語すら不安でしたが、週1回の1on1でメンターが私の業務経験に引き寄せて解説してくれたおかげで、一度も挫折せずに完走できました。ワークショップで制作した業務改善プロトタイプが転職活動で高く評価され、念願だったDX推進部門への転職を実現できました。",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    avatarAlt: "受講生の声 1人目のプロフィール写真",
  },
  {
    name: "高橋 美咲 様（仮名）",
    ageAndRole: "42歳・事業会社マーケティング担当 → AI活用・デジタル戦略コンサルタントとして独立",
    tag: "独立・フリーランス実現",
    beforeAfter: "実務直結のポートフォリオを武器に、受講修了から半年後に独立を達成",
    comment:
      "独学ではAIツールの表面的な使い方しか身につかず、クライアントに価値提供できるレベルには程遠い状態でした。Next Step 2027の実践型ワークショップでは、企業案件さながらの厳しいフィードバックを通じて『現場で使える提案力と実装力』が鍛えられました。キャリア支援チームのサポートもあり、今年の秋には自信を持って独立を果たすことができました。",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80",
    avatarAlt: "受講生の声 2人目のプロフィール写真",
  },
  {
    name: "山本 隆史 様（仮名）",
    ageAndRole: "45歳・中堅ITソリューション企業 人材開発室長（法人研修導入）",
    tag: "BtoB 社員研修導入",
    beforeAfter: "中堅社員15名のリスキリング研修に導入し、社内業務自動化プロジェクトを3件創出",
    comment:
      "社員向けのeラーニングを導入しても完走率が低く、実務に結びつかないことが長年の課題でした。Next Step 2027はメンターによる伴走サポートが手厚く、通常業務と並行しながらでも参加社員全員が最終課題までやり切ることができました。研修の成果物がそのまま社内の業務改善企画として立ち上がり、投資対効果の高さを実感しています。",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    avatarAlt: "受講生の声 3人目のプロフィール写真",
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      {/* スキップリンク（キーボードアクセシビリティ向上） */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:bg-navy-900 focus:px-4 focus:py-2 focus:text-white focus:shadow-lg"
      >
        メインコンテンツへスキップ
      </a>

      {/* ヘッダー（FVの一部として機能するクリーンなナビゲーションバー） */}
      <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a
            href="#"
            aria-label="Next Step 2027 トップページへ戻る"
            className="flex items-center gap-3 group"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-900 text-white font-extrabold text-lg tracking-tight shadow-sm group-hover:bg-sky-700 transition-colors">
              NS
            </span>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-navy-950 leading-none">
                Next Step <span className="text-sky-700">2027</span>
              </span>
              <span className="mt-1 text-[11px] font-medium tracking-wider text-slate-600">
                ONLINE RESKILLING SCHOOL
              </span>
            </div>
          </a>

          <nav
            aria-label="ページ内ナビゲーション"
            className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700"
          >
            <a
              href="#issues"
              className="hover:text-sky-700 transition-colors py-1"
            >
              よくあるお悩み
            </a>
            <a
              href="#reasons"
              className="hover:text-sky-700 transition-colors py-1"
            >
              選ばれる3つの理由
            </a>
            <a
              href="#voices"
              className="hover:text-sky-700 transition-colors py-1"
            >
              受講生の声・実績
            </a>
          </nav>

          <div className="flex items-center">
            <a
              href={CTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="無料オンラインカウンセリングに申し込む（新しいタブで開きます）"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-accent px-4 py-2.5 text-xs sm:text-sm font-bold text-white shadow-sm transition-all duration-200 hover:bg-brand-accentHover hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent"
            >
              <span>無料カウンセリング予約</span>
              <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
            </a>
          </div>
        </div>
      </header>

      <main id="main-content" className="flex-grow">
        {/* =========================================================
            [FV] ファーストビュー
        ========================================================= */}
        <section
          aria-labelledby="fv-heading"
          className="relative overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 text-white py-16 sm:py-24 lg:py-28"
        >
          {/* 背景の控えめな装飾グリッドと光彩 */}
          <div
            className="pointer-events-none absolute inset-0 opacity-20"
            aria-hidden="true"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, rgba(56, 189, 248, 0.35), transparent 45%), radial-gradient(circle at 80% 70%, rgba(2, 132, 199, 0.3), transparent 50%)",
            }}
          />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
              {/* 左カラム：コピー＆CTA */}
              <div className="lg:col-span-7 space-y-6 sm:space-y-8">
                <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-sky-400/30 bg-sky-950/60 px-4 py-1.5 text-xs sm:text-sm font-semibold text-sky-200">
                  <Sparkles className="h-4 w-4 text-sky-400" aria-hidden="true" />
                  <span>30代・40代のキャリア再構築 / 法人リスキリング研修対応</span>
                </div>

                <h1
                  id="fv-heading"
                  className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.25rem] font-extrabold tracking-tight leading-[1.25] text-white"
                >
                  AI時代に取り残されない、
                  <span className="block mt-2 text-sky-300">
                    次世代のキャリアを。
                  </span>
                </h1>

                <p className="max-w-2xl text-base sm:text-lg lg:text-xl text-slate-200 leading-relaxed font-normal">
                  現役プロによる<strong className="font-bold text-white">1on1の伴走型サポート</strong>と、企業案件を想定した<strong className="font-bold text-white">実践型ワークショップ</strong>で、確かなスキル習得からキャリアアップ転職・独立までを一貫して支援します。
                </p>

                {/* 特徴バッジ */}
                <ul
                  aria-label="プログラムの主な特徴"
                  className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-sm text-slate-100"
                >
                  <li className="flex items-center gap-2.5 rounded-lg bg-white/10 px-3.5 py-2.5 backdrop-blur-sm border border-white/10">
                    <CheckCircle2
                      className="h-5 w-5 text-sky-400 shrink-0"
                      aria-hidden="true"
                    />
                    <span className="font-medium">専属メンター1on1伴走</span>
                  </li>
                  <li className="flex items-center gap-2.5 rounded-lg bg-white/10 px-3.5 py-2.5 backdrop-blur-sm border border-white/10">
                    <CheckCircle2
                      className="h-5 w-5 text-sky-400 shrink-0"
                      aria-hidden="true"
                    />
                    <span className="font-medium">実務直結ポートフォリオ</span>
                  </li>
                  <li className="flex items-center gap-2.5 rounded-lg bg-white/10 px-3.5 py-2.5 backdrop-blur-sm border border-white/10">
                    <CheckCircle2
                      className="h-5 w-5 text-sky-400 shrink-0"
                      aria-hidden="true"
                    />
                    <span className="font-medium">転職・独立エージェント連携</span>
                  </li>
                </ul>

                {/* メインCTAボタン */}
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4">
                  <a
                    href={CTA_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="無料オンラインカウンセリングに申し込む（新しいタブで開きます）"
                    className="group inline-flex items-center justify-center gap-3 rounded-xl bg-brand-accent px-8 py-4 sm:py-5 text-base sm:text-lg font-bold text-white shadow-xl transition-all duration-200 hover:bg-brand-accentHover hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
                  >
                    <span>無料オンラインカウンセリングに申し込む</span>
                    <ArrowRight
                      className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </a>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-sky-400 shrink-0" aria-hidden="true" />
                  <span>
                    無理な勧誘は一切ございません。個人受講のご相談・法人研修のお問い合わせどちらも対応しております。
                  </span>
                </p>
              </div>

              {/* 右カラム：メインビジュアル（LCP画像 priority付与） */}
              <div className="lg:col-span-5">
                <div className="relative mx-auto max-w-lg lg:max-w-none">
                  <div
                    className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-sky-500/30 to-sky-300/20 blur-xl"
                    aria-hidden="true"
                  />
                  <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-navy-900 shadow-2xl">
                    <Image
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
                      alt="Next Step 2027で実践的なデジタルスキルとキャリア戦略を学ぶビジネスパーソンたち"
                      width={1200}
                      height={850}
                      priority
                      fetchPriority="high"
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      className="h-auto w-full object-cover aspect-[4/3]"
                    />
                    <div className="bg-navy-950/90 px-5 py-4 border-t border-white/10 flex items-center justify-between gap-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-sky-300">
                          NEXT CAREER PROGRAM
                        </p>
                        <p className="text-sm font-bold text-white mt-0.5">
                          来秋には自信を持って独立・転職できる実務力を習得
                        </p>
                      </div>
                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-300">
                        <TrendingUp className="h-5 w-5" aria-hidden="true" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            [Section 1] 共感・課題
        ========================================================= */}
        <section
          id="issues"
          aria-labelledby="issues-heading"
          className="py-20 sm:py-28 bg-slate-50 border-b border-slate-200/80"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeInUp className="mx-auto max-w-3xl text-center">
              <span className="inline-block rounded-full bg-sky-100 px-4 py-1 text-xs font-bold tracking-widest text-sky-800 uppercase">
                CHALLENGES & ISSUES
              </span>
              <h2
                id="issues-heading"
                className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-navy-950"
              >
                こんなお悩み、ありませんか？
              </h2>
              <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed">
                30代〜40代のキャリアの転換期や、組織のDX・リスキリング推進において、多くの方が共通の壁に直面しています。
              </p>
            </FadeInUp>

            {/* チェックリスト＋ペルソナカードUI */}
            <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
              {PAIN_POINTS.map((item, idx) => (
                <FadeInUp key={item.category} delay={idx * 0.08}>
                  <article className="h-full rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm transition-shadow hover:shadow-md flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-100">
                        <span className="inline-flex items-center gap-1.5 rounded-md bg-navy-900 px-3 py-1 text-xs font-bold text-white">
                          {item.category}
                        </span>
                        <span className="text-xs font-semibold text-slate-600">
                          {item.persona}
                        </span>
                      </div>

                      <div className="mt-5 flex items-start gap-3.5">
                        <div
                          className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border-2 border-sky-700 bg-sky-50 text-sky-700"
                          aria-hidden="true"
                        >
                          <CheckCircle2 className="h-4 w-4" />
                        </div>
                        <h3 className="text-base sm:text-lg font-bold text-navy-950 leading-snug">
                          {item.title}
                        </h3>
                      </div>

                      <p className="mt-4 pl-9 text-sm sm:text-base text-slate-700 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </article>
                </FadeInUp>
              ))}
            </div>

            {/* 課題から解決策へのブリッジ */}
            <FadeInUp delay={0.2} className="mt-14">
              <div className="rounded-2xl bg-navy-900 px-6 py-8 sm:px-10 sm:py-10 text-white shadow-lg">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="space-y-2">
                    <p className="text-xs sm:text-sm font-bold tracking-wider text-sky-300 uppercase">
                      OUR SOLUTION
                    </p>
                    <p className="text-lg sm:text-2xl font-extrabold leading-snug">
                      その悩み、「独学」ではなく「実務直結の伴走型環境」で解決できます。
                    </p>
                    <p className="text-sm sm:text-base text-slate-200">
                      Next Step 2027は、知識のインプットだけで終わらせず、現場で通用する実践力とキャリア出口までを一気通貫で設計しています。
                    </p>
                  </div>
                  <div className="shrink-0">
                    <a
                      href="#reasons"
                      className="inline-flex items-center gap-2 rounded-xl bg-sky-500/20 border border-sky-400/40 px-5 py-3 text-sm font-bold text-sky-200 hover:bg-sky-500/30 transition-colors"
                    >
                      <span>3つの強みを詳しく見る</span>
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            </FadeInUp>
          </div>
        </section>

        {/* =========================================================
            [Section 2] 私たちの解決策・3つの強み（USP）
        ========================================================= */}
        <section
          id="reasons"
          aria-labelledby="reasons-heading"
          className="py-20 sm:py-28 bg-white"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeInUp className="mx-auto max-w-3xl text-center">
              <span className="inline-block rounded-full bg-sky-100 px-4 py-1 text-xs font-bold tracking-widest text-sky-800 uppercase">
                WHY NEXT STEP 2027
              </span>
              <h2
                id="reasons-heading"
                className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-navy-950"
              >
                Next Step 2027が選ばれる3つの理由
              </h2>
              <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed">
                忙しい社会人や法人研修でも着実に成果へ繋げるため、サポート体制・実践カリキュラム・キャリア支援の3軸を徹底追求しています。
              </p>
            </FadeInUp>

            {/* Z型交互レイアウト */}
            <div className="mt-16 space-y-20 lg:space-y-28">
              {USP_LIST.map((usp, index) => {
                const IconComponent = usp.icon;
                const isReversed = index % 2 === 1;

                return (
                  <FadeInUp key={usp.number}>
                    <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
                      {/* テキストカラム */}
                      <div
                        className={`lg:col-span-6 space-y-6 ${
                          isReversed ? "lg:order-2" : "lg:order-1"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-white shadow-sm">
                            <IconComponent className="h-6 w-6 text-sky-300" aria-hidden="true" />
                          </span>
                          <div>
                            <span className="text-xs font-extrabold tracking-widest text-sky-700 uppercase block">
                              REASON {usp.number} — {usp.badge}
                            </span>
                            <span className="text-xs font-medium text-slate-600">
                              確かな変化を生むコアバリュー
                            </span>
                          </div>
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-950 leading-snug">
                          {usp.title}
                        </h3>

                        <p className="text-base text-slate-700 leading-relaxed">
                          {usp.description}
                        </p>

                        <ul className="space-y-3 pt-1">
                          {usp.points.map((pt) => (
                            <li
                              key={pt}
                              className="flex items-start gap-3 text-sm sm:text-base font-medium text-slate-800"
                            >
                              <CheckCircle2
                                className="mt-1 h-5 w-5 shrink-0 text-sky-700"
                                aria-hidden="true"
                              />
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="rounded-xl border border-sky-200 bg-sky-50/80 p-4 sm:p-5">
                          <div className="flex items-start gap-3">
                            <Compass
                              className="mt-0.5 h-5 w-5 shrink-0 text-sky-800"
                              aria-hidden="true"
                            />
                            <div>
                              <p className="text-xs font-bold uppercase tracking-wider text-sky-800">
                                目指せる理想の状態
                              </p>
                              <p className="mt-1 text-sm sm:text-base font-bold text-navy-950">
                                {usp.idealOutcome}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* 画像カラム */}
                      <div
                        className={`lg:col-span-6 ${
                          isReversed ? "lg:order-1" : "lg:order-2"
                        }`}
                      >
                        <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-lg">
                          <Image
                            src={usp.image}
                            alt={usp.imageAlt}
                            width={1000}
                            height={700}
                            loading="lazy"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="h-auto w-full object-cover aspect-[16/11]"
                          />
                        </div>
                      </div>
                    </div>
                  </FadeInUp>
                );
              })}
            </div>

            {/* 理想の未来像バナー */}
            <FadeInUp delay={0.1} className="mt-20">
              <div className="rounded-2xl border border-sky-200 bg-gradient-to-r from-sky-50 via-white to-sky-50 p-8 sm:p-10 shadow-sm">
                <div className="mx-auto max-w-4xl text-center space-y-4">
                  <span className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-4 py-1 text-xs font-bold text-sky-300">
                    <Award className="h-4 w-4" aria-hidden="true" />
                    <span>VISION FOR NEXT AUTUMN</span>
                  </span>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-navy-950">
                    「来秋には自信を持って独立・転職できている」理想のキャリアへ
                  </h3>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    半年〜1年後のキャリアチェンジや社内DX推進を見据え、今どのスキルをどの順序で身につけるべきかを明確化します。個人でのキャリアアップはもちろん、BtoBの社員研修プログラムとしても導入目的に合わせた最適なプランをご提案いたします。
                  </p>
                </div>
              </div>
            </FadeInUp>
          </div>
        </section>

        {/* =========================================================
            [Section 3] 実績・受講生の声
        ========================================================= */}
        <section
          id="voices"
          aria-labelledby="voices-heading"
          className="py-20 sm:py-28 bg-slate-50 border-t border-slate-200/80"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeInUp className="mx-auto max-w-3xl text-center">
              <span className="inline-block rounded-full bg-sky-100 px-4 py-1 text-xs font-bold tracking-widest text-sky-800 uppercase">
                VOICE & CASE STUDIES
              </span>
              <h2
                id="voices-heading"
                className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-navy-950"
              >
                受講生の声・実績
              </h2>
              <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed">
                未経験領域への挑戦やキャリアの壁を乗り越え、次世代のフィールドへ踏み出した30代・40代の受講生および法人担当者様の事例をご紹介します。
              </p>
            </FadeInUp>

            <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-3">
              {TESTIMONIALS.map((voice, idx) => (
                <FadeInUp key={voice.name} delay={idx * 0.1}>
                  <article className="h-full flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="inline-block rounded-md bg-sky-100 px-3 py-1 text-xs font-bold text-sky-900">
                          {voice.tag}
                        </span>
                        <GraduationCap
                          className="h-5 w-5 text-slate-500"
                          aria-hidden="true"
                        />
                      </div>

                      <div className="mt-5 rounded-xl bg-navy-900 p-4 text-white">
                        <p className="text-xs font-semibold text-sky-300">
                          AFTERNEXT STEP
                        </p>
                        <p className="mt-1 text-sm font-bold leading-snug">
                          {voice.beforeAfter}
                        </p>
                      </div>

                      <blockquote className="mt-5 text-sm sm:text-base text-slate-700 leading-relaxed">
                        「{voice.comment}」
                      </blockquote>
                    </div>

                    <div className="mt-6 pt-5 border-t border-slate-100 flex items-center gap-4">
                      <Image
                        src={voice.avatar}
                        alt={voice.avatarAlt}
                        width={56}
                        height={56}
                        loading="lazy"
                        className="h-14 w-14 rounded-full object-cover border border-slate-200 shrink-0"
                      />
                      <div>
                        <p className="text-base font-bold text-navy-950">
                          {voice.name}
                        </p>
                        <p className="text-xs font-medium text-slate-600 mt-0.5 leading-snug">
                          {voice.ageAndRole}
                        </p>
                      </div>
                    </div>
                  </article>
                </FadeInUp>
              ))}
            </div>

            <p className="mt-8 text-center text-xs text-slate-600">
              ※プライバシー保護のため、氏名および一部の所属情報は仮名・イメージ表記としております。個人の学習成果やキャリア実現には個人差があります。
            </p>
          </div>
        </section>

        {/* =========================================================
            [Section 4] カウンセリング申し込み (CTA)
        ========================================================= */}
        <section
          id="counseling"
          aria-labelledby="counseling-heading"
          className="relative overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-sky-950 py-20 sm:py-28 text-white"
        >
          <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <FadeInUp className="rounded-3xl border border-white/15 bg-white/5 p-8 sm:p-12 lg:p-16 backdrop-blur-sm shadow-2xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-sky-400/20 border border-sky-300/30 px-4 py-1.5 text-xs sm:text-sm font-bold text-sky-200">
                <Users className="h-4 w-4 text-sky-300" aria-hidden="true" />
                <span>オンライン（Zoom等）で全国どこからでも参加可能</span>
              </span>

              <h2
                id="counseling-heading"
                className="mt-6 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-snug"
              >
                まずは無料カウンセリングで
                <br className="hidden sm:inline" />
                キャリアの現在地を確認しませんか？
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-slate-200 leading-relaxed">
                「まだ具体的なゴールが決まっていない」「自分の業務経験で何が活かせるのか知りたい」「法人研修としてのカリキュラム詳細を聞きたい」という段階でも安心してご参加いただけます。専任のカウンセラーが現在の状況を丁寧にお伺いし、あなたに最適な学習・キャリアプランをご提案します。
              </p>

              {/* カウンセリングで得られる3つのメリット */}
              <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3 text-left">
                <div className="rounded-xl bg-navy-950/70 border border-white/10 p-4">
                  <div className="flex items-center gap-2 text-sky-300 font-bold text-sm">
                    <LineChart className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span>01. スキル・市場価値の棚卸し</span>
                  </div>
                  <p className="mt-2 text-xs sm:text-sm text-slate-200 leading-relaxed">
                    これまでのご経歴と今後の目標を整理し、強みになる領域を客観的に分析します。
                  </p>
                </div>
                <div className="rounded-xl bg-navy-950/70 border border-white/10 p-4">
                  <div className="flex items-center gap-2 text-sky-300 font-bold text-sm">
                    <Layers className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span>02. 最適な学習ロードマップ提示</span>
                  </div>
                  <p className="mt-2 text-xs sm:text-sm text-slate-200 leading-relaxed">
                    週あたりの学習可能時間や目標時期から逆算した具体的なステップをご案内します。
                  </p>
                </div>
                <div className="rounded-xl bg-navy-950/70 border border-white/10 p-4">
                  <div className="flex items-center gap-2 text-sky-300 font-bold text-sm">
                    <Building2 className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span>03. 法人研修・助成金等も相談可</span>
                  </div>
                  <p className="mt-2 text-xs sm:text-sm text-slate-200 leading-relaxed">
                    BtoB企業研修担当者様向けに、組織課題に合わせたカスタマイズプランもご説明します。
                  </p>
                </div>
              </div>

              {/* 大型CTAボタン */}
              <div className="mt-10">
                <a
                  href={CTA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="無料オンラインカウンセリングに申し込む（新しいタブで開きます）"
                  className="group inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-2xl bg-brand-accent px-10 py-5 text-base sm:text-xl font-extrabold text-white shadow-2xl transition-all duration-200 hover:bg-brand-accentHover hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
                >
                  <span>無料オンラインカウンセリングに申し込む</span>
                  <ArrowRight
                    className="h-6 w-6 transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </a>
              </div>

              <p className="mt-4 text-xs sm:text-sm text-slate-300">
                所要時間：約45分〜60分 ／ 参加費：無料 ／ 強引な勧誘は一切行いません
              </p>
            </FadeInUp>
          </div>
        </section>
      </main>

      {/* =========================================================
          [Footer] フッター
      ========================================================= */}
      <footer className="bg-navy-950 text-slate-300 border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            {/* テキストロゴ */}
            <div>
              <a
                href="#"
                aria-label="Next Step 2027 トップへ戻る"
                className="inline-flex items-center gap-3"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-600 text-white font-extrabold text-base">
                  NS
                </span>
                <span className="text-xl font-extrabold tracking-tight text-white">
                  Next Step <span className="text-sky-400">2027</span>
                </span>
              </a>
              <p className="mt-2 text-xs sm:text-sm text-slate-400">
                AI時代に取り残されない、次世代のキャリアを創るオンラインリスキリングスクール
              </p>
            </div>

            {/* 法務・各種ダミーリンク */}
            <nav
              aria-label="フッターナビゲーション"
              className="flex flex-wrap gap-x-6 gap-y-3 text-xs sm:text-sm"
            >
              <a
                href="#company-overview"
                className="text-slate-300 hover:text-white underline-offset-4 hover:underline transition-colors"
              >
                運営会社情報
              </a>
              <a
                href="#terms"
                className="text-slate-300 hover:text-white underline-offset-4 hover:underline transition-colors"
              >
                利用規約
              </a>
              <a
                href="#privacy"
                className="text-slate-300 hover:text-white underline-offset-4 hover:underline transition-colors"
              >
                プライバシーポリシー
              </a>
              <a
                href="#tokushoho"
                className="text-slate-300 hover:text-white underline-offset-4 hover:underline transition-colors"
              >
                特定商取引法に基づく表記
              </a>
            </nav>
          </div>

          <div className="mt-8 border-t border-slate-800/80 pt-8 text-center sm:text-left">
            <p className="text-xs text-slate-400">
              © 2026 Next Step 2027 All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
