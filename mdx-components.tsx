import type { MDXComponents } from 'mdx/types';
import { Callout } from '@/components/mdx/Callout';
import { CodeBlock, CodeBlockPre } from '@/components/mdx/CodeBlock';
import { CodeLineRef } from '@/components/mdx/CodeLineRef';

export function useMDXComponents(): MDXComponents {
  return MDX_COMPONENTS;
}

const MDX_COMPONENTS: MDXComponents = {
  figure: (props) =>
    'data-rehype-pretty-code-figure' in props ? <CodeBlock {...props} /> : <figure {...props} />,
  pre: CodeBlockPre,
  Callout,
  CodeLineRef,
};
