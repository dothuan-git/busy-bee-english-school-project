'use client';

import Image from 'next/image';
import teacherImg from '@/assets/home/Group 237656.png';
import programImg from '@/assets/home/Group 237657.png';
import costImg from '@/assets/home/Group 237658.png';
import FadeIn from '@/components/ui/FadeIn';

const features = [
  {
    title: 'Đội ngũ giáo viên chuyên môn và tận tâm',
    description:
      'Giáo viên có kinh nghiệm giảng dạy tiếng Anh thiếu nhi và luyện thi IELTS, luôn đồng hành và hỗ trợ học viên trong suốt quá trình học tập.',
    image: teacherImg,
    imageWidth: 353,
    imageHeight: 182,
  },
  {
    title: 'Chương trình học bài bản, phù hợp từng độ tuổi',
    description:
      'Lộ trình học được xây dựng khoa học, giúp học viên phát triển nền tảng tiếng Anh vững chắc và nâng cao kỹ năng giao tiếp theo từng giai đoạn.',
    image: programImg,
    imageWidth: 323,
    imageHeight: 187,
  },
  {
    title: 'Học phí hợp lý, phù hợp\nvới gia đình',
    description:
      'Busy Bee English mang đến chương trình học chất lượng với mức học phí hợp lý, giúp nhiều học viên có cơ hội tiếp cận môi trường học tiếng Anh hiệu quả.',
    image: costImg,
    imageWidth: 335,
    imageHeight: 174,
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="relative">
      <div className="mx-auto max-w-[1440px]">
        {/* Title */}
        <FadeIn>
          <div className="py-[60px] text-center">
            <h2 className="text-[36px] font-extrabold leading-[45px] text-gray-100">
              Tại sao nên lựa chọn Busy Bee?
            </h2>
          </div>
        </FadeIn>

        {/* Cards with background */}
        <div className="relative pb-[115px]">
          {/* Yellow background strip - breaks out of container to fill full width */}
          <div className="absolute bottom-0 left-1/2 h-[337px] w-screen -translate-x-1/2 bg-orange" />

          {/* Cards */}
          <div className="relative z-10 flex flex-col items-center justify-center gap-10 px-[80px] lg:flex-row">
            {features.map((feature, index) => (
              <FadeIn key={index} delay={index * 200} direction="up">
                <div className="flex h-[517px] w-[400px] flex-col items-center justify-evenly overflow-hidden rounded-[30px] bg-white py-6 shadow-[0px_50px_80px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0px_60px_100px_rgba(0,0,0,0.1)]">
                  {/* Card Image */}
                  <div className="flex w-full justify-center pb-10">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      width={feature.imageWidth}
                      height={feature.imageHeight}
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col items-center gap-3 px-[39px] text-center">
                    <h3 className="whitespace-pre-line text-[22px] font-bold leading-[1.5] text-gray-100">
                      {feature.title}
                    </h3>
                    <p className="text-base leading-[1.5] text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
