import { Children, isValidElement, type ComponentProps, type ReactNode } from 'react';
import { CodeCopyButton } from './CodeCopyButton';

type CodeFigurePartProps = {
  children?: ReactNode;
  'data-language'?: string;
  'data-rehype-pretty-code-title'?: string;
};

export function CodeBlock({ children }: ComponentProps<'figure'>) {
  const figureParts = Children.toArray(children).filter(isValidElement<CodeFigurePartProps>);
  const titleCaption = figureParts.find(
    ({ props }) => props['data-rehype-pretty-code-title'] !== undefined,
  );
  const codePre = figureParts.find(
    ({ props }) => props['data-rehype-pretty-code-title'] === undefined,
  );
  const language = codePre?.props['data-language'];

  return (
    <figure data-code-block className="overflow-hidden rounded-xl bg-surface">
      <div className="flex items-center justify-between border-b border-border py-1 pr-2 pl-4 font-mono text-[12px] text-muted">
        <span>{titleCaption?.props.children ?? (language === 'plaintext' ? null : language)}</span>
        <CodeCopyButton />
      </div>
      {codePre}
    </figure>
  );
}

export function CodeBlockPre(props: ComponentProps<'pre'>) {
  return (
    <pre {...props} className="overflow-x-auto py-5 font-mono text-[14px] leading-[1.7] text-fg" />
  );
}
