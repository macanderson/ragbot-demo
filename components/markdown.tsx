import Link from 'next/link';
import React, { memo } from 'react';
import ReactMarkdown, { type Components } from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { CodeBlock } from './code-block';

const components: Partial<Components> = {
  // @ts-expect-error
  code: CodeBlock,
  pre: ({ children }) => (
    <pre className="my-4 rounded-lg border border-gray-700 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 p-4 shadow-lg transition-transform duration-300 hover:scale-105">
      {children}
    </pre>
  ),
  ol: ({ children, ...props }) => (
    <ol className="ml-6 list-decimal space-y-2" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }) => (
    <li className="rounded py-1 transition-colors duration-200 hover:bg-blue-50" {...props}>
      {children}
    </li>
  ),
  ul: ({ children, ...props }) => (
    <ul className="ml-6 list-disc space-y-2" {...props}>
      {children}
    </ul>
  ),
  strong: ({ children, ...props }) => (
    <span className="font-extrabold text-blue-700" {...props}>
      {children}
    </span>
  ),
  a: ({ children, href, ...props }) =>
    href && href.startsWith('/')
      ? (
        <Link
          href={href}
          className="text-gradient bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent transition-colors duration-200 hover:underline"
          {...props}
        >
          {children}
        </Link>
      ) : (
        <a
          href={href}
          className="text-gradient bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent transition-colors duration-200 hover:underline"
          target="_blank"
          rel="noreferrer"
          {...props}
        >
          {children}
        </a>
      ),
  h1: ({ children, ...props }) => (
    <h1 className="animate-gradient-x mb-4 mt-10 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 bg-clip-text text-4xl font-black text-transparent" {...props}>
      {children}
    </h1>
  ),
  h2: ({ children, ...props }) => (
    <h2 className="mb-3 mt-8 text-3xl font-bold text-purple-500" {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3 className="mb-2 mt-6 text-2xl font-semibold text-pink-500" {...props}>
      {children}
    </h3>
  ),
  h4: ({ children, ...props }) => (
    <h4 className="mb-2 mt-4 text-xl font-medium text-blue-500" {...props}>
      {children}
    </h4>
  ),
  h5: ({ children, ...props }) => (
    <h5 className="mb-1 mt-3 text-lg text-gray-700" {...props}>
      {children}
    </h5>
  ),
  h6: ({ children, ...props }) => (
    <h6 className="mb-1 mt-2 text-base text-gray-500" {...props}>
      {children}
    </h6>
  ),
  blockquote: ({ children, ...props }) => (
    <blockquote className="my-4 rounded border-l-4 border-blue-400 bg-blue-50 pl-4 italic" {...props}>
      {children}
    </blockquote>
  ),
  table: ({ children, ...props }) => (
    <table className="my-4 min-w-full overflow-hidden rounded-lg bg-white shadow" {...props}>
      {children}
    </table>
  ),
  th: ({ children, ...props }) => (
    <th className="bg-gradient-to-r from-blue-400 to-purple-400 px-4 py-2 font-bold text-white" {...props}>
      {children}
    </th>
  ),
  td: ({ children, ...props }) => (
    <td className="border-t px-4 py-2" {...props}>
      {children}
    </td>
  ),
};

const remarkPlugins = [remarkGfm];

const NonMemoizedMarkdown = ({ children }: { children: string }) => {
  return (
    <ReactMarkdown remarkPlugins={remarkPlugins} components={components}>
      {children}
    </ReactMarkdown>
  );
};

export const Markdown = memo(
  NonMemoizedMarkdown,
  (prevProps, nextProps) => prevProps.children === nextProps.children,
);
