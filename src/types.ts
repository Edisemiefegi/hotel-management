import type { ReactNode } from "react";

export type TableColum<T> = {
    title: string;
    fields?: string;
    headerClass?: string;
    className?: string;
    format?: (value: any, row: T, index: number) => ReactNode
}