import Logo from "@/components/ui/logo/Logo.tsx"
import NavOption from "@/components/layout/header/NavOption.tsx"
import { HomeIcon } from "lucide-react"
import IconButton from "@/components/ui/button-with-svg/IconButton.tsx"
import { useNavigate } from "@tanstack/react-router"

const Nav = () => {
  const navigate = useNavigate()
  return (
    <nav className={"flex items-center justify-evenly gap-2"}>
      <div className={"flex items-center justify-center gap-4"}>
        <Logo />
        <span>Eco Aware</span>
      </div>
      <div className={"flex items-center justify-evenly gap-8"}>
        <NavOption text={"Acerca del cambio climático"} to={"/about-cc"} />
        <NavOption text={"Cambio climático en Panamá"} to={"/cc-in-panama"} />
        <NavOption text={"¿Cómo puedo ayudar?"} to={"/how-to-help"} />
      </div>
      <IconButton
        action={() => navigate({ to: "/" })}
        Icon={HomeIcon}
        svgProps={{
          className: "size-10",
        }}
        btnClasses={"hover:scale-90 cursor-pointer transition-all duration-300 ease-in-out"}
      />
    </nav>
  )
}

export default Nav
