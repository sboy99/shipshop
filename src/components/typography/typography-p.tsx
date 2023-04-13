import { cn } from "@/lib/utils";
import type { ComponentProps, FC } from "react";

type TypographyPProps = ComponentProps<"p">;

export const TypographyP: FC<TypographyPProps> = ({
  className,
  ...props
}) => {
  return (
    <p
      className={cn(
        className,
        "leading-7 [&:not(:first-child)]:mt-6"
      )}
      {...props}
    />
  );
};
