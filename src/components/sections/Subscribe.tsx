'use client';

import { useState } from 'react';
import Image from 'next/image';
import FadeIn from '@/components/ui/FadeIn';

const avatars = [
  { src: '/images/subscribe-avatar-1.png', position: 'left-[94px] top-[30px]' },
  { src: '/images/subscribe-avatar-2.png', position: 'left-[174px] bottom-[40px]' },
  { src: '/images/subscribe-avatar-3.png', position: 'left-[300px] top-1/2 -translate-y-1/2' },
  { src: '/images/subscribe-avatar-4.png', position: 'right-[300px] top-1/2 -translate-y-1/2' },
  { src: '/images/subscribe-avatar-5.png', position: 'right-[174px] bottom-[40px]' },
  { src: '/images/subscribe-avatar-6.png', position: 'right-[94px] top-[30px]' },
];

export default function Subscribe() {
  const [phone, setPhone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Phone submitted:', phone);
  };

  return (
    <section id="subscribe" className="bg-white py-16">
      <div className="mx-auto max-w-[1440px] px-20">
        <FadeIn>
          <div className="relative h-[331px] w-full text-center text-[28px] text-white">
            <div className="absolute left-0 top-0 h-[331px] w-full rounded-[20px] bg-gray-200" />

            {/* Decorative avatars */}
            {avatars.map((avatar, index) => (
              <div
                key={index}
                className={`pointer-events-none absolute z-10 hidden size-14 overflow-hidden rounded-full lg:block ${avatar.position}`}
              >
                <Image
                  src={avatar.src}
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
            ))}

            {/* Content */}
            <div className="absolute left-1/2 top-[64px] z-10 flex -translate-x-1/2 flex-col items-center gap-8">
              <div className="flex flex-col items-center gap-4">
                <div className="relative font-semibold leading-[130%]">
                  Bạn còn thắc mắc gì không?
                </div>
                <div className="relative self-stretch text-sm leading-[150%] opacity-80">
                  Đừng ngần ngại để lại số điện thoại của bạn.
                  <br />
                  Chúng tôi sẽ liên hệ để giải đáp mọi thắc mắc của bạn.
                </div>
              </div>

              {/* Form */}
              <form
                onSubmit={handleSubmit}
                className="relative h-[60px] w-[509px] text-right text-base font-inter"
              >
                {/* Submit button */}
                <div className="absolute left-[367px] top-0 h-[60px] w-[142px]">
                  <button
                    type="submit"
                    className="absolute left-0 top-0 h-[60px] w-[142px] cursor-pointer rounded-bl-none rounded-br-[10px] rounded-tl-none rounded-tr-[10px] border-none bg-goldenrod transition-all duration-300 hover:brightness-110 active:scale-95"
                  />
                  <span className="pointer-events-none absolute left-[47px] top-[21px] font-medium text-white">
                    Đăng ký
                  </span>
                </div>

                {/* Input field */}
                <div className="absolute left-0 top-0 h-[60px] w-[367px] text-left font-sans">
                  <div className="absolute left-0 top-0 h-[60px] w-[367px] rounded-bl-[10px] rounded-br-none rounded-tl-[10px] rounded-tr-none bg-gray-300" />
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Số điện thoại của bạn"
                    className="absolute left-[20px] top-[15px] w-[320px] border-none bg-transparent leading-[30px] text-white placeholder:text-white/60 focus:outline-none"
                  />
                </div>
              </form>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
