import { cn } from "@/lib/utils";
import type { ComponentProps, FC } from "react";

type TypographySmallProps = ComponentProps<"small">;

export const TypographySmall: FC<TypographySmallProps> = ({
  className,
  ...props
}) => {
  return (
    <small
      className={cn(
        className,
        "text-sm font-medium leading-none"
      )}
      {...props}
    />
  );
};
