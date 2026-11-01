import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/about-cc")({
  component: RouteComponent,
})

function RouteComponent() {
  return <main>Hello "/about-cc"!</main>
}
