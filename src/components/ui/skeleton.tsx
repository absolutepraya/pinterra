import { cn } from '@/lib/utils';

function Skeleton({ className, ...props }: React.ComponentProps<'div'>) {
  return <div data-slot="skeleton" className={cn('bg-accent animate-pulse rounded-md relative before:absolute before:inset-0 before:animate-pulse before:bg-accent/70', className)} {...props} />;
}

export { Skeleton };
