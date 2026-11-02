import type { ReactNode } from "react"

const AccordionCtn = ({
  accordion,
  navigation,
}: {
  accordion: ReactNode
  navigation: ReactNode
}) => (
  <section className={"flex w-full flex-col items-center justify-center gap-8 bg-primary p-4"}>
    <div className={"flex w-9/10 items-center justify-between"}>
      <h2 className={"text-2xl text-primary-foreground"}>Impactos que ya podemos ver</h2>
      <span className={"text-md text-primary-foreground/70"}>Selecciona un historia</span>
    </div>
    <article className={"flex w-9/10 items-center justify-around"}>{accordion}</article>
    <div className={"flex w-9/10 items-center justify-between"}>{navigation}</div>
  </section>
)

export default AccordionCtn
