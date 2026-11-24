import { readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { cache } from 'react';
import GithubSlugger from 'github-slugger';
import matter from 'gray-matter';
import { fromMarkdown } from 'mdast-util-from-markdown';
import { mdxFromMarkdown } from 'mdast-util-mdx';
import { toString } from 'mdast-util-to-string';
import { mdxjs } from 'micromark-extension-mdxjs';

type PostFrontmatter = {
  title: string;
  publishedAt: string;
  tags: string[];
  excerpt: string;
};

export type Post = PostFrontmatter & {
  slug: string;
  tocItems: PostTocItem[];
};

export type PostTocItem = {
  id: string;
  title: string;
};

export type PostToc = [PostTocItem, ...PostTocItem[]];

type MarkdownNode = ReturnType<typeof fromMarkdown>['children'][number];

export const getPosts = cache((): Post[] =>
  readdirSync(POSTS_DIRECTORY)
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map(readPost)
    .toSorted((a, b) => b.publishedAt.localeCompare(a.publishedAt) || a.slug.localeCompare(b.slug)),
);

export function getPost(slug: string): Post | undefined {
  return getPosts().find((post) => post.slug === slug);
}

const readPost = (fileName: string): Post => {
  const slug = fileName.replace(/\.mdx$/, '');
  const { data: frontmatter, content: body } = parseFrontmatter(fileName);
  if (!isPostFrontmatter(frontmatter)) {
    throw new Error(
      `${POSTS_DIRECTORY_NAME}/${fileName}: frontmatter에 title·publishedAt('YYYY-MM-DD' 문자열)·tags·excerpt가 모두 있어야 합니다.`,
    );
  }
  const { title, publishedAt, tags, excerpt } = frontmatter;
  return { slug, title, publishedAt, tags, excerpt, tocItems: extractTocItems(body) };
};

const parseFrontmatter = (fileName: string) => {
  const source = readFileSync(path.join(POSTS_DIRECTORY, fileName), 'utf-8');
  try {
    return matter(source);
  } catch (cause) {
    throw new Error(`${POSTS_DIRECTORY_NAME}/${fileName}: frontmatter를 읽지 못했습니다.`, {
      cause,
    });
  }
};

const isPostFrontmatter = (
  rawFrontmatter: Record<string, unknown>,
): rawFrontmatter is PostFrontmatter =>
  typeof rawFrontmatter.title === 'string' &&
  typeof rawFrontmatter.publishedAt === 'string' &&
  /^\d{4}-\d{2}-\d{2}$/.test(rawFrontmatter.publishedAt) &&
  Array.isArray(rawFrontmatter.tags) &&
  rawFrontmatter.tags.every((tag) => typeof tag === 'string') &&
  typeof rawFrontmatter.excerpt === 'string';

const extractTocItems = (body: string): PostTocItem[] => {
  const slugger = new GithubSlugger();
  const tocItems: PostTocItem[] = [];
  const visit = (nodes: MarkdownNode[]) => {
    for (const node of nodes) {
      if (node.type === 'heading') {
        const title = toString(node);
        const id = slugger.slug(title);
        if (node.depth === 2) tocItems.push({ id, title });
      } else if ('children' in node) {
        visit(node.children);
      }
    }
  };
  visit(
    fromMarkdown(body, { extensions: [mdxjs()], mdastExtensions: [mdxFromMarkdown()] }).children,
  );
  return tocItems;
};

const POSTS_DIRECTORY_NAME = 'content/posts';

const POSTS_DIRECTORY = path.join(process.cwd(), POSTS_DIRECTORY_NAME);
