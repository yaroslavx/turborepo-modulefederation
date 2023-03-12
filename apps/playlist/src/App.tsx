import React, { lazy, ReactNode } from "react";
import { AppShell } from "ui";
// @ts-ignore
const MoviesContentRuntime = lazy(() => import("movies/Movies"));
import { MoviesContent } from "movies-content";
import { PlaylistContent } from "playlist-content";

class ErrorBoundary extends React.Component<
  { children: ReactNode },
  {
    hasError: boolean;
  }
> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {}

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <MoviesContent />;
    }

    return this.props.children;
  }
}

export const App = () => {
  return (
    <AppShell
      title="Playlist"
      colorScheme="light"
      routes={[
        {
          path: "/",
          element: () => (
            <ErrorBoundary>
              <MoviesContentRuntime />
            </ErrorBoundary>
          ),
        },
        {
          path: "/playlist",
          element: PlaylistContent,
        },
      ]}
      navLinks={[
        { label: "Home", path: "/" },
        { label: "Playlist", path: "/playlist" },
      ]}
    />
  );
};
