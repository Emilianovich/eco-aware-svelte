import { createFileRoute } from "@tanstack/react-router"
import Hero from "@/components/ui/index-components/Hero.tsx"
import Accordion from "@/components/ui/index-components/Accordion.tsx"
import LandingInfiniteSlider from "@/components/ui/index-components/LandingInfiniteSlider.tsx"

export const Route = createFileRoute("/")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <main className={"flex flex-col items-center justify-center gap-8"}>
      <Hero />
      <LandingInfiniteSlider />
      <Accordion />
    </main>
  )
}
