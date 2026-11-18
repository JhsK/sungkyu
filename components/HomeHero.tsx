import Link from 'next/link';
import Github from './Icons/Github';
import Mail from './Icons/Mail';
import Rss from './Icons/Rss';

export function HomeHero() {
  return (
    <section
      aria-labelledby="home-hero-title"
      className="flex flex-col gap-4 border-b border-border pb-14"
    >
      <p className="text-[14px] font-medium text-accent">Frontend Developer · 5년차</p>
      <h1
        id="home-hero-title"
        className="text-[clamp(30px,22px+2.4vw,40px)] leading-[1.3] font-bold tracking-[-0.02em] text-balance"
      >
        사용자가 느끼는 속도와
        <br />
        읽히는 코드를 고민합니다.
      </h1>
      <p className="max-w-[560px] text-[17px] text-muted">
        프론트엔드 개발자 임성규입니다. 일하며 배운 것과 삽질의 기록을 남깁니다.
      </p>
      <div className="mt-2 flex flex-wrap gap-2">
        <a
          href="https://github.com/JhsK"
          target="_blank"
          rel="noopener"
          className={HERO_ACTION_CLASS_NAME}
        >
          <Github size={16} />
          GitHub
          <span className="sr-only">(새 탭에서 열림)</span>
        </a>
        <button type="button" className={HERO_ACTION_CLASS_NAME}>
          <Mail size={16} />
          이메일
        </button>
        <Link href="/about" className={HERO_ACTION_CLASS_NAME}>
          <span>
            더 알아보기 <span aria-hidden="true">→</span>
          </span>
        </Link>
        <button type="button" className={HERO_ACTION_CLASS_NAME}>
          <Rss size={16} />
          RSS
        </button>
      </div>
    </section>
  );
}

const HERO_ACTION_CLASS_NAME =
  'inline-flex h-11 items-center gap-2 rounded-[10px] border border-border px-4 text-[14px] font-medium transition-[color,background-color,border-color,transform] duration-(--dur) ease-(--ease) hover:border-accent hover:text-accent active:scale-[0.97]';
