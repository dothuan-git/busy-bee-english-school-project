'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import FadeIn from '@/components/ui/FadeIn';
import Subscribe from '@/components/sections/Subscribe';
import { courseData, getCourseBySlug } from '@/lib/courseData';
import card1Img from '@/assets/courses/course_card_1.jpg';
import card2Img from '@/assets/courses/course_card_2.jpg';
import card3Img from '@/assets/courses/course_card_3.jpg';
import detail1Img from '@/assets/courses/course_detail_1.jpg';
import detail2Img from '@/assets/courses/course_detail_2.jpg';
import detail3Img from '@/assets/courses/course_detail_3.jpg';
import schedule1Img from '@/assets/courses/schedule_1.jpg';
import schedule2Img from '@/assets/courses/schedule_2.jpg';
import schedule3Img from '@/assets/courses/schedule_3.jpg';
import { StaticImageData } from 'next/image';

const cardImages: Record<string, StaticImageData> = {
  '4-6': card1Img,
  '6-10': card2Img,
  ielts: card3Img,
};

const detailImages: Record<string, StaticImageData> = {
  '4-6': detail1Img,
  '6-10': detail2Img,
  ielts: detail3Img,
};

const scheduleImages: Record<string, StaticImageData> = {
  '4-6': schedule1Img,
  '6-10': schedule2Img,
  ielts: schedule3Img,
};

export default function CourseDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const course = getCourseBySlug(slug);

  if (!course) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center bg-whitesmoke">
        <p className="text-xl text-gray-100">Không tìm thấy khoá học.</p>
      </div>
    );
  }

  return (
    <div id="courses" className="bg-whitesmoke">
      {/* Title & Course Summary Cards */}
      <div id="course-overview" className="mx-auto max-w-[calc(1288px+48px)] px-6 pt-12">
        <FadeIn>
          <h1 className="text-xl font-bold leading-[150%] text-gray-100">
            Các khoá học
          </h1>
        </FadeIn>

        {/* Course Summary Cards */}
        <div className="flex flex-col items-center justify-center gap-6 pt-10 lg:flex-row">
          {courseData.map((card, index) => {
            const isActive = card.slug === slug;
            return (
              <FadeIn key={card.slug} delay={index * 150} direction="up">
                <Link href={`/courses/${card.slug}`}>
                  <div
                    className={`flex w-[400px] items-start gap-4 overflow-hidden rounded-lg p-3 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg ${
                      isActive
                        ? 'scale-[1.02] bg-gold shadow-md'
                        : 'bg-white hover:bg-gold/10'
                    }`}
                  >
                    <Image
                      src={cardImages[card.slug]}
                      alt={card.cardTitle}
                      width={96}
                      height={96}
                      className="h-24 w-24 rounded-lg object-cover"
                    />
                    <div className="flex flex-col items-start gap-1">
                      <b className="w-[167px] whitespace-pre-line text-sm tracking-[0.39px] leading-[140%] text-gray-100">
                        {card.cardTitle}
                      </b>
                      <div className="w-[258px] whitespace-pre-line text-[10px] leading-[160%] text-gray-100">
                        {card.cardDescription}
                      </div>
                      <div className="font-inter text-sm font-bold leading-[150%]">
                        <span
                          className={isActive ? 'text-white' : 'text-gold'}
                        >
                          {card.price}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            );
          })}
        </div>
      </div>

      {/* Course Detail */}
      <div id="course-detail" className="mx-auto max-w-[calc(1288px+48px)] px-6 pt-16">
        <div
          key={slug}
          className="animate-fade-in"
        >
          <div className="flex flex-col items-start gap-8">
            <div className="flex w-full overflow-hidden rounded-2xl bg-white p-8">
              <div className="flex items-start gap-12">
                <Image
                  src={detailImages[slug]}
                  alt={course.detailTitle}
                  width={512}
                  height={254}
                  className="h-[254px] w-[512px] rounded-lg object-cover"
                />
                <div className="flex flex-col items-start gap-4">
                  <h2 className="text-xl font-bold leading-[150%] text-gray-100">
                    {course.detailTitle}
                  </h2>
                  <div className="flex flex-col gap-2 text-base leading-[150%] text-gray-100">
                    {course.schedule.map((item, i) => (
                      <div key={i} className="flex items-center gap-1">
                        <span>{item.label}</span>
                        <b>{item.value}</b>
                      </div>
                    ))}
                    <div className="flex items-center gap-1 text-xl">
                      <span>Học phí: </span>
                      <b>{course.price}</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Course Details */}
            <div className="flex flex-col items-start gap-6 text-xl">
              <div className="flex flex-col items-start gap-3">
                <b className="leading-[150%] text-gray-100">
                  Giáo trình và phương pháp học
                </b>
                <div className="w-full text-sm leading-[150%] text-gray-100">
                  <ul className="list-disc pl-5">
                    {course.curriculum.map((item, i) => (
                      <li key={i} className={i < course.curriculum.length - 1 ? 'mb-1' : ''}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-col items-start gap-3">
                <b className="leading-[150%] text-gray-100">
                  Nội dung khoá học
                </b>
                <div className="w-full text-sm leading-[150%] text-gray-100">
                  <ul className="list-disc pl-5">
                    {course.content.map((item, i) => (
                      <li key={i} className={i < course.content.length - 1 ? 'mb-1' : ''}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-col items-start gap-3">
                <b className="leading-[150%] text-gray-100">
                  Môi trường học tập
                </b>
                <div className="w-full text-sm leading-[150%] text-gray-100">
                  <ul className="list-disc pl-5">
                    {course.environment.map((item, i) => (
                      <li key={i} className={i < course.environment.length - 1 ? 'mb-1' : ''}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Schedule */}
      <div id="schedule" className="mx-auto max-w-[calc(1288px+48px)] px-6 py-16">
        <FadeIn>
          <Image
            src={scheduleImages[slug]}
            alt="Lịch học"
            width={1132}
            height={755}
            className="h-auto w-full rounded-2xl object-cover"
          />
        </FadeIn>
      </div>

      {/* Subscribe Section */}
      <Subscribe />
    </div>
  );
}
