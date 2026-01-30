import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import PageHeader from '@/components/sections/PageHeader';
import CourseCard from '@/components/sections/CourseCard';
import CTA from '@/components/sections/CTA';

export const metadata: Metadata = {
  title: 'Our Courses - Busy Bee English School',
  description:
    'Explore our English courses designed for children ages 3-12. From playful introductions to advanced grammar and exam preparation.',
};

const courses = [
  {
    title: 'Little Bees',
    ageRange: '3-5',
    description:
      'A playful introduction to English through songs, games, and storytelling. Perfect for curious minds taking their first steps in language learning.',
    features: [
      'Phonics and alphabet recognition',
      'Basic vocabulary through songs',
      'Interactive storytelling sessions',
      'Arts and crafts with English themes',
      'Simple conversation practice',
    ],
  },
  {
    title: 'Busy Bees',
    ageRange: '6-9',
    description:
      'Building confidence in reading, writing, and conversation. Students develop stronger language skills through engaging activities and projects.',
    features: [
      'Reading comprehension development',
      'Creative writing exercises',
      'Structured conversation practice',
      'Vocabulary building games',
      'Group projects and presentations',
    ],
  },
  {
    title: 'Super Bees',
    ageRange: '10-12',
    description:
      'Advanced English skills including grammar mastery, composition, and exam preparation. Preparing students for academic success.',
    features: [
      'Advanced grammar and syntax',
      'Essay and composition writing',
      'Critical reading skills',
      'Public speaking practice',
      'Exam preparation support',
    ],
  },
];

export default function CoursesPage() {
  return (
    <div className="bg-white dark:bg-zinc-950">
      <PageHeader
        title="Our Courses"
        subtitle="Age-appropriate programs designed to nurture your child's English skills at every stage of their learning journey."
      />

      <section className="py-16">
        <Container>
          <div className="grid gap-8 lg:grid-cols-3">
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

      {/* Schedule Info */}
      <section className="bg-zinc-50 py-16 dark:bg-zinc-900">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-zinc-900 dark:text-white">
              Class Schedule
            </h2>
            <p className="mb-8 text-lg text-zinc-600 dark:text-zinc-400">
              Classes are held Monday through Saturday with flexible timing
              options. Each session is 60-90 minutes depending on the age group.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-lg bg-white p-4 dark:bg-zinc-800">
                <p className="font-semibold text-amber-600 dark:text-amber-400">
                  Little Bees
                </p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  60 min sessions
                </p>
              </div>
              <div className="rounded-lg bg-white p-4 dark:bg-zinc-800">
                <p className="font-semibold text-amber-600 dark:text-amber-400">
                  Busy Bees
                </p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  75 min sessions
                </p>
              </div>
              <div className="rounded-lg bg-white p-4 dark:bg-zinc-800">
                <p className="font-semibold text-amber-600 dark:text-amber-400">
                  Super Bees
                </p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  90 min sessions
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTA
        title="Ready to Enroll?"
        description="Give your child the gift of English. Contact us today to learn more about our programs and schedule a free trial class."
        action={{ label: 'Enroll Now', href: '/contact' }}
        variant="amber"
      />
    </div>
  );
}
