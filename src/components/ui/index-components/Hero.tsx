import HighlightedText from "../highlighted-text/HighlightedText.tsx"
import { useNavigate } from "@tanstack/react-router"
import Button from "../button/Button.tsx"

// 4:15 => 6:27
const Hero = () => {
  const navigate = useNavigate()
  return (
    <section
      className={"mt-10 ml-45 grid w-8/10 grid-cols-[490px_1fr] grid-rows-[1fr_auto] gap-y-6"}
    >
      <article className={"flex flex-col gap-6"}>
        <div className={""}>
          <h1 className={"text-5xl leading-15 font-medium tracking-wide text-wrap text-foreground"}>
            Pequeñas acciones, un{" "}
            <HighlightedText
              text={"gran impacto"}
              textStyles={"ml-2 text-5xl"}
              highlightStyles={"w-85"}
            />
          </h1>
        </div>
        <p className={"text-md text-foreground"}>
          El cambio climático es el mayor desafío global, haciendo que nuestro planeta sea
          vulnerable a eventos extremos. La acción individual y comunitaria es fundamental.
        </p>
        <Button action={() => navigate({ to: "/how-to-help" })} text={"Conoce cómo ayudar"} />
      </article>
      <div className={"w-150 justify-self-end"}>
        <img alt={"Ilustración para Hero"} src={"/hero-illustration-transparent.webp"} />
      </div>
      <article
        className={"col-span-2 flex w-8/10 items-center justify-center gap-6 justify-self-center"}
      >
        <div className={"flex w-30 items-center justify-center border-r border-secondary"}>
          <q className={"block font-quote text-8xl text-secondary italic"}></q>
        </div>
        <div>
          <p className={"font-quote text-2xl font-extralight text-foreground italic"}>
            El cambio climático no es un problema del futuro, está{" "}
            <HighlightedText
              text={"aquí y ahora"}
              textStyles={"font-semibold"}
              highlightStyles={""}
            />{" "}
            y afecta a todas las regiones del mundo.
          </p>
          <div>
            <span className={"text-md text-foreground"}>— Friederike Otto</span>
          </div>
        </div>
      </article>
    </section>
  )
}

export default Hero
