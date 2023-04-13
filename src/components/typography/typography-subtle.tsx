import { cn } from "@/lib/utils";
import type { ComponentProps, FC } from "react";

type TypographySubtleProps = ComponentProps<"small">;

export const TypographySubtle: FC<TypographySubtleProps> = ({
  className,
  ...props
}) => {
  return (
    <small
      className={cn(
        className,
        "text-sm text-slate-500 dark:text-slate-400"
      )}
      {...props}
    />
  );
};
