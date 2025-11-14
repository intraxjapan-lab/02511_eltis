import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-zinc-100 bg-zinc-50">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 text-sm text-zinc-600 md:grid-cols-3">
        <div>
          <Image
            src="/Ayusa_Logo.png"
            alt="Ayusa International logo"
            width={160}
            height={52}
            className="h-12 w-auto object-contain"
          />
          <p className="mt-3 font-semibold text-zinc-900">
            アユサ日本事務局 / 株式会社Intrax
          </p>
          <p className="mt-2 leading-relaxed">
            アメリカ高校交換留学プログラムを運営するアユサ日本事務局です。
            ELTiS受験と対策のご相談はお気軽にお問合せください。
          </p>
        </div>
        <div>
          <p className="font-semibold text-zinc-900">お問い合わせ</p>
          <p className="mt-2">
            TEL：03-3434-2636 <br />
            FAX：03-3434-2617 <br />
          </p>
          <p className="mt-2">業務時間：平日 10:00-18:30</p>
        </div>
        <div>
          <p className="font-semibold text-zinc-900">所在地</p>
          <p className="mt-2">
            〒105-0022 <br />
            東京都港区海岸1-9-11 マリンクスタワー7F <br />
            アユサ日本事務局（東京）
          </p>
        </div>
      </div>
      <div className="bg-zinc-900 text-xs text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-4 text-center md:flex-row md:text-left">
          <p>© {new Date().getFullYear()} Ayusa International Japan</p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}


