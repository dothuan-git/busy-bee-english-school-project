import Link from 'next/link';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

interface HeroAction {
  label: string;
  href: string;
}

interface HeroProps {
  title: React.ReactNode;
  subtitle: string;
  primaryAction?: HeroAction;
  secondaryAction?: HeroAction;
}

export default function Hero({
  title,
  subtitle,
  primaryAction,
  secondaryAction,
}: HeroProps) {
  return (
    <section className="bg-white py-24 dark:bg-zinc-950">
      <Container className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl md:text-6xl dark:text-white">
          {title}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
          {subtitle}
        </p>
        {(primaryAction || secondaryAction) && (
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            {primaryAction && (
              <Link href={primaryAction.href}>
                <Button size="lg">{primaryAction.label}</Button>
              </Link>
            )}
            {secondaryAction && (
              <Link href={secondaryAction.href}>
                <Button variant="outline" size="lg">
                  {secondaryAction.label}
                </Button>
              </Link>
            )}
          </div>
        )}
      </Container>
    </section>
  );
}
