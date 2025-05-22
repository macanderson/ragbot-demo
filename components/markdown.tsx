import Link from 'next/link';
import React, { memo } from 'react';
import ReactMarkdown, { type Components } from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { CodeBlock } from './code-block';

const components: Partial<Components> = {
  // @ts-expect-error
  code: CodeBlock,
  pre: ({ children }) => (
    <pre className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 p-4 rounded-lg shadow-lg my-4 transition-transform duration-300 hover:scale-105 border border-gray-700">
      {children}
    </pre>
  ),
  ol: ({ children, ...props }) => (
    <ol className="list-decimal ml-6 space-y-2" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }) => (
    <li className="py-1 hover:bg-blue-50 rounded transition-colors duration-200" {...props}>
      {children}
    </li>
  ),
  ul: ({ children, ...props }) => (
    <ul className="list-disc ml-6 space-y-2" {...props}>
      {children}
    </ul>
  ),
  strong: ({ children, ...props }) => (
    <span className="font-extrabold text-blue-700" {...props}>
      {children}
    </span>
  ),
  a: ({ children, ...props }) => (
    <Link
      className="text-gradient bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent hover:underline transition-colors duration-200"
      target="_blank"
      rel="noreferrer"
      {...props}
    >
      {children}
    </Link>
  ),
  h1: ({ children, ...props }) => (
    <h1 className="text-4xl font-black mt-10 mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 animate-gradient-x" {...props}>
      {children}
    </h1>
  ),
  h2: ({ children, ...props }) => (
    <h2 className="text-3xl font-bold mt-8 mb-3 text-purple-500" {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3 className="text-2xl font-semibold mt-6 mb-2 text-pink-500" {...props}>
      {children}
    </h3>
  ),
  h4: ({ children, ...props }) => (
    <h4 className="text-xl font-medium mt-4 mb-2 text-blue-500" {...props}>
      {children}
    </h4>
  ),
  h5: ({ children, ...props }) => (
    <h5 className="text-lg mt-3 mb-1 text-gray-700" {...props}>
      {children}
    </h5>
  ),
  h6: ({ children, ...props }) => (
    <h6 className="text-base mt-2 mb-1 text-gray-500" {...props}>
      {children}
    </h6>
  ),
  blockquote: ({ children, ...props }) => (
    <blockquote className="border-l-4 border-blue-400 pl-4 italic bg-blue-50 rounded my-4" {...props}>
      {children}
    </blockquote>
  ),
  table: ({ children, ...props }) => (
    <table className="min-w-full bg-white rounded-lg shadow overflow-hidden my-4" {...props}>
      {children}
    </table>
  ),
  th: ({ children, ...props }) => (
    <th className="px-4 py-2 bg-gradient-to-r from-blue-400 to-purple-400 text-white font-bold" {...props}>
      {children}
    </th>
  ),
  td: ({ children, ...props }) => (
    <td className="px-4 py-2 border-t" {...props}>
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
