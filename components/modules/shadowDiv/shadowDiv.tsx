import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

function ShadowDiv({
  innerDiv,
  children,
  className,
  style,
  ...p
}: ComponentProps<"div"> & {
  innerDiv?: Omit<ComponentProps<"div">, "children">;
}) {
  const innerDivClassName = innerDiv?.className;
  delete innerDiv?.className;

  return (
    <div
      style={{
        boxShadow:
          "0 -10px 15px 0 color-mix(in srgb, var(--color-primary) 10%, transparent)",
        ...style,
      }}
      className={cn(
        "p-px rounded-full bg-linear-to-b from-primary to-transparent w-max max-w-full",
        className
      )}
      {...p}
    >
      <div
        className={cn(
          "rounded-full py-3 px-6 text-primary bg-background shadow-lg shadow-background-thick",
          innerDivClassName
        )}
        {...innerDiv}
      >
        {children}
      </div>
    </div>
  );
}

export default ShadowDiv;
