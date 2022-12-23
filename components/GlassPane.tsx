import clsx from "clsx";
import React, { PropsWithChildren } from "react";

export const GlassPane = ({
  children,
  className,
}: PropsWithChildren<{
  className?: string;
}>) => {
  return (
    <div
      className={clsx(
        "glass rounded-2 border-solid border-2 border-gray-200 text-gray-200",
        className
      )}>
      {children}
    </div>
  );
};
