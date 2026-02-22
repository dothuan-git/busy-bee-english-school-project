'use client';

import { useState } from 'react';
import Image from 'next/image';
import FadeIn from '@/components/ui/FadeIn';

const avatars = [
  { src: '/images/subscribe-avatar-1.png', position: 'left-[6%] top-[10%]' },
  { src: '/images/subscribe-avatar-2.png', position: 'left-[12%] bottom-[12%]' },
  { src: '/images/subscribe-avatar-3.png', position: 'left-[22%] top-1/2 -translate-y-1/2' },
  { src: '/images/subscribe-avatar-4.png', position: 'right-[22%] top-1/2 -translate-y-1/2' },
  { src: '/images/subscribe-avatar-5.png', position: 'right-[12%] bottom-[12%]' },
  { src: '/images/subscribe-avatar-6.png', position: 'right-[6%] top-[10%]' },
];

export default function Subscribe() {
  const [phone, setPhone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Phone submitted:', phone);
  };

  return (
    <section id="subscribe" className="bg-white py-16">
      <div className="mx-auto max-w-[calc(1288px+48px)] px-6">
        <FadeIn>
          <div className="relative overflow-hidden rounded-[20px] bg-gray-200 px-6 py-16">
            {/* Decorative avatars */}
            {avatars.map((avatar, index) => (
              <div
                key={index}
                className={`pointer-events-none absolute z-0 hidden size-14 overflow-hidden rounded-full border-2 border-white/20 shadow-lg lg:block ${avatar.position}`}
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
            <div className="relative z-10 flex flex-col items-center gap-8 text-center text-white">
              <div className="flex flex-col items-center gap-3">
                <h2 className="text-[28px] font-semibold leading-[130%]">
                  Bạn còn thắc mắc gì không?
                </h2>
                <p className="max-w-[480px] text-sm leading-[150%] opacity-80">
                  Đừng ngần ngại để lại số điện thoại của bạn.
                  <br />
                  Chúng tôi sẽ liên hệ để giải đáp mọi thắc mắc của bạn.
                </p>
              </div>

              {/* Form */}
              <form
                onSubmit={handleSubmit}
                className="flex h-[60px] w-full max-w-[509px] font-inter"
              >
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Số điện thoại của bạn"
                  className="h-full flex-1 rounded-l-[10px] bg-white/10 px-5 text-base text-white placeholder:text-white/50 focus:bg-white/15 focus:outline-none"
                />
                <button
                  type="submit"
                  className="h-full w-[142px] cursor-pointer rounded-r-[10px] border-none bg-goldenrod font-medium text-white transition-all duration-300 hover:bg-orange hover:shadow-[0_4px_20px_rgba(241,179,0,0.4)] active:scale-95"
                >
                  Đăng ký
                </button>
              </form>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
