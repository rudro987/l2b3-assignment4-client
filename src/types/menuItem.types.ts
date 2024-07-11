import { ReactNode } from "react";

export type TRoute = {
    path: string;
    element: ReactNode;
}

export type TMenuItems = {
    name: string;
    path: string;
    children?: TMenuItems[]
}

export type TPath = {
    name: string;
    path?: string;
    element?: ReactNode;
    children?: TPath[];
}