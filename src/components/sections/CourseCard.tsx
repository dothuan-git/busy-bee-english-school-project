import Card from '@/components/ui/Card';

interface CourseCardProps {
  title: string;
  ageRange: string;
  description: string;
  features: string[];
}

export default function CourseCard({
  title,
  ageRange,
  description,
  features,
}: CourseCardProps) {
  return (
    <Card hover className="flex h-full flex-col">
      <div className="mb-4 inline-block rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-700 dark:bg-amber-900/30 dark:text-amber-400">
        Ages {ageRange}
      </div>
      <h3 className="mb-3 text-2xl font-bold text-zinc-900 dark:text-white">
        {title}
      </h3>
      <p className="mb-6 text-zinc-600 dark:text-zinc-400">{description}</p>
      <ul className="mt-auto space-y-2">
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex items-start text-sm text-zinc-600 dark:text-zinc-400"
          >
            <svg
              className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-amber-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
    </Card>
  );
}
