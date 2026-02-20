'use client';

import Image from 'next/image';
import Link from 'next/link';
import FadeIn from '@/components/ui/FadeIn';

const programs = [
  {
    name: '4-6 tuổi',
    icon: '/images/palette-icon.svg',
    bgColor: 'bg-[#fff8e8]',
    href: '/courses/4-6',
  },
  {
    name: '6-10 tuổi',
    icon: '/images/book-icon.svg',
    bgColor: 'bg-[#efeeff]',
    href: '/courses/6-10',
  },
  {
    name: 'IELTS',
    icon: '/images/english-icon.svg',
    bgColor: 'bg-[#ffecec]',
    href: '/courses/ielts',
  },
];

export default function Subjects() {
  return (
    <section id="subjects" className="relative flex w-full flex-col items-center gap-10 py-10 text-center text-[36px] text-midnightblue">
      <FadeIn>
        <div className="flex flex-col items-center gap-4">
          <h2 className="relative font-extrabold leading-[55px]">
            Chương trình học
          </h2>
          <p className="relative inline-block w-[890px] shrink-0 whitespace-pre-wrap text-lg leading-[150%] text-gray-400">
            Chương trình đào tạo bao gồm 3 chương trình chính: chương trình cho
            trẻ từ  4–6 tuổi, chương trình cho thiếu nhi từ 6–10 tuổi và chương
            trình luyện thi IELTS.
          </p>
        </div>
      </FadeIn>

      <div className="flex items-start gap-9 text-left text-lg text-gray-100">
        {programs.map((program, index) => (
          <FadeIn key={program.name} delay={index * 150} direction="up">
            <Link href={program.href}>
              <div className="box-border flex w-[260px] shrink-0 cursor-pointer flex-col items-start overflow-hidden rounded-2xl bg-white px-8 py-5 shadow-[0px_10px_25px_rgba(56,56,56,0.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0px_15px_35px_rgba(56,56,56,0.08)]">
                <div className="flex items-center gap-5">
                  <div
                    className={`flex size-[61px] items-center justify-center rounded-[20px] transition-transform duration-300 hover:scale-110 ${program.bgColor}`}
                  >
                    <Image
                      src={program.icon}
                      alt={program.name}
                      width={28}
                      height={28}
                    />
                  </div>
                  <span className="relative font-semibold leading-[140%]">
                    {program.name}
                  </span>
                </div>
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
