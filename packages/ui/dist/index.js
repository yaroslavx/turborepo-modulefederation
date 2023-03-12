import { jsx as _jsx } from "react/jsx-runtime";
import { AppShell as MantineAppShell, } from "@mantine/core";
export const AppShell = () => {
    return (_jsx(MantineAppShell, { children: _jsx("div", { children: "hello" }) }));
};
