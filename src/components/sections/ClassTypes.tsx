import Link from 'next/link';
import Image from 'next/image';

const classTypes = [
  {
    name: 'Audio Classes',
    icon: '/images/audio-icon.svg',
    bgColor: 'bg-[#fff4f2]',
  },
  {
    name: 'Live Classes',
    icon: '/images/live-icon.svg',
    bgColor: 'bg-[#f8f2ff]',
  },
  {
    name: 'Recorded Class',
    icon: '/images/play-icon.svg',
    bgColor: 'bg-[#e5fff3]',
  },
];

export default function ClassTypes() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-[1136px] px-6">
        {/* Header */}
        <div className="mb-12 flex flex-col items-center gap-4 text-center">
          <h2 className="text-[48px] font-extrabold leading-[55px] text-[#1f1c14]">
            What&apos;s in the class at Busy Bee?
          </h2>
          <p className="max-w-[950px] text-[24px] leading-[1.5] text-[rgba(31,28,20,0.7)]">
            Online classes with teachers, continuous questions and answers during
            class if you do not understand. At the end of the session, the lesson is
            recorded for your child to review
          </p>
          <Link
            href="/courses"
            className="mt-8 flex h-[70px] w-[320px] items-center justify-center rounded-[16px] bg-[#fab900] text-[24px] font-semibold text-[#1f1c14] shadow-[0px_8px_20px_0px_rgba(255,221,40,0.2)] transition hover:bg-[#f1b300]"
          >
            Free trial lesson
          </Link>
        </div>

        {/* Video preview area */}
        <div className="relative mb-8">
          {/* Decorative pattern */}
          <div className="absolute -right-6 -top-6 grid grid-cols-10 gap-[6px] opacity-30">
            {[...Array(100)].map((_, i) => (
              <span key={i} className="text-[14px] leading-[14px] text-[#ff6652]">
                +
              </span>
            ))}
          </div>

          {/* Main video container */}
          <div className="relative h-[600px] w-[1060px] overflow-hidden rounded-[20px] bg-white shadow-[0px_50px_170px_0px_rgba(0,0,0,0.05)]">
            <Image
              src="/images/class-video.png"
              alt="Online class preview"
              fill
              className="object-cover"
            />

            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="flex size-20 items-center justify-center rounded-full bg-[#1f1c14] text-white shadow-lg transition hover:bg-[#333]">
                <svg viewBox="0 0 24 24" className="ml-1 h-10 w-10">
                  <path fill="currentColor" d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>

            {/* Small preview */}
            <div className="absolute bottom-6 left-6 h-[216px] w-[180px] overflow-hidden rounded-[10px] bg-white shadow-[0px_50px_170px_0px_rgba(0,0,0,0.1)]">
              <div className="relative h-full w-full">
                <Image
                  src="/images/class-preview.png"
                  alt="Student preview"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Action buttons */}
            <div className="absolute bottom-6 right-6 flex items-center gap-4">
              <button className="flex size-[60px] items-center justify-center rounded-full bg-[#fab900] text-white shadow-lg transition hover:bg-[#f1b300]">
                <svg viewBox="0 0 24 24" className="h-6 w-6">
                  <path
                    fill="currentColor"
                    d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
                  />
                </svg>
              </button>
              <button className="flex size-[60px] items-center justify-center rounded-full bg-[#1f1c14] text-white shadow-lg transition hover:bg-[#333]">
                <svg viewBox="0 0 24 24" className="h-6 w-6">
                  <path fill="currentColor" d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Class type cards */}
        <div className="flex justify-center gap-[30px]">
          {classTypes.map((type) => (
            <div
              key={type.name}
              className="flex h-[100px] w-[333px] items-center gap-5 rounded-[10px] bg-white px-[15px]"
            >
              <div
                className={`flex size-[70px] items-center justify-center rounded-[10px] ${type.bgColor}`}
              >
                <Image
                  src={type.icon}
                  alt={type.name}
                  width={30}
                  height={30}
                />
              </div>
              <span className="text-[25px] font-semibold text-[#0a033c]">
                {type.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
