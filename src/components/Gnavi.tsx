import Link from "next/link";

const links = [
  { href: "#overview", label: "ELTiSとは" },
  { href: "#exam-outline", label: "試験内容" },
  { href: "#preparation", label: "対策" },
  { href: "#course", label: "ELTiSコース" },
  { href: "#application", label: "受験申込" },
];

export function Gnavi() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-100 bg-white/95 shadow-sm shadow-zinc-100 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4 text-sm">
        <Link href="/" className="font-semibold uppercase tracking-[0.2em]">
          AYUSA Exchange
        </Link>
        <nav className="flex flex-1 flex-wrap items-center gap-4 text-zinc-600 md:justify-center">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-zinc-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="#contact"
          className="rounded-full bg-emerald-600 px-5 py-2 text-white transition hover:bg-emerald-700"
        >
          お問い合わせ
        </Link>
      </div>
    </header>
  );
}


