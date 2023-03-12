import { Route } from "react-router-dom";
import { FC } from "react";
export type Route = {
    element: FC;
    path: string;
};
export type NavLink = {
    label: string;
    path: string;
};
export declare const AppShell: ({ title, routes, navLinks, colorScheme, }: {
    title: string;
    routes: Route[];
    navLinks: NavLink[];
    colorScheme?: "light" | "dark" | undefined;
}) => JSX.Element;
//# sourceMappingURL=index.d.ts.map