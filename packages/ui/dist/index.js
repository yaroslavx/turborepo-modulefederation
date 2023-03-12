import { jsx as _jsx } from "react/jsx-runtime";
import { AppShell as MantineAppShell, Header, Title, } from "@mantine/core";
export const AppShell = ({ title }) => {
    return (_jsx(MantineAppShell, Object.assign({ header: _jsx(Header, Object.assign({ height: 60, p: "xs", sx: {
                display: "flex",
            }, styles: (theme) => ({
                main: {
                    backgroundColor: theme.colorScheme === "dark"
                        ? theme.colors.dark[8]
                        : theme.colors.gray[0],
                },
            }) }, { children: _jsx(Title, { children: title }) })) }, { children: _jsx("div", { children: "hello" }) })));
};
