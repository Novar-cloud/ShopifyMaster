import React from "react";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

interface HoverStarProps extends React.HTMLAttributes<HTMLDivElement> {
  filled?: boolean;
}

export function HoverStar({ filled = true, className, ...props }: HoverStarProps) {
  return (
    <div className={cn("text-[#FFC96B]", className)} {...props}>
      <Star className="w-5 h-5" fill={filled ? "currentColor" : "none"} />
    </div>
  );
}
