import type { InfiniteSliderItemProps } from "@/data/infinite-slider-items.ts"

const InfiniteSliderItem = ({
  category,
  image,
  readMoreUrl,
  period,
  location,
  title,
  summary,
}: InfiniteSliderItemProps) => (
  <div className={"relative w-80 rounded-3xl"}>
    <a className={"contents"} href={readMoreUrl} target={`_blank`}>
      <img src={image.src} alt={image.alt} className={"h-full w-full rounded-xl"} title={summary} />
      <div
        className={
          "absolute bottom-0 flex h-20 w-80 flex-col items-start justify-center rounded-b-xl bg-secondary p-4"
        }
      >
        <span className={"text-lg text-foreground"}>{title}</span>
        <span
          className={"text-sm text-foreground/80"}
        >{`${category} - ${location}, ${period}`}</span>
      </div>
    </a>
  </div>
)

export default InfiniteSliderItem
