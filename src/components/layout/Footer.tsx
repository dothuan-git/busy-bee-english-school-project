import Link from 'next/link';
import Image from 'next/image';
import logoWhite from '@/assets/common/logo_white.png';

const courseLinks = [
  { href: '/courses/4-6', label: 'Thiếu nhi (4-6 tuổi)' },
  { href: '/courses/6-10', label: 'Thiếu nhi (6-10 tuổi)' },
  { href: '/courses/ielts', label: 'Luyện thi IELTS' },
];

const contactLinks = [
  { href: '/recruitment', label: 'Tuyển dụng' },
  { href: '/contact', label: 'Liên hệ' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-200 text-white">
      <div className="mx-auto max-w-[1280px] pb-8 pt-10">
        <div className="flex flex-col justify-between gap-10 sm:flex-row">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block transition-opacity duration-300 hover:opacity-80">
              <Image
                src={logoWhite}
                alt="Busy Bee English"
                width={140}
                height={46}
                className="h-auto w-[140px] object-contain"
              />
            </Link>
            <p className="mt-4 max-w-[260px] text-sm leading-[170%] text-white/60">
              Xây dựng nền tảng tiếng Anh vững chắc cho trẻ em ngay từ sớm.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-16">
            <div>
              <h3 className="mb-4 font-inter text-sm font-semibold uppercase tracking-[0.15em] text-white/40">
                Khóa học
              </h3>
              <ul className="flex flex-col gap-2.5">
                {courseLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 transition-colors duration-200 hover:text-orange"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-inter text-sm font-semibold uppercase tracking-[0.15em] text-white/40">
                Liên kết
              </h3>
              <ul className="flex flex-col gap-2.5">
                {contactLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 transition-colors duration-200 hover:text-orange"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Divider + bottom */}
        <div className="mt-8 border-t border-white/10 pt-5">
          <p className="text-xs text-white/40">
            © 2026 Busy Bee English. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
