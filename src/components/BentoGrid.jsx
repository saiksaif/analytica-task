import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

import React from "react";

export function BentoGridTable({items}) {
  return (
    (<BentoGrid className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""} />
      ))}
    </BentoGrid>)
  );
}

const BentoGrid = ({
  className,
  children
}) => {
  return (
    (<div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}>
      {children}
    </div>)
  );
};

const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon
}) => {
  return (
    (<div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 bg-background border-white/[0.2] border justify-between flex flex-col space-y-4",
        className
      )}>
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <div
          className="font-sans font-bold text-primary mb-2 mt-2">
          {title}
        </div>
        <div
          className="font-sans font-normal text-primary text-xs">
          {description}
        </div>
        <a href="#" className="text-[10px] text-neutral-500 hover:text-primary w-fit flex gap-2 mt-2 items-center">Read More <ArrowRight className="w-4 h-4" /></a>
      </div>
    </div>)
  );
};
