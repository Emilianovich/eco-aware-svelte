import AccordionCtn from "./AccordionCtn.tsx"
import { useCallback, useState } from "react"
import AccordionItem from "./AccordionItem.tsx"

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
  return (
    <AccordionCtn>
      <AccordionItem
        titleWithYear={"Niñez"}
        year={2025}
        category={"Panamá"}
        title={"Uno de cada cuatro"}
        description={
          "Uno de cada cuatro niños, niñas y adolescentes vive en zonas de alta vulnerabilidad climática."
        }
        source={"youtube.com"}
        assignedNumber={0}
        itemSelected={selected}
        becomeSelected={becomeSelected}
        color={accordionItemColors[0]}
      />
      <AccordionItem
        titleWithYear={"Niñez"}
        year={2026}
        category={"Sequías"}
        title={"Uno de cada cuatro"}
        description={
          "Uno de cada cuatro niños, niñas y adolescentes vive en zonas de alta vulnerabilidad climática."
        }
        source={"youtube.com"}
        assignedNumber={1}
        itemSelected={selected}
        becomeSelected={becomeSelected}
        color={accordionItemColors[1]}
      />
      <AccordionItem
        titleWithYear={"Niñez"}
        year={2026}
        category={"Huracanes"}
        title={"Uno de cada cuatro"}
        description={
          "Uno de cada cuatro niños, niñas y adolescentes vive en zonas de alta vulnerabilidad climática."
        }
        source={"youtube.com"}
        assignedNumber={2}
        itemSelected={selected}
        becomeSelected={becomeSelected}
        color={accordionItemColors[2]}
      />
      <AccordionItem
        titleWithYear={"Niñez"}
        year={2026}
        category={"Océanos"}
        title={"Uno de cada cuatro"}
        description={
          "Uno de cada cuatro niños, niñas y adolescentes vive en zonas de alta vulnerabilidad climática."
        }
        source={"youtube.com"}
        assignedNumber={3}
        itemSelected={selected}
        becomeSelected={becomeSelected}
        color={accordionItemColors[3]}
      />
      <AccordionItem
        titleWithYear={"Niñez"}
        year={2026}
        category={"Sequías"}
        title={"Uno de cada cuatro"}
        description={
          "Uno de cada cuatro niños, niñas y adolescentes vive en zonas de alta vulnerabilidad climática."
        }
        source={"youtube.com"}
        assignedNumber={4}
        itemSelected={selected}
        becomeSelected={becomeSelected}
        color={accordionItemColors[4]}
      />
      <AccordionItem
        titleWithYear={"Niñez"}
        year={2026}
        category={"Océanos"}
        title={"Uno de cada cuatro"}
        description={
          "Uno de cada cuatro niños, niñas y adolescentes vive en zonas de alta vulnerabilidad climática."
        }
        source={"youtube.com"}
        assignedNumber={5}
        itemSelected={selected}
        becomeSelected={becomeSelected}
        color={accordionItemColors[5]}
      />
    </AccordionCtn>
  )
}

export default Accordion
