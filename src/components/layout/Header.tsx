import Link from 'next/link';
import MobileNav from './MobileNav';

export default function Header() {
  return (
    <header className="relative border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-xl font-bold text-amber-500">
          Busy Bee English School
        </Link>
        <nav className="hidden space-x-8 md:flex">
          <Link
            href="/about"
            className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            About
          </Link>
          <Link
            href="/courses"
            className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            Courses
          </Link>
          <Link
            href="/contact"
            className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            Contact
          </Link>
        </nav>
        <MobileNav />
      </div>
    </header>
  );
}
