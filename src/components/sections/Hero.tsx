'use client';

import Link from 'next/link';
import Image from 'next/image';
import heroGirl from '@/assets/home/Group 237654.png';
import FadeIn from '@/components/ui/FadeIn';

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-whitesmoke pb-16 pt-8">
      <div className="mx-auto max-w-[1440px] px-[70px]">
        <div className="relative flex flex-col items-center justify-between gap-12 lg:flex-row">
          {/* Left Content */}
          <div className="relative max-w-[614px]">
            {/* Ellipse gradient background */}
            <div
              className="absolute left-[32px] top-[67px] h-[159px] w-[582px] rounded-full opacity-80 blur-[300px]"
              style={{
                background:
                  'radial-gradient(ellipse at center, #fab900 0%, #f1b300 50%, transparent 100%)',
              }}
            />

            <div className="relative flex flex-col gap-14">
              <FadeIn direction="left">
                <div className="flex flex-col gap-4">
                  <h1 className="text-[36px] leading-[130%] text-gray-100">
                    <span className="font-semibold">
                      Kết nối tri thức
                    </span>
                    <br />
                    <span className="font-extrabold">
                      Mở cánh cửa tương lai
                    </span>
                  </h1>
                  <p className="max-w-[574px] text-sm leading-[150%] text-gray-100">
                    Busy Bee English mang đến môi trường học tiếng Anh chất lượng
                    cho thiếu nhi và luyện thi IELTS, giúp học viên xây dựng nền
                    tảng vững chắc, tự tin chinh phục tri thức và tương lai.
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={200} direction="up">
                <Link
                  href="/contact"
                  className="inline-flex h-[56px] w-[160px] items-center justify-center rounded-2xl bg-orange text-center text-lg font-semibold tracking-[0.01em] text-gray-100 shadow-[0px_4px_20px_rgba(255,221,40,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-goldenrod hover:shadow-[0px_8px_30px_rgba(255,221,40,0.35)] active:scale-95"
                >
                  Bắt đầu!
                </Link>
              </FadeIn>
            </div>
          </div>

          {/* Right Content - Hero Girl Image */}
          <FadeIn direction="right" delay={300}>
            <div className="relative">
              <Image
                src={heroGirl}
                alt="Học sinh vui vẻ đọc sách"
                width={596}
                height={533}
                className="object-cover"
                priority
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
