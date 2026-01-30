import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import CourseCard from '@/components/sections/CourseCard';
import CTA from '@/components/sections/CTA';

export const metadata: Metadata = {
  title: 'Busy Bee English School - Fun English Learning for Kids',
  description:
    'Fun and engaging English lessons designed especially for children aged 3-12. Watch your child flourish with our experienced teachers.',
};

const features = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: 'Fun Learning Environment',
    description:
      'Our classrooms are designed to inspire curiosity and make learning English an adventure your child looks forward to.',
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
    title: 'Experienced Teachers',
    description:
      'Our certified instructors specialize in early childhood English education with proven teaching methodologies.',
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
    ),
    title: 'Proven Results',
    description:
      'Our students consistently show remarkable improvement in English proficiency and confidence in using the language.',
  },
];

const courses = [
  {
    title: 'Little Bees',
    ageRange: '3-5',
    description:
      'A playful introduction to English through songs, games, and storytelling.',
    features: ['Phonics basics', 'Songs & rhymes', 'Interactive play'],
  },
  {
    title: 'Busy Bees',
    ageRange: '6-9',
    description:
      'Building confidence in reading, writing, and everyday conversation.',
    features: ['Reading skills', 'Creative writing', 'Conversation practice'],
  },
  {
    title: 'Super Bees',
    ageRange: '10-12',
    description:
      'Advanced grammar, composition, and preparation for academic success.',
    features: ['Grammar mastery', 'Essay writing', 'Exam preparation'],
  },
];

export default function Home() {
  return (
    <div className="bg-white dark:bg-zinc-950">
      <Hero
        title={
          <>
            Welcome to{' '}
            <span className="text-amber-500">Busy Bee English School</span>
          </>
        }
        subtitle="Fun and engaging English lessons designed especially for children. Watch your child's language skills flourish with our experienced teachers and interactive learning methods."
        primaryAction={{ label: 'Get Started', href: '/contact' }}
        secondaryAction={{ label: 'Learn More', href: '/about' }}
      />

      <Features features={features} />

      {/* Course Preview */}
      <section className="py-20">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">
              Our Programs
            </h2>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
              Age-appropriate courses designed to meet your child where they are
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {courses.map((course) => (
              <CourseCard
                key={course.title}
                title={course.title}
                ageRange={course.ageRange}
                description={course.description}
                features={course.features}
              />
            ))}
          </div>
        </Container>
      </section>

      <CTA
        title="Ready to Begin Your Child's English Journey?"
        description="Join hundreds of happy families who have seen their children thrive at Busy Bee English School."
        action={{ label: 'Enroll Today', href: '/contact' }}
        variant="amber"
      />
    </div>
  );
}
