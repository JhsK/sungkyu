import createMDX from '@next/mdx';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      '*.css': {
        loaders: ['@tailwindcss/turbopack'],
        as: '*.css',
      },
    },
  },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: ['remark-frontmatter', 'remark-gfm'],
    rehypePlugins: [
      'rehype-slug',
      [
        'rehype-pretty-code',
        {
          theme: {
            name: 'blog-tokens',
            type: 'light',
            colors: { 'editor.foreground': 'var(--fg)', 'editor.background': 'var(--surface)' },
            tokenColors: [
              {
                scope: ['keyword', 'storage', 'storage.type', 'storage.modifier'],
                settings: { foreground: 'var(--kw)' },
              },
              {
                scope: ['keyword.operator', 'storage.type.function.arrow'],
                settings: { foreground: 'var(--fg)' },
              },
              {
                scope: ['entity.name.function', 'support.function'],
                settings: { foreground: 'var(--accent)' },
              },
              {
                scope: ['comment', 'punctuation.definition.comment'],
                settings: { foreground: 'var(--subtle)' },
              },
              { scope: ['string'], settings: { foreground: 'var(--str)' } },
            ],
          },
          keepBackground: false,
          defaultLang: { block: 'plaintext' },
        },
      ],
    ],
  },
});

export default withMDX(nextConfig);
