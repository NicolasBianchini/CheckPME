import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5 lg:px-8">
        <Link href="/" className="flex items-center gap-4">
          <div className="py-0.5">
            <Image
              src="/logo-checkpme-segura.png"
              alt="Logo CheckPME Segura"
              width={720}
              height={170}
              className="h-12 w-auto sm:h-14 lg:h-16"
              priority
            />
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
          <Link href="/#modulos" className="transition hover:text-brand-700">
            Módulos
          </Link>
          <Link href="/#metodologia" className="transition hover:text-brand-700">
            Metodologia
          </Link>
          <Link
            href="/diagnostico"
            className="rounded-full bg-brand-50 px-4 py-2 font-semibold text-brand-700 transition hover:bg-brand-100"
          >
            Iniciar diagnóstico
          </Link>
        </nav>
      </div>
    </header>
  );
}
