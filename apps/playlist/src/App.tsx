import React from "react";
import { AppShell } from "ui";
import { MoviesContent } from "movies-content";
import { PlaylistContent } from "playlist-content";

export const App = () => {
  return (
    <AppShell
      title="Playlist"
      colorScheme="light"
      routes={[
        {
          path: "/",
          element: <MoviesContent />,
        },
        {
          path: "/playlist",
          element: <PlaylistContent />,
        },
      ]}
      navLinks={[
        { label: "Home", path: "/" },
        { label: "Playlist", path: "/playlist" },
      ]}
    />
  );
};
