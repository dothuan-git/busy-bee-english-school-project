interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({
  children,
  className = '',
  hover = false,
}: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900 ${
        hover
          ? 'transition-shadow hover:shadow-lg dark:hover:shadow-zinc-800/50'
          : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}
