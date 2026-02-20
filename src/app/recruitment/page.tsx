'use client';

import Image from 'next/image';
import Link from 'next/link';
import banner from '@/assets/hiring/banner.png';
import FadeIn from '@/components/ui/FadeIn';
import Subscribe from '@/components/sections/Subscribe';

// TODO: Fill in real job position details
const jobOpenings = [
  {
    title: 'Giáo viên Tiếng Anh Thiếu nhi',
    type: 'Toàn thời gian',
    location: 'TP. Hồ Chí Minh',
    description:
      'Mô tả công việc sẽ được cập nhật. Vui lòng liên hệ để biết thêm chi tiết.',
    requirements: [
      'Yêu cầu sẽ được cập nhật',
      'Yêu cầu sẽ được cập nhật',
      'Yêu cầu sẽ được cập nhật',
    ],
  },
];

export default function RecruitmentPage() {
  return (
    <div id="recruitment" className="bg-whitesmoke">
      {/* Hero */}
      <section id="recruitment-hero" className="relative overflow-hidden py-24">
        <Image
          src={banner}
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative mx-auto max-w-[1440px] px-[70px] text-left text-white">
          <FadeIn>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange">
              Busy Bee English
            </p>
            <h1 className="text-[48px] font-extrabold leading-[120%]">
              Gia nhập đội ngũ
              <br />
              <span className="text-orange">Busy Bee</span>
            </h1>
            <p className="mt-5 max-w-[560px] text-base leading-[170%] text-white/75">
              Chúng tôi đang tìm kiếm những giáo viên tâm huyết, sáng tạo để
              cùng xây dựng môi trường học tiếng Anh tốt nhất cho trẻ em.
            </p>
          </FadeIn>
          <FadeIn delay={200} direction="up">
            <a
              href="#positions"
              className="mt-8 inline-flex h-[52px] items-center justify-center rounded-full bg-orange px-8 text-base font-semibold text-gray-200 transition-all duration-300 hover:-translate-y-0.5 hover:bg-goldenrod hover:shadow-[0px_8px_30px_rgba(255,221,40,0.3)] active:scale-95"
            >
              Xem vị trí tuyển dụng
            </a>
          </FadeIn>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="scroll-mt-28 bg-white py-20">
        <div className="mx-auto max-w-[1280px] px-[70px]">
          <FadeIn>
            <h2 className="mb-3 text-center text-[36px] font-bold leading-[130%] text-gray-100">
              Vị trí đang tuyển
            </h2>
            <p className="mx-auto mb-14 max-w-[500px] text-center text-base leading-[160%] text-gray-100/70">
              Khám phá các cơ hội nghề nghiệp tại Busy Bee English.
            </p>
          </FadeIn>

          <div className="mx-auto flex max-w-[800px] flex-col gap-6">
            {jobOpenings.map((job) => (
              <FadeIn key={job.title} direction="up">
                <div className="rounded-2xl border border-gray-100/10 bg-whitesmoke p-8 transition-all duration-300 hover:shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
                  <div className="mb-5 flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-100">
                        {job.title}
                      </h3>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-orange/10 px-3 py-1 text-xs font-semibold text-orange">
                          <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                          </svg>
                          {job.type}
                        </span>
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-mediumpurple/10 px-3 py-1 text-xs font-semibold text-mediumpurple">
                          <svg className="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                          </svg>
                          {job.location}
                        </span>
                      </div>
                    </div>
                    <Link
                      href="/contact"
                      className="inline-flex h-[44px] items-center justify-center rounded-xl bg-orange px-6 text-sm font-semibold text-gray-200 transition-all duration-300 hover:bg-goldenrod hover:shadow-[0_4px_16px_rgba(250,185,0,0.25)] active:scale-95"
                    >
                      Ứng tuyển
                    </Link>
                  </div>

                  <p className="mb-4 text-sm leading-[170%] text-gray-100/70">
                    {job.description}
                  </p>

                  <div>
                    <h4 className="mb-2 text-sm font-bold text-gray-100">
                      Yêu cầu:
                    </h4>
                    <ul className="flex flex-col gap-1.5">
                      {job.requirements.map((req, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm leading-[160%] text-gray-100/70"
                        >
                          <span className="mt-1.5 block size-1.5 shrink-0 rounded-full bg-orange" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe */}
      <Subscribe />
    </div>
  );
}
