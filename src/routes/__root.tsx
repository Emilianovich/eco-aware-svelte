import { createRootRoute, Outlet, Scripts, HeadContent } from "@tanstack/react-router"
import Footer from "../components/layout/footer/Footer.tsx"
import Header from "../components/layout/header/Header.tsx"
import appCss from "../styles.css?url"

const RootDocument = () => (
  <html lang="es">
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <HeadContent />
    </head>
    <body>
      <Header />
      <Outlet />
      <Footer />
    </body>
    <Scripts />
  </html>
)

export const Route = createRootRoute({
  component: RootDocument,
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
  shellComponent: RootDocument,
})
