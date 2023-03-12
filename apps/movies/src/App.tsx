import React from "react";
import { AppShell } from "ui";
import { MoviesContent } from "./MoviesContent";

export const App = () => {
  return (
    <AppShell
      title="Movies"
      colorScheme="dark"
      routes={[
        {
          path: "/",
          element: <MoviesContent />,
        },
        {
          path: "/playlist",
          element: <MoviesContent />,
        },
      ]}
      navLinks={[
        { label: "Home", path: "/" },
        { label: "Playlist", path: "/playlist" },
      ]}
    />
  );
};
