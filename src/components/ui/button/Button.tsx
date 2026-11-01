type ButtonProps = {
  action: () => Promise<void> | void
  text: string
}

const Button = ({ text, action }: ButtonProps) => (
  <button
    type={"button"}
    onClick={action}
    className="h-10 w-60 cursor-pointer rounded-lg bg-primary text-lg text-primary-foreground transition-all duration-200 ease-in-out hover:scale-105"
  >
    {text}
  </button>
)

export default Button
