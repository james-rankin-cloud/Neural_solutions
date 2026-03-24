interface MarqueeTickerProps {
  items: string[];
  reverse?: boolean;
  className?: string;
}

const MarqueeTicker = ({ items, reverse = false, className = "" }: MarqueeTickerProps) => {
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div className={`overflow-hidden py-5 bg-ticker border-y border-border/30 ${className}`}>
      <div className={reverse ? "marquee-track-reverse" : "marquee-track"}>
        {repeated.map((item, i) => (
          <span key={i} className="font-display text-sm font-bold uppercase tracking-[0.15em] text-ticker-foreground/60 whitespace-nowrap mx-8 flex items-center gap-8">
            {item}
            <span className="w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeTicker;