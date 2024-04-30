import { ReactNode } from "react";
import { cn } from "../_lib/utils";

interface ContentProps {
  className?: string;
  children: ReactNode;
}

const Content = ({ children, className }: ContentProps) => {
  return <div className={cn("px-5 pt-6", className)}>{children}</div>;
};

export default Content;
