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
    <h1 className="font-bold pt-12 mb-4 text-3xl gradient-text" {...props} />
  ),
  h2: (props: HeadingProps) => (
    <h2
      className="text-gray-800 dark:text-zinc-100 font-semibold text-xl mt-10 mb-4"
      {...props}
    />
  ),
  h3: (props: HeadingProps) => (
    <h3
      className="text-gray-800 dark:text-zinc-200 font-semibold mt-8 mb-3"
      {...props}
    />
  ),
  h4: (props: HeadingProps) => <h4 className="font-medium" {...props} />,
  p: (props: ParagraphProps) => (
    <p
      className="text-gray-700 dark:text-zinc-300 leading-relaxed"
      {...props}
    />
  ),
  ol: (props: ListProps) => (
    <ol className="numbered-list text-gray-700 dark:text-zinc-300" {...props} />
  ),
  ul: (props: ListProps) => (
    <ul
      className="text-gray-700 dark:text-zinc-300 list-disc pl-5 space-y-2 marker:text-purple-400"
      {...props}
    />
  ),
  li: (props: ListItemProps) => <li className="leading-relaxed" {...props} />,
  em: (props: ComponentPropsWithoutRef<"em">) => (
    <em className="italic text-purple-600 dark:text-purple-400" {...props} />
  ),
  strong: (props: ComponentPropsWithoutRef<"strong">) => (
    <strong
      className="font-semibold text-gray-900 dark:text-white"
      {...props}
    />
  ),
  a: ({ href, children, ...props }: AnchorProps) => {
    const className =
      "text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 link-underline font-medium";
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
          className="px-1.5 py-0.5 rounded-md bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-mono"
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
    <div className="overflow-x-auto rounded-lg border border-gray-200 dark:border-zinc-800 my-6">
      <table className="min-w-full">
        <thead className="bg-gray-50 dark:bg-zinc-900">
          <tr>
            {data.headers.map((header, index) => (
              <th
                key={index}
                className="px-4 py-3 text-left text-sm font-medium text-gray-900 dark:text-zinc-100"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-zinc-800">
          {data.rows.map((row, index) => (
            <tr key={index}>
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="px-4 py-3 text-sm text-gray-700 dark:text-zinc-300"
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
      className="my-6 pl-4 border-l-4 border-purple-500 dark:border-purple-400 text-gray-600 dark:text-zinc-400 italic bg-purple-50/50 dark:bg-purple-900/10 py-3 pr-4 rounded-r-lg"
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
