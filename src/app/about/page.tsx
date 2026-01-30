import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import PageHeader from '@/components/sections/PageHeader';
import CTA from '@/components/sections/CTA';

export const metadata: Metadata = {
  title: 'About Us - Busy Bee English School',
  description:
    'Learn about Busy Bee English School, our teaching philosophy, and our dedicated team of educators.',
};

export default function AboutPage() {
  return (
    <div className="bg-white dark:bg-zinc-950">
      <PageHeader
        title="About Busy Bee English School"
        subtitle="Inspiring young minds to embrace the English language through fun, engaging, and effective learning experiences."
      />

      {/* Our Story */}
      <section className="py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold text-zinc-900 dark:text-white">
              Our Story
            </h2>
            <div className="space-y-4 text-lg text-zinc-600 dark:text-zinc-400">
              <p>
                Founded with a passion for early childhood education, Busy Bee
                English School has been helping children discover the joy of
                learning English since day one. We believe that every child has
                the potential to become a confident English speaker when given
                the right environment and support.
              </p>
              <p>
                Our name reflects our philosophy: like busy bees, our students
                are always active, curious, and working together to achieve
                sweet success in their English learning journey.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Teaching Philosophy */}
      <section className="bg-zinc-50 py-16 dark:bg-zinc-900">
        <Container>
          <h2 className="mb-12 text-center text-3xl font-bold text-zinc-900 dark:text-white">
            Our Teaching Philosophy
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <div className="mb-4 text-4xl">🎮</div>
              <h3 className="mb-3 text-xl font-semibold text-zinc-900 dark:text-white">
                Learning Through Play
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                We integrate games, songs, and interactive activities to make
                learning English a fun and memorable experience for every child.
              </p>
            </Card>
            <Card>
              <div className="mb-4 text-4xl">👥</div>
              <h3 className="mb-3 text-xl font-semibold text-zinc-900 dark:text-white">
                Small Class Sizes
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Our intimate class settings ensure that each student receives
                personalized attention and plenty of opportunities to practice
                speaking.
              </p>
            </Card>
            <Card>
              <div className="mb-4 text-4xl">🌍</div>
              <h3 className="mb-3 text-xl font-semibold text-zinc-900 dark:text-white">
                Real-World Context
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                We teach English in context, helping students understand how to
                use the language in everyday situations and real-life scenarios.
              </p>
            </Card>
          </div>
        </Container>
      </section>

      {/* Our Team */}
      <section className="py-16">
        <Container>
          <h2 className="mb-12 text-center text-3xl font-bold text-zinc-900 dark:text-white">
            Meet Our Team
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Head Teacher',
                bio: 'TEFL certified with 10+ years of experience in early childhood English education.',
              },
              {
                name: 'Michael Chen',
                role: 'Senior Instructor',
                bio: 'Specializes in phonics and reading development for young learners.',
              },
              {
                name: 'Emily Watson',
                role: 'Creative Director',
                bio: 'Develops engaging curriculum and creative learning materials.',
              },
            ].map((member) => (
              <Card key={member.name} className="text-center">
                <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-amber-100 text-4xl dark:bg-amber-900/30">
                  👤
                </div>
                <h3 className="mb-1 text-xl font-semibold text-zinc-900 dark:text-white">
                  {member.name}
                </h3>
                <p className="mb-3 text-sm font-medium text-amber-600 dark:text-amber-400">
                  {member.role}
                </p>
                <p className="text-zinc-600 dark:text-zinc-400">{member.bio}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <CTA
        title="Come Visit Us"
        description="We'd love to show you around our school and meet your little ones. Schedule a free tour today!"
        action={{ label: 'Contact Us', href: '/contact' }}
        variant="amber"
      />
    </div>
  );
}
