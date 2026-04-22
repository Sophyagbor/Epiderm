import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-sand-200/60 bg-cream">
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link
            href="/"
            className="font-display text-4xl tracking-editorial"
          >
            Epiderm<span className="text-clay-400">.</span>
          </Link>
          <p className="mt-6 max-w-md text-ink/60 leading-relaxed">
            Personalized skin insights, targeted systems, and real
            transformation — built on dermatology and designed for everyone.
          </p>
        </div>
        <div>
          <h4 className="text-[12px] uppercase tracking-[0.2em] text-ink/50 mb-4">
            Explore
          </h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="/skin-scan" className="hover:text-clay-500">Skin Scan</Link></li>
            <li><Link href="/systems" className="hover:text-clay-500">Systems</Link></li>
            <li><Link href="/learn" className="hover:text-clay-500">Learn</Link></li>
            <li><Link href="/community" className="hover:text-clay-500">Community</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-[12px] uppercase tracking-[0.2em] text-ink/50 mb-4">
            Company
          </h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="/about" className="hover:text-clay-500">About</Link></li>
            <li><a href="#" className="hover:text-clay-500">Press</a></li>
            <li><a href="#" className="hover:text-clay-500">Contact</a></li>
            <li><a href="#" className="hover:text-clay-500">Careers</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-sand-200/60">
        <div className="mx-auto max-w-7xl px-6 md:px-10 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-ink/50">
          <p>© {new Date().getFullYear()} Epiderm. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-ink">Privacy</a>
            <a href="#" className="hover:text-ink">Terms</a>
            <a href="#" className="hover:text-ink">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
