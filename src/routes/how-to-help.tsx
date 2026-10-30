import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/how-to-help")({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/how-to-help"!</div>
}
