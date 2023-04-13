import { cn } from "@/lib/utils";
import type { ComponentProps, FC } from "react";

type TypographyH1Props = ComponentProps<"h1">;

export const TypographyH1: FC<TypographyH1Props> = ({
  className,
  ...props
}) => {
  return (
    <h1
      className={cn(
        className,
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"
      )}
      {...props}
    />
  );
};
