import * as React from "react";
import { BrowserRouter, Outlet, Link, Routes, Route } from "react-router-dom";
import {
  AppShell as MantineAppShell,
  Header,
  Title,
  MantineProvider,
  Navbar,
  UnstyledButton,
  Group,
  Text,
} from "@mantine/core";
import { FC } from "react";

export type Route = {
  element: FC;
  path: string;
};

export type NavLink = {
  label: string;
  path: string;
};

function MainLink({ label, path }: NavLink) {
  return (
    <Link to={path}>
      <UnstyledButton
        sx={(theme) => ({
          display: "block",
          width: "100%",
          padding: theme.spacing.xs,
          borderRadius: theme.radius.sm,
          color:
            theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
          "&:hover": {
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[6]
                : theme.colors.gray[0],
          },
        })}
      >
        <Group>
          <Text size="sm">{label}</Text>
        </Group>
      </UnstyledButton>
    </Link>
  );
}

export const AppShell = ({
  title,
  routes,
  navLinks,
  colorScheme,
}: {
  title: string;
  routes: Route[];
  navLinks: NavLink[];
  colorScheme?: "light" | "dark";
}) => {
  return (
    <BrowserRouter>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme,
        }}
      >
        <MantineAppShell
          padding="md"
          navbar={
            <Navbar width={{ base: 300 }} height={500} p="xs">
              {navLinks.map((link) => (
                <MainLink {...link} key={link.path} />
              ))}
            </Navbar>
          }
          header={
            <Header
              height={60}
              p="xs"
              sx={{
                display: "flex",
              }}
              styles={(theme) => ({
                main: {
                  backgroundColor:
                    theme.colorScheme === "dark"
                      ? theme.colors.dark[8]
                      : theme.colors.gray[0],
                },
              })}
            >
              <Title>{title}</Title>
            </Header>
          }
        >
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={<route.element />}
              />
            ))}
          </Routes>
          <Outlet />
        </MantineAppShell>
      </MantineProvider>
    </BrowserRouter>
  );
};
