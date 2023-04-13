import { cn } from "@/lib/utils";
import type { ComponentProps, FC } from "react";

type TypographyLeadProps = ComponentProps<"p">;

export const TypographyLead: FC<TypographyLeadProps> = ({
  className,
  ...props
}) => {
  return (
    <p
      className={cn(
        className,
        "text-xl text-slate-700 dark:text-slate-400"
      )}
      {...props}
    />
  );
};
