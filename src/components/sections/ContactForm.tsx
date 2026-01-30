'use client';

import { useState, type FormEvent } from 'react';
import Button from '@/components/ui/Button';

interface FormData {
  name: string;
  email: string;
  phone: string;
  childAge: string;
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
    childAge: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
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
      <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center dark:border-green-800 dark:bg-green-900/20">
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
        <h3 className="mt-4 text-xl font-semibold text-green-800 dark:text-green-200">
          Thank you for your message!
        </h3>
        <p className="mt-2 text-green-700 dark:text-green-300">
          We&apos;ll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
        >
          Your Name *
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className={`w-full rounded-lg border px-4 py-3 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 dark:bg-zinc-800 ${
            errors.name
              ? 'border-red-500 dark:border-red-500'
              : 'border-zinc-300 dark:border-zinc-700'
          }`}
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-500">{errors.name}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
        >
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className={`w-full rounded-lg border px-4 py-3 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 dark:bg-zinc-800 ${
            errors.email
              ? 'border-red-500 dark:border-red-500'
              : 'border-zinc-300 dark:border-zinc-700'
          }`}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="phone"
          className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
        >
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full rounded-lg border border-zinc-300 px-4 py-3 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 dark:border-zinc-700 dark:bg-zinc-800"
        />
      </div>

      <div>
        <label
          htmlFor="childAge"
          className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
        >
          Child&apos;s Age
        </label>
        <select
          id="childAge"
          value={formData.childAge}
          onChange={(e) =>
            setFormData({ ...formData, childAge: e.target.value })
          }
          className="w-full rounded-lg border border-zinc-300 px-4 py-3 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 dark:border-zinc-700 dark:bg-zinc-800"
        >
          <option value="">Select age range</option>
          <option value="3-5">3-5 years (Little Bees)</option>
          <option value="6-9">6-9 years (Busy Bees)</option>
          <option value="10-12">10-12 years (Super Bees)</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-300"
        >
          Message *
        </label>
        <textarea
          id="message"
          rows={4}
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          className={`w-full rounded-lg border px-4 py-3 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 dark:bg-zinc-800 ${
            errors.message
              ? 'border-red-500 dark:border-red-500'
              : 'border-zinc-300 dark:border-zinc-700'
          }`}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message}</p>
        )}
      </div>

      <Button type="submit" size="lg" className="w-full">
        Send Message
      </Button>
    </form>
  );
}
