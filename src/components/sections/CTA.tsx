import Link from 'next/link';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

interface CTAProps {
  title: string;
  description: string;
  action: {
    label: string;
    href: string;
  };
  variant?: 'default' | 'amber';
}

export default function CTA({
  title,
  description,
  action,
  variant = 'default',
}: CTAProps) {
  const bgClasses =
    variant === 'amber'
      ? 'bg-amber-500 dark:bg-amber-600'
      : 'bg-zinc-900 dark:bg-zinc-800';

  const textClasses =
    variant === 'amber' ? 'text-white' : 'text-white dark:text-zinc-100';

  const subtextClasses =
    variant === 'amber'
      ? 'text-amber-100'
      : 'text-zinc-300 dark:text-zinc-400';

  return (
    <section className={`py-16 ${bgClasses}`}>
      <Container className="text-center">
        <h2 className={`text-3xl font-bold ${textClasses}`}>{title}</h2>
        <p className={`mx-auto mt-4 max-w-2xl ${subtextClasses}`}>
          {description}
        </p>
        <div className="mt-8">
          <Link href={action.href}>
            <Button
              variant={variant === 'amber' ? 'secondary' : 'primary'}
              size="lg"
            >
              {action.label}
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
