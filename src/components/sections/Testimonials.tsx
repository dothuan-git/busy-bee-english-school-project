'use client';

import Image from 'next/image';

const testimonials = [
  {
    name: 'Jassica Andrew',
    avatar: '/images/avatar-1.png',
    rating: 5,
    text: 'My child has improved a lot after finishing school. Thank you very much Busy Bee',
  },
  {
    name: 'Darlene Robertson',
    avatar: '/images/avatar-2.png',
    rating: 5,
    text: 'My child knows how to write very good essays. English ability is also much better. The cost is very cheap, so you should register. Thank you very much Busy Bee.',
    featured: true,
  },
  {
    name: 'Dianne Russell',
    avatar: '/images/avatar-3.png',
    rating: 5,
    text: 'My child has improved a lot after finishing school. Thank you very much Busy Bee',
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-2">
      {[...Array(count)].map((_, i) => (
        <Image
          key={i}
          src="/images/star.svg"
          alt="Star"
          width={16}
          height={16}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-[#fff8e5] px-[143px] py-20">
      <div className="mx-auto max-w-[1438px]">
        {/* Header */}
        <div className="mb-14 text-center">
          <h2 className="text-[48px] font-extrabold leading-[55px] text-[#1f1c14]">
            What do students say about Busy Bee?
          </h2>
        </div>

        {/* Testimonial Cards */}
        <div className="relative flex items-start justify-center gap-8">
          {/* Navigation arrows */}
          <button className="absolute -left-[77px] top-[91px] flex size-12 items-center justify-center rounded-full bg-white shadow-lg transition hover:bg-gray-50">
            <Image
              src="/images/arrow-left.svg"
              alt="Previous"
              width={48}
              height={48}
            />
          </button>

          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`flex w-[358px] flex-col items-center overflow-hidden rounded-[20px] bg-white px-5 pt-[27px] shadow-[0px_50px_80px_0px_rgba(0,0,0,0.05)] ${
                testimonial.featured ? 'h-[287px] pb-6' : 'h-[247px] pb-5'
              }`}
            >
              {/* Avatar and Name */}
              <div className="flex flex-col items-center gap-2">
                {/* Avatar */}
                <div className="relative size-14 overflow-hidden rounded-full">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Name */}
                <p className="text-[20px] font-semibold leading-[1.5] tracking-[0.1px] text-[#1f1c14]">
                  {testimonial.name}
                </p>

                {/* Rating */}
                <StarRating count={testimonial.rating} />
              </div>

              {/* Text */}
              <p className="mt-[20px] w-[318px] text-center text-[16px] leading-[1.5] text-[rgba(31,28,20,0.7)]">
                {testimonial.text}
              </p>
            </div>
          ))}

          <button className="absolute -right-[77px] top-[91px] flex size-12 items-center justify-center rounded-full bg-[#fab900] shadow-lg transition hover:bg-[#f1b300]">
            <Image
              src="/images/arrow-right.svg"
              alt="Next"
              width={48}
              height={48}
            />
          </button>
        </div>
      </div>
    </section>
  );
}
