import React, { ComponentPropsWithoutRef } from "react";
import Link from "next/link";
import { highlight } from "sugar-high";
import { CopyButton } from "@/components/copy-button";

type HeadingProps = ComponentPropsWithoutRef<"h1">;
type ParagraphProps = ComponentPropsWithoutRef<"p">;
type ListProps = ComponentPropsWithoutRef<"ul">;
type ListItemProps = ComponentPropsWithoutRef<"li">;
type AnchorProps = ComponentPropsWithoutRef<"a">;
type BlockquoteProps = ComponentPropsWithoutRef<"blockquote">;

const components = {
  h1: (props: HeadingProps) => (
    <h1 className="pt-6 mb-2 text-4xl font-medium tracking-[-0.03em]" {...props} />
  ),
  h2: (props: HeadingProps) => (
    <h2
      className="font-medium text-2xl tracking-tight pt-6"
      {...props}
    />
  ),
  h3: (props: HeadingProps) => (
    <h3
      className="font-medium text-lg pt-4"
      {...props}
    />
  ),
  h4: (props: HeadingProps) => <h4 className="font-medium" {...props} />,
  p: (props: ParagraphProps) => (
    <p
      className="text-[17px] leading-[1.75] text-foreground/85"
      {...props}
    />
  ),
  ol: (props: ListProps) => (
    <ol className="numbered-list text-[17px] text-foreground/85" {...props} />
  ),
  ul: (props: ListProps) => (
    <ul
      className="text-[17px] text-foreground/85 list-disc pl-5 space-y-2 marker:text-faint"
      {...props}
    />
  ),
  li: (props: ListItemProps) => <li className="leading-relaxed" {...props} />,
  em: (props: ComponentPropsWithoutRef<"em">) => (
    <em className="italic" {...props} />
  ),
  strong: (props: ComponentPropsWithoutRef<"strong">) => (
    <strong
      className="font-semibold text-foreground"
      {...props}
    />
  ),
  a: ({ href, children, ...props }: AnchorProps) => {
    const className =
      "font-medium underline decoration-border-strong underline-offset-4 transition-colors hover:decoration-foreground";
    if (href?.startsWith("/")) {
      return (
        <Link href={href} className={className} {...props}>
          {children}
        </Link>
      );
    }
    if (href?.startsWith("#")) {
      return (
        <a href={href} className={className} {...props}>
          {children}
        </a>
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        {...props}
      >
        {children}
      </a>
    );
  },
  code: ({ children, ...props }: ComponentPropsWithoutRef<"code">) => {
    const codeString = children as string;
    const isInline =
      typeof codeString === "string" && !codeString.includes("\n");

    if (isInline) {
      return (
        <code
          className="rounded-md bg-surface px-1.5 py-0.5 font-mono text-[0.85em]"
          {...props}
        >
          {children}
        </code>
      );
    }

    const codeHTML = highlight(codeString);
    return (
      <div className="code-block-wrapper">
        <CopyButton code={codeString} />
        <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
      </div>
    );
  },
  Table: ({ data }: { data: { headers: string[]; rows: string[][] } }) => (
    <div className="my-6 overflow-x-auto rounded-lg border border-border">
      <table className="min-w-full">
        <thead className="bg-surface">
          <tr>
            {data.headers.map((header, index) => (
              <th
                key={index}
                className="px-4 py-3 text-left text-sm font-medium"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {data.rows.map((row, index) => (
            <tr key={index}>
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="px-4 py-3 text-sm text-muted"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ),
  blockquote: (props: BlockquoteProps) => (
    <blockquote
      className="my-6 border-l-2 border-border-strong pl-5 text-muted"
      {...props}
    />
  ),
  hr: () => <hr className="my-8" />,
};

declare global {
  type MDXProvidedComponents = typeof components;
}

export function useMDXComponents(): MDXProvidedComponents {
  return components;
}
