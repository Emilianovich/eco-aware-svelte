import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/about-cc")({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/about-cc"!</div>
}
