import { Link, type LinkProps } from "@tanstack/react-router"

type NavOptionProps = {
  text: string
  to: LinkProps["to"]
}

const NavOption = ({ to, text }: NavOptionProps) => (
  <Link
    to={to}
    activeProps={{
      className: "bg-accent p-2 rounded-2xl",
    }}
    inactiveProps={{
      className: "hover:scale-110 transition-all duration-300 ease-in-out",
    }}
  >
    <span className={"text-md text-foreground"}>{text}</span>
  </Link>
)

export default NavOption
