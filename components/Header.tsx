import Link from 'next/link';
import Search from './Icons/Search';
import Moon from './Icons/Moon';

export function Header() {
  return (
    <div className="flex items-center justify-between px-6 py-4.5">
      <Link href="/">
        <h1 className="text-2xl font-bold">Sungkyu</h1>
      </Link>
      <div className="flex items-center gap-1">
        <nav>
          <ul className="flex items-center gap-1 text-sm font-semibold">
            <li className="px-3 py-2.5">
              <Link href="/blog">글</Link>
            </li>
            <li className="px-3 py-2.5">
              <Link href="/til">TIL</Link>
            </li>
            <li className="px-3 py-2.5">
              <Link href="/about">소개</Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-1">
          <button className="flex h-11 w-11 items-center justify-center">
            <Search />
          </button>
          <button className="flex h-11 w-11 items-center justify-center">
            <Moon />
          </button>
        </div>
      </div>
    </div>
  );
}
