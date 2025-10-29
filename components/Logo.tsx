import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export function Logo({ className, showText = true }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {/* WT Box */}
      <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/80 shadow-lg">
        <span className="text-xl font-bold text-primary-foreground">WT</span>
      </div>

      {/* Studio Name */}
      {showText && (
        <div className="flex flex-col items-start leading-tight">
          <span className="text-lg font-bold tracking-tight">
            Wojciech Turek
          </span>
          <span className="text-sm font-medium text-muted-foreground">
            Studio AI
          </span>
        </div>
      )}
    </div>
  );
}
