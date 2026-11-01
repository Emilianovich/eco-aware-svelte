import type { ComponentProps } from "react"
import type { LucideIcon } from "lucide-react"

type IconButtonProps = {
  svgProps?: ComponentProps<"svg">
  btnClasses?: string
  action: () => void | Promise<void>
  Icon: LucideIcon
}
const IconButton = ({ svgProps, action, Icon, btnClasses }: IconButtonProps) => (
  <button type={"button"} className={btnClasses} onClick={action}>
    <Icon {...svgProps} />
  </button>
)
export default IconButton
