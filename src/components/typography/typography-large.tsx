import { cn } from "@/lib/utils";
import type { ComponentProps, FC } from "react";

type TypographyLargeProps = ComponentProps<"div">;

export const TypographyLarge: FC<TypographyLargeProps> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        className,
        "text-lg font-semibold text-slate-900 dark:text-slate-50"
      )}
      {...props}
    />
  );
};
