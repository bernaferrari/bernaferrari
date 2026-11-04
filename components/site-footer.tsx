import { links } from "@/lib/work";

const social = [
  { label: "GitHub", href: links.github },
  { label: "LinkedIn", href: links.linkedin },
  { label: "X", href: links.x },
  { label: "Google Scholar", href: links.scholar },
];

export function SiteFooter() {
  return (
    <footer className="mx-auto w-full max-w-6xl px-6 pt-16 pb-10">
      <div className="flex flex-col gap-4 border-t border-border pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Bernardo Ferrari</p>
        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          {social.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
