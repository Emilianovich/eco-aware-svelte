import { type JSX } from "react"

type FooterOptionProps = {
  title?: string
  content: JSX.Element[]
}

const FooterCtn = ({ title, content }: FooterOptionProps) => (
  <div className={"z-10 flex w-50 flex-col gap-4"}>
    {title && <span className="font-semibold text-foreground">{title}</span>}
    {...content}
  </div>
)
export default FooterCtn
