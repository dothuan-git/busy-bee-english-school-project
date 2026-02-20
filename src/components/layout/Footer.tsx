import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/common/logo.png';

export default function Footer() {
  return (
    <footer id="footer" className="relative w-full overflow-hidden bg-white p-20 text-base text-gray-100">
      <div className="relative mx-auto h-[151px] w-[1278px]">
        {/* Courses */}
        <div className="absolute left-[842.43px] top-[8px] h-[143px] w-[151.7px]">
          <div className="absolute left-0 top-0 inline-block w-[100.4px] font-inter text-2xl font-semibold leading-[150%]">
            Courses
          </div>
          <Link
            href="/courses/4-6"
            className="absolute left-0 top-[47px] inline-block w-[141.4px] leading-[150%] transition-colors duration-200 hover:text-orange"
          >
            Thiếu nhi (4-6 tuổi)
          </Link>
          <Link
            href="/courses/6-10"
            className="absolute left-0 top-[83px] inline-block w-[151.7px] leading-[150%] transition-colors duration-200 hover:text-orange"
          >
            Thiếu nhi (6-10 tuổi)
          </Link>
          <Link
            href="/courses/ielts"
            className="absolute left-0 top-[119px] inline-block w-[112.7px] leading-[150%] transition-colors duration-200 hover:text-orange"
          >
            Luyện thi IELTS
          </Link>
        </div>

        {/* Contact */}
        <div className="absolute left-[1182.69px] top-[8px] h-[107px] w-[95.3px]">
          <div className="absolute left-0 top-0 inline-block w-[95.3px] font-inter text-2xl font-semibold leading-[150%]">
            Contact
          </div>
          <Link
            href="/recruitment"
            className="absolute left-0 top-[47px] inline-block w-[87.1px] leading-[150%] transition-colors duration-200 hover:text-orange"
          >
            Tuyển dụng
          </Link>
          <Link
            href="/contact"
            className="absolute left-0 top-[83px] inline-block w-[53.3px] leading-[150%] transition-colors duration-200 hover:text-orange"
          >
            Liên hệ
          </Link>
        </div>

        {/* Logo and info */}
        <div className="absolute left-0 top-0 h-[151px] w-[267.5px]">
          <Link
            href="/"
            className="absolute left-0 top-[18px] flex h-[43.8px] w-[44.9px] items-center transition-opacity duration-300 hover:opacity-80"
          >
            <Image
              src={logo}
              alt="Busy Bee"
              width={45}
              height={44}
              className="object-contain"
            />
          </Link>
          <div className="absolute left-0 top-[69px] inline-block w-[199.8px] leading-[150%]">
            ©2026 busybee.english
          </div>
          <div className="absolute left-0 top-[103px] inline-block w-[267.5px] leading-[150%]">
            Busy Bee is a registered
            <br />
            trademark of busybee.english
          </div>
        </div>
      </div>
    </footer>
  );
}
