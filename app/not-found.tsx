import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-6xl flex-col justify-center px-6 py-24">
      <p className="font-mono text-sm text-faint">404</p>
      <h1 className="mt-3 text-4xl font-medium tracking-[-0.03em] sm:text-5xl">
        This page doesn&apos;t exist.
      </h1>
      <p className="mt-4 max-w-md text-lg text-muted">It may have moved, or the link has a typo.</p>
      <div className="mt-8 flex gap-3">
        <Link
          href="/"
          className="inline-flex h-10 items-center rounded-full bg-foreground px-5 text-sm font-medium text-background transition-opacity hover:opacity-85"
        >
          Go home
        </Link>
        <Link
          href="/projects"
          className="inline-flex h-10 items-center rounded-full border border-border px-5 text-sm font-medium transition-colors hover:border-border-strong"
        >
          See projects
        </Link>
      </div>
    </div>
  );
}
