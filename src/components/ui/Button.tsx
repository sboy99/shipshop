import { cn } from "@/lib/utils";
import type { ComponentProps, FC } from "react";

type ButtonProps = ComponentProps<"button"> & {
  /**
   * Is button primary or secondary
   */
  primary?: boolean;
  /**
   * Button contents
   */
  label: string;
};

export const Button: FC<ButtonProps> = ({
  className,
  primary = false,
  label,
  ...props
}) => {
  return (
    <button className={cn(className, "bg-sky-500 px-4 py-1")} {...props}>
      {label}
    </button>
  );
};
