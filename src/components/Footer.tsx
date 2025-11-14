export function Footer() {
  return (
    <footer className="border-t border-zinc-100 bg-zinc-50">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 text-sm text-zinc-600 md:grid-cols-3">
        <div>
          <p className="font-semibold text-zinc-900">Ayusa Japan</p>
          <p className="mt-2 leading-relaxed">
            アメリカ高校交換留学プログラムを運営するアユサ日本事務局です。
            ELTiS受験と対策のご相談はお気軽にお問合せください。
          </p>
        </div>
        <div>
          <p className="font-semibold text-zinc-900">お問い合わせ</p>
          <p className="mt-2">
            平日 10:00-18:00 <br />
            TEL: 03-0000-0000 <br />
            Mail: eltis@ayusajapan.org
          </p>
        </div>
        <div>
          <p className="font-semibold text-zinc-900">所在地</p>
          <p className="mt-2">
            〒100-0000 東京都千代田区丸の内0-0-0 <br />
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


