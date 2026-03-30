import type { Education } from "@/data/education";

interface TimelineProps {
  items: Education[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative space-y-8 border-l-2 border-primary/30 pl-6">
      {items.map((item) => (
        <div key={item.id} className="relative">
          {/* Dot */}
          <div aria-hidden="true" className="absolute -left-[31px] top-1 h-3.5 w-3.5 rounded-full border-2 border-primary bg-background" />

          <div className="space-y-1">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="text-lg font-semibold">
                {item.degree} in {item.field}
              </span>
              <span className="rounded bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground">
                {item.period}
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              {item.institution}
            </p>
            {item.gpa && (
              <p className="text-sm text-muted-foreground">
                CGPA: {item.gpa}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
