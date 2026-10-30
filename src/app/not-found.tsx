import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[80svh] max-w-xl flex-col items-center justify-center px-4 text-center">
      <p className="text-gradient font-display text-8xl font-bold">404</p>
      <h1 className="mt-4 font-display text-2xl font-semibold">This page wandered off.</h1>
      <p className="mt-2 text-muted">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
      <Link href="/" className="bg-gradient-brand mt-8 rounded-full px-6 py-3 text-sm font-semibold text-white">
        Back home
      </Link>
    </section>
  );
}
