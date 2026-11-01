import { createRootRoute, Outlet } from "@tanstack/react-router"
import Footer from "../components/layout/footer/Footer.tsx"
import Header from "../components/layout/header/Header.tsx"
import appCss from "../styles.css?url"

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Eco Aware",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "icon",
        href: "/logo-favicon.ico",
      },
    ],
  }),
  component: () => (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  ),
})
