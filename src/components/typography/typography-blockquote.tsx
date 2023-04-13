import { cn } from "@/lib/utils";
import type { ComponentProps, FC } from "react";

type TypographyBlockquoteProps = ComponentProps<"blockquote">;

export const TypographyBlockquote: FC<TypographyBlockquoteProps> = ({
  className,
  ...props
}) => {
  return (
    <blockquote
      className={cn(
        className,
        "mt-6 border-l-2 border-slate-300 pl-6 italic text-slate-800 dark:border-slate-600 dark:text-slate-200"
      )}
      {...props}
    />
  );
};
