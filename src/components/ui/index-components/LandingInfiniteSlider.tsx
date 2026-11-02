import { useMemo } from "react"
import { infiniteSliderItems } from "@/data/infinite-slider-items.ts"
import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider.tsx"
import InfiniteSliderItem from "@/components/ui/index-components/InfiniteSliderItem.tsx"

const LandingInfiniteSlider = () => {
  const items = useMemo(() => infiniteSliderItems, [])
  return (
    <section className={"flex w-full flex-col items-start justify-center gap-4 overflow-hidden"}>
      <h2 className={"ml-25 text-3xl font-semibold text-foreground"}>El planeta en imágenes</h2>
      <InfiniteSlider reverse speed={20}>
        {items.map((item) => {
          return <InfiniteSliderItem {...item} key={item.id} />
        })}
      </InfiniteSlider>
    </section>
  )
}

export default LandingInfiniteSlider
