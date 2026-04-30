import Cal from "@calcom/embed-react";
import { cn } from "@/lib/utils";

interface CalendarEmbedProps {
  calLink: string;
  className?: string;
}

export default function CalendarEmbed({ calLink, className }: CalendarEmbedProps) {
  return (
    <div className={cn("glass rounded-2xl p-8 overflow-hidden", className)}>
      <Cal
        calLink={calLink}
        config={{
          theme: "light",
          styles: {
            branding: {
              brandColor: "hsl(262, 70%, 50%)", // Primary purple
            },
          },
        }}
      />
    </div>
  );
}
