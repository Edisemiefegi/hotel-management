import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

export type TableColum<T> = {
  title: string;
  field?: string;
  headerClass?: string;
  className?: string;
  format?: (value: any, row: T, index: number) => ReactNode;
  render?: (row: T, index: number, value: any) => ReactNode;
};


 export  type MenuItem = {
  label: string;
  path?: string;
  icon?: LucideIcon;
  className?: string
};