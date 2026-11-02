import AccordionCtn from "@/components/ui/index-components/AccordionCtn.tsx"
import { useCallback, useMemo, useState } from "react"
import AccordionItem from "@/components/ui/index-components/AccordionItem.tsx"
import { accordionItems } from "@/data/accordion-data.ts"
import IconButton from "@/components/ui/button-with-svg/IconButton.tsx"
import { ArrowRight, ArrowLeft } from "lucide-react"
const accordionItemColors = [
  "bg-secondary",
  "bg-accent",
  "bg-info",
  "bg-tertiary",
  "bg-secondary",
  "bg-accent",
] as const

const Accordion = () => {
  const [selected, setSelected] = useState(0)
  const becomeSelected = useCallback((i: number) => setSelected(i), [])
  const items = useMemo(() => {
    return accordionItems.map((item, i) => (
      <AccordionItem
        {...item}
        assignedNumber={i}
        itemSelected={selected}
        becomeSelected={becomeSelected}
        color={accordionItemColors[i]}
        key={item.title}
      />
    ))
  }, [selected, becomeSelected])
  const svgProps = {
    className:
      "text-primary-foreground size-4 hover:scale-90 transition-all duration-200 ease-in-out cursor-pointer",
  }
  return (
    <AccordionCtn
      accordion={items}
      navigation={
        <>
          <span
            className={"text-sm text-primary-foreground/72"}
          >{`Mostrando: ${accordionItems[selected].category}`}</span>
          <div className={"flex w-20 items-center justify-between"}>
            <span
              className={"text-primary-foreground/72"}
            >{`${selected + 1} /${accordionItems.length}`}</span>
            {selected !== 0 && (
              <IconButton
                action={() => setSelected(selected - 1)}
                Icon={ArrowLeft}
                svgProps={svgProps}
              />
            )}
            {selected + 1 !== accordionItems.length && (
              <IconButton
                action={() => setSelected(selected + 1)}
                Icon={ArrowRight}
                svgProps={svgProps}
              />
            )}
          </div>
        </>
      }
    />
  )
}

export default Accordion
