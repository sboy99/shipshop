import { cn } from "@/lib/utils";
import type { ComponentProps, FC } from "react";

type TypographyH3Props = ComponentProps<"h3">;

export const TypographyH3: FC<TypographyH3Props> = ({
  className,
  ...props
}) => {
  return (
    <h3
      className={cn(
        className,
        "mt-8 scroll-m-20 text-2xl font-semibold tracking-tight"
      )}
      {...props}
    />
  );
};
