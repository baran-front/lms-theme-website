import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

function ShadowDiv({
  color = "primary",
  innerDiv,
  children,
  className,
  style,
  ...p
}: ComponentProps<"div"> & {
  color?: "primary" | "danger";
  innerDiv?: Omit<ComponentProps<"div">, "children">;
}) {
  const innerDivClassName = innerDiv?.className;
  delete innerDiv?.className;

  return (
    <div
      style={{
        boxShadow:
          color === "primary"
            ? "0 -10px 15px 0 color-mix(in srgb, var(--color-primary) 10%, transparent)"
            : "0 -10px 15px 0 color-mix(in srgb, var(--color-danger) 10%, transparent)",
        ...style,
      }}
      className={cn(
        "p-px rounded-full bg-linear-to-b to-transparent w-max max-w-full",
        color === "primary" ? "from-primary" : "from-danger",
        className
      )}
      {...p}
    >
      <div
        className={cn(
          "rounded-full py-3 px-6 bg-background shadow-lg f-center gap-3 shadow-background-thick",
          color === "primary" ? "text-primary" : "text-danger",
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
