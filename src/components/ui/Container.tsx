interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'article';
}

export default function Container({
  children,
  className = '',
  as: Component = 'div',
}: ContainerProps) {
  return (
    <Component
      className={`mx-auto max-w-[calc(1288px+48px)] px-6 ${className}`}
    >
      {children}
    </Component>
  );
}
