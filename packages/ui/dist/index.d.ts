import { Route } from "react-router-dom";
import { ReactElement } from "react";
export type Route = {
    element: ReactElement;
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