'use client';

import Image from 'next/image';
import benefitsImage from '@/assets/home/Group 12.png';
import FadeIn from '@/components/ui/FadeIn';

const benefits = [
  'Trải nghiệm học tập sinh động, tương tác cao',
  'Được quan tâm và theo sát trong lớp học quy mô nhỏ',
  'Chuẩn bị tốt cho các mục tiêu học tập trong tương lai, bao gồm IELTS',
];

export default function Benefits() {
  return (
    <section id="benefits" className="bg-white py-20">
      <div className="mx-auto max-w-[calc(1288px+48px)] px-6">
        <div className="flex flex-col items-center gap-10 lg:flex-row">
          {/* Left - Image */}
          <FadeIn direction="left">
            <div className="flex-shrink-0">
              <Image
                src={benefitsImage}
                alt="Học sinh vui vẻ với bảng đen"
                width={747}
                height={729}
                className="object-cover"
              />
            </div>
          </FadeIn>

          {/* Right - Content */}
          <div className="flex flex-col gap-[41px]">
            <FadeIn direction="right">
              <h2 className="max-w-[571px] text-[36px] font-extrabold leading-[130%] text-gray-100">
                Hành trình học tại
                <br />
                Busy Bee giúp con bạn phát triển như thế nào?
              </h2>
            </FadeIn>

            <div className="flex flex-col gap-6">
              {benefits.map((benefit, index) => (
                <FadeIn key={index} delay={index * 200} direction="right">
                  <div className="flex items-center gap-4">
                    <div className="relative flex size-7 flex-shrink-0 items-center justify-center rounded-[20px] bg-mediumpurple">
                      <Image
                        src="/images/checkmark.svg"
                        alt=""
                        width={20}
                        height={20}
                      />
                    </div>
                    <p className="max-w-[487px] text-lg font-medium leading-[1.4] text-gray-100">
                      {benefit}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
