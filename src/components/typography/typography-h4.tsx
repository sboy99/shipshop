import { cn } from "@/lib/utils";
import type { ComponentProps, FC } from "react";

type TypographyH4Props = ComponentProps<"h4">;

export const TypographyH4: FC<TypographyH4Props> = ({
  className,
  ...props
}) => {
  return (
    <h4
      className={cn(
        className,
        "mt-8 scroll-m-20 text-xl font-semibold tracking-tight"
      )}
      {...props}
    />
  );
};
