import Container from '@/components/ui/Container';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="bg-gradient-to-b from-amber-50 to-white py-16 dark:from-zinc-900 dark:to-zinc-950">
      <Container className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-white">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            {subtitle}
          </p>
        )}
      </Container>
    </div>
  );
}
