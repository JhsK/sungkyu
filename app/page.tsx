import { HomeHero } from '@/components/HomeHero';
import { HomeRecentPosts } from '@/components/HomeRecentPosts';
import { HomeSidebar } from '@/components/HomeSidebar';

export default function Home() {
  return (
    <main className="mx-auto max-w-[1080px] animate-rise-view px-6 pt-18 pb-24 max-xs:px-4">
      <HomeHero />
      <div className="flex flex-wrap gap-16 pt-14">
        <HomeRecentPosts />
        <HomeSidebar />
      </div>
    </main>
  );
}
