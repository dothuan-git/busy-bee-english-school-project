'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import logo from '@/assets/common/logo.png';

const courseLinks = [
  { href: '/courses/4-6', label: 'Thiếu nhi (4-6 tuổi)' },
  { href: '/courses/6-10', label: 'Thiếu nhi (6-10 tuổi)' },
  { href: '/courses/ielts', label: 'Luyện thi IELTS' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [isMobileCoursesOpen, setIsMobileCoursesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsCoursesOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header id="header" className="relative z-50 h-[110px] w-full bg-white font-sans text-xl text-midnightblue">
      <div className="absolute left-1/2 top-1/2 h-14 w-[1288px] max-w-[calc(100%-48px)] -translate-x-1/2 -translate-y-1/2">
        {/* Logo */}
        <Link href="/" className="absolute left-[0.31%] top-[-18px] transition-opacity duration-300 hover:opacity-80">
          <Image
            className="h-[93px] w-auto overflow-hidden object-cover"
            src={logo}
            width={284}
            height={93}
            alt="Busy Bee English School"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="absolute right-0 top-[26.79%] hidden items-start gap-14 lg:flex">
          <Link
            href="/"
            className="relative font-medium after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-orange after:transition-all after:duration-300 hover:text-orange hover:after:w-full"
          >
            Trang chủ
          </Link>

          {/* Courses Dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setIsCoursesOpen(!isCoursesOpen)}
              className="flex cursor-pointer items-center gap-1.5 border-none bg-transparent font-medium text-midnightblue transition-colors duration-300 hover:text-orange"
            >
              <span>Chương trình học</span>
              <svg
                className={`h-4 w-4 transition-transform duration-300 ${isCoursesOpen ? 'rotate-180' : ''}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div
              className={`absolute left-1/2 top-full z-50 mt-3 w-[220px] -translate-x-1/2 overflow-hidden rounded-xl bg-white shadow-[0px_10px_40px_rgba(0,0,0,0.1)] transition-all duration-300 ${
                isCoursesOpen
                  ? 'visible translate-y-0 opacity-100'
                  : 'invisible -translate-y-2 opacity-0'
              }`}
            >
              {courseLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsCoursesOpen(false)}
                  className="block px-5 py-3 text-base font-medium text-gray-100 transition-all duration-200 hover:bg-orange/10 hover:text-orange"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/recruitment"
            className="relative font-medium text-gray-100 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-orange after:transition-all after:duration-300 hover:text-orange hover:after:w-full"
          >
            Tuyển dụng
          </Link>
          <Link
            href="/contact"
            className="relative font-medium text-gray-100 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-orange after:transition-all after:duration-300 hover:text-orange hover:after:w-full"
          >
            Liên hệ
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="absolute right-0 top-1/2 block -translate-y-1/2 cursor-pointer border-none bg-none p-2 transition-transform duration-200 active:scale-90 lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMobileMenuOpen
                  ? 'M6 18L18 6M6 6l12 12'
                  : 'M4 6h16M4 12h16M4 18h16'
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute left-0 top-[110px] z-50 flex w-full flex-col border-t border-[#eee] bg-white px-6 transition-all duration-300 lg:hidden ${
          isMobileMenuOpen
            ? 'translate-y-0 py-4 opacity-100'
            : 'pointer-events-none -translate-y-2 py-0 opacity-0'
        }`}
      >
        <Link href="/" className="py-3 font-medium text-midnightblue transition-colors duration-200 hover:text-orange">
          Trang chủ
        </Link>

        {/* Mobile Courses Accordion */}
        <button
          onClick={() => setIsMobileCoursesOpen(!isMobileCoursesOpen)}
          className="flex w-full cursor-pointer items-center justify-between border-none bg-transparent py-3 text-left font-medium text-midnightblue transition-colors duration-200 hover:text-orange"
        >
          <span>Chương trình học</span>
          <svg
            className={`h-4 w-4 transition-transform duration-300 ${isMobileCoursesOpen ? 'rotate-180' : ''}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div
          className={`overflow-hidden transition-all duration-300 ${
            isMobileCoursesOpen ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          {courseLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 pl-4 text-base font-medium text-gray-100 transition-colors duration-200 hover:text-orange"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="/recruitment"
          className="py-3 font-medium text-gray-100 transition-colors duration-200 hover:text-orange"
        >
          Tuyển dụng
        </Link>
        <Link href="/contact" className="py-3 font-medium text-gray-100 transition-colors duration-200 hover:text-orange">
          Liên hệ
        </Link>
      </div>
    </header>
  );
}
