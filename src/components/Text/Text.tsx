import { ReactNode } from "react";

interface TextProps {
  children: ReactNode;
  className?: string; // Allows additional custom styles
}

export default function Text({ children, className }: TextProps) {
  return (
    <p
      className={`text-lg text-black hover:text-primary cursor-pointer hover:underline md:text-sm lg:text-lg ${className}`}
    >
      {children}
    </p>
  );
}
