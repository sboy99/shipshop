import { cn } from "@/lib/utils";
import type { ComponentProps, FC } from "react";

type TypographyH2Props = ComponentProps<"h2">;

export const TypographyH2: FC<TypographyH2Props> = ({
  className,
  ...props
}) => {
  return (
    <h2
      className={cn(
        className,
        "mt-10 scroll-m-20 border-b border-b-slate-200 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 dark:border-b-slate-700"
      )}
      {...props}
    />
  );
};
