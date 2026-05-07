import Cal from "@calcom/embed-react";
import { cn } from "@/lib/utils";

interface CalendarEmbedProps {
  calLink: string;
  className?: string;
}

export default function CalendarEmbed({ calLink, className }: CalendarEmbedProps) {
  return (
    <div className={cn("border border-border rounded-[1.25rem] overflow-hidden bg-white", className)}>
      <Cal
        calLink={calLink}
        config={{
          theme: "light",
          styles: {
            branding: {
              brandColor: "#050505", // Black
            },
          },
        }}
      />
    </div>
  );
}
