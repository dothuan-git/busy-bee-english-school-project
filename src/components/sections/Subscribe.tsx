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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!phone.trim()) {
      setStatus('error');
      setErrorMsg('Vui lòng nhập số điện thoại.');
      return;
    }

    if (!/^[0-9]{9,11}$/.test(phone.trim())) {
      setStatus('error');
      setErrorMsg('Số điện thoại không hợp lệ. Vui lòng chỉ nhập 9-11 chữ số.');
      return;
    }

    setIsSubmitting(true);
    setStatus('idle');
    setErrorMsg('');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Gửi thất bại');
      }

      setStatus('success');
      setPhone('');
    } catch (err) {
      setStatus('error');
      setErrorMsg(
        err instanceof Error ? err.message : 'Đã xảy ra lỗi. Vui lòng thử lại.',
      );
    } finally {
      setIsSubmitting(false);
    }
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
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                  placeholder="Số điện thoại của bạn"
                  className="h-full flex-1 rounded-l-[10px] bg-white/10 px-5 text-base text-white placeholder:text-white/50 focus:bg-white/15 focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="h-full w-[142px] cursor-pointer rounded-r-[10px] border-none bg-goldenrod font-medium text-white transition-all duration-300 hover:bg-orange hover:shadow-[0_4px_20px_rgba(241,179,0,0.4)] active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Đang gửi...' : 'Đăng ký'}
                </button>
              </form>

              {/* Status messages */}
              {status === 'success' && (
                <p className="text-sm text-green-300">
                  Đăng ký thành công! Chúng tôi sẽ liên hệ bạn sớm nhất.
                </p>
              )}
              {status === 'error' && (
                <p className="text-sm text-red-300">{errorMsg}</p>
              )}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
