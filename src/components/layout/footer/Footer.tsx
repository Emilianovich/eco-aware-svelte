import FooterLandscape from "./FooterLandscape.tsx"
import FooterCtn from "./FooterCtn.tsx"
import FooterText from "./FooterText.tsx"
import { Link } from "@tanstack/react-router"
import Logo from "../../ui/logo/Logo.tsx"

const Footer = () => (
  <footer className="relative flex h-50 items-center justify-evenly gap-4 overflow-hidden">
    <FooterLandscape
      title={"Paisaje relajante"}
      className={"pointer-events-none absolute inset-x-0 bottom-0 h-full"}
    />
    <div className={"z-10 flex items-center justify-around gap-4"}>
      <Logo />
      <h2 className={"text-3xl font-semibold text-foreground"}>Eco Aware</h2>
    </div>
    <FooterCtn
      content={[
        <FooterText key={"col-1"} text={"Información y acciones frente al cambio climático."} />,
      ]}
    />
    <FooterCtn
      title={"Navegación"}
      content={[
        <Link to={"/about-cc"} key={"col-2-1"}>
          <FooterText text={"Acerca del cambio climático"} />
        </Link>,
        <Link to={"/cc-in-panama"} key={"col-2-2"}>
          <FooterText text={"Cambio climático en Panamá"} />
        </Link>,
        <Link to={"/how-to-help"} key={"col-2-3"}>
          <FooterText text={"¿Cómo puedo ayudar?"} />
        </Link>,
      ]}
    />
    <FooterCtn
      title={"Recursos"}
      content={[
        <Link to={"/dictionary"} key={"col-3-1"}>
          <FooterText text={"Glosario"} />
        </Link>,
        <Link to={"/faq"} key={"col-3-2"}>
          <FooterText text={"Preguntas frecuentes"} />
        </Link>,
        <Link to={"/references"} key={"col-3-3"}>
          <FooterText text={"Fuentes y referencias"} />
        </Link>,
      ]}
    />
  </footer>
)

export default Footer
