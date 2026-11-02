type AccordionItemProps = {
  titleWithYear: string
  year: number
  category: string
  title: string
  description: string
  source: string
  assignedNumber: number
  itemSelected: number
  becomeSelected: (arg0: number) => void
  color: string
}

const AccordionItem = ({
  itemSelected,
  becomeSelected,
  category,
  year,
  assignedNumber,
  source,
  titleWithYear,
  title,
  description,
  color,
}: AccordionItemProps) => {
  const isSelected = itemSelected === assignedNumber
  const swipeLeft = itemSelected < assignedNumber
  return (
    <button
      type={"button"}
      onClick={() => becomeSelected(assignedNumber)}
      className={`flex h-85 items-center justify-between gap-4 ${isSelected ? "rounded-lg" : "rounded-full"} ${color}`}
    >
      <div
        className={`flex h-full w-20 flex-col items-center justify-between p-2 ${isSelected ? "" : ""}`}
      >
        <span className={""}>{`0${assignedNumber + 1}`}</span>
        <span className={"mb-8 rotate-90"}>{category}</span>
      </div>
      {isSelected && (
        <div
          className={`animate__animated animate__slideInLeft h-85 p-2 ${swipeLeft ? "animate__slideInLeft" : "animate__slideInRight"}`}
        >
          <div className={"mt-8 flex w-180 flex-col items-start justify-center gap-10"}>
            <span className={"text-sm"}>{`${titleWithYear} - ${year}`}</span>
            <h2 className={"text-3xl font-semibold"}>{`${title}`}</h2>
            <p className={"max-w-[60ch] text-left"}>{description}</p>
            <a href={source} target={"_blank"} className={"text-sm"}>
              Explorar el caso →
            </a>
          </div>
        </div>
      )}
    </button>
  )
}

export default AccordionItem
