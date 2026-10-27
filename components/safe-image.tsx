"use client";

import type { ImgHTMLAttributes } from "react";

export default function SafeImage({
  onError,
  ...props
}: ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img
      {...props}
      onError={(event) => {
        event.currentTarget.style.display = "none";
        onError?.(event);
      }}
    />
  );
}