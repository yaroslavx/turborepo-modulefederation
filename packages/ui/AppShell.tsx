import * as React from "react";
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

export const AppShell = ({ title }: { title: string }) => {
  return (
    <MantineAppShell
      header={
        <Header
          height={60}
          p="xs"
          sx={{
            display: "flex",
          }}
        >
          <Title>{title}</Title>
        </Header>
      }
    >
      <div>hello</div>
    </MantineAppShell>
  );
};
