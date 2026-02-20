import { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import Subjects from '@/components/sections/Subjects';
import Benefits from '@/components/sections/Benefits';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import Subscribe from '@/components/sections/Subscribe';

export const metadata: Metadata = {
  title: 'Busy Bee English School - Học tiếng Anh cho thiếu nhi',
  description:
    'Busy Bee English mang đến môi trường học tiếng Anh chất lượng cho thiếu nhi và luyện thi IELTS, giúp học viên xây dựng nền tảng vững chắc.',
};

export default function Home() {
  return (
    <div className="bg-whitesmoke">
      <Hero />
      <Subjects />
      <Benefits />
      <WhyChooseUs />
      <Subscribe />
    </div>
  );
}
