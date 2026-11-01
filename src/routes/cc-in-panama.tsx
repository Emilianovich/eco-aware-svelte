import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/cc-in-panama")({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/cc-in-panama"!</div>
}
