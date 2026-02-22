'use client';

import { useState, type FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Vui lòng nhập tên';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Vui lòng nhập email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email không hợp lệ';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Vui lòng nhập tin nhắn';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
    }
  };

  if (isSubmitted) {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
        <svg
          className="mx-auto h-12 w-12 text-green-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h3 className="mt-4 text-xl font-semibold text-green-800">
          Cảm ơn bạn đã gửi tin nhắn!
        </h3>
        <p className="mt-2 text-green-700">
          Chúng tôi sẽ phản hồi trong vòng 24 giờ.
        </p>
      </div>
    );
  }

  const inputClasses =
    'w-full h-[60px] rounded-[10px] bg-white/30 px-6 text-base leading-[30px] text-black/70 placeholder-black/50 outline-none transition-colors focus:bg-white/50 focus:ring-2 focus:ring-orange-400';
  const errorInputClasses = 'ring-2 ring-red-500';

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-[17px]">
      <div>
        <input
          type="text"
          placeholder="Tên"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className={`${inputClasses} ${errors.name ? errorInputClasses : ''}`}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-700">{errors.name}</p>
        )}
      </div>

      <div>
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className={`${inputClasses} ${errors.email ? errorInputClasses : ''}`}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-700">{errors.email}</p>
        )}
      </div>

      <div>
        <input
          type="tel"
          placeholder="Số điện thoại"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className={inputClasses}
        />
      </div>

      <div>
        <textarea
          placeholder="Tin nhắn"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          className={`w-full h-[129px] rounded-[10px] bg-white/30 px-6 pt-4 text-base leading-[30px] text-black/70 placeholder-black/50 outline-none transition-colors resize-none focus:bg-white/50 focus:ring-2 focus:ring-orange-400 ${errors.message ? errorInputClasses : ''}`}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-700">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full h-[60px] rounded-[10px] bg-orange text-center font-inter font-medium text-white transition-colors hover:bg-[#e69200]"
      >
        Gửi
      </button>
    </form>
  );
}
